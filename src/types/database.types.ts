export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  category_id: string | null;
  short_description: string;
  full_description_mdx: string | null;
  status: "completed" | "in_progress" | "paused";
  progress: number; // 0-100
  sort_order: number;
  cover_image: string | null;
  icon: string | null;
  color: string | null; // hex/hsl value
  tech_stack: string[];
  repository_url: string | null;
  website_url: string | null;
  playstore_url: string | null;
  steam_url: string | null;
  featured_home: boolean;
  featured_projects: boolean;
  search_text: string | null;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
  category?: Category; // Joined category
}

export interface ProjectImage {
  id: string;
  project_id: string;
  image_url: string;
  caption: string | null;
  alt_text: string;
  order_index: number;
  created_at: string;
}

export interface ProjectVersion {
  id: string;
  project_id: string;
  version: string;
  changes_mdx: string;
  released_at: string;
}

export interface JournalEntry {
  id: string;
  project_id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content_mdx: string;
  cover_image: string | null;
  reading_time: number | null;
  pinned: boolean;
  visibility: "public" | "private" | "unlisted";
  search_text: string | null;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  project?: Project; // Joined project
}

export interface JournalImage {
  id: string;
  journal_entry_id: string;
  image_url: string;
  caption: string | null;
  alt_text: string;
  order_index: number;
  created_at: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string | null;
  date: string; // YYYY-MM-DD
  project_id: string | null;
  type: "commit" | "release" | "milestone" | "learning";
  reference_slug: string | null;
  reference_type: "project" | "journal" | null;
  created_at: string;
  project?: Project; // Joined project
}

export interface NowItem {
  id: string;
  category: string; // e.g. "Currently Reading", "Currently Playing", "Learning"
  title: string;
  description: string | null;
  sort_order: number;
  created_at: string;
}
