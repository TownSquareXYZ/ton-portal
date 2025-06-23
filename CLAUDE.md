# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TON Portal is an **intelligent TON ecosystem gateway** that combines AI technology with essential blockchain tools to make the TON network more accessible and intuitive for users at all levels.

## Project Vision

TON Portal aims to be the **unified entry point** to the TON ecosystem, offering:
- AI-powered information discovery and assistance
- Real-time ecosystem analytics and insights
- Essential blockchain tools and services
- Community events and resources aggregation

## Key Features

### 🤖 AI Smart Assistant
Natural language interaction for TON ecosystem queries with context-aware understanding and personalized recommendations.

### 📊 Analytics Dashboard  
Real-time TON network monitoring including transaction volume, active wallets, staking data, and network health metrics.

### 🛠️ Tools Suite
Essential TON blockchain utilities:
- TON Faucet for testnet tokens
- Staking services integration
- Token swap platform
- Decentralized lending services

### 📅 Events Calendar
TON ecosystem events aggregation including developer conferences, hackathons, AMAs, and technical workshops.

### 📚 Resource Hub
Centralized TON development resources with documentation, API references, tutorials, and community content.

## Tech Stack

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with TON official branding (#0098EA)
- **UI Components**: shadcn/ui (Radix UI primitives) + Lucide icons
- **SEO**: Comprehensive metadata, sitemap, structured data
- **Package Manager**: pnpm with clean dependency management
- **Charts**: Recharts for data visualization (planned)
- **Animations**: Framer Motion (planned)
- **Planned Integrations**: OpenAI API, TON SDK, Discord/Telegram APIs

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Start development server (uses Turbopack)
pnpm build       # Build for production
pnpm start       # Start production server
pnpm lint        # Run ESLint
```

## Project Structure

```
app/
├── ai/                 # AI Assistant page
├── analytics/          # Analytics Dashboard page
├── events/             # Events Calendar page
├── resources/          # Resource Hub page
├── tools/              # Tools Suite page
├── globals.css         # Global styles with TON branding
├── layout.tsx          # Root layout with SEO
├── page.tsx            # Landing page
├── robots.ts           # SEO robots.txt generation
└── sitemap.ts          # SEO sitemap generation

components/             # Reusable UI components
├── ui/                 # shadcn/ui components
│   ├── badge.tsx       # Badge component
│   ├── button.tsx      # Button variants
│   ├── card.tsx        # Card components
│   └── input.tsx       # Input field
├── navbar.tsx          # Unified navigation
├── footer.tsx          # Unified footer
└── structured-data.tsx # SEO schemas

lib/                    # Utility libraries
├── seo.ts             # SEO metadata generation
└── utils.ts           # General utilities

public/                # Static assets
└── *.svg             # Icon assets
```

## Target Users

1. **TON Developers** - Access to tools, documentation, and community resources
2. **DeFi Users** - Staking, lending, and token swap services
3. **Ecosystem Enthusiasts** - Analytics, events, and community engagement
4. **Newcomers** - AI-guided onboarding and educational resources

## Current Implementation Status

This is an MVP implementation with basic Next.js 15 scaffolding completed:

### ✅ Phase 1 - Foundation (Completed)
- Next.js 15 + React 19 + TypeScript setup
- Tailwind CSS v4 configuration with TON branding
- Basic app structure with App Router
- ESLint configuration

### ✅ Phase 2 - Core Features (Completed)
- Landing page with hero section
- Unified navigation and footer components
- Feature pages (`/ai`, `/analytics`, `/tools`, `/events`, `/resources`)
- shadcn/ui component library integration
- TON official color scheme (#0098EA)
- Comprehensive SEO optimization
- Sitemap and robots.txt generation
- Structured data for enhanced search results
- Mobile-responsive design

### 🚧 Phase 3 - Integrations (Planned)
- AI assistant functionality (OpenAI API)
- Real-time TON network data feeds
- Working blockchain tools (TON SDK)
- Events calendar with live data
- Resource content management
- Framer Motion animations

## Key Development Notes

- Uses pnpm as package manager with clean dependency management
- Configured with Turbopack for faster development
- Tailwind CSS v4 with PostCSS and TON official branding
- shadcn/ui for consistent, accessible components
- TypeScript strict mode enabled
- App Router architecture (not Pages Router)
- Responsive design with mobile-first approach
- Comprehensive SEO with metadata, sitemap, and structured data
- Domain: https://tonportal.xyz
