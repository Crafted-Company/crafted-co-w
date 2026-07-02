# Crafted Co — Component & Page Roadmap

This roadmap lists every page, UI component, and layout element in strict dependency/build order. Building items in this sequence ensures that lower-level utilities and design components are already in place before building dynamic feature pages.

---

## 1. Core Utilities & Design Base (Zero Dependencies)
*   [x] `src/lib/utils.ts` — Tailwind class mergers and styling helpers (Created by shadcn/ui init).
*   [ ] `src/types/database.types.ts` — TypeScript definitions for Supabase schema (based on `SCHEMA.md`).
*   [x] `src/app/globals.css` — Tailwind CSS v4 variables, custom brand gradients, typography tokens.
*   [x] Font Configuration (`next/font/google` serif & sans-serif).
*   [x] `ThemeProvider` (`src/components/common/theme-provider.tsx`) — next-themes provider wrapper.

---

## 2. Design System: Primitives & Atomic UI (Phase 2)
*   [x] `Container` (`src/components/ui/container.tsx`) — Max-width, responsive margins, and content padding.
*   [x] Primitives: Typography elements, Spacing, Shadows, Border-radius presets.
*   [x] `Button` / `GradientButton` (`src/components/ui/button.tsx`) — Base buttons and glowing brand gradients.
*   [x] `Card` (`src/components/ui/card.tsx`) — Idle and hover-ready physical container borders and shadows.
*   [x] `Badge` / `Tag` / `TechBadge` (`src/components/ui/badge.tsx`) — Category chips, tags, and technologies.
*   [x] `ProjectStatus` (`src/components/ui/project-status.tsx`) — Status indicators (Completed, In Progress, Paused).
*   [x] Form Inputs (`src/components/ui/input.tsx`, `src/components/ui/textarea.tsx`) — Text fields and message forms.

---

## 3. Motion System & Micro-Interactions (Phase 3)
*   [x] `PageTransition` (`src/components/animations/PageTransition.tsx`) — Fade-slide framer-motion page wrapper.
*   [x] Transition utilities (Shared motion spring curves and layout components).
*   [x] `CustomCursor` (`src/components/common/CustomCursor.tsx`) — Star/sparkle-shaped cursor following mouse with lerp/spring physics.

---

## 4. Supabase & Mock Data (Phase 4)
*   [ ] Supabase connection clients and database queries.
*   [ ] Mock Data (`src/lib/mock-data.ts`) — Seeding structures for projects, logs, timeline events, now items, and project versions.

---

## 5. Shared Layout & Composition Components (Phase 5)
*   [ ] `ThemeToggle` (`src/components/common/ThemeToggle.tsx`) — Light/dark theme switch.
*   [ ] `Navbar` (`src/components/common/Navbar.tsx`) — Global header with animated links.
*   [ ] `Footer` (`src/components/common/Footer.tsx`) — Global footer.
*   [ ] `ProjectCard` (`src/components/projects/ProjectCard.tsx`) — Rich interactive card utilizing design system cards and tags.
*   [ ] `JournalCard` (`src/components/journal/JournalCard.tsx`) — Chronicle card item.
*   [ ] `Timeline` (`src/components/journal/Timeline.tsx`) — Interactive workspace history timeline.
*   [ ] `SectionHeader` (`src/components/ui/section-header.tsx`) — Unified title header for sections.
*   [ ] `FilterBar` & `SearchBar` — Navigation search and select utilities.
*   [ ] `EmptyState` & `LoadingSkeleton` — Status displays.
*   [ ] `ImageGallery` & `MarkdownRenderer` — Content presenters.
*   [ ] `ProjectHero` & `JournalHero` — Layout page headers.

---

## 6. Page Compositions (Phase 6)
*   [ ] **Projects Page** (`src/app/projects/page.tsx`)
*   [ ] **Project Detail Page** (`src/app/projects/[slug]/page.tsx`)
*   [ ] **Journal Page** (`src/app/journal/page.tsx`)
*   [ ] **Journal Entry Page** (`src/app/journal/[slug]/page.tsx`)
*   [ ] **Now Page** (`src/app/now/page.tsx`)
*   [ ] **About Page** (`src/app/about/page.tsx`)
*   [ ] **Home Page** (`src/app/page.tsx`)

---

## 7. Polish, SEO & Error Handling (Phase 7)
*   [ ] Custom `404` and `500` error pages.
*   [ ] Metadata generation, sitemap, and SEO validation.
*   [ ] Accessibility auditing and prefers-reduced-motion check.
