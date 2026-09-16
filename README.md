# NOX CLEAN — Cleaning Booking Marketplace

A professional online cleaning booking platform connecting customers, cleaners, and administrators.

## Monorepo Architecture

This repository is structured as a TypeScript **Monorepo Monolith**:

- `apps/web`: Customer Website, Booking Engine Wizard, Customer Dashboard, and Cleaner Portal (Next.js 14 App Router)
- `apps/admin`: NOX CLEAN Operations & Admin Dashboard (Next.js 14 App Router)
- `apps/api`: Shared Backend API & Pricing Engine (NestJS REST API)
- `packages/database`: Database access layer (PostgreSQL + Prisma ORM)

## Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm 9+
- PostgreSQL database instance

### Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure `.env` in `packages/database` and `apps/api`.
3. Generate Prisma Client:
   ```bash
   npm run db:generate
   ```
4. Start development servers:
   - Backend API: `npm run dev:api`
   - Customer Web App: `npm run dev:web`
   - Admin App: `npm run dev:admin`
