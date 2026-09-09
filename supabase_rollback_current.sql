-- BACKUP RESTORE SCRIPT GENERATED

DELETE FROM public.project_versions;
DELETE FROM public.project_images;
DELETE FROM public.journal_images;
DELETE FROM public.journal_entries;
DELETE FROM public.timeline;
DELETE FROM public.projects;
DELETE FROM public.categories;
DELETE FROM public.now_items;

-- categories
INSERT INTO public.categories (id, name, slug, created_at) VALUES ('b5819949-0267-49ea-b981-1770411a6345', 'Applications', 'apps', '2026-07-02T12:12:24.907343+00:00');
INSERT INTO public.categories (id, name, slug, created_at) VALUES ('9ccfd560-bf2c-47bb-9885-f3925f02d741', 'Websites', 'websites', '2026-07-04T14:33:01.117438+00:00');
INSERT INTO public.categories (id, name, slug, created_at) VALUES ('6db87cbf-47d1-4351-9616-00a06d76fdb2', 'Experiments', 'experiments', '2026-07-04T16:03:08+00:00');

-- projects
INSERT INTO public.projects (id, name, slug, category_id, short_description, full_description_mdx, status, progress, sort_order, cover_image, icon, color, tech_stack, repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects, search_text, started_at, completed_at, created_at, updated_at) VALUES ('7ce531a0-988a-40a1-b62d-feee94a95011', 'Champione - RPG Workout Tracker', 'champione-workout-rpg', 'b5819949-0267-49ea-b981-1770411a6345', 'A gamified, offline-first workout tracking mobile application that blends fitness tracking with classic RPG progression, featuring weekly boss battles, custom workouts, dynamic rest notifications, and detailed progress insights.', '# Champione: RPG Workout Tracker

Champione is a gamified, offline-first fitness tracking mobile application that blends daily workout routines with classic RPG progression. Users create a custom character, earn experience points (XP) and gold credits by completing sets, defeat weekly boss monsters, unlock shop items, and track their fitness history with advanced metrics.

## Key Architecture & Features

### 1. Gamified Fitness Engine
* **RPG Character Progression:** Features customizable user profiles with levels, XP thresholds, profile photo uploaders, and credit-balanced unlocks for new avatar frames and classes.
* **Weekly Boss Battles & Quests:** Implements automated weekly boss spawns with dynamic HP scaling, rewarding players with bonus gold credits and XP upon completion.
* **Journey Map:** Tracks user consistency over a linear path of challenges.

### 2. Advanced Workout Tracker
* **Interactive Sessions:** Supports real-time tracking of reps, sets, and weights with inline stepper cues for instant editing during a workout.
* **Hybrid Workout Types:** Accommodates both weight-based lifts (kgs/lbs) and time-based bodyweight exercises.
* **Workout State Persistence:** Prevents session progress loss by writing active workout snapshots to local storage automatically.

### 3. Background Rest Countdown & Notifications
* **Capacitor Local Notifications:** Fires foreground and background notifications displaying active rest-timer countdowns.
* **Bypassing App Minimization:** Resolves OS power-management halts by queuing background notifications that alert users with a dedicated sound/vibration when rest time has elapsed.

### 4. Metrics & Insights
* **MET-Based Calories:** Uses bodyweight-adjusted Metabolic Equivalent of Task (MET) calculations for accurate calorie burn estimation.
* **Localization & Unit Preference:** Seamlessly toggles weight preferences between Kilograms (kg) and Pounds (lbs) across the entire codebase.

## Engineering Challenges & Fixes
* **Active Workout Playlist Race Conditions:** Fixed critical UI-switching race conditions when selecting alternative playlists or deleting inactive ones.
* **Release Signing & Android Upload:** Generated secure production release keystores to sign release builds, resolving Google Play Console upload rejections.', 'in_progress', 80, 4, 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/project%20cover/Champione%20Feature%20Graphic.png', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/icons/champione.png', '#3B82F6', ARRAY['React', 'TypeScript', 'Vite', 'Capacitor', 'Android SDK', 'Local Notifications', 'Vercel']::text[], 'https://github.com/Aditya0973/Champione.git', NULL, NULL, NULL, false, false, NULL, NULL, NULL, '2026-07-02T12:32:56.894399+00:00', '2026-07-02T12:32:56.894399+00:00');
INSERT INTO public.projects (id, name, slug, category_id, short_description, full_description_mdx, status, progress, sort_order, cover_image, icon, color, tech_stack, repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects, search_text, started_at, completed_at, created_at, updated_at) VALUES ('4da78656-f5ab-4767-ab3a-0a57ac424d90', 'Commit - Habit Tracker', 'commit-habit-tracker', 'b5819949-0267-49ea-b981-1770411a6345', 'A minimalist, offline-first habit tracking mobile application built with Flutter, featuring custom daily streak alarms, AdMob monetization, and secure Google Play in-app purchase ad removal.', '# Commit: Minimalist Habit Tracker

Commit is a sleek, offline-first habit-tracking application designed to help users build and sustain daily routines. Built using **Flutter** and **Dart**, the app prioritizes a lightweight, high-performance offline user experience.

## Key Architecture & Features

### 1. Local State & Storage
* **State Management:** Uses the **Provider** pattern to manage habit checklists, streaks, settings, and billing states reactively.
* **Persistent Cache:** Built on **SharedPreferences** for lightning-fast loads of habit records and user configuration.
* **Offline Streak Recalculation:** Streak lengths are dynamically re-calculated and refreshed on app startup based on localized timezone checkpoints, avoiding state desynchronization.

### 2. High-Reliability Local Notifications
* **Doze-Mode Bypassing:** Utilizes `flutter_local_notifications` with `AndroidScheduleMode.alarmClock` to guarantee alerts trigger precisely at user-defined reminder times, even if the device is in a deep sleep state or the app process has been killed.
* **Timezone Offset Conversion:** Implements robust UTC fallback checks and timezone offset calculations using the `timezone` and `flutter_timezone` libraries to support users traveling across timezone boundaries.

### 3. Monetization & Billing Integration
* **Dynamic AdMob Placement:** Shows banner and frequency-capped interstitial ads using the `google_mobile_ads` package. Ad layouts dynamically change or disappear once premium is unlocked.
* **Secure Purchase Verification:** Uses `in_app_purchase` linked directly with Google Play Billing.
* **Silent Entitlement Restoration:** Queries cached Google Play receipts silently on app startup. If the `remove_ads` product is owned, ads are permanently removed, restoring purchases seamlessly across user re-installations and device upgrades without requiring backend user accounts.

## Engineering Challenges & Fixes
* **R8/Minification Failures:** In release builds, R8 code/resource shrinking stripped raw notification drawables (`ic_notification`) and obfuscated critical **Gson** serializers used by the local notifications plugin. Custom ProGuard rules (`proguard-rules.pro`) and resource preservation overrides (`keep.xml`) resolved silent background alarm crashes.
* **Google Play Policy Compliance:** Removed restricted `USE_EXACT_ALARM` permissions to ensure policy compliance with Google Play Store guidelines, successfully utilizing user-granted `SCHEDULE_EXACT_ALARM` permissions.', 'completed', 100, 3, 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/project%20cover/Commit%20Feature%20Graphic.png', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/icons/commit.png', '#6864F6', ARRAY['Flutter', 'Dart', 'Google Mobile Ads', 'Shared Preferences', 'timezone', 'flutter_local_notifications', 'in_app_purchase', 'in_app_purchase_android']::text[], 'https://github.com/Aditya0973/commit_habit_tracker.git', NULL, NULL, NULL, true, true, NULL, NULL, NULL, '2026-07-02T12:12:24.907343+00:00', '2026-07-02T12:12:24.907343+00:00');
INSERT INTO public.projects (id, name, slug, category_id, short_description, full_description_mdx, status, progress, sort_order, cover_image, icon, color, tech_stack, repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects, search_text, started_at, completed_at, created_at, updated_at) VALUES ('86139386-c0ce-4051-b948-b4442401d151', 'D.I.A.N.E.', 'diane', '6db87cbf-47d1-4351-9616-00a06d76fdb2', 'A cinematic retro CRT workstation inspired by Rick Sanchez, featuring interactive systems, a quantum terminal, multiverse diagnostics, and a playable arcade mini-game.', '# D.I.A.N.E. — Dimensional Interactive Analytical Network Engine

## Overview

**D.I.A.N.E.** is a browser-based interactive workstation inspired by the technology found inside Rick Sanchez''s garage. Rather than recreating a simple dashboard, the project focuses on building an immersive retro computing experience that feels like operating a real-dimensional control console.

The interface combines nostalgic CRT aesthetics with modern web technologies to simulate a living workstation filled with diagnostics, interactive objects, command-line tools, and hidden surprises.

## Objectives

- Build a highly interactive browser experience.
- Recreate the feeling of using a physical retro workstation.
- Experiment with immersive UI, animation, and sound design.
- Blend storytelling with functional interface design.

## Features

### Interactive Dashboard

The main workstation displays live telemetry, dimensional diagnostics, and animated system modules while encouraging exploration through interactive desk objects.

### Interdimensional TV

Browse channels from across the multiverse using analog-inspired controls. Users can tune signals, introduce interference, and switch between multiple fictional broadcasts.

### Dimension Scanner

Visualize dimensional stability and monitor coordinate sweeps through an animated scanning interface.

### Garage Inventory

Browse hazardous inventions stored inside Rick''s workshop, complete with equipment descriptions, warning notices, and support for registering custom inventory items.

### Quantum Terminal

A fully interactive command-line interface allows users to navigate workstation systems using custom commands, providing an alternative way to access different modules.

### Arcade Mini-Game

The workstation includes a complete retro space shooter where players defend Earth C-137 against meteors and a boss encounter while dynamic dialogue and synthesized audio play in real time.

## Technical Highlights

- Retro CRT visual effects
- Interactive command-line interface
- Canvas-based arcade game
- Procedural audio synthesis
- Modular workstation architecture
- Responsive browser experience
- Animated UI and system telemetry

## What I Learned

Building D.I.A.N.E. pushed me to think beyond traditional web interfaces. The project explored how interaction, animation, audio, and storytelling can transform a website into an immersive experience rather than a collection of pages.

It also strengthened my understanding of component architecture, browser rendering, canvas programming, and designing interfaces that reward curiosity through small interactive details.
', 'completed', 100, 6, 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/project%20cover/console.png', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/icons/diane.png', '#7CFF6B', ARRAY['React', 'TypeScript', 'Vite', 'HTML5 Canvas', 'CSS', 'Web Audio API']::text[], 'https://github.com/Aditya0973/D.I.A.N.E', 'https://d-i-a-n-e.vercel.app/', NULL, NULL, false, false, NULL, NULL, NULL, '2026-07-04T15:05:24.195722+00:00', '2026-07-04T15:05:24.195722+00:00');
INSERT INTO public.projects (id, name, slug, category_id, short_description, full_description_mdx, status, progress, sort_order, cover_image, icon, color, tech_stack, repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects, search_text, started_at, completed_at, created_at, updated_at) VALUES ('e649049d-f8f9-4ddc-a0db-1645d20707fe', 'VIGIL_OS', 'vigil-os', '6db87cbf-47d1-4351-9616-00a06d76fdb2', 'A brutalist intelligence workstation inspired by the Batcave, featuring surveillance systems, investigation tools, arsenal diagnostics, and mission deployment controls.', '# VIGIL_OS v4.7.27

## Overview

**VIGIL_OS** is a cinematic intelligence interface inspired by Batman''s Batcomputer. Designed as a high-performance tactical workstation, the project recreates the experience of operating a classified command terminal inside the Batcave.

Every screen was crafted to feel functional rather than decorative, combining brutalist design, real-time animations, synthesized audio, and immersive interactions into a cohesive desktop experience.

## Objectives

- Build an immersive browser-based intelligence workstation.
- Explore brutalist interface design with cinematic presentation.
- Create a responsive dashboard that feels like real tactical software.
- Design interactive modules that encourage exploration.

## Operational Modules

### Observe

Monitor Gotham through tactical maps, surveillance feeds, and dispatch telemetry. Live incident tracking and scrolling diagnostics create the feeling of an active intelligence network.

### Investigate

Analyze criminal organizations through interactive evidence boards, relationship graphs, encrypted dossiers, and a secure digital archive.

### Prepare

Inspect batsuit diagnostics, monitor equipment readiness, manage gadgets, and remotely initialize Batmobile systems through a unified control interface.

### Deploy

Execute Omega Protocol to initiate the final deployment sequence. The interface transitions into a complete system lockdown with cinematic terminal animations.

## Audio System

Instead of relying on prerecorded assets, VIGIL_OS generates its soundscape using the **Web Audio API**, producing mechanical clicks, surveillance hums, diagnostic notifications, and emergency alarms entirely in real time.

## Technical Highlights

- Brutalist interface design
- Dynamic surveillance dashboards
- Interactive investigation board
- Terminal-inspired navigation
- Web Audio API sound synthesis
- CRT-inspired visual effects
- Responsive component architecture
- Animated tactical maps and diagnostics

## What I Learned

VIGIL_OS challenged me to design interfaces that communicate atmosphere as much as functionality. Rather than focusing solely on UI, I explored storytelling through motion, typography, audio, and interaction.

The project strengthened my understanding of interface architecture, browser animation performance, procedural audio, and designing highly immersive web experiences that feel closer to software than traditional websites.
', 'completed', 100, 7, 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/project%20cover/vigil.png', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/icons/vigil.png', '#8B0000', ARRAY['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Web Audio API', 'Three.js']::text[], 'https://github.com/Aditya0973/Vigil_OS', 'https://vigil-os-batcave.vercel.app/', NULL, NULL, false, false, NULL, NULL, NULL, '2026-07-04T16:25:29.14298+00:00', '2026-07-04T16:25:29.14298+00:00');
INSERT INTO public.projects (id, name, slug, category_id, short_description, full_description_mdx, status, progress, sort_order, cover_image, icon, color, tech_stack, repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects, search_text, started_at, completed_at, created_at, updated_at) VALUES ('40ecac9b-b864-472f-ad52-1275292aea71', 'Abyss Archive', 'abyss-archive', '9ccfd560-bf2c-47bb-9885-f3925f02d741', 'A comprehensive media tracking vault consolidating Books, Movies, TV Series, and PC Games with automatic Google Books metadata resolution, Steam API sync, and detailed financial/time insights.', '# Abyss Archive

Abyss Archive is a comprehensive, client-first media tracking dashboard designed to consolidate personal media consumption databases into a single, unified workspace. It brings together tracking for Books, Movies & Series, and PC Games with integrated metadata sync, local/remote backup configurations, and detailed cost/insights calculations.

## Key Architectural Modules

### 1. Unified Media Vaults
* **Books Tracking**: Integrated with the **Google Books API** to dynamically resolve author names, page counts, genres, descriptions, and book cover URLs on inputting titles or ISBN codes.
* **Movies & Series Tracking**: Custom logs to monitor watch progress, ratings, creators, and watch dates.
* **PC Games Tracking**: Synchronized directly with the user''s **Steam Library and Wishlist** using custom Steam Web API connectors.

### 2. Deep Synchronization & Data Portability
* **CSV Import Adapters**: Custom client-side CSV parsers for Goodreads, StoryGraph, and Letterboxd, enabling seamless imports of existing journals (including ratings, reviews, and diary logs).
* **Consolidated JSON Backups**: Support for exporting and importing complete encrypted backups of books, movies, and games in a single file to prevent database lock-in.
* **QR Code Sharing**: Native integration of `html5-qrcode` to easily scan and share media logs directly from mobile devices.

### 3. Financial & Reading Insights
* **Cost & Wishlist Calculators**: Displays total library valuation vs. wishlist costs, with calculations showing active discounts and discount percentages.
* **Progress Streaks & Analytics**: Segmented bar charts mapping genre distributions, completion ratios, and reading volumes.

### 4. Supabase Backend Integration
* **User Authentication**: Secure email/password login and sign-up with client-side session handlers.
* **Relational Schema**: Powered by a PostgreSQL relational database on Supabase to sync collections across devices with Row-Level Security (RLS) policies protecting user rows.

## Engineering Challenges & Tech Stack
* **Supabase Session Management**: Implemented client-side session validation to prevent flash-auth errors when routing protected sub-components.
* **Dynamic Import Adaptability**: Configured flexible mapper algorithms that handle custom-user-comments and metadata overrides during CSV imports.', 'completed', 100, 2, 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/project%20cover/abyss.png', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/icons/abyss.svg', '#6864F6', ARRAY['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel Analytics', 'HTML5-QRCode', 'Steam API', 'Google Books API']::text[], 'https://github.com/Aditya0973/Abyss-Archive', 'https://abyss-archive.vercel.app', NULL, NULL, false, false, NULL, NULL, NULL, '2026-07-05T09:19:47.207414+00:00', '2026-07-05T09:19:47.207414+00:00');
INSERT INTO public.projects (id, name, slug, category_id, short_description, full_description_mdx, status, progress, sort_order, cover_image, icon, color, tech_stack, repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects, search_text, started_at, completed_at, created_at, updated_at) VALUES ('ad416ec4-3d8f-452e-ab47-e2dae11ef245', 'Orbital — Interactive 3D Space Simulator', 'orbital', '6db87cbf-47d1-4351-9616-00a06d76fdb2', 'A premium, real-time 3D space simulation built in thousands of glowing particles, mapping Keplerian orbital mechanics and general relativity lensing.', '# Orbital: Premium 3D Space & Galaxy Simulator

Orbital is an interactive, real-time 3D simulation exploring gravity, spacetime coordinates, and atomic form. Built using Three.js and Electron, the application renders planets, moons, exoplanetary systems, and nebulae as collections of thousands of glowing, pulsating orbs.

## The Philosophy of Orbs: Why Orbs?
Everything in the universe—from the core of the Sun to the swirling gas lanes of the Orion Nebula and the cells of our own bodies—is composed of microscopic, spherical units of energy (atoms). By rendering cosmic structures as collections of glowing, atomic-like orbs, Orbital bridges the gap between quantum mechanics and astrophysics. It serves as a visual reminder of the atomic unity of all things: the macro-structures of galaxies mirror the micro-structures of the elements that form them.

## Key Features & Core Components

1. Keplerian Orbital Engine (J2000.0)
- Mathematical Coordinates: Calculates orbits using real J2000.0 astronomical elements (semi-major axis, eccentricity, inclination, mean longitude, perihelion, ascending node) and their centurial rates.
- Ecliptic Coordinate System: Evaluates planetary positions and spins coplanar to the XY plane, applying true axial tilts to rotating bodies.

2. Detailed Milky Way Sub-Scenes
- Sagittarius A* (Supermassive Black Hole): Simulates a pitch-black Event Horizon void (radius 12.0) surrounded by a 2000-particle Keplerian accretion disk. Warps accretion coordinate paths behind the void using an exponential Einstein gravitational lensing formula.
- Orion Nebula: Renders a dense, 1200-particle bipolar outflow gas cloud (butterfly wings) featuring customized transparent, additive-blended volumetric glowing orbs.
- Kepler-186 habitable zone: Models host red dwarf star convective pulse animations alongside Keplerian orbits of its exoplanets.

3. Premium Control HUD
- Visibility Options Dropdown: Integrates a sleek, absolute-positioned glassmorphic vis-control panel. Users can selectively toggle HUD Panels, Planet Labels, Orbit Lines, and background Starfield.
- Glassmorphic Dropdown Date Selector: Replaces native calendar popups with custom date dropdowns that synchronize dynamically with the active simulation timeline.
- Mobile Hamburger Drawer: Minimizes settings panels into a slide-out drawer on screen sizes under 768px, automatically closing when navigation targets are selected.

## Engineering Challenges & Fixes
- Accretion Disk Speed Aliasing: Capped the visual simulation time-dilation spin factor on accretion particles to prevent high-speed rotation aliasing at high time scales.
- Starfield Size Attenuation: Resolved invisible background stars by setting `sizeAttenuation: false` on PointMaterial shaders, ensuring stars draw at sharp constant pixel sizes regardless of camera distance.
- Orbit Lines Frustum Culling: Fixed disappearing orbit lines during camera pans by disabling frustum culling on circular line buffers.
- Saturn Ring Wobble: Solved ring displacement wobbles by converting planet and ring spin updates to the ecliptic Z-axis, keeping planetary rotation coplanar with the orbital path.', 'completed', 100, 8, 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/project%20cover/orb.png', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/icons/orb.png', '#00d2ff', ARRAY['Three.js', 'Electron', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'WebGL']::text[], 'https://github.com/Aditya0973/Orb-Galaxy-Simulator.git', 'https://orb-galaxy.vercel.app/', NULL, NULL, false, false, NULL, NULL, NULL, '2026-07-08T05:32:10.71121+00:00', '2026-07-08T05:32:10.71121+00:00');
INSERT INTO public.projects (id, name, slug, category_id, short_description, full_description_mdx, status, progress, sort_order, cover_image, icon, color, tech_stack, repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects, search_text, started_at, completed_at, created_at, updated_at) VALUES ('e1abf44b-6cfb-4525-9e71-49913e915ef1', 'Modyule - SaaS Starter Generator', 'modyule', '9ccfd560-bf2c-47bb-9885-f3925f02d741', 'An interactive, token-driven web application builder and dynamic code generator that builds production-ready Next.js & Supabase SaaS templates.', '# Modyule: Premium SaaS Starter Generator

Modyule is an interactive, token-driven web application customizer and dynamic server-side codebase generator. Built using Next.js, React, and Tailwind CSS v4, the application allows developers to visually configure design presets, slot structures, databases, and SaaS modules, and instantly export a fully compiled Next.js project.

## Key Features & Core Components

1. Token-Driven Design Preset Customizer
- Multi-Language Engine: Generates styles matching Modern, Soft, Glassmorphism, Brutalist, and Enterprise presets.
- Theme Mappings: Controls branding variables (primary/accent colors, border-widths, corner radii, shadow strengths, and spacing densities) via CSS custom properties mapped in `globals.css`.
- Google Fonts Integration: Dynamically loads and packages selected typography options (Space Mono, Geist, Josefin Sans, Outfit, and Fira Code) in exported assets.

2. Modular Layout & Card Slots Engine
- Visual Slot Controller: Configures dashboard layouts, metric cards, grid structures, and list tables (deals pipelines, roadmaps, and transactions tables) dynamically.
- Responsive Column Layouts: Implements CSS-based responsive viewport checks that transition grids smoothly from desktop viewports down to single-column phone layouts.

3. Dynamic Code Packager & DB Configs
- On-The-Fly Generation: Automatically generates library files and initializers for Supabase (`lib/supabase.ts`), Firebase Firestore (`lib/firebase.ts`), and Prisma SQL Client (`lib/prisma.ts` + `schema.prisma` definitions).
- Conditional Dependency Manager: Packages exact npm dependencies inside `package.json` depending on selected database configurations.
- Child-Simple Setup Manuals: Compiles custom installation instructions and database settings details directly inside the exported project `README.md`.

## Engineering Challenges & Fixes
- React Hooks Violation: Solved hook order mismatch warnings inside navigation layout wrappers by eliminating conditional early returns preceding state hooks and routing components dynamically.
- Input Component Controller Warnings: Fixed React uncontrolled-to-controlled input state change errors on activePage checkbox items by forcing explicit boolean conversions.
- Chart Container Borders: Refactored modern chart styling classes to inherit variables from the global theme context, ensuring borders conform to the active design preset across all styles.', 'in_progress', 80, 1, 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/project%20cover/modyule-saas.png', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/icons/Modyule%20logo.svg', '#076653', ARRAY['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JSZip', 'Zustand', 'Lucide React']::text[], 'https://github.com/Aditya0973/Modyule.git', 'https://modyule.vercel.app/', NULL, NULL, true, true, NULL, NULL, NULL, '2026-07-08T05:01:56.181612+00:00', '2026-07-08T05:01:56.181612+00:00');
INSERT INTO public.projects (id, name, slug, category_id, short_description, full_description_mdx, status, progress, sort_order, cover_image, icon, color, tech_stack, repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects, search_text, started_at, completed_at, created_at, updated_at) VALUES ('3bb82390-4b40-4c27-a225-efe2de1a3aef', 'Nakastra Space Journal', 'nakastra-space-journal', '9ccfd560-bf2c-47bb-9885-f3925f02d741', 'An interactive, elegant celestial memory-keeping vault and cosmic reflection journal with orbital statistics and Web Audio nebula synthesizers.', '# Nakastra Space Journal

Nakastra is a dedicated cognitive sky mapping and stargaze journal terminal. It allows travelers to translate daily thoughts, reflections, and emotions into custom celestial coordinates, which automatically manifest as stars on a real-time astronomical sky dome.

## Core Features

* **Atmosphere Portal**: Rotate reflection prompts, inscribe space entries with optional titles, and monitor alignment streaks using a dynamic SVG circular progression tracker.
* **Interactive Sky Chart**: Track mouse movements and click directly on a responsive sky grid overlaying Ascensions (RA) and Declinations (DEC) to target star drafts.
* **Vault Archive Timeline**: Access, query, and filter historical records with an optimized mobile layout that transitions between lists and detail readers.
* **Cosmic Harmony Charts**: View statistics for average resonance and dominant vibe spectrum distributions mapped on concentric multi-ring diagrams.
* **Aether Sound Engine**: Native, procedural synthesizers utilizing Web Audio API nodes to produce sine chimes and low-frequency nebula background drones.', 'completed', 100, 5, 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/project%20cover/Atmosphere.png', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/icons/nakastra.png', '#60A5FA', ARRAY['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Framer Motion']::text[], 'https://github.com/Aditya0973/Nakastra-Space-Journal', 'https://nakastra.vercel.app', NULL, NULL, false, false, NULL, NULL, NULL, '2026-07-05T08:42:03.761959+00:00', '2026-07-05T08:42:03.761959+00:00');

-- project_versions
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('f0dbbd83-1a2b-4767-8358-fa5a00e001ca', '4da78656-f5ab-4767-ab3a-0a57ac424d90', '1.0.0', 'Initial production release candidate build for Closed Testing.', '2026-06-06T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('ba5ba0ed-90fa-454a-90e7-1c23791665cf', '4da78656-f5ab-4767-ab3a-0a57ac424d90', '1.0.1', 'Integrated banner ads placement optimizations, 12-hour AM/PM setting format support, and Proguard updates.', '2026-06-15T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('eff02a2d-9f19-4fe3-b19b-16bd1555185e', '4da78656-f5ab-4767-ab3a-0a57ac424d90', '1.0.4', 'Patched notification recurrence timezone issues and integrated UTC offset conversion algorithms.', '2026-06-18T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('1c7c4848-4696-4413-aabe-ebe7b0ff2bf1', '4da78656-f5ab-4767-ab3a-0a57ac424d90', '1.0.5', 'Upgraded reminder alarms to system alarmClock mode to bypass device Doze mode restrictions, and resolved habit streak refresh failures on startup.', '2026-06-19T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('b3d1801f-e34e-4b7d-b458-c113eeb71f42', '4da78656-f5ab-4767-ab3a-0a57ac424d90', '1.0.6', 'Resolved R8 Gson serialization failures with updated ProGuard rules and removed restricted USE_EXACT_ALARM permission.', '2026-06-19T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('19020fb3-feba-4e54-8bbe-9a52295fd201', '4da78656-f5ab-4767-ab3a-0a57ac424d90', '1.0.7', 'Implemented automatic silent purchase history validation on startup via Google Play Billing Client to persist ad-free status across app reinstalls.', '2026-07-01T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('b47c2d5d-7fdf-4434-bdb5-219363de4e63', '7ce531a0-988a-40a1-b62d-feee94a95011', '0.7.0', 'Onboarding welcome flows, profile customization, initial MET-based calorie tracking, and training style configurations.', '2026-06-10T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('e71e9cdf-af68-4110-a50f-67d2ea89151d', '7ce531a0-988a-40a1-b62d-feee94a95011', '0.8.0', 'Introduced weekly bosses, credit shop, insights view, custom color themes, and Android build scripts via GitHub Actions.', '2026-06-11T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('383b99b8-821d-4ac4-854d-d7aa2cd59ea8', '7ce531a0-988a-40a1-b62d-feee94a95011', '0.9.0', 'Implemented local notification background rest timers, filesystem share sheet exports, boss HP codex modal, and active workout persistence.', '2026-06-15T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('a02c6f0c-bcff-49b1-8a77-86f242771bed', '7ce531a0-988a-40a1-b62d-feee94a95011', '1.0.0', 'Production build release featuring full package renaming to com.craftedco.champione, release signing key integration, and playlist race condition fixes.', '2026-06-16T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('790d56fc-97af-43ca-90ee-6f85b95c3ef3', '86139386-c0ce-4051-b948-b4442401d151', '1.0.0', '## Initial Release

### Added

- Complete retro CRT workstation interface
- Interactive dashboard with animated telemetry
- Interdimensional TV module with multiple channels
- Dimension scanner visualization
- Garage inventory management interface
- Quantum command-line terminal
- Browser-based arcade mini-game
- Procedural sound effects using the Web Audio API
- Interactive desktop easter eggs
- Responsive workstation layout
- CRT visual effects and animations

### Result

Released the first complete version of D.I.A.N.E. as an immersive browser experience inspired by Rick Sanchez''s garage workstation.
', '2026-07-04T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('9086e89d-1562-42a5-855e-bb3b3754795b', 'e649049d-f8f9-4ddc-a0db-1645d20707fe', '4.7.27', '## VIGIL_OS v4.7.27

### Added

- Complete Batcomputer-inspired intelligence workstation
- Tactical command center with surveillance interface
- Interactive investigation board and evidence network
- Arsenal diagnostics and equipment monitoring
- Batmobile telemetry and remote startup systems
- Omega Protocol deployment sequence
- Procedural audio engine powered by the Web Audio API
- Brutalist terminal animations
- CRT-inspired display effects
- Responsive dashboard architecture

### Improved

- Optimized interface performance
- Enhanced transition animations
- Refined audio feedback
- Improved responsiveness across screen sizes

### Result

Released the first complete version of VIGIL_OS as an immersive browser-based intelligence terminal inspired by the Batcave.
', '2026-07-04T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('e47d0620-1384-47fd-b4e5-a077139c4324', '3bb82390-4b40-4c27-a225-efe2de1a3aef', '2.4.0', '### Initial Release Features
- Implemented real-time interactive star mapping grid overlay
- Configured dynamic background star generators with safe twinkle opacity transitions
- Integrated customizable local JSON database exports/imports
- Embedded a Web Audio synthesizer engine for major pentatonic feedback scales and nebula drone synthesis
- Deployed a fully responsive layout including hamburger menus and mobile list-reader view switches', '2026-06-16T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('a180c055-1728-46fa-b4a1-57d74d3c1f3a', '40ecac9b-b864-472f-ad52-1275292aea71', '1.0.0', '### Initial Launch
- Supported tracking for Books, Movies & Series, and PC Games.
- Integrated Google Books API for automatic metadata resolver.
- Enabled Steam API library and wishlist imports.
- Created premium glassmorphism layouts and custom dark-theme accents.
- Configured client-side Supabase authentication.', '2026-05-20T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('e55b33ba-8b5e-493b-b389-4ed43755371b', '40ecac9b-b864-472f-ad52-1275292aea71', '1.1.0', '### Feature Updates
- Added Library vs. Wishlist status selection in manual addition forms.
- Integrated "Wishlist Value" vs. "Library Value" calculations inside Insights.
- Added Steam owned-game library transfer rules on sync.
- Added "What''s New" history modal overlays.
- Updated Steam sync filters to ignore active free-weekend trials.
- Fixed Letterboxd CSV parsing and diary comment structures.', '2026-05-31T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('abb76618-1c96-445a-9e8e-fcdb1f223fef', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', '1.0.0', 'Initial release candidate with basic customizer settings, export package APIs, and sidebar layout presets.', '2026-07-04T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('69271bb9-e5d2-456e-96a1-4d955a51d158', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', '1.0.1', 'Integrated search configurations in customizer dashboard, custom border-width controls, and brand shadow hex color pickers.', '2026-07-05T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('6a105417-0b01-4153-8fc3-60cf4cb15dd6', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', '1.0.2', 'Patched mobile grid column collapse layouts and resolved React uncontrolled checkbox controlled state change console errors.', '2026-07-06T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('0c0d1971-6b07-4044-bc57-2578d86b00ab', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', '1.0.3', 'Built and configured Glassmorphism and Soft design presets, implementing frosted panels, blurred navigation backdrops, and rounded containers.', '2026-07-06T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('51b4482c-26a1-4506-8260-92c64b1acdd3', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', '1.0.4', 'Added dynamic layout frame scroll parameters, linked modern chart containers to global border themes, and mapped Sage Green soft style defaults.', '2026-07-07T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('29e13a41-6d35-449f-ab76-e81ec021d128', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', '1.0.5', 'Resolved light theme text unreadability inside System Health KPI cards and integrated cyber Brutalist buttons with active state offset translations.', '2026-07-07T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('b089be89-f2ec-4b74-87c6-e5adccef05b9', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', '1.0.6', 'Patched React SidebarLayout hooks validation warnings, integrated Google Font loaders (Geist & Space Mono), and activated the settings Inspector Panel.', '2026-07-08T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('8f3e6083-23b9-414d-abce-a7117ba04e2a', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', '1.0.7', 'Overhauled code exporter. Generated database SDK client files for Supabase, Firebase, and Prisma schemas, and bundled child-simple developer setup manuals.', '2026-07-08T00:00:00+00:00', NULL, NULL);
INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at, project_name, name) VALUES ('8b9a901b-04c0-49b3-88f6-4ee475938488', 'ad416ec4-3d8f-452e-ab47-e2dae11ef245', '1.0.0', 'Initial stable release. Renders Solar System with J2000 Keplerian calculations, Sagittarius A* accretion disk lensing, 1200-particle Orion Nebula, responsive settings drawers, local timezone readouts, and welcome modal key hotkeys.', '2026-07-08T00:00:00+00:00', NULL, NULL);

-- journal_entries
INSERT INTO public.journal_entries (id, project_id, title, slug, excerpt, content_mdx, cover_image, reading_time, pinned, visibility, search_text, published, published_at, created_at, updated_at) VALUES ('f781bb45-3f36-4740-9a28-6617ba8ff2d0', NULL, 'Entering the Pixel Void: Launching My YouTube Journey', 'youtube-launch-trying-pixel-art', 'Starting a new creative chapter on YouTube with a pixel art challenge: designing icons, hearts, diamonds, and game sprites from scratch inside Aseprite.', '# Entering the Pixel Void: Launching My YouTube Journey

I have officially launched my YouTube channel! For my very first video, I decided to jump headfirst into the beautiful world of **Pixel Art**.

In this video, I outline my setup, my tools (using Aseprite), and how I approached drawing some classic game sprites.

## Sprites Created in this Video:
*   **The Heart Icon**: Learning curves, gradients, and shading.
*   **The Coin**: Animating spinning sequences and shiny highlights.
*   **The Blue Diamond**: High-contrast geometric pixel mapping.
*   **The Skull**: Form outline and shading.
*   **The Little Robot Character**: Designing a customizable player character sprite with simple outfit layers.

Check out the full video online and watch the speedpaint and design breakdown!', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/journal%20cover/Pixel%20Art%20Thumbnail.png', 2, false, 'public', NULL, true, '2026-07-04T14:38:56.148639+00:00', '2026-07-04T14:38:56.148639+00:00', '2026-07-04T14:38:56.148639+00:00');
INSERT INTO public.journal_entries (id, project_id, title, slug, excerpt, content_mdx, cover_image, reading_time, pinned, visibility, search_text, published, published_at, created_at, updated_at) VALUES ('b7a94a55-6d03-468a-a692-9eb87d74acb8', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', 'Building Modyule', 'building-modyule', 'Started working on a new project Modyule', 'I''ve officially started working on Modyule, a project that aims to make building SaaS dashboards much easier.
After seeing so many developers creating dashboards for their products, I thought it would be interesting to build a system that helps generate them faster instead of designing everything from scratch each time.
Right now, I''m focusing on planning the overall architecture, organizing reusable components, and figuring out how everything should fit together before moving on to development.
It''s still in its early stages, but I''m excited to see how it evolves.', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/project%20cover/modyule-saas.png', NULL, false, 'public', NULL, true, '2026-06-21T13:02:08.540613+00:00', '2026-06-21T13:02:08.540613+00:00', '2026-07-08T05:22:50+00:00');
INSERT INTO public.journal_entries (id, project_id, title, slug, excerpt, content_mdx, cover_image, reading_time, pinned, visibility, search_text, published, published_at, created_at, updated_at) VALUES ('8ee7a8b8-7b21-43ff-ba8c-ae0cbc7010b0', NULL, 'How AI Helped Me Build My Ideas', 'vibecoding', 'Sharing the process behind every app, website, and game.', 'Today marks a new beginning.
For a long time, my ideas lived in notebooks, design files, and unfinished folders. This video shares the workflow that finally helped me turn those ideas into real apps, websites, and games.
No debates, no clickbait, just an honest look at how I build.
A fitting upload for my birthday, and hopefully the first of many projects to come.
If you''d like to know more, the full video is available on YouTube.', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/journal%20cover/Vibecoding.jpg', NULL, false, 'public', NULL, true, '2026-07-09T08:40:40.771625+00:00', '2026-07-09T08:40:40.771625+00:00', '2026-07-09T08:40:40.771625+00:00');

-- journal_images
INSERT INTO public.journal_images (id, journal_entry_id, image_url, caption, alt_text, order_index, created_at) VALUES ('4e17bc59-94e5-43df-804f-baade5563240', 'f781bb45-3f36-4740-9a28-6617ba8ff2d0', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/youtube/mascot_idle.png
', NULL, NULL, 0, '2026-07-04T14:47:59+00:00');
INSERT INTO public.journal_images (id, journal_entry_id, image_url, caption, alt_text, order_index, created_at) VALUES ('ea5362a4-6d5b-4396-906e-ec679cde2a8d', 'f781bb45-3f36-4740-9a28-6617ba8ff2d0', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/youtube/gem.png', NULL, NULL, 0, '2026-07-04T14:56:16+00:00');
INSERT INTO public.journal_images (id, journal_entry_id, image_url, caption, alt_text, order_index, created_at) VALUES ('c564f248-9189-4e28-a071-1c1cda3f992b', 'f781bb45-3f36-4740-9a28-6617ba8ff2d0', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/youtube/heart.png', NULL, NULL, 0, '2026-07-04T14:57:03+00:00');
INSERT INTO public.journal_images (id, journal_entry_id, image_url, caption, alt_text, order_index, created_at) VALUES ('71e96765-d9a8-444e-afcf-22246ae83b31', 'f781bb45-3f36-4740-9a28-6617ba8ff2d0', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/youtube/coins.png', NULL, NULL, 0, '2026-07-04T14:57:44+00:00');
INSERT INTO public.journal_images (id, journal_entry_id, image_url, caption, alt_text, order_index, created_at) VALUES ('6da42222-4a01-4b61-b1d2-7a76b798dcfa', 'f781bb45-3f36-4740-9a28-6617ba8ff2d0', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/youtube/lady_skull.png', NULL, NULL, 0, '2026-07-04T14:58:09+00:00');
INSERT INTO public.journal_images (id, journal_entry_id, image_url, caption, alt_text, order_index, created_at) VALUES ('dd3ef9cc-61fe-4ddc-8874-309a438f08d5', 'b7a94a55-6d03-468a-a692-9eb87d74acb8', 'https://fahamxftfnzwbgkshzmd.supabase.co/storage/v1/object/public/assets/project%20cover/modyule-saas.png', NULL, NULL, 0, '2026-07-08T05:15:21.263361+00:00');

-- timeline
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('4858ca0c-e317-462c-be57-55d693842911', 'Project Initialization', 'Set up the initial Flutter codebase, database schema structures, and basic UI navigation wireframes.', '2026-06-06', '4da78656-f5ab-4767-ab3a-0a57ac424d90', 'milestone', 'commit-habit-tracker', 'project', '2026-07-02T13:04:49.631397+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('bf85dc60-535e-4a3a-adb0-38020524c892', 'AdMob Optimization & UI Polish', 'Formatted time inputs, added explicit drawable assets, and verified AdMob banner and interstitial ad unit configurations.', '2026-06-15', '4da78656-f5ab-4767-ab3a-0a57ac424d90', 'commit', 'commit-habit-tracker', 'project', '2026-07-02T13:04:49.631397+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('5dca3448-e390-4c60-92da-3bd271a94834', 'Timezone Alignment', 'Patched repeating notification offsets, ensuring timezone adjustments work smoothly across daylight savings and UTC standard borders.', '2026-06-18', '4da78656-f5ab-4767-ab3a-0a57ac424d90', 'commit', 'commit-habit-tracker', 'project', '2026-07-02T13:04:49.631397+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('8fa794e8-ee34-4ff3-bb45-97af50d906fe', 'Doze Mode Fixes', 'Switched notification schedules to device-level system alarm clock triggers to bypass OS power-saving limits.', '2026-06-19', '4da78656-f5ab-4767-ab3a-0a57ac424d90', 'commit', 'commit-habit-tracker', 'project', '2026-07-02T13:04:49.631397+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('877467b5-3d8b-4a8d-9e9b-f3d292aa2652', 'R8 & Play Store Policy Hotfixes', 'Modified ProGuard rules to keep Gson and Timezone classes, and cleaned permissions to comply with the Google Play exact alarms policy.', '2026-06-19', '4da78656-f5ab-4767-ab3a-0a57ac424d90', 'commit', 'commit-habit-tracker', 'project', '2026-07-02T13:04:49.631397+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('251a6de6-4dc7-4bb3-bcee-c81b3f049f95', 'Play Billing Restoration Integration', 'Implemented silent startup purchase entitlement verification via InAppPurchase Android Platform additions.', '2026-07-01', '4da78656-f5ab-4767-ab3a-0a57ac424d90', 'release', 'commit-habit-tracker', 'project', '2026-07-02T13:04:49.631397+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('5f7cf7c6-e51c-451d-860b-38c246abaec0', 'Onboarding & Journey Setup', 'Built the onboarding flow, calorie tracking layout, and journey progression screens.', '2026-06-10', '7ce531a0-988a-40a1-b62d-feee94a95011', 'milestone', 'champione-workout-rpg', 'project', '2026-07-02T13:07:53.590436+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('fc754f20-a487-48ad-9905-ba911abc30c9', 'Gamified Features Launch', 'Added Weekly Bosses, RPG credit shop with unlockable avatars, and progression charts.', '2026-06-11', '7ce531a0-988a-40a1-b62d-feee94a95011', 'commit', 'champione-workout-rpg', 'project', '2026-07-02T13:07:53.590436+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('2eb00143-c713-40d7-9be2-1ffc27a5f951', 'Background Engine Optimizations', 'Implemented background rest notifications, workout persistence, and native share sheet integrations.', '2026-06-15', '7ce531a0-988a-40a1-b62d-feee94a95011', 'commit', 'champione-workout-rpg', 'project', '2026-07-02T13:07:53.590436+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('538492f6-54a3-4cfc-9ed6-819509e76f08', 'Production Release Candidate', 'Configured production build signing credentials, corrected active state playlist switching bugs, and prepared the final App Bundle for Google Play Console upload.', '2026-06-16', '7ce531a0-988a-40a1-b62d-feee94a95011', 'release', 'champione-workout-rpg', 'project', '2026-07-02T13:07:53.590436+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('ad58fdde-2e32-40dc-8d9e-a06b7b8d9ac1', 'Completed D.I.A.N.E.', 'Finished building an interactive retro workstation featuring multiple console modules, a command-line interface, and an arcade mini-game.', '2026-07-04', '86139386-c0ce-4051-b948-b4442401d151', 'milestone', 'diane', 'project', '2026-07-04T15:05:24.195722+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('62ee10e4-6f21-4159-aebc-a1e30c1343d3', 'Completed VIGIL_OS', 'Finished building a brutalist intelligence workstation featuring surveillance systems, investigation tools, arsenal diagnostics, and procedural audio.', '2026-07-04', 'e649049d-f8f9-4ddc-a0db-1645d20707fe', 'milestone', 'vigil-os', 'project', '2026-07-04T16:25:29.14298+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('48a766b5-909c-49ba-af25-e77c5768787b', 'Nakastra Launch', 'Nakastra Space Journal launched with interactive sky charts, customizable metadata trackers, Web Audio synth backdrops, and local JSON backup configuration.', '2026-06-16', '3bb82390-4b40-4c27-a225-efe2de1a3aef', 'milestone', 'nakastra-space-journal', 'project', '2026-07-05T08:42:03.761959+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('7d0c248f-658d-424a-8ab4-d3aeed337f56', 'Abyss Archive Launch', 'Initial launch of the media dashboard tracking books, movies, and PC games with Google Books metadata resolution and Supabase integration.', '2026-05-20', '40ecac9b-b864-472f-ad52-1275292aea71', 'milestone', 'abyss-archive', 'project', '2026-07-05T09:19:47.207414+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('a0fb9533-573b-4446-bf8c-c31a74e58957', 'Wishlists & Insights Update', 'Added library value analytics, wishlist cost trackers, Letterboxd parser fixes, and Steam sync filtering updates.', '2026-05-31', '40ecac9b-b864-472f-ad52-1275292aea71', 'release', 'abyss-archive', 'project', '2026-07-05T09:19:47.207414+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('a87b8b70-882f-4130-991a-6a2dbda78b9a', 'YouTube Launch & Pixel Art Video', 'Created my YouTube channel and posted my first video: "Trying out Pixel Art in Aseprite".', '2026-07-04', NULL, 'release', 'youtube-launch-trying-pixel-art', 'journal', '2026-07-04T14:38:56.148639+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('a7329256-8eef-4663-ad88-b7409f442ae6', 'Responsive Grids & Checked State Warnings', 'Configured CSS variables to collapse grid layouts on mobile phones and resolved React checkbox input warnings.', '2026-07-06', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', 'milestone', 'modyule', 'project', '2026-07-08T05:01:56.181612+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('99d6f5bf-2841-4a06-97a2-0d7d142cbc4e', 'Soft & Glassmorphism Design Languages', 'Integrated translucent frosted panels, ambient background glow meshes, and large rounded container borders.', '2026-07-06', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', 'milestone', 'modyule', 'project', '2026-07-08T05:01:56.181612+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('8801b85a-c906-42c8-aaab-1e7e67d91803', 'Layout Scroll Scopes & Chart Borders', 'Fixed viewport vertical overflow limits inside layouts and refactored chart components to inherit global border widths.', '2026-07-07', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', 'milestone', 'modyule', 'project', '2026-07-08T05:01:56.181612+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('4a61eafb-05dd-4ea5-8a3b-c6b66f4d6a3b', 'React Hooks & Interactive Inspector Panel', 'Delegated sidebar layouts to resolve hook order violations, loaded tech fonts, and added interactive Inspector detail overlays.', '2026-07-08', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', 'milestone', 'modyule', 'project', '2026-07-08T05:01:56.181612+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('e380a28d-eb35-4dbe-ba7b-dcd13411860d', 'Database Client Exporter & Setup Guides', 'Engineered custom package generators for Supabase, Firebase, and Prisma schemas, and added child-simple developer setup manuals.', '2026-07-08', 'e1abf44b-6cfb-4525-9e71-49913e915ef1', 'commit', 'modyule', 'project', '2026-07-08T05:01:56.181612+00:00');
INSERT INTO public.timeline (id, title, description, date, project_id, type, reference_slug, reference_type, created_at) VALUES ('4038256c-dc88-4067-b77e-0eaa9fe28ae7', 'Initial Release Launched', 'Successfully compiled WebGL simulation builds, wrapped within Electron wrappers, configured responsive mobile layouts, and released stable version 1.0.0.', '2026-07-08', 'ad416ec4-3d8f-452e-ab47-e2dae11ef245', 'milestone', 'orbital', 'project', '2026-07-08T05:32:10.71121+00:00');

-- now_items
INSERT INTO public.now_items (id, category, title, description, sort_order, created_at) VALUES ('484217a5-37c7-4f48-b044-102d4b0cbe75', 'Developing', 'Modyule', 'Designing a modular component registry and design system focused on reusable UI architecture, scalable patterns, and production-ready developer workflows.', 2, '2026-07-06T13:11:09+00:00');
INSERT INTO public.now_items (id, category, title, description, sort_order, created_at) VALUES ('408e4442-14f2-40fc-b284-f88160c9f742', 'Creating', 'YouTube Debut', 'Launched my YouTube channel and uploaded my first video showing my process designing retro sprites in Aseprite.', 1, '2026-07-04T14:38:56.148639+00:00');

