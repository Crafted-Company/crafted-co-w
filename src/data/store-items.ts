import { StoreItem } from "@/types/store.types";

export const STORE_ITEMS: StoreItem[] = [
  {
    id: "craftnime",
    slug: "craftnime-x",
    name: "Craftnime",
    tagline: "Anime tracking & high-performance streaming client",
    description: "A fast, unified anime viewer and catalog synchronizer designed with smooth transitions, subtitle controls, and a dedicated multi-source player engine.",
    category: "suite",
    isSuite: true,
    status: "available",
    version: "v1.0.0",
    releaseDate: "September 2026",
    githubUrl: "https://github.com/Crafted-Company/craftnime-x",
    accentColor: "#6864F6",
    iconName: "Tv",
    iconImage: "/store/icons/craftnime.png",
    rating: "4.9",
    installs: "100+",
    screenshots: [
      {
        id: "cn-d1",
        caption: "Desktop Studio Interface & Spotlight Hero",
        image: "/store/screenshots/craftnime-desktop-1.png",
        aspectRatio: "landscape"
      },
      {
        id: "cn-m1",
        caption: "Mobile Trending Anime & Popularity Rankings",
        image: "/store/screenshots/craftnime-mobile-1.png",
        aspectRatio: "portrait"
      },
      {
        id: "cn-d2",
        caption: "Desktop Franchise Chronology & Canonical Watch Order",
        image: "/store/screenshots/craftnime-desktop-2.png",
        aspectRatio: "landscape"
      },
      {
        id: "cn-m2",
        caption: "Mobile Watchlist & MAL Cloud Sync Hub",
        image: "/store/screenshots/craftnime-mobile-2.png",
        aspectRatio: "portrait"
      }
    ],
    platforms: [
      {
        platform: "android",
        label: "Android APK",
        version: "v1.0.0",
        size: "11 MB",
        downloadUrl: "https://github.com/Crafted-Company/craftnime-x/releases/download/v1.0.0/Craftnime.apk",
        isAvailable: true
      },
      {
        platform: "windows",
        label: "Windows .exe",
        version: "v1.0.0",
        size: "105 MB",
        downloadUrl: "https://github.com/Crafted-Company/craftnime-x/releases/download/v1.0.0/Craftnime-Setup-v1.0.0.exe",
        isAvailable: true
      },
      {
        platform: "linux",
        label: "Linux Package",
        version: "v1.0.0",
        size: "155 MB",
        downloadUrl: "https://github.com/Crafted-Company/craftnime-x/releases/download/v1.0.0/Craftnime-1.0.0-Linux.zip",
        isAvailable: true
      }
    ],
    features: [
      "Dynamic multi-server streaming with quality selection (1080p Full HD)",
      "Seamless HLS playback with subtitle controls & fast seeking",
      "Offline cache, watchlist synchronization & AniList integration",
      "Cross-platform obsidian & violet UI layout optimized for mobile & desktop"
    ],
    techStack: ["TypeScript", "Capacitor", "Electron", "React", "Tailwind CSS"]
  },
  {
    id: "music-player",
    slug: "music-player-x",
    name: "Music Player",
    tagline: "Retro iPod Classic & Gonic audio player client",
    description: "Obsidian-themed iPod Classic click-wheel audio client with Gonic & Subsonic streaming, LRCLIB synced lyrics, full playlist management, and offline cache support.",
    category: "suite",
    isSuite: true,
    status: "available",
    version: "v1.0.0",
    releaseDate: "September 2026",
    githubUrl: "https://github.com/Crafted-Company/music-player-x",
    accentColor: "#A9452D",
    iconName: "Music",
    iconImage: "/store/icons/music-player.png",
    rating: "4.9",
    installs: "100+",
    screenshots: [
      {
        id: "mp-m1",
        caption: "Now Playing Screen with Song Cover & Click-Wheel",
        image: "/store/screenshots/music-player-mobile-1.png",
        aspectRatio: "portrait"
      },
      {
        id: "mp-m2",
        caption: "iPod Classic Menu & Gonic Server Navigation",
        image: "/store/screenshots/music-player-mobile-2.png",
        aspectRatio: "portrait"
      },
      {
        id: "mp-m3",
        caption: "Automated Metadata & Cover Art Fetching",
        image: "/store/screenshots/music-player-mobile-3.png",
        aspectRatio: "portrait"
      },
      {
        id: "mp-m4",
        caption: "Real-time Synced Lyrics & Live Line Following",
        image: "/store/screenshots/music-player-mobile-4.png",
        aspectRatio: "portrait"
      }
    ],
    platforms: [
      {
        platform: "android",
        label: "Android APK",
        version: "v1.0.0",
        size: "5 MB",
        downloadUrl: "https://github.com/Crafted-Company/music-player-x/releases/download/v1.0.0/CraftedMusicPlayer-v1.0.0.apk",
        isAvailable: true
      }
    ],
    features: [
      "Authentic iPod Classic click-wheel tactile rotary navigation & haptics",
      "Native Gonic & Subsonic cloud library streaming with instant playback",
      "Real-time synced lyrics powered by LRCLIB with auto-scroll",
      "Full playlist management: create, rename, delete & local audio scanning"
    ],
    techStack: ["TypeScript", "Capacitor", "React", "Tailwind CSS", "Web Audio API"]
  },
  {
    id: "crafted-studio",
    slug: "crafted-studio-pc",
    name: "Crafted Studio Code",
    tagline: "Agentic AI workbench & local developer engineering cockpit",
    description: "An agentic AI development workbench and multi-pane engineering cockpit featuring embedded Monaco editor, live multi-provider LLM orchestration, 4 specialized responsibility agents, and sandboxed terminal tool execution.",
    category: "suite",
    isSuite: true,
    status: "available",
    version: "v1.0.0",
    releaseDate: "September 2026",
    githubUrl: "https://github.com/Crafted-Company/crafted-studio-pc",
    accentColor: "#E05A36",
    iconName: "Code2",
    iconImage: "/store/icons/crafted-studio-code.png",
    rating: "5.0",
    installs: "100+",
    screenshots: [
      {
        id: "cs-1",
        caption: "4-Pane AI Workbench: Explorer, Agent Chat, Monaco Editor & Live Tool Dock",
        image: "/store/screenshots/crafted-studio-1.png",
        aspectRatio: "landscape"
      },
      {
        id: "cs-2",
        caption: "Integrated Tool Dock with Live Web Sandbox & Embedded Developer Browser",
        image: "/store/screenshots/crafted-studio-2.png",
        aspectRatio: "landscape"
      },
      {
        id: "cs-3",
        caption: "Flexible Multi-Pane Layout with Local Ollama & Cloud Model Orchestrator",
        image: "/store/screenshots/crafted-studio-3.png",
        aspectRatio: "landscape"
      },
      {
        id: "cs-4",
        caption: "Full-Screen Code Editor with Integrated Multi-Tab Terminal Dock",
        image: "/store/screenshots/crafted-studio-4.png",
        aspectRatio: "landscape"
      },
      {
        id: "cs-5",
        caption: "Custom Keyboard Shortcuts & Granular Workspace Configuration",
        image: "/store/screenshots/crafted-studio-5.png",
        aspectRatio: "landscape"
      }
    ],
    platforms: [
      {
        platform: "windows",
        label: "Windows .exe",
        version: "v1.0.0",
        size: "115 MB",
        downloadUrl: "https://github.com/Crafted-Company/crafted-studio-pc/releases/download/v1.0.0/Crafted-Studio-Code-Setup-v1.0.0.exe",
        isAvailable: true
      },
      {
        platform: "linux",
        label: "Linux Package",
        version: "v1.0.0",
        size: "140 MB",
        downloadUrl: "https://github.com/Crafted-Company/crafted-studio-pc/releases/download/v1.0.0/Crafted-Studio-Code-1.0.0-Linux.AppImage",
        isAvailable: true
      }
    ],
    features: [
      "Multi-agent orchestration with 4 specialized roles (Architect, Designer, Engineer, Reviewer)",
      "Local-first LLM support via Ollama alongside cloud providers (OpenAI, Anthropic, Gemini)",
      "Resilient backend runtime with human-in-the-loop tool execution approvals",
      "Integrated Monaco code editor, interactive PTY terminal dock, and live web tool container",
      "Offline-first SQLite conversation persistence with hardware-encrypted API key storage"
    ],
    techStack: ["TypeScript", "Electron", "React", "Tailwind CSS", "Monaco Editor", "SQLite", "Node-PTY"]
  },
  {
    id: "commit",
    slug: "commit-habit-tracker-a",
    name: "Commit",
    tagline: "Offline-first habit tracker designed for consistency",
    description: "A distraction-free habit tracking mobile application focused on streak building, minimal analytics, and private local data storage.",
    category: "apps",
    status: "available",
    version: "v1.2.0",
    releaseDate: "Live on Play Store",
    githubUrl: "https://github.com/Aditya0973/commit-habit-tracker-a",
    accentColor: "#D97706",
    iconName: "CheckCircle2",
    iconImage: "/store/icons/commit.png",
    rating: "4.9",
    installs: "100+",
    screenshots: [
      { id: "cm-1", caption: "Daily Habit Checklist with Streak Counters", placeholderColor: "#1E1818" },
      { id: "cm-2", caption: "Monthly Completion Heatmap & Analytics", placeholderColor: "#221C1C" },
      { id: "cm-3", caption: "Custom Frequency & Reminder Settings", placeholderColor: "#261E1E" }
    ],
    platforms: [
      { platform: "android", label: "Google Play Store", version: "v1.2.0", downloadUrl: "https://play.google.com/store/apps/details?id=com.craftedco.commit", isAvailable: true },
      { platform: "android", label: "Direct APK", version: "v1.2.0", size: "28 MB", isAvailable: false }
    ],
    features: [
      "Zero account required - strictly offline local storage",
      "GitHub-style commit grid visualization for streaks",
      "Haptic micro-interactions on task completion",
      "Battery-efficient scheduled background notifications"
    ],
    techStack: ["Flutter", "Dart", "SQLite", "Local Notifications"]
  },
  {
    id: "champione",
    slug: "champione-a",
    name: "Champione",
    tagline: "RPG workout tracker that turns fitness into a quest",
    description: "Gamified workout logging app where physical exercise earns XP, unlocks character gear, and tracks progressive overload with RPG progression.",
    category: "apps",
    status: "available",
    version: "v1.1.4",
    releaseDate: "Live on Play Store",
    githubUrl: "https://github.com/Aditya0973/champione-a",
    accentColor: "#A9452D",
    iconName: "Dumbbell",
    iconImage: "/store/icons/champione.png",
    rating: "4.8",
    installs: "100+",
    screenshots: [
      { id: "cp-1", caption: "Hero Stats & Level Progression Screen", placeholderColor: "#231B1B" },
      { id: "cp-2", caption: "Workout Routine Logger & Set Tracker", placeholderColor: "#1F1717" },
      { id: "cp-3", caption: "Inventory Equipment & Milestone Badges", placeholderColor: "#271E1E" }
    ],
    platforms: [
      { platform: "android", label: "Google Play Store", version: "v1.1.4", downloadUrl: "https://play.google.com/store/apps/details?id=com.craftedco.champione", isAvailable: true },
      { platform: "android", label: "Direct APK", version: "v1.1.4", size: "34 MB", isAvailable: false }
    ],
    features: [
      "RPG leveling curve tied directly to training volume",
      "Exercise library with weight and rep history tracking",
      "Rest timer with audio chimes and background support",
      "Visual character card with custom equipment unlocks"
    ],
    techStack: ["Flutter", "Dart", "Provider", "Local Database"]
  },
  {
    id: "the-last-crumb",
    slug: "the-last-crumb-ag",
    name: "The Last Crumb",
    tagline: "Reverse-snake arcade roguelike",
    description: "A fast-paced arcade game built on the Flame engine where you navigate a hostile grid, outmaneuver relentless snake bosses, and collect survival crumbs.",
    category: "games",
    status: "in-development",
    version: "v0.4.0",
    releaseDate: "In Development",
    githubUrl: "https://github.com/Aditya0973/the-last-crumb-ag",
    accentColor: "#F97316",
    iconName: "Gamepad2",
    iconImage: "/store/icons/the-last-crumb.png",
    rating: "4.7",
    installs: "Alpha",
    screenshots: [
      { id: "tlc-1", caption: "Arena Combat with Snake Boss AI", placeholderColor: "#221915" },
      { id: "tlc-2", caption: "Roguelike Upgrade Tree & Power-Up Choice", placeholderColor: "#2A1D18" },
      { id: "tlc-3", caption: "High Score Leaderboard & Death Summary", placeholderColor: "#1E1613" }
    ],
    platforms: [
      { platform: "android", label: "Android APK", version: "v0.4.0", size: "38 MB", isAvailable: false }
    ],
    features: [
      "Custom Flame 2D game loop with responsive touch controls",
      "Dynamic enemy boss AI with multi-phase attack patterns",
      "Proc-gen upgrade cards between combat rounds",
      "Chiptune audio synthesizers and screen-shake physics"
    ],
    techStack: ["Flutter", "Flame Engine", "Dart", "Flame Audio"]
  },
  {
    id: "roguemetry",
    slug: "roguemetry-ag",
    name: "Roguemetry",
    tagline: "Minimal geometric roguelike arcade shooter",
    description: "Clean arcade game of geometric survival where you dodge kinetic polygon waves, accumulate perk synergies, and climb survival leaderboards.",
    category: "games",
    status: "available",
    version: "v1.0.0",
    releaseDate: "Web & Mobile Ready",
    githubUrl: "https://github.com/Aditya0973/roguemetry-ag",
    accentColor: "#6864F6",
    iconName: "Crosshair",
    iconImage: "/store/icons/roguemetry.png",
    rating: "4.9",
    installs: "500+",
    screenshots: [
      { id: "rg-1", caption: "Geometric Wave Battle with Particle FX", placeholderColor: "#1F1A24" },
      { id: "rg-2", caption: "Perk Selection Matrix", placeholderColor: "#1B1620" }
    ],
    platforms: [
      { platform: "web", label: "Play Online", version: "v1.0.0", downloadUrl: "https://roguemetry.vercel.app/", isAvailable: true },
      { platform: "android", label: "Android APK", version: "v1.0.0", size: "24 MB", isAvailable: false }
    ],
    features: [
      "60 FPS canvas rendering with lightweight footprint",
      "Touch joystick and keyboard controls support",
      "Procedural wave difficulty scaling",
      "Neon geometric aesthetics with crisp glow shaders"
    ],
    techStack: ["TypeScript", "HTML5 Canvas", "Capacitor", "Vite"]
  },
  {
    id: "modyule",
    slug: "modyule-w",
    name: "Modyule",
    tagline: "Token-driven SaaS generator & dashboard builder",
    description: "An interactive, token-driven web application customizer and dynamic server-side codebase generator. Visually configure design presets, slot structures, databases (Supabase, Firebase, Prisma), and SaaS modules, and instantly export a fully-typed Next.js codebase in a clean ZIP bundle.",
    category: "web",
    status: "available",
    version: "v1.0.7",
    releaseDate: "Live Platform",
    githubUrl: "https://github.com/Aditya0973/modyule-w",
    accentColor: "#076653",
    iconName: "Boxes",
    iconImage: "/store/icons/modyule.png",
    rating: "4.9",
    installs: "Cloud",
    screenshots: [
      {
        id: "md-1",
        caption: "Style & Design Token Customizer (Modern, Glass, Brutalist, Soft, Enterprise)",
        image: "/store/screenshots/modyule-1.png",
        aspectRatio: "landscape"
      },
      {
        id: "md-2",
        caption: "Layout & Navigation Grid Configuration (Sidebar, Topbar, Hybrid)",
        image: "/store/screenshots/modyule-2.png",
        aspectRatio: "landscape"
      },
      {
        id: "md-3",
        caption: "Dashboard Card Slots & Component Customizer (KPIs, Charts, Tables)",
        image: "/store/screenshots/modyule-3.png",
        aspectRatio: "landscape"
      },
      {
        id: "md-4",
        caption: "Database & Authentication Config Generator (Supabase, Firebase, Prisma)",
        image: "/store/screenshots/modyule-4.png",
        aspectRatio: "landscape"
      },
      {
        id: "md-5",
        caption: "Production SaaS Modules & Feature Suite (Stripe Billing, Teams, Calendar)",
        image: "/store/screenshots/modyule-5.png",
        aspectRatio: "landscape"
      }
    ],
    platforms: [
      { platform: "web", label: "Launch Web App", version: "v1.0.7", downloadUrl: "https://modyule.vercel.app/", isAvailable: true }
    ],
    features: [
      "Real-time visual token customizer with instant preview",
      "Multi-preset design languages (Modern, Glass, Brutalist, Soft, Enterprise)",
      "Dynamic code exporter with pre-configured Supabase, Firebase & Prisma setups",
      "Modular SaaS features suite (Stripe billing, teams, calendars, command bar)",
      "Child-simple developer manual (README) generated in every export ZIP"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Prisma", "Zustand"]
  },
  {
    id: "abyss-archive",
    slug: "abyss-archive-w",
    name: "Abyss Archive",
    tagline: "Minimalist universal vault for books, movies, and games",
    description: "A unified, distraction-free media catalog and backlog organizer for books, movies, series, and PC games. Featuring automated Steam library and wishlist sync, live price tracking, custom shelf curation, deep library insights, and public profile sharing.",
    category: "web",
    status: "available",
    version: "v1.0.0",
    releaseDate: "Live Platform",
    githubUrl: "https://github.com/Aditya0973/abyss-archive-w",
    accentColor: "#6864F6",
    iconName: "Library",
    iconImage: "/store/icons/abyss-archive.svg",
    rating: "4.9",
    installs: "Cloud",
    screenshots: [
      {
        id: "aa-1",
        caption: "Unified Books Vault with ISBN Lookup & Shelf Categorization",
        image: "/store/screenshots/abyss-archive-1.png",
        aspectRatio: "landscape"
      },
      {
        id: "aa-2",
        caption: "Steam Games Library Sync, Wishlist Tracking & Playtime Metrics",
        image: "/store/screenshots/abyss-archive-2.png",
        aspectRatio: "landscape"
      },
      {
        id: "aa-3",
        caption: "Movie & Series Details with Cast, Crew & Rotten Tomatoes Ratings",
        image: "/store/screenshots/abyss-archive-3.png",
        aspectRatio: "landscape"
      },
      {
        id: "aa-4",
        caption: "Book Overview Card with Page Count, Publisher & Direct Notes",
        image: "/store/screenshots/abyss-archive-4.png",
        aspectRatio: "landscape"
      },
      {
        id: "aa-5",
        caption: "Quick Add Game Dialog with Live Steam API Search",
        image: "/store/screenshots/abyss-archive-5.png",
        aspectRatio: "landscape"
      },
      {
        id: "aa-6",
        caption: "Deep Library Analytics & Media Completion Insights",
        image: "/store/screenshots/abyss-archive-6.png",
        aspectRatio: "landscape"
      }
    ],
    platforms: [
      {
        platform: "web",
        label: "Launch Web App",
        version: "v1.0.0",
        downloadUrl: "https://abyssarchive.space",
        isAvailable: true
      }
    ],
    features: [
      "Track books, movies, TV shows, and games in a single cohesive vault",
      "Seamless Steam integration with automatic library & wishlist price sync",
      "Live search via Google Books, Open Library, TMDB, and Steam Store APIs",
      "Interactive media insights, rating distributions, and shelf statistics",
      "Public profile sharing with custom vanity links"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Lucide Icons"]
  }
];

