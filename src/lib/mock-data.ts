import {
  Category,
  Project,
  ProjectImage,
  ProjectVersion,
  JournalEntry,
  TimelineEvent,
  NowItem,
  Tag
} from "@/types/database.types";

// 1. Mock Categories
export const mockCategories: Category[] = [
  {
    id: "cat-1",
    name: "Applications",
    slug: "apps",
    created_at: "2026-01-01T00:00:00Z"
  },
  {
    id: "cat-2",
    name: "Games",
    slug: "games",
    created_at: "2026-01-01T00:00:00Z"
  },
  {
    id: "cat-3",
    name: "Websites",
    slug: "websites",
    created_at: "2026-01-01T00:00:00Z"
  },
  {
    id: "cat-4",
    name: "Experiments",
    slug: "experiments",
    created_at: "2026-01-01T00:00:00Z"
  }
];

// 2. Mock Projects
export const mockProjects: Project[] = [
  {
    id: "proj-commit",
    name: "Commit",
    slug: "commit",
    category_id: "cat-1",
    short_description: "A minimal, gesture-driven habit tracker designed to help you stay consistent.",
    full_description_mdx: `
# Commit — Gesture Habit Tracker

Commit is a personal habit tracker focused on simplicity and tactile feedback. It avoids streaks, points, or notifications, emphasizing the simple ritual of logging your progress daily.

## Core Features
*   **Tactile Completion**: Swipes and gestures designed with native iOS spring feel.
*   **Archiving**: Old habits drift away quietly without inducing guilt.
*   **Local-First Design**: Completely offline with encrypted backups.

Built over 3 months using Swift and SwiftUI, focusing on custom animation curves and core data optimization.
`,
    status: "completed",
    progress: 100,
    sort_order: 1,
    cover_image: "/inspiration from the company logo and design/crafted website design.png", // Use local image fallback
    icon: null,
    color: "#433FA9",
    tech_stack: ["Swift", "SwiftUI", "CoreData", "Combine"],
    repository_url: "https://github.com/Aditya0973/commit-app",
    website_url: "https://commit.crafted.co",
    playstore_url: null,
    steam_url: null,
    featured_home: true,
    featured_projects: true,
    search_text: "commit habit tracker swift swiftui ios app gesture offline local-first",
    started_at: "2026-01-10T00:00:00Z",
    completed_at: "2026-04-15T00:00:00Z",
    created_at: "2026-01-10T00:00:00Z",
    updated_at: "2026-04-15T00:00:00Z"
  },
  {
    id: "proj-champione",
    name: "Champione",
    slug: "champione",
    category_id: "cat-2",
    short_description: "A fast-paced, pixel-art action roguelike featuring procedural dungeon layouts.",
    full_description_mdx: `
# Champione

Champione is a 2D side-scrolling action game where you battle monsters in procedural dungeon layers. Every stage introduces randomized weapons, enemy behaviors, and dynamic physics objects.

## Technical Milestones
*   **Custom Physics Solver**: Written in GDScript to handle rigid pixel collisions.
*   **Procedural Generation**: Grid-based layout solver utilizing cellular automata for cave outlines.
*   **Steam Sync integration**: Save games are synced securely.

Currently in development using Godot Engine.
`,
    status: "in_progress",
    progress: 72,
    sort_order: 2,
    cover_image: "/inspiration from the company logo and design/crafted banner(1).jpg",
    icon: null,
    color: "#A9452D",
    tech_stack: ["Godot", "GDScript", "C#", "Steamworks"],
    repository_url: "https://github.com/Aditya0973/champione",
    website_url: null,
    playstore_url: null,
    steam_url: "https://store.steampowered.com/app/mock-champione",
    featured_home: true,
    featured_projects: true,
    search_text: "champione game roguelike godot gdscript steam pixel art action dungeon",
    started_at: "2026-05-01T00:00:00Z",
    completed_at: null,
    created_at: "2026-05-01T00:00:00Z",
    updated_at: "2026-07-01T00:00:00Z"
  },
  {
    id: "proj-abyss",
    name: "Abyss Archive",
    slug: "abyss-archive",
    category_id: "cat-3",
    short_description: "A digital vault and wiki indexing obscure mechanical design architectures.",
    full_description_mdx: `
# Abyss Archive

Abyss Archive is an interactive catalog compiling specifications, technical drawings, and historical context on clockwork mechanisms, early steam devices, and automated toys.

## Features
*   **High Performance Cataloging**: Interactive structural rendering.
*   **Dynamic Filtering**: Multi-layered search filters.
`,
    status: "completed",
    progress: 100,
    sort_order: 3,
    cover_image: "/inspiration from the company logo and design/craftedco.jpg",
    icon: null,
    color: "#4641A9",
    tech_stack: ["Next.js", "Tailwind CSS", "Supabase", "MDX"],
    repository_url: "https://github.com/Aditya0973/abyss-archive",
    website_url: "https://abyss.crafted.co",
    playstore_url: null,
    steam_url: null,
    featured_home: false,
    featured_projects: true,
    search_text: "abyss archive mechanical wiki database nextjs tailwind supabase",
    started_at: "2026-02-15T00:00:00Z",
    completed_at: "2026-03-30T00:00:00Z",
    created_at: "2026-02-15T00:00:00Z",
    updated_at: "2026-03-30T00:00:00Z"
  }
];

