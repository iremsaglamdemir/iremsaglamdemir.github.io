# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal academic portfolio website for an economics PhD candidate, built with Next.js 16, React 19, TypeScript, and Tailwind CSS. The site is configured for static export (`output: 'export'`) and deploys to GitHub Pages.

## Key Commands

### Development
```bash
npm run dev          # Start development server on localhost:3000
npm run build        # Build static site (outputs to ./out directory)
npm start            # Start production server (after build)
npm run deploy       # Build and deploy to GitHub Pages
```

### Linting
```bash
npx eslint .         # Run ESLint (configured with Next.js and TypeScript rules)
```

Note: There are no test scripts configured in this project.

## Architecture

### Application Structure

**App Router Layout**: Uses Next.js App Router with a single-page architecture:
- `app/layout.tsx` - Root layout with font configuration (Playfair Display serif, Lato sans-serif) and Vercel Analytics
- `app/page.tsx` - Main landing page composed of section components
- `app/research/page.tsx` - Dedicated research page with full paper details

**Component Organization**:
- Top-level components (`components/*.tsx`) are the main page sections
- No `components/ui/` directory - all components are custom-built
- Component structure follows a sectioned landing page pattern:
  - `navigation.tsx` - Site navigation
  - `hero-section.tsx` - Hero/intro section
  - `research-section.tsx` - Research preview with expandable abstracts
  - `teaching-section.tsx` - Teaching experience
  - `cv-section.tsx` - CV/resume section
  - `footer.tsx` - Site footer

**Data Management**: Research papers and content are defined as in-component data arrays in both `research-section.tsx` and `app/research/page.tsx`. When updating research content, both files must be updated to maintain consistency.

### Static Assets

All PDFs and images are stored in `/public`:
- Research papers: `jmp.pdf`, `earthquake_paper.pdf`, `culture_paper.pdf`
- CV: `cv.pdf`
- Profile image: `profil.jpeg`
- Icons and other assets

### Configuration Files

**shadcn/ui Configuration** (`components.json`):
- Style: "new-york"
- Using RSC (React Server Components)
- Path aliases configured: `@/components`, `@/lib/utils`, `@/lib`, `@/hooks`
- Base color: neutral
- Icon library: lucide-react

**TypeScript**: Path alias `@/*` maps to root directory

**Tailwind**: Using Tailwind CSS v4+ with CSS variables for theming

**Next.js Config**:
- Static export mode enabled
- Images are unoptimized (required for static export)

## Development Notes

### Adding/Updating Research Papers

Research papers appear in two locations:
1. Homepage preview section (`components/research-section.tsx`) - shows expandable abstracts
2. Full research page (`app/research/page.tsx`) - shows complete details

Both files contain duplicate paper data arrays. When adding or updating papers:
- Update both files to maintain consistency
- Job market paper flag: `isJobMarket: true` adds special styling
- PDF URLs reference `/public` directory files

### Styling

- Uses custom serif font (Playfair Display) for headings via `serif` className
- CSS variables defined in `app/globals.css` for theming
- Tailwind classes with semantic color tokens: `background`, `foreground`, `accent`, `muted-foreground`, `secondary`, `card`, `border`

### Client Components

Mark components with `"use client"` when using:
- React hooks (useState, useEffect, etc.)
- Browser APIs
- Event handlers

Currently `research-section.tsx` uses client-side state for expandable abstracts.
