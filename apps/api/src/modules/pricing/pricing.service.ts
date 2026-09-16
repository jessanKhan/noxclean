import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface PriceQuoteRequestDto {
  serviceId: string;
  durationHours: number;
  postcode: string;
  addOnIds?: string[];
  propertyBedrooms?: number;
  propertyBathrooms?: number;
  discountCode?: string;
}

export interface PriceQuoteResponseDto {
  serviceName: string;
  basePrice: number;
  durationHours: number;
  hourlySubtotal: number;
  addOnsSubtotal: number;
  travelFee: number;
  discountAmount: number;
  taxAmount: number;
  totalAmount: number;
  breakdown: Array<{ label: string; amount: number }>;
}

@Injectable()
export class PricingService {
  constructor(private readonly prisma: PrismaService) {}

  async calculateQuote(dto: PriceQuoteRequestDto): Promise<PriceQuoteResponseDto> {
    const service = await this.prisma.client.service.findUnique({
      where: { id: dto.serviceId },
      include: { addOns: true },
    });

    const baseHourlyRate = service ? service.basePrice : 20.0;
    const minHours = service ? service.minHours : 2.0;
    const effectiveHours = Math.max(dto.durationHours || minHours, minHours);

    const hourlySubtotal = baseHourlyRate * effectiveHours;

    let addOnsSubtotal = 0;
    const addOnItems: Array<{ label: string; amount: number }> = [];

    if (dto.addOnIds && dto.addOnIds.length > 0 && service) {
      const selectedAddOns = service.addOns.filter((a) => dto.addOnIds.includes(a.id));
      for (const addOn of selectedAddOns) {
        addOnsSubtotal += addOn.price;
        addOnItems.push({ label: addOn.name, amount: addOn.price });
      }
    }

    // Default travel charge calculation rule (e.g. flat rate or zone based)
    const travelFee = 5.0;

    let discountAmount = 0;
    if (dto.discountCode && dto.discountCode.toUpperCase() === 'WELCOME10') {
      discountAmount = (hourlySubtotal + addOnsSubtotal) * 0.1;
    }

    const netAmount = hourlySubtotal + addOnsSubtotal + travelFee - discountAmount;
    const taxRate = 0.2; // 20% VAT
    const taxAmount = netAmount * taxRate;
    const totalAmount = netAmount + taxAmount;

    return {
      serviceName: service ? service.name : 'Standard Cleaning',
      basePrice: baseHourlyRate,
      durationHours: effectiveHours,
      hourlySubtotal,
      addOnsSubtotal,
      travelFee,
      discountAmount,
      taxAmount,
      totalAmount,
      breakdown: [
        { label: `Cleaning Service (${effectiveHours} hrs @ £${baseHourlyRate}/hr)`, amount: hourlySubtotal },
        ...addOnItems,
        { label: 'Travel & Operations Fee', amount: travelFee },
        ...(discountAmount > 0 ? [{ label: 'Discount Applied', amount: -discountAmount }] : []),
        { label: 'VAT (20%)', amount: taxAmount },
      ],
    };
  }
}
