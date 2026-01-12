# Migration Guide: Stackbit to next-sanity

This document outlines the migration from the old Stackbit-based Next.js site to a modern next-sanity implementation.

## What Changed

### 1. Framework & Dependencies
- **Next.js**: Upgraded from v9.4.4 to v15.1.0 (App Router)
- **React**: Upgraded from v16.12.0 to v19.0.0
- **Sanity**: Migrated from old Sanity Studio v0.142.0 to latest Sanity v3
- **Styling**: Replaced SCSS with Tailwind CSS v3.4
- **Data Fetching**: Removed Sourcebit, now using direct Sanity GROQ queries via `next-sanity`

### 2. Architecture Changes
- **Router**: Migrated from Pages Router to App Router
- **Components**: Converted class components to functional components
- **Styling**: All SCSS classes replaced with Tailwind utility classes
- **Image Handling**: Now using `@sanity/image-url` for optimized images

### 3. File Structure Changes
```
Old Structure:
src/pages/
  _app.js
  index.js
  [...slug].js

New Structure:
src/app/
  layout.js
  page.js
  [...slug]/page.js
  globals.css
  studio/[[...tool]]/page.tsx
```

### 4. Sanity Studio
- Old studio in `/studio` directory (v0.142.0)
- New embedded studio at `/studio` route using Sanity v3
- Configuration moved to root: `sanity.config.ts` and `sanity.cli.ts`

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=gj7uitls
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Access Sanity Studio
Navigate to `http://localhost:3000/studio`

## Key Features

### Sanity Client
- Located in `sanity/lib/client.js`
- Configured with proper API version and CDN settings
- Uses `next-sanity` for optimal Next.js integration

### GROQ Queries
- All queries in `sanity/lib/queries.js`
- Handles references and nested data properly
- Optimized for static generation

### Tailwind CSS
- Custom color palette matching original design
- Responsive utilities
- Custom components in `globals.css`

### Image Optimization
- Uses `@sanity/image-url` builder
- Automatic width/height optimization
- CDN delivery via Sanity

## Component Updates

All components have been updated to:
- Use functional components with hooks
- Replace SCSS classes with Tailwind utilities
- Use Next.js Image component where appropriate
- Handle Sanity image references properly

## Breaking Changes

1. **No more Sourcebit**: All data fetching is now direct from Sanity
2. **App Router**: Pages must be in `src/app/` directory
3. **No SCSS**: All styling is now Tailwind CSS
4. **Class Components**: All converted to functional components
5. **Image Paths**: Must use `urlFor()` helper for Sanity images

## Next Steps

1. Review and test all pages
2. Update any custom components not yet migrated
3. Test Sanity Studio functionality
4. Verify all images load correctly
5. Check responsive design on mobile devices

## Support

For issues or questions:
- Next.js Docs: https://nextjs.org/docs
- next-sanity Docs: https://www.sanity.io/docs/nextjs
- Tailwind CSS Docs: https://tailwindcss.com/docs
