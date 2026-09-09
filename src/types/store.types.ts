export type PlatformType = "android" | "windows" | "linux" | "web";

export interface PlatformDownload {
  platform: PlatformType;
  label: string;
  version?: string;
  size?: string;
  downloadUrl?: string; // empty/placeholder when not yet published
  isAvailable: boolean;
}

export type StoreCategory = "all" | "suite" | "apps" | "games" | "tools" | "web";

export interface StoreItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: StoreCategory;
  isSuite?: boolean; // Part of Crafted Suite
  status: "available" | "in-development" | "coming-soon";
  version: string;
  releaseDate?: string;
  githubUrl?: string;
  accentColor: string;
  iconName: string; // lucide icon identifier
  screenshots: {
    id: string;
    caption: string;
    aspectRatio?: "video" | "portrait";
    placeholderColor?: string;
  }[];
  platforms: PlatformDownload[];
  features: string[];
  techStack: string[];
}
