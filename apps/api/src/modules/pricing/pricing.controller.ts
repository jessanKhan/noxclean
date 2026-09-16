import { Controller, Post, Body } from '@nestjs/common';
import { PricingService, PriceQuoteRequestDto, PriceQuoteResponseDto } from './pricing.service';

@Controller('pricing')
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @Post('quote')
  async getQuote(@Body() dto: PriceQuoteRequestDto): Promise<PriceQuoteResponseDto> {
    return this.pricingService.calculateQuote(dto);
  }
}
