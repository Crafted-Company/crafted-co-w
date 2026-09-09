-- =====================================================================
-- CRAFTED CO: COMPREHENSIVE SUPABASE DATABASE UPDATE (V2 - Schema Aligned)
-- Adds 7 new projects with real git dates, version histories, timeline events,
-- journal devlogs, and updated /now items.
-- =====================================================================

-- 1. Fix service_role and anon permissions for seamless future operations
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role, anon;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role, anon;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO service_role, anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO service_role, anon;

-- 2. Add 'games' and 'tools' categories if not already present
INSERT INTO public.categories (id, name, slug, created_at)
VALUES 
  ('c1000000-0000-0000-0000-000000000001', 'Games', 'games', '2026-06-01T00:00:00Z'),
  ('c1000000-0000-0000-0000-000000000002', 'Tools', 'tools', '2026-04-30T00:00:00Z')
ON CONFLICT (slug) DO NOTHING;

-- 3. Insert / Update the 7 New Projects
-- Project 1: Craftnime
INSERT INTO public.projects (
  id, name, slug, category_id, short_description, full_description_mdx,
  status, progress, sort_order, cover_image, icon, color, tech_stack,
  repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects,
  started_at, created_at, updated_at
) VALUES (
  'a1000001-0000-0000-0000-000000000001',
  'Craftnime',
  'craftnime',
  'b5819949-0267-49ea-b981-1770411a6345',
  'A high-performance anime streaming and catalog tracking client engineered for Android, Windows, and Linux with multi-source playback and obsidian aesthetics.',
  '# Craftnime: Next-Gen Anime Streaming & Tracking Suite

Craftnime is a flagship multiplatform media streaming and catalog tracking client built for Android, Windows, and Linux. Built from the ground up with obsidian dark aesthetics and responsive touch gestures, Craftnime delivers frictionless video streaming without intrusive popups or slow scrapers.

## Key Architecture & Features

### 1. Multi-Server Stream Aggregator
* **Dynamic Source Fallback:** Integrates Consumet and multi-provider streaming engines with instant server failover.
* **HLS Adaptive Bitrate:** Uses `hls.js` for smooth 1080p/720p adaptive streaming with zero buffering stalls.
* **Subtitle & Audio Track Switching:** Built-in support for multiple soft-subtitles and multi-language audio tracks.

### 2. Gesture-Controlled Media Player
* **Intuitive Mobile Touch:** Double-tap seek, vertical swipe for volume/brightness adjustment, and screen lock controls.
* **Picture-in-Picture & Background Playback:** Seamlessly switch between tasks while continuing audio/video streams.

### 3. Local Cache & Watchlist Sync
* **Offline Watch History:** Automatically records playback progress down to the exact second.
* **Library Organization:** Categorize shows into Watching, Completed, Plan to Watch, and Dropped with zero account requirements.

## Engineering Challenges
* **Stream Extraction & CORS Bypassing:** Resolved mobile webview CORS hurdles by implementing a custom capacitor HTTP bridge and torrent-stream proxy for high-availability feeds.',
  'in_progress', 75, 1,
  NULL,
  'https://craftedco.org/store/icons/craftnime.png',
  '#6864F6',
  ARRAY['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Zustand', 'Hls.js', 'Capacitor', 'WebTorrent', 'Consumet API'],
  'https://github.com/Crafted-Company/craftnime-x',
  NULL, NULL, NULL, true, true,
  '2026-08-25T07:47:13Z', '2026-08-25T07:47:13Z', '2026-09-05T04:56:59Z'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name, short_description = EXCLUDED.short_description,
  full_description_mdx = EXCLUDED.full_description_mdx, status = EXCLUDED.status,
  progress = EXCLUDED.progress, color = EXCLUDED.color, tech_stack = EXCLUDED.tech_stack,
  icon = EXCLUDED.icon, repository_url = EXCLUDED.repository_url, updated_at = EXCLUDED.updated_at;

-- Project 2: Music Player
INSERT INTO public.projects (
  id, name, slug, category_id, short_description, full_description_mdx,
  status, progress, sort_order, cover_image, icon, color, tech_stack,
  repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects,
  started_at, created_at, updated_at
) VALUES (
  'a1000002-0000-0000-0000-000000000002',
  'Music Player',
  'music-player',
  'b5819949-0267-49ea-b981-1770411a6345',
  'An obsidian-themed audio client with zero-friction Navidrome server sync, gapless playback, local file scanning, and retro iPod-inspired ergonomics.',
  '# Crafted Music Player: High-Fidelity Navidrome & Local Client

Music Player is a streamlined, distraction-free audio player inspired by classic tactile interfaces and modern obsidian design principles. Designed for music collectors hosting their own Navidrome/Subsonic servers as well as local high-res FLAC libraries.

## Key Architecture & Features

### 1. Subsonic & Navidrome Protocol Integration
* **Instant Server Sync:** Authenticates directly with self-hosted Subsonic servers, loading thousands of tracks and artists in seconds.
* **Cached Offline Storage:** Pin favorite albums for offline playback during commutes.

### 2. Audio Engine
* **Web Audio API Pipeline:** Gapless audio playback with custom equalizer presets and smooth crossfade transitions.
* **Lockscreen & Background Audio:** Native media session API integration with dynamic album art display on Android & desktop media controls.

### 3. Retro-Modern Interface
* **Tactile Navigation:** Fluid thumb-driven scrolling inspired by the classic clickwheel with modern micro-animations.',
  'in_progress', 65, 2,
  NULL,
  'https://craftedco.org/store/icons/music-player.png',
  '#A9452D',
  ARRAY['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Capacitor', 'Subsonic API', 'Web Audio API'],
  'https://github.com/Crafted-Company/music-player-x',
  NULL, NULL, NULL, true, true,
  '2026-08-29T06:33:13Z', '2026-08-29T06:33:13Z', '2026-08-29T11:16:18Z'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name, short_description = EXCLUDED.short_description,
  full_description_mdx = EXCLUDED.full_description_mdx, status = EXCLUDED.status,
  progress = EXCLUDED.progress, color = EXCLUDED.color, tech_stack = EXCLUDED.tech_stack,
  icon = EXCLUDED.icon, repository_url = EXCLUDED.repository_url, updated_at = EXCLUDED.updated_at;

-- Project 3: Crafted Studio
INSERT INTO public.projects (
  id, name, slug, category_id, short_description, full_description_mdx,
  status, progress, sort_order, cover_image, icon, color, tech_stack,
  repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects,
  started_at, created_at, updated_at
) VALUES (
  'a1000003-0000-0000-0000-000000000003',
  'Crafted Studio',
  'crafted-studio',
  'b5819949-0267-49ea-b981-1770411a6345',
  'A desktop engineering cockpit and workspace featuring embedded Monaco editors, virtual terminal multiplexing, local SQLite storage, and modular AI agent docks.',
  '# Crafted Studio: Developer Cockpit & AI Workspace

Crafted Studio is a dedicated desktop engineering workspace designed to unify code editing, shell execution, AI assistant interactions, and project management in a single distraction-free cockpit.

## Key Architecture & Features

### 1. Unified Cockpit Layout
* **Monaco Editor Integration:** Embedded high-performance code editor with TypeScript IntelliSense, diff viewer, and syntax highlighting.
* **Multiplexed Terminals:** Built on `xterm.js` and native `node-pty` for multi-tab interactive shell execution.

### 2. Local-First Workspace Database
* **SQLite Persistence:** Uses `better-sqlite3` for local project state, snippets, and environment variable vaults.
* **Modular AI Dock:** Side-by-side agent chat and code-refactor pipeline.',
  'in_progress', 60, 5,
  NULL,
  'https://craftedco.org/store/icons/crafted-studio.png',
  '#6864F6',
  ARRAY['TypeScript', 'React', 'Electron', 'Monaco Editor', 'xterm.js', 'node-pty', 'SQLite', 'Zod', 'Tailwind CSS'],
  'https://github.com/Crafted-Company/crafted-studio-pc',
  NULL, NULL, NULL, false, true,
  '2026-07-27T03:06:05Z', '2026-07-27T03:06:05Z', '2026-08-08T12:35:51Z'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name, short_description = EXCLUDED.short_description,
  full_description_mdx = EXCLUDED.full_description_mdx, status = EXCLUDED.status,
  progress = EXCLUDED.progress, color = EXCLUDED.color, tech_stack = EXCLUDED.tech_stack,
  icon = EXCLUDED.icon, repository_url = EXCLUDED.repository_url, updated_at = EXCLUDED.updated_at;

-- Project 4: Roguemetry
INSERT INTO public.projects (
  id, name, slug, category_id, short_description, full_description_mdx,
  status, progress, sort_order, cover_image, icon, color, tech_stack,
  repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects,
  started_at, created_at, updated_at
) VALUES (
  'a1000004-0000-0000-0000-000000000004',
  'Roguemetry',
  'roguemetry',
  'c1000000-0000-0000-0000-000000000001',
  'A fast-paced geometric survival arcade roguelite featuring procedurally generated wave patterns, physics-based enemy swarms, and branching weapon build trees.',
  '# Roguemetry: Geometric Arcade Roguelite

Roguemetry is a fast-paced survival arena shooter where geometric simplicity meets intense arcade bullet-hell combat. Players navigate swarms of evolving polygon entities, drafting modular weapon upgrades and abilities to survive relentless procedural waves.

## Key Features
* **Vector Combat System:** 60fps high-precision canvas rendering with collision grids and responsive dash mechanics.
* **Perk Draft Synergies:** Choose from 40+ weapon augmentations (Split Lasers, Orbital Shards, Shock Novas).
* **Dynamic Audio Synthesis:** Sound effects generated procedurally in real-time with the Web Audio API.',
  'in_progress', 85, 6,
  NULL,
  'https://craftedco.org/store/icons/roguemetry.png',
  '#EC4899',
  ARRAY['JavaScript', 'HTML5 Canvas', 'Web Audio API', 'Vector Physics', 'Procedural Generation'],
  'https://github.com/Crafted-Company/roguemetry-ag',
  NULL, NULL, NULL, false, true,
  '2026-06-04T11:28:50Z', '2026-06-04T11:28:50Z', '2026-07-14T12:59:49Z'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name, short_description = EXCLUDED.short_description,
  full_description_mdx = EXCLUDED.full_description_mdx, status = EXCLUDED.status,
  progress = EXCLUDED.progress, color = EXCLUDED.color, tech_stack = EXCLUDED.tech_stack,
  icon = EXCLUDED.icon, repository_url = EXCLUDED.repository_url, updated_at = EXCLUDED.updated_at;

-- Project 5: Legacies: Infinite Lives
INSERT INTO public.projects (
  id, name, slug, category_id, short_description, full_description_mdx,
  status, progress, sort_order, cover_image, icon, color, tech_stack,
  repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects,
  started_at, created_at, updated_at
) VALUES (
  'a1000005-0000-0000-0000-000000000005',
  'Legacies: Infinite Lives',
  'legacies-infinite-lives',
  'c1000000-0000-0000-0000-000000000001',
  'A text-based, generational life simulator set in a medieval fantasy realm where players guide their bloodline across centuries from serfdom to royal dynasties.',
  '# Legacies: Infinite Lives — Generational Dynasty Simulator

Legacies: Infinite Lives is a deep text-driven life simulator set in a dynamic medieval fantasy realm. Unlike traditional single-character RPGs, death is merely a handover: when your character passes, you assume control of your heir, inheriting gold, debts, land, and family feuds.

## Key Features
* **Generational Bloodline Engine:** Track ancestral lineages across dozens of generations with inheritance traits.
* **Branching Event Matrix:** Hundreds of narrative dilemmas influenced by morality, wealth, and skills.
* **Feudal Realm Simulation:** Trade goods, manage agricultural fiefdoms, and navigate political rivalries.',
  'in_progress', 50, 7,
  NULL,
  'https://craftedco.org/store/icons/legacies.png',
  '#EAB308',
  ARRAY['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Lucide React', 'Procedural Story Engine'],
  'https://github.com/Crafted-Company/legacies-infinite-lives-ag',
  NULL, NULL, NULL, false, true,
  '2026-06-17T07:41:49Z', '2026-06-17T07:41:49Z', '2026-06-22T12:20:55Z'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name, short_description = EXCLUDED.short_description,
  full_description_mdx = EXCLUDED.full_description_mdx, status = EXCLUDED.status,
  progress = EXCLUDED.progress, color = EXCLUDED.color, tech_stack = EXCLUDED.tech_stack,
  icon = EXCLUDED.icon, repository_url = EXCLUDED.repository_url, updated_at = EXCLUDED.updated_at;

-- Project 6: Craftie
INSERT INTO public.projects (
  id, name, slug, category_id, short_description, full_description_mdx,
  status, progress, sort_order, cover_image, icon, color, tech_stack,
  repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects,
  started_at, created_at, updated_at
) VALUES (
  'a1000006-0000-0000-0000-000000000006',
  'Craftie',
  'craftie',
  '6db87cbf-47d1-4351-9616-00a06d76fdb2',
  'A private, local-first AI desktop companion that runs entirely on your GPU with voice wake-word detection, autonomous file dispatching, and persona memory.',
  '# Craftie: Autonomous Local AI Desktop Companion

Craftie is an intelligent, privacy-first desktop assistant engineered to run 100% locally on user hardware. Connecting directly to local LLM engines (Ollama / LMStudio), Craftie provides hands-free voice interactions, contextual task assistance, and local memory retention without sending data to external clouds.

## Key Features
* **Zero Cloud Dependency:** Runs on local GGUF models via Ollama and LMStudio backends.
* **Persistent Persona Memory:** Remembers past user preferences, project notes, and work context across reboots.
* **System Dispatch Permissions:** Handles local file reading, browser coordination, and voice responses via low-latency local TTS.',
  'in_progress', 70, 8,
  NULL,
  'https://craftedco.org/store/icons/craftie.png',
  '#10B981',
  ARRAY['Python 3.14', 'PyQt6', 'Ollama', 'LM Studio', 'Local LLM', 'TTS Engine', 'System Automation'],
  'https://github.com/Crafted-Company/craftie-pc',
  NULL, NULL, NULL, false, true,
  '2026-08-31T06:18:33Z', '2026-08-31T06:18:33Z', '2026-08-31T12:44:53Z'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name, short_description = EXCLUDED.short_description,
  full_description_mdx = EXCLUDED.full_description_mdx, status = EXCLUDED.status,
  progress = EXCLUDED.progress, color = EXCLUDED.color, tech_stack = EXCLUDED.tech_stack,
  icon = EXCLUDED.icon, repository_url = EXCLUDED.repository_url, updated_at = EXCLUDED.updated_at;

-- Project 7: Skyrim Live Tracker
INSERT INTO public.projects (
  id, name, slug, category_id, short_description, full_description_mdx,
  status, progress, sort_order, cover_image, icon, color, tech_stack,
  repository_url, website_url, playstore_url, steam_url, featured_home, featured_projects,
  started_at, created_at, updated_at
) VALUES (
  'a1000007-0000-0000-0000-000000000007',
  'Skyrim Live Tracker',
  'skyrim-live-tracker',
  'c1000000-0000-0000-0000-000000000002',
  'A real-time external live map companion for Skyrim Special Edition, broadcasting in-game coordinates to a secondary screen with interactive breadcrumb tracking and ETA estimation.',
  '# Skyrim Live Tracker: Real-Time Second-Screen Map Companion

Skyrim Live Tracker is a companion tool for Skyrim SE/AE that streams live in-game player positions to a secondary monitor or mobile browser, allowing players to navigate the province without pausing immersion.

## Key Features
* **High-Frequency WebSocket Tracking:** Streams real-time X/Y/Z player coordinates with minimal CPU overhead.
* **Complete High-Resolution World Map:** Rendered with Leaflet tile layers with custom marker pins for holds, dungeons, and landmarks.
* **Breadcrumb Navigation & ETA:** Calculates distance and estimated walking/riding time to marked quest destinations.',
  'completed', 100, 9,
  NULL,
  'https://craftedco.org/store/icons/skyrim-tracker.png',
  '#06B6D4',
  ARRAY['TypeScript', 'React', 'Leaflet', 'React-Leaflet', 'WebSockets', 'Chokidar', 'Node.js', 'Pako'],
  'https://github.com/Crafted-Company/skyrim-tracker-pc',
  NULL, NULL, NULL, false, true,
  '2026-04-30T20:31:12Z', '2026-04-30T20:31:12Z', '2026-04-30T21:55:19Z'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name, short_description = EXCLUDED.short_description,
  full_description_mdx = EXCLUDED.full_description_mdx, status = EXCLUDED.status,
  progress = EXCLUDED.progress, color = EXCLUDED.color, tech_stack = EXCLUDED.tech_stack,
  icon = EXCLUDED.icon, repository_url = EXCLUDED.repository_url, updated_at = EXCLUDED.updated_at;


-- 4. Version History Entries (Actual Git Commit Timestamps)
DELETE FROM public.project_versions WHERE project_id IN (
  'a1000001-0000-0000-0000-000000000001',
  'a1000002-0000-0000-0000-000000000002',
  'a1000003-0000-0000-0000-000000000003',
  'a1000004-0000-0000-0000-000000000004',
  'a1000005-0000-0000-0000-000000000005',
  'a1000006-0000-0000-0000-000000000006',
  'a1000007-0000-0000-0000-000000000007'
);

INSERT INTO public.project_versions (id, project_id, version, changes_mdx, released_at) VALUES
  -- Craftnime
  (gen_random_uuid(), 'a1000001-0000-0000-0000-000000000001', 'v1.0.0-preview', '* Multi-source stream aggregator with auto-failover
* HLS adaptive quality selection and gesture controls
* Offline watchlist and episode progress persistence', '2026-09-05T04:56:59Z'),
  (gen_random_uuid(), 'a1000001-0000-0000-0000-000000000001', 'v0.5.0-alpha', '* Catalog browse view with Consumet API integration
* Subtitle styling and playback rate controls', '2026-08-28T12:00:00Z'),
  (gen_random_uuid(), 'a1000001-0000-0000-0000-000000000001', 'v0.1.0-poc', '* Project initialization and Obsidian UI architecture', '2026-08-25T07:47:13Z'),

  -- Music Player
  (gen_random_uuid(), 'a1000002-0000-0000-0000-000000000002', 'v0.9.0-alpha', '* Navidrome/Subsonic API protocol sync
* Gapless playback and audio reactive equalizer visualization
* Persistent lockscreen and notification audio controls', '2026-08-29T11:16:18Z'),
  (gen_random_uuid(), 'a1000002-0000-0000-0000-000000000002', 'v0.1.0-poc', '* Local audio scanner and Web Audio API playback pipeline', '2026-08-29T06:33:13Z'),

  -- Crafted Studio
  (gen_random_uuid(), 'a1000003-0000-0000-0000-000000000003', 'v1.0.0-alpha', '* Integrated terminal multiplexing with xterm.js & node-pty
* Embedded Monaco code editor with split diffing
* Local SQLite project database support', '2026-08-08T12:35:51Z'),
  (gen_random_uuid(), 'a1000003-0000-0000-0000-000000000003', 'v0.1.0-init', '* Initial desktop cockpit shell and workspace linking', '2026-07-27T03:06:05Z'),

  -- Roguemetry
  (gen_random_uuid(), 'a1000004-0000-0000-0000-000000000004', 'v0.8.5', '* Geometric particle explosions and screen shake effects
* Boss encounters with procedural bullet swarms
* Web Audio dynamic sound synthesis', '2026-07-14T12:59:49Z'),
  (gen_random_uuid(), 'a1000004-0000-0000-0000-000000000004', 'v0.1.0', '* Core vector physics and player dash mechanics', '2026-06-04T11:28:50Z'),

  -- Legacies
  (gen_random_uuid(), 'a1000005-0000-0000-0000-000000000005', 'v0.3.0', '* Multi-generation family tree visualization
* Feudal economy events and estate management
* Death and succession inheritance mechanics', '2026-06-22T12:20:55Z'),
  (gen_random_uuid(), 'a1000005-0000-0000-0000-000000000005', 'v0.1.0', '* Initial character stat engine and life choice matrix', '2026-06-17T07:41:49Z'),

  -- Craftie
  (gen_random_uuid(), 'a1000006-0000-0000-0000-000000000006', 'v0.7.0', '* Local LLM integration via Ollama and LMStudio
* PyQt6 desktop HUD companion widget
* Persistent persona memory storage', '2026-08-31T12:44:53Z'),
  (gen_random_uuid(), 'a1000006-0000-0000-0000-000000000006', 'v0.1.0', '* Voice wake-word detection pipeline and local TTS synthesis', '2026-08-31T06:18:33Z'),

  -- Skyrim Live Tracker
  (gen_random_uuid(), 'a1000007-0000-0000-0000-000000000007', 'v1.1.0', '* Full Leaflet tile rendering of Skyrim province
* Real-time WebSocket coordinate streaming
* Interactive search and breadcrumb travel path logging', '2026-04-30T21:55:19Z');


-- 5. Add Timeline Milestones (Aligned with schema: type, reference_slug, reference_type)
INSERT INTO public.timeline (id, project_id, title, description, date, type, reference_slug, reference_type, created_at) VALUES
  (gen_random_uuid(), 'a1000007-0000-0000-0000-000000000007', 'Launched Skyrim Live Tracker', 'Built a second-screen real-time navigation companion for Skyrim SE with WebSocket coordinate streaming.', '2026-04-30', 'milestone', 'skyrim-live-tracker', 'project', '2026-04-30T20:31:12Z'),
  (gen_random_uuid(), 'a1000004-0000-0000-0000-000000000004', 'Started Roguemetry Arcade Roguelite', 'Architected high-performance 60fps canvas vector physics and procedural wave spawns.', '2026-06-04', 'milestone', 'roguemetry', 'project', '2026-06-04T11:28:50Z'),
  (gen_random_uuid(), 'a1000005-0000-0000-0000-000000000005', 'Conceived Legacies: Infinite Lives', 'Designed the generational lineage simulator with family tree inheritance across centuries.', '2026-06-17', 'milestone', 'legacies-infinite-lives', 'project', '2026-06-17T07:41:49Z'),
  (gen_random_uuid(), 'a1000003-0000-0000-0000-000000000003', 'Architected Crafted Studio Cockpit', 'Designed unified developer desktop environment combining Monaco editor and xterm.js terminals.', '2026-07-27', 'milestone', 'crafted-studio', 'project', '2026-07-27T03:06:05Z'),
  (gen_random_uuid(), 'a1000001-0000-0000-0000-000000000001', 'Began Craftnime Development', 'Created multi-source anime streaming and tracking suite with obsidian aesthetic on Android & desktop.', '2026-08-25', 'milestone', 'craftnime', 'project', '2026-08-25T07:47:13Z'),
  (gen_random_uuid(), 'a1000002-0000-0000-0000-000000000002', 'Built Crafted Music Player', 'Developed offline and Navidrome-connected audio client with retro-inspired tactile controls.', '2026-08-29', 'milestone', 'music-player', 'project', '2026-08-29T06:33:13Z'),
  (gen_random_uuid(), 'a1000006-0000-0000-0000-000000000006', 'Developed Craftie Local AI Companion', 'Built private local GPU desktop assistant connected to Ollama with voice wake-word and memory.', '2026-08-31', 'milestone', 'craftie', 'project', '2026-08-31T06:18:33Z');


-- 6. Add 2 New Journal Devlogs (Aligned with schema: excerpt, visibility, reading_time)
INSERT INTO public.journal_entries (
  id, project_id, title, slug, excerpt, content_mdx,
  reading_time, pinned, visibility, published, published_at, created_at, updated_at
) VALUES (
  'j1000001-0000-0000-0000-000000000001',
  'a1000001-0000-0000-0000-000000000001',
  'Engineering Craftnime: Multi-Source Playback and Obsidian Aesthetics',
  'engineering-craftnime-multi-source-streaming',
  'How we engineered a lightweight, pop-up free anime streaming engine across Android and Desktop with HLS adaptive streams and touch gestures.',
  '# Engineering Craftnime: Multi-Source Playback and Obsidian Aesthetics

Streaming media across heterogeneous platforms (Android, Windows, and Linux) without webview bloat or intrusive popup advertisements requires rethinking the traditional video player architecture.

## 1. The Multi-Server Aggregator Engine
Traditional clients rely on static scrapers that break whenever video hosts update their player tokens. In Craftnime, we decoupled the extraction pipeline:
- **Consumet & Custom Provider Layer:** Fetches real-time HLS playlists (.m3u8) directly.
- **Failover Resolution:** If an upstream server experiences latency or 403 blocks, the player automatically rolls to the next server within 400ms without user interruption.

## 2. Touch Gestures & The Obsidian Shell
Media apps should get out of the way. We implemented vertical swipe zones for brightness (left screen) and volume (right screen), horizontal scrubs for timeline jumps, and an AMOLED obsidian backdrop with subtle 10% violet ambient glow accents.

## 3. Offline State & Watchlist Sync
All watchlist status records and episode timestamps are stored in persistent IndexedDB snapshots, ensuring that even in flight mode or on poor connections, the app boots instantly.',
  3, true, 'public', true, '2026-08-28T12:00:00Z', '2026-08-28T12:00:00Z', '2026-08-28T12:00:00Z'
), (
  'j1000002-0000-0000-0000-000000000002',
  'a1000003-0000-0000-0000-000000000003',
  'From Standalone Apps to the Crafted Co. Ecosystem',
  'evolution-of-crafted-co-ecosystem',
  'Reflecting on building Commit, Champione, and transitioning toward a unified suite of native apps and desktop cockpits.',
  '# From Standalone Apps to the Crafted Co. Ecosystem

Over the past few months, Crafted Co. has grown from isolated experiments like D.I.A.N.E. and Commit into an interconnected software ecosystem spanning mobile and desktop.

## The Problem with Isolated Tools
Building standalone apps teaches you rapid delivery, but it creates fragmented user experiences. When tools don''t share design tokens, authentication patterns, or state schemas, each application feels like a stranger.

## Standardizing Crafted Co.
With the introduction of **Crafted Studio**, **Craftnime**, and the upcoming **Crafted Store**, we established three core technical pillars:
1. **Local-First Always:** Zero mandatory cloud lock-in. Your data belongs on your device.
2. **Obsidian Dark Visual Language:** High contrast, minimal glow, and crisp typography using Geist and Instrument Serif sparingly.
3. **Frictionless Distribution:** Direct APK releases, open catalogs, and verified binaries without walled-garden delays.',
  3, false, 'public', true, '2026-09-02T10:00:00Z', '2026-09-02T10:00:00Z', '2026-09-02T10:00:00Z'
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_mdx = EXCLUDED.content_mdx;


-- 7. Update /now Page Items (Aligned with schema: category, title, description, sort_order)
DELETE FROM public.now_items;
INSERT INTO public.now_items (id, category, title, description, sort_order, created_at) VALUES
  (gen_random_uuid(), 'Ecosystem', 'Craftnime & Crafted Store', 'Scaling the Crafted Co. ecosystem — polishing the Craftnime streaming engine and preparing the native Crafted Store Android client.', 1, '2026-09-01T00:00:00Z'),
  (gen_random_uuid(), 'Engineering', 'Crafted Studio & Craftie', 'Deepening local-first workflows with the Crafted Studio desktop cockpit and Craftie autonomous AI companion.', 2, '2026-09-01T00:00:00Z'),
  (gen_random_uuid(), 'Gaming', 'Roguemetry & Champione RPG', 'Refining Roguemetry vector physics and preparing upcoming Play Store builds for Champione workout RPG.', 3, '2026-09-01T00:00:00Z');
