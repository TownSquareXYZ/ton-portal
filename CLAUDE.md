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
- **Styling**: Tailwind CSS + Framer Motion animations
- **UI Components**: Radix UI primitives + Lucide icons
- **Charts**: Recharts for data visualization
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
├── globals.css          # Global styles with Tailwind CSS
├── layout.tsx          # Root layout component
└── page.tsx            # Landing page component

public/                 # Static assets
├── next.svg           # Next.js logo
└── *.svg              # Other UI icons
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
- Tailwind CSS v4 configuration
- Basic app structure with App Router
- ESLint configuration

### 🚧 Phase 2 - Core Features (Planned)
- Landing page with hero section
- Navigation system with mobile support
- Feature pages (`/ai`, `/analytics`, `/tools`, `/events`, `/resources`)
- UI component library (Radix UI + Lucide icons)
- Framer Motion animations

### 📋 Phase 3 - Integrations (Future)
- AI assistant functionality (OpenAI API)
- Real-time TON network data feeds
- Working blockchain tools (TON SDK)
- Events calendar with live data
- Resource content management

## Key Development Notes

- Uses pnpm as package manager
- Configured with Turbopack for faster development
- Tailwind CSS v4 with PostCSS
- TypeScript strict mode enabled
- App Router architecture (not Pages Router)
- Responsive design with mobile-first approach
