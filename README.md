# Last Flight Taxidermy

A modern Next.js website built with Sanity CMS and Tailwind CSS, organized as a pnpm workspace with TypeScript.

## Project Structure

This is a **pnpm workspace** monorepo with two packages:

```
├── app/
│   ├── nextjs/          # Next.js frontend application
│   └── studio/          # Sanity Studio application
├── pnpm-workspace.yaml  # Workspace configuration
└── package.json         # Root workspace package
```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **Sanity v3** - Headless CMS
- **next-sanity** - Sanity toolkit for Next.js
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **pnpm** - Fast, disk space efficient package manager

## Prerequisites

- Node.js 18+
- pnpm 8+ (`npm install -g pnpm`)

## Getting Started

### 1. Install Dependencies

From the root directory:

```bash
pnpm install
```

This will install dependencies for all workspace packages.

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=gj7uitls
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Run Development Servers

**Next.js Frontend:**
```bash
pnpm dev
# or
pnpm --filter nextjs dev
```

**Sanity Studio:**
```bash
pnpm studio
# or
pnpm --filter studio dev
```

The Next.js app will be available at [http://localhost:3000](http://localhost:3000)
The Sanity Studio will be available at [http://localhost:3333](http://localhost:3333)

## Available Scripts

From the root directory:

- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build Next.js for production
- `pnpm start` - Start Next.js production server
- `pnpm studio` - Start Sanity Studio development server
- `pnpm studio:build` - Build Sanity Studio for production
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking for all packages

## Package-Specific Scripts

You can also run scripts for specific packages:

```bash
# Next.js package
pnpm --filter nextjs dev
pnpm --filter nextjs build
pnpm --filter nextjs type-check

# Studio package
pnpm --filter studio dev
pnpm --filter studio build
pnpm --filter studio type-check
```

## Workspace Structure

### `app/nextjs/`

Next.js frontend application with:
- TypeScript configuration
- Tailwind CSS styling
- Sanity client integration
- App Router structure

### `app/studio/`

Standalone Sanity Studio with:
- TypeScript configuration
- Modern Sanity v3 setup
- Schema definitions

## TypeScript

All code is written in TypeScript with strict type checking enabled. Type definitions for Sanity data structures are located in `app/nextjs/src/types/sanity.ts`.

## Migration Notes

This project was migrated from:
- Old Stackbit-based setup → Modern next-sanity
- JavaScript → TypeScript
- Single package → pnpm workspace
- Pages Router → App Router
- SCSS → Tailwind CSS

See [MIGRATION.md](./MIGRATION.md) for detailed migration information.

## License

MIT