// Add joined category fields for simplicity
mockProjects.forEach(p => {
  p.category = mockCategories.find(c => c.id === p.category_id);
});

// 3. Mock Project Images
export const mockProjectImages: ProjectImage[] = [
  {
    id: "img-c1",
    project_id: "proj-commit",
    image_url: "/inspiration from the company logo and design/crafted website design.png",
    caption: "iOS main dashboard view with gestures",
    alt_text: "Commit habit tracker dashboard screenshot on iPhone",
    order_index: 0,
    created_at: "2026-04-15T00:00:00Z"
  },
  {
    id: "img-g1",
    project_id: "proj-champione",
    image_url: "/inspiration from the company logo and design/crafted banner(1).jpg",
    caption: "Fighting boss inside dungeon level 2",
    alt_text: "Champione pixel art boss battle screenshot",
    order_index: 0,
    created_at: "2026-07-01T00:00:00Z"
  }
];

// 4. Mock Project Versions
export const mockProjectVersions: ProjectVersion[] = [
  {
    id: "ver-c1",
    project_id: "proj-commit",
    version: "v1.2.0",
    changes_mdx: `
*   **Added Streak Freeze**: You can now skip a day without penalty.
*   **Improved Animations**: Fluid gesture bounce behaviors.
*   **Notification Engine**: Silent local reminders.
`,
    released_at: "2026-04-15T00:00:00Z"
  },
  {
    id: "ver-c2",
    project_id: "proj-commit",
    version: "v1.1.0",
    changes_mdx: `
*   **Added iCloud Sync**: Encrypted user settings replication.
*   **Performance Tweak**: CoreData indexing enhancements.
`,
    released_at: "2026-03-01T00:00:00Z"
  },
  {
    id: "ver-g1",
    project_id: "proj-champione",
    version: "Alpha 2",
    changes_mdx: `
*   **Added Steam Achievements**: Linked 12 custom challenges.
*   **Added Physics Solver**: Better wall-sliding friction.
`,
    released_at: "2026-06-20T00:00:00Z"
  }
];

// 5. Mock Tags
export const mockTags: Tag[] = [
  { id: "tag-1", name: "Swift", slug: "swift" },
  { id: "tag-2", name: "Game Dev", slug: "game-dev" },
  { id: "tag-3", name: "Godot", slug: "godot" },
  { id: "tag-4", name: "UI Design", slug: "ui-design" },
  { id: "tag-5", name: "Pixel Art", slug: "pixel-art" },
  { id: "tag-6", name: "Next.js", slug: "nextjs" }
];

