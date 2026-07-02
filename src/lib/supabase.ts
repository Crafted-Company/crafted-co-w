import { createClient } from "@supabase/supabase-js";
import { Project, JournalEntry, TimelineEvent, NowItem, Category, ProjectVersion, ProjectImage } from "@/types/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*");
  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
  return data || [];
}

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*, category:category_id(*)")
    .order("sort_order", { ascending: true });
  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
  return data || [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select("*, category:category_id(*)")
    .eq("slug", slug)
    .single();
  if (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }
  return data;
}

export async function getProjectImages(projectId: string): Promise<ProjectImage[]> {
  const { data, error } = await supabase
    .from("project_images")
    .select("*")
    .eq("project_id", projectId)
    .order("order_index", { ascending: true });
  if (error) {
    console.error("Error fetching project images:", error);
    return [];
  }
  return data || [];
}

export async function getProjectVersions(projectId: string): Promise<ProjectVersion[]> {
  const { data, error } = await supabase
    .from("project_versions")
    .select("*")
    .eq("project_id", projectId)
    .order("released_at", { ascending: false });
  if (error) {
    console.error("Error fetching project versions:", error);
    return [];
  }
  return data || [];
}

export async function getJournalEntries(): Promise<JournalEntry[]> {
  const { data, error } = await supabase
    .from("journal_entries")
    .select("*, project:project_id(*)")
    .eq("published", true)
    .order("pinned", { ascending: false })
    .order("published_at", { ascending: false });
  if (error) {
    console.error("Error fetching journal entries:", error);
    return [];
  }
  return data || [];
}

export async function getJournalEntryBySlug(slug: string): Promise<JournalEntry | null> {
  const { data, error } = await supabase
    .from("journal_entries")
    .select("*, project:project_id(*)")
    .eq("slug", slug)
    .single();
  if (error) {
    console.error("Error fetching journal entry by slug:", error);
    return null;
  }
  return data;
}

export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  const { data, error } = await supabase
    .from("timeline")
    .select("*, project:project_id(*)")
    .order("date", { ascending: false });
  if (error) {
    console.error("Error fetching timeline events:", error);
    return [];
  }
  return data || [];
}

export async function getNowItems(): Promise<NowItem[]> {
  const { data, error } = await supabase
    .from("now_items")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) {
    console.error("Error fetching now items:", error);
    return [];
  }
  return data || [];
}
