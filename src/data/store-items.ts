import { StoreItem } from "@/types/store.types";

export const STORE_ITEMS: StoreItem[] = [
  {
    id: "craftnime",
    slug: "craftnime-x",
    name: "Craftnime",
    tagline: "Anime tracking and high-performance streaming client",
    description: "A fast, unified anime viewer and catalog synchronizer designed with smooth transitions, subtitle controls, and a dedicated multi-source player engine.",
    category: "suite",
    isSuite: true,
    status: "in-development",
    version: "v1.4.2",
    releaseDate: "Upcoming",
    githubUrl: "https://github.com/Crafted-Company/craftnime-x",
    accentColor: "#6864F6",
    iconName: "Tv",
    screenshots: [
      { id: "cn-1", caption: "Spotlight Hero Banner & Anime Details", aspectRatio: "video", placeholderColor: "#241D1D" },
      { id: "cn-2", caption: "Trending & Catalog Browse Grid", aspectRatio: "video", placeholderColor: "#1F1818" },
      { id: "cn-3", caption: "Mobile Player Controls & Watchlist", aspectRatio: "portrait", placeholderColor: "#2C2222" }
    ],
    platforms: [
      { platform: "android", label: "Android APK", version: "v1.4.2", size: "78 MB", isAvailable: false },
      { platform: "windows", label: "Windows .exe", version: "v1.4.2", size: "95 MB", isAvailable: false },
      { platform: "linux", label: "Linux AppImage", version: "v1.4.2", size: "92 MB", isAvailable: false }
    ],
    features: [
      "Dynamic multi-server streaming with quality selection",
      "Offline cache and watchlist synchronization",
      "Custom Crafted obsidian & violet UI layout",
      "Optimized gesture-controlled video player"
    ],
    techStack: ["TypeScript", "Capacitor", "Vite", "Tailwind CSS"]
  },
  {
    id: "music-player",
    slug: "music-player-x",
    name: "Music Player",
    tagline: "High-fidelity Navidrome & local audio player client",
    description: "Obsidian-themed audio client with zero-friction server authentication, seamless gapless playback, playlist management, and offline cache support.",
    category: "suite",
    isSuite: true,
    status: "in-development",
    version: "v0.9.0",
    releaseDate: "Upcoming",
    githubUrl: "https://github.com/Crafted-Company/music-player-x",
    accentColor: "#A9452D",
    iconName: "Music",
    screenshots: [
      { id: "mp-1", caption: "Now Playing Interface with Waveform", aspectRatio: "video", placeholderColor: "#221A1A" },
      { id: "mp-2", caption: "Navidrome Server Library & Albums", aspectRatio: "video", placeholderColor: "#1B1515" },
      { id: "mp-3", caption: "Mobile Player Tray & Quick Controls", aspectRatio: "portrait", placeholderColor: "#261D1D" }
    ],
    platforms: [
      { platform: "android", label: "Android APK", version: "v0.9.0", size: "64 MB", isAvailable: false },
      { platform: "windows", label: "Windows .exe", version: "v0.9.0", size: "82 MB", isAvailable: false }
    ],
    features: [
      "Native Subsonic & Navidrome API protocol integration",
      "Local audio scanner with ID3 tag parsing",
      "Warm charcoal backdrop with audio-reactive accent lighting",
      "Persistent mini-player and lockscreen audio controls"
    ],
    techStack: ["TypeScript", "Capacitor", "Vite", "Web Audio API"]
  },
  {
    id: "crafted-studio",
    slug: "crafted-studio-pc",
    name: "Crafted Studio",
    tagline: "Visual workspace and developer workspace studio",
    description: "A desktop engineering cockpit designed for rapid layout building, terminal docks, AI assistant orchestration, and modular project planning.",
    category: "suite",
    isSuite: true,
    status: "in-development",
    version: "v1.0.0",
    releaseDate: "Active Dev",
    githubUrl: "https://github.com/Crafted-Company/crafted-studio-pc",
    accentColor: "#6864F6",
    iconName: "Layout",
    screenshots: [
      { id: "cs-1", caption: "Studio Multi-Pane Cockpit & Explorer", aspectRatio: "video", placeholderColor: "#201A1A" },
      { id: "cs-2", caption: "Tool Dock & Guided Workflow Status", aspectRatio: "video", placeholderColor: "#241E1E" },
      { id: "cs-3", caption: "Integrated Terminal & Architecture View", aspectRatio: "video", placeholderColor: "#1A1515" }
    ],
    platforms: [
      { platform: "windows", label: "Windows .exe", version: "v1.0.0", size: "110 MB", isAvailable: false },
      { platform: "linux", label: "Linux AppImage", version: "v1.0.0", size: "105 MB", isAvailable: false }
    ],
    features: [
      "Side-by-side IDE docking and workspace linking",
      "Modular design token inspector and palette exporter",
      "Built-in guided checklist workflow system",
      "Obsidian dark mode with customizable panel ratios"
    ],
    techStack: ["TypeScript", "Electron", "Vite", "Tailwind CSS"]
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
    screenshots: [
      { id: "cm-1", caption: "Daily Habit Checklist with Streak Counters", aspectRatio: "portrait", placeholderColor: "#1E1818" },
      { id: "cm-2", caption: "Monthly Completion Heatmap & Analytics", aspectRatio: "portrait", placeholderColor: "#221C1C" },
      { id: "cm-3", caption: "Custom Frequency & Reminder Settings", aspectRatio: "portrait", placeholderColor: "#261E1E" }
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
    screenshots: [
      { id: "cp-1", caption: "Hero Stats & Level Progression Screen", aspectRatio: "portrait", placeholderColor: "#231B1B" },
      { id: "cp-2", caption: "Workout Routine Logger & Set Tracker", aspectRatio: "portrait", placeholderColor: "#1F1717" },
      { id: "cp-3", caption: "Inventory Equipment & Milestone Badges", aspectRatio: "portrait", placeholderColor: "#271E1E" }
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
    screenshots: [
      { id: "tlc-1", caption: "Arena Combat with Snake Boss AI", aspectRatio: "portrait", placeholderColor: "#221915" },
      { id: "tlc-2", caption: "Roguelike Upgrade Tree & Power-Up Choice", aspectRatio: "portrait", placeholderColor: "#2A1D18" },
      { id: "tlc-3", caption: "High Score Leaderboard & Death Summary", aspectRatio: "portrait", placeholderColor: "#1E1613" }
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
    screenshots: [
      { id: "rg-1", caption: "Geometric Wave Battle with Particle FX", aspectRatio: "video", placeholderColor: "#1F1A24" },
      { id: "rg-2", caption: "Perk Selection Matrix", aspectRatio: "video", placeholderColor: "#1B1620" }
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
    id: "abyss-archive",
    slug: "abyss-archive-w",
    name: "Abyss Archive",
    tagline: "Unified media vault for books, movies, series, and PC games",
    description: "A centralized media tracking portal featuring Google Books metadata resolution, Steam library/wishlist integration, QR code sharing, and financial analytics.",
    category: "web",
    status: "available",
    version: "v1.1.0",
    releaseDate: "Live Platform",
    githubUrl: "https://github.com/Aditya0973/abyss-archive-w",
    accentColor: "#6864F6",
    iconName: "Library",
    screenshots: [
      { id: "aa-1", caption: "Media Dashboard & Collection Overview", aspectRatio: "video", placeholderColor: "#1C1726" },
      { id: "aa-2", caption: "Steam Wishlist Sync & Financial Insights", aspectRatio: "video", placeholderColor: "#181422" },
      { id: "aa-3", caption: "Google Books Auto-Resolver & Journal", aspectRatio: "video", placeholderColor: "#20182A" }
    ],
    platforms: [
      { platform: "web", label: "Launch Web App", version: "v1.1.0", downloadUrl: "https://www.abyssarchive.space/", isAvailable: true }
    ],
    features: [
      "Google Books API integration for instant ISBN metadata resolution",
      "Undocumented Steam API wishlist and ownership import sync",
      "CSV parser adapters for Goodreads and Letterboxd diary imports",
      "Supabase PostgreSQL backend with Row-Level Security (RLS)"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"]
  },
  {
    id: "modyule",
    slug: "modyule-w",
    name: "Modyule",
    tagline: "Token-driven SaaS generator and dashboard builder",
    description: "Interactive visual component builder and full-stack code exporter that compiles production-ready Next.js & Supabase application templates.",
    category: "web",
    status: "available",
    version: "v1.0.7",
    releaseDate: "Live Platform",
    githubUrl: "https://github.com/Aditya0973/modyule-w",
    accentColor: "#D97706",
    iconName: "Boxes",
    screenshots: [
      { id: "md-1", caption: "Visual Dashboard Token Editor & Inspector", aspectRatio: "video", placeholderColor: "#231B15" },
      { id: "md-2", caption: "Code Exporter & Database Schema Bundler", aspectRatio: "video", placeholderColor: "#1E1712" }
    ],
    platforms: [
      { platform: "web", label: "Launch Web App", version: "v1.0.7", downloadUrl: "https://modyule.vercel.app/", isAvailable: true }
    ],
    features: [
      "Real-time visual token customizer with instant preview",
      "Automated export package bundler with clean ZIP generator",
      "Pre-configured Supabase, Firebase, and Prisma client setups",
      "Cyber brutalist theme with responsive glass layouts"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma"]
  }
];