// 6. Mock Journal Entries
export const mockJournalEntries: JournalEntry[] = [
  {
    id: "j-entry-1",
    project_id: "proj-champione",
    title: "Implementing Procedural Room Placements",
    slug: "implementing-procedural-room-placements",
    excerpt: "Diving into binary space partitioning (BSP) layouts to build dungeon outlines inside Godot.",
    content_mdx: `
# Implementing Procedural Room Placements

Today, I spent time working on the dungeon generator for **Champione**. I wanted to move away from purely random layouts and establish structured path flows.

## Binary Space Partitioning (BSP)
I implemented a simple BSP tree in C# inside Godot. It works by:
1.  Recursively splitting the canvas grid vertically or horizontally.
2.  Ensuring each node doesn't drop below a minimum width or height.
3.  Generating a room inside each leaf partition.

Here's the recursive dividing loop in C#:

\`\`\`csharp
void Divide(Node node) {
    if (node.Width < MinSize * 2 && node.Height < MinSize * 2) {
        return; // Stop dividing
    }
    
    // Choose split orientation based on ratios
    bool splitH = ChooseOrientation(node.Width, node.Height);
    int splitLocation = CalculateSplit(splitH, node.Size);
    
    node.Left = new Node(splitLocation);
    node.Right = new Node(node.Size - splitLocation);
    
    Divide(node.Left);
    Divide(node.Right);
}
\`\`\`

## Results
The rooms now place with beautiful organic pathways connecting leaf pairs. Up next, I will be adjusting tile offsets.
`,
    cover_image: "/inspiration from the company logo and design/crafted banner(1).jpg",
    reading_time: 4,
    pinned: false,
    visibility: "public",
    search_text: "procedural generator dungeon bsp godot csharp game dev map",
    published: true,
    published_at: "2026-07-02T10:00:00Z",
    created_at: "2026-07-02T10:00:00Z",
    updated_at: "2026-07-02T10:00:00Z"
  },
  {
    id: "j-entry-2",
    project_id: "proj-champione",
    title: "Handling Steam Cloud Synchronization Hooks",
    slug: "handling-steam-cloud-sync-hooks",
    excerpt: "Integrating Steamworks SDK with Godot to sync save states across gaming platforms.",
    content_mdx: `
# Handling Steam Cloud Synchronization Hooks

Adding Steam Cloud support to **Champione** required handling file lock notifications securely. I integrated the Steamworks.NET library to hook into file write callbacks.

We verify conflicts by inspecting hashes prior to overriding disk logs. Works perfectly in initial tests!
`,
    cover_image: null,
    reading_time: 2,
    pinned: true,
    visibility: "public",
    search_text: "steamworks cloud sync godot game dev publishing integrations",
    published: true,
    published_at: "2026-06-25T11:00:00Z",
    created_at: "2026-06-25T11:00:00Z",
    updated_at: "2026-06-25T11:00:00Z"
  },
  {
    id: "j-entry-3",
    project_id: "proj-commit",
    title: "Optimizing iOS CoreData Fetch Requests",
    slug: "optimizing-ios-coredata-fetch-requests",
    excerpt: "How I reduced habit loading times by 60% using batch requests and custom indices.",
    content_mdx: `
# Optimizing iOS CoreData Fetch Requests

As the number of daily habits in **Commit** grows, fetching history logs can block SwiftUI rendering threads. I fixed this by applying custom index mappings on habit IDs and dates.

Using fetch limits of 30 days kept memory clean. Load times dropped from 150ms to less than 15ms!
`,
    cover_image: "/inspiration from the company logo and design/crafted website design.png",
    reading_time: 3,
    pinned: false,
    visibility: "public",
    search_text: "coredata swift swiftui ios app performance load times database",
    published: true,
    published_at: "2026-04-01T09:30:00Z",
    created_at: "2026-04-01T09:30:00Z",
    updated_at: "2026-04-01T09:30:00Z"
  }
];

