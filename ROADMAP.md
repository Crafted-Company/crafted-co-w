# Crafted Co — Component & Page Roadmap

This roadmap lists every page and UI component in strict dependency/build order. Building items in this sequence ensures that lower-level utilities and design components are already in place before building dynamic feature pages.

---

## 1. Core Utilities & Design Base (Zero Dependencies)
*   [x] `src/lib/utils.ts` — Tailwind class mergers and styling helpers (Created by shadcn/ui init).
*   [ ] `src/types/database.types.ts` — TypeScript definitions for Supabase schema (based on `SCHEMA.md`).
*   [x] `src/app/globals.css` — Tailwind CSS v4 variables, custom brand gradients, typography tokens.
*   [x] Font Configuration (`next/font/google` serif & sans-serif).
*   [x] `ThemeProvider` (`src/components/common/theme-provider.tsx`) — next-themes provider wrapper.


---

## 2. Design System Base & Layout Components
*   [ ] `ThemeToggle` (`src/components/common/ThemeToggle.tsx`) — Switching between dark first/light second mode.
*   [ ] `Navbar` (`src/components/common/Navbar.tsx`) — Global top navigation bar with active links and subtle underline transition.
*   [ ] `Footer` (`src/components/common/Footer.tsx`) — Global footer with clean links and copyright.
*   [ ] `CustomCursor` (`src/components/common/CustomCursor.tsx`) — Star/sparkle-shaped cursor following mouse with lerp/spring physics.
*   [ ] `PageTransition` (`src/components/animations/PageTransition.tsx`) — Framer motion layout wrapper for page-to-page transitions.

---

## 3. Reusable UI Components
*   [ ] `Button` (`src/components/ui/button.tsx`) — Custom theme buttons supporting gradient glows and compress actions.
*   [ ] `ProjectCard` (`src/components/projects/ProjectCard.tsx`) — Card with hover elevation, brand border glow, and image zoom.
*   [ ] `JournalCard` (`src/components/journal/JournalCard.tsx`) — Compact item for journal entries.
*   [ ] `Timeline` (`src/components/journal/Timeline.tsx`) — Vertical timeline showing journal progress logs.

---

## 4. Pages (Depends on Components)
*   [ ] **Layout**: `src/app/layout.tsx` — Combines `CustomCursor`, `Navbar`, `Footer`, `ThemeProviders`.
*   [ ] **Home Page**: `src/app/page.tsx` — Introducing Crafted Co, featuring "Currently Building", "Featured Project", "Latest Journal", and "Project Categories".
*   [ ] **Projects Page**: `src/app/projects/page.tsx` — Shows full list of projects via filter grids.
*   [ ] **Project Detail Page**: `src/app/projects/[slug]/page.tsx` — Deep dive case study with associated journal entries and custom galleries.
*   [ ] **Journal Page**: `src/app/journal/page.tsx` — Chronological dev logs.
*   [ ] **Journal Entry Page**: `src/app/journal/[slug]/page.tsx` — Focused markdown journal post reading interface.
*   [ ] **Now Page**: `src/app/now/page.tsx` — The current workspace, playing, reading, learning, listening logs.
*   [ ] **About Page**: `src/app/about/page.tsx` — Narrative of vision and building practices.
*   [ ] **Contact Page**: `src/app/contact/page.tsx` — Minimal feedback and email-first link page.
