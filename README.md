# DMIT SaaS Platform

Dermatoglyphics Multiple Intelligence Test — Premium Report Generation Platform

## Architecture

- **Frontend**: React 19 + Vite 6 + Tailwind CSS + Zustand
- **Backend**: Node.js 22 + Express + TypeScript + Drizzle ORM
- **Database**: PostgreSQL 16
- **Cache**: Redis 7
- **Payments**: Razorpay (Annual subscription: ₹11,988/year)
- **i18n**: English, Hindi, Malayalam, Tamil, Telugu, Kannada

## Folder Structure

```
dmit-saas/
├── apps/
│   ├── web/          # React frontend
│   └── api/          # Node.js backend
├── packages/
│   ├── shared/       # Shared types, schemas, constants
│   ├── ui/           # Shared UI components
│   └── eslint-config/# Shared ESLint config
├── docker-compose.yml
└── turbo.json
```

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 9+
- Docker & Docker Compose

### Installation

```bash
# Install pnpm globally
npm install -g pnpm

# Install dependencies
pnpm install

# Start Docker services (PostgreSQL + Redis)
docker-compose up -d

# Run database migrations
pnpm db:migrate

# Start all apps in dev mode
pnpm dev
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your values.

## Scripts

- `pnpm dev` — Start all apps in development mode
- `pnpm build` — Build all apps for production
- `pnpm lint` — Lint all packages
- `pnpm test` — Run all tests
- `pnpm db:generate` — Generate Drizzle migrations
- `pnpm db:migrate` — Run Drizzle migrations
- `pnpm db:seed` — Seed database with test data

## License

MIT