// Add joined project fields
mockJournalEntries.forEach(j => {
  j.project = mockProjects.find(p => p.id === j.project_id);
});

// 7. Mock Timeline Events
export const mockTimelineEvents: TimelineEvent[] = [
  {
    id: "time-1",
    title: "Procedural Room Placement Implemented",
    description: "Added a cellular automata and BSP solver to create layouts inside Champione.",
    date: "2026-07-02",
    project_id: "proj-champione",
    type: "milestone",
    reference_slug: "implementing-procedural-room-placements",
    reference_type: "journal",
    created_at: "2026-07-02T10:00:00Z"
  },
  {
    id: "time-2",
    title: "Steamworks Cloud Sync Setup",
    description: "Successfully configured Steamworks save sync handlers for Champione.",
    date: "2026-06-25",
    project_id: "proj-champione",
    type: "commit",
    reference_slug: "handling-steam-cloud-sync-hooks",
    reference_type: "journal",
    created_at: "2026-06-25T11:00:00Z"
  },
  {
    id: "time-3",
    title: "Released Commit Version 1.2",
    description: "Launched the streak freeze updates and custom reminder alerts on the App Store.",
    date: "2026-04-15",
    project_id: "proj-commit",
    type: "release",
    reference_slug: "commit",
    reference_type: "project",
    created_at: "2026-04-15T00:00:00Z"
  },
  {
    id: "time-4",
    title: "CoreData Indexes Optimized",
    description: "Sped up habit queries by adding indexing predicates to dates.",
    date: "2026-04-01",
    project_id: "proj-commit",
    type: "commit",
    reference_slug: "optimizing-ios-coredata-fetch-requests",
    reference_type: "journal",
    created_at: "2026-04-01T09:30:00Z"
  },
  {
    id: "time-5",
    title: "Launched Abyss Archive Catalog",
    description: "Public release of clockwork mechanical design vault catalog.",
    date: "2026-03-30",
    project_id: "proj-abyss",
    type: "release",
    reference_slug: "abyss-archive",
    reference_type: "project",
    created_at: "2026-03-30T00:00:00Z"
  }
];

// Add joined project fields
mockTimelineEvents.forEach(t => {
  if (t.project_id) {
    t.project = mockProjects.find(p => p.id === t.project_id);
  }
});

// 8. Mock Now Items
export const mockNowItems: NowItem[] = [
  {
    id: "now-1",
    category: "Currently Building",
    title: "Champione",
    description: "Perfecting room transitions and balancing early enemy layouts in Godot.",
    sort_order: 1,
    created_at: "2026-07-02T12:00:00Z"
  },
  {
    id: "now-2",
    category: "Currently Building",
    title: "Crafted Co.",
    description: "Developing my digital hub with Next.js App Router and Tailwind CSS v4.",
    sort_order: 2,
    created_at: "2026-07-02T12:00:00Z"
  },
  {
    id: "now-3",
    category: "Currently Reading",
    title: "Designing Design by Kenya Hara",
    description: "Exploring spatial minimalism, white boundaries, and void aesthetics.",
    sort_order: 3,
    created_at: "2026-07-02T12:00:00Z"
  },
  {
    id: "now-4",
    category: "Currently Playing",
    title: "Hollow Knight & Animal Well",
    description: "Studying environmental visual cues and audio layout loops.",
    sort_order: 4,
    created_at: "2026-07-02T12:00:00Z"
  },
  {
    id: "now-5",
    category: "Learning",
    title: "Rust & WebAssembly",
    description: "Investigating compiles for browser canvas solvers.",
    sort_order: 5,
    created_at: "2026-07-02T12:00:00Z"
  }
];
