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

import { STORE_ITEMS } from "@/data/store-items";

function findMatchingStoreItem(slugOrName: string) {
  if (!slugOrName) return null;
  const normalized = slugOrName.toLowerCase().replace(/[^a-z0-9]/g, "");
  return STORE_ITEMS.find((item) => {
    const itemNormSlug = item.slug.toLowerCase().replace(/[^a-z0-9]/g, "");
    const itemNormId = item.id.toLowerCase().replace(/[^a-z0-9]/g, "");
    const itemNormName = item.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (
      itemNormSlug === normalized ||
      itemNormId === normalized ||
      itemNormName === normalized ||
      normalized.includes(itemNormId) ||
      itemNormId.includes(normalized)
    );
  });
}

function enrichProject(project: Project): Project {
  if (!project) return project;
  const storeItem = findMatchingStoreItem(project.slug || project.name);

  let updatedName = project.name;
  if (
    project.slug === "crafted-studio" ||
    project.slug === "crafted-studio-pc" ||
    project.slug === "crafted-studio-code" ||
    project.name.toLowerCase().trim() === "crafted studio"
  ) {
    updatedName = "Crafted Studio Code";
  }

  let coverImage = project.cover_image;
  if (!coverImage || coverImage.includes("placeholder")) {
    if (storeItem && storeItem.screenshots && storeItem.screenshots.length > 0) {
      coverImage = storeItem.screenshots[0].image || storeItem.iconImage || null;
    } else if (storeItem?.iconImage) {
      coverImage = storeItem.iconImage || null;
    }
  }

  let icon = project.icon;
  if (!icon && storeItem?.iconImage) {
    icon = storeItem.iconImage || null;
  }

  let shortDesc = project.short_description;
  if ((!shortDesc || shortDesc.length < 5) && storeItem) {
    shortDesc = storeItem.tagline || storeItem.description;
  }

  let techStack = project.tech_stack;
  if ((!techStack || techStack.length === 0) && storeItem?.techStack) {
    techStack = storeItem.techStack;
  }

  return {
    ...project,
    name: updatedName,
    cover_image: coverImage,
    icon,
    short_description: shortDesc,
    tech_stack: techStack,
  };
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
  return (data || []).map(enrichProject);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select("*, category:category_id(*)")
    .eq("slug", slug)
    .single();
  if (error || !data) {
    // If exact slug match failed, try alternate suffixes
    const altSlug = slug.endsWith("-pc") ? slug.replace("-pc", "") : `${slug}-pc`;
    const { data: altData } = await supabase
      .from("projects")
      .select("*, category:category_id(*)")
      .eq("slug", altSlug)
      .single();
    if (altData) return enrichProject(altData);
    console.error("Error fetching project by slug:", error);
    return null;
  }
  return enrichProject(data);
}

export async function getProjectImages(projectId: string, projectSlug: string): Promise<ProjectImage[]> {
  // 1. Try to list files in the projects/[slug] folder in the assets storage bucket
  try {
    // Try multiple possible casings of the folder name to be user-friendly
    const folderPaths = [
      `projects/${projectSlug}`,                                                           // diane
      `projects/${projectSlug.toLowerCase()}`,                                             // diane
      `projects/${projectSlug.charAt(0).toUpperCase() + projectSlug.slice(1).toLowerCase()}`,  // Diane
      `projects/${projectSlug.toUpperCase()}`,                                             // DIANE
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

  // 2. Try database table
  const { data, error } = await supabase
    .from("project_images")
    .select("*")
    .eq("project_id", projectId)
    .order("order_index", { ascending: true });
  if (!error && data && data.length > 0) {
    return data;
  }

  // 3. Fallback to local store item screenshots (e.g. craftnime, music-player, crafted-studio)
  const storeItem = findMatchingStoreItem(projectSlug);
  if (storeItem && storeItem.screenshots && storeItem.screenshots.length > 0) {
    return storeItem.screenshots
      .filter((s) => s.image)
      .map((s, index) => ({
        id: s.id || `${projectSlug}-${index}`,
        project_id: projectId,
        image_url: s.image!,
        alt_text: s.caption || `${storeItem.name} screenshot ${index + 1}`,
        caption: s.caption || null,
        created_at: new Date().toISOString(),
        order_index: index,
      }));
  }

  return [];
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
      `journal/${journalSlug.charAt(0).toUpperCase() + journalSlug.slice(1).toLowerCase()}`,
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
