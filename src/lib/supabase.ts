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

export async function getProjectImages(projectId: string, projectSlug: string): Promise<ProjectImage[]> {
  // 1. Try to list files in the projects/[slug] folder in the assets storage bucket
  try {
    // Try multiple possible casings of the folder name to be user-friendly (slug, lowercase, uppercase)
    const folderPaths = [
      `projects/${projectSlug}`,
      `projects/${projectSlug.toLowerCase()}`,
      `projects/${projectSlug.toUpperCase()}`,
    ];

    for (const path of folderPaths) {
      const { data: files, error: storageError } = await supabase.storage
        .from("assets")
        .list(path);

      if (!storageError && files && files.length > 0) {
        const imageFiles = files.filter(f => f.name !== ".emptyFolderPlaceholder");
        if (imageFiles.length > 0) {
          // Sort alphabetically so files like 1.png, 2.png show up in order
          imageFiles.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

          return imageFiles.map((file, index) => {
            const { data: { publicUrl } } = supabase.storage
              .from("assets")
              .getPublicUrl(`${path}/${file.name}`);

            return {
              id: file.id || `${projectSlug}-${index}`,
              project_id: projectId,
              image_url: publicUrl,
              alt_text: `${projectSlug} screenshot ${index + 1}`,
              caption: null,
              created_at: file.created_at || new Date().toISOString(),
              order_index: index,
            };
          });
        }
      }
    }
  } catch (err) {
    console.error("Error listing storage images:", err);
  }

  // 2. Fallback to database table if no storage folder/files exist
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
    .order("released_at", { ascending: false })
    .order("version", { ascending: false });
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

export async function getJournalImages(journalEntryId: string, journalSlug: string): Promise<any[]> {
  // 1. Try to list files in the journal/[slug] folder in the assets storage bucket
  try {
    const folderPaths = [
      `journal/${journalSlug}`,
      `journal/${journalSlug.toLowerCase()}`,
      `journal/${journalSlug.toUpperCase()}`,
    ];

    for (const path of folderPaths) {
      const { data: files, error: storageError } = await supabase.storage
        .from("assets")
        .list(path);

      if (!storageError && files && files.length > 0) {
        const imageFiles = files.filter(f => f.name !== ".emptyFolderPlaceholder");
        if (imageFiles.length > 0) {
          // Sort alphabetically so files like 1.png, 2.png show up in order
          imageFiles.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

          return imageFiles.map((file, index) => {
            const { data: { publicUrl } } = supabase.storage
              .from("assets")
              .getPublicUrl(`${path}/${file.name}`);

            return {
              id: file.id || `${journalSlug}-${index}`,
              journal_entry_id: journalEntryId,
              image_url: publicUrl,
              alt_text: `${journalSlug} screenshot ${index + 1}`,
              caption: null,
              created_at: file.created_at || new Date().toISOString(),
              order_index: index,
            };
          });
        }
      }
    }
  } catch (err) {
    console.error("Error listing storage journal images:", err);
  }

  // 2. Fallback to database
  const { data, error } = await supabase
    .from("journal_images")
    .select("*")
    .eq("journal_entry_id", journalEntryId)
    .order("order_index", { ascending: true });
  if (error) {
    console.error("Error fetching journal images:", error);
    return [];
  }
  return data || [];
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
