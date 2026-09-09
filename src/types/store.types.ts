export type PlatformType = "android" | "windows" | "linux" | "web";

export interface PlatformDownload {
  platform: PlatformType;
  label: string;
  version?: string;
  size?: string;
  downloadUrl?: string;
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
  isSuite?: boolean;
  status: "available" | "in-development" | "coming-soon";
  version: string;
  releaseDate?: string;
  githubUrl?: string;
  accentColor: string;
  iconName: string;
  iconImage?: string; // Optional direct URL to app icon
  rating?: string;
  installs?: string;
  screenshots: {
    id: string;
    caption: string;
    placeholderColor?: string;
  }[];
  platforms: PlatformDownload[];
  features: string[];
  techStack: string[];
}
