# Crafted Co. — Supabase Content Management Guide

This guide explains how to add, edit, and format projects, versions, gallery images, journal entries, and timeline milestones inside your Supabase dashboard. It also details the ideal image resolutions and aspect ratios to prevent layouts from cutting off.

---

## 1. Image Size & Resolution Guidelines

To keep page load speeds fast and prevent images from cropping awkwardly, use these specifications before uploading to Supabase Storage:

| Image Type | Aspect Ratio | Recommended Resolution | Format | Tips |
| :--- | :--- | :--- | :--- | :--- |
| **Project Cover Image** | **16:9** (Widescreen) | **1200 x 675 px** (or `1920x1080`) | `.webp` or `.jpg` | Center the key focus. The card overlays crop edges slightly. |
| **Journal Post Header** | **16:9** (Widescreen) | **1200 x 675 px** | `.webp` or `.jpg` | Keep background clean for title overlays. |
| **Project Icon** | **1:1** (Square) | **256 x 256 px** (or `512x512`) | `.png` or `.svg` | Transparent backgrounds look most premium. |
| **Gallery screenshots** | **16:9** or **9:16** | Match device dimensions | `.webp` or `.png` | Keep aspect ratios consistent within a single project gallery. |

> [!TIP]
> Always compress images using tools like [Squoosh](https://squoosh.app) or TinyPNG. Keep file sizes **under 500KB** (and definitely under 1MB) to ensure the loader animation completes instantly for visitors.

---

## 2. Step-by-Step Dashboard Instructions

### A. Uploading Assets
1. Go to **Storage** in the Supabase sidebar.
2. Select your public **`assets`** bucket.
3. Upload images into folders to stay organized (e.g., `projects/` or `journal/`).
4. Click the three dots `...` next to the image $\rightarrow$ click **Copy URL** to get the link.

### B. Adding a New Project
1. Open **Table Editor** $\rightarrow$ select the **`projects`** table.
2. Click **Insert row** (green button).
3. Fill in the form:
   * **`name`**: Project Title (e.g., `Abyss Archive`)
   * **`slug`**: URL-friendly string (e.g., `abyss-archive`)
   * **`category_id`**: Choose category from the dropdown menu (e.g., `games`, `apps`).
   * **`cover_image`**: Paste the copied storage URL.
   * **`color`**: Hex brand color accent (e.g., `#6E6AF6`).
   * **`tech_stack`**: Double-click to add string items (e.g., `['Unity', 'C#']`).
   * **`status`**: Must be `'completed'`, `'in_progress'`, or `'paused'`.
   * **`progress`**: Completion percentage (`0` to `100`).
   * **`featured_home`**: Set to `true` to display on the home screen.
   * **`full_description_mdx`**: Paste your case study text. Support lists (`*`), headers (`##`), bold (`**`), and code blocks (`` ` ``).

### C. Adding a Version History Log
1. Select the **`project_versions`** table $\rightarrow$ click **Insert row**.
2. **`project_id`**: Select the project name from the dropdown.
3. **`version`**: E.g. `v1.0.0` or `Beta Release`.
4. **`changes_mdx`**: Bullet points of what changed (e.g. `* Fixed notification alarms.`).
5. **`released_at`**: Set release date.

### D. Adding Gallery Slideshow Images
1. Select the **`project_images`** table $\rightarrow$ click **Insert row**.
2. **`project_id`**: Select the project from the dropdown.
3. **`image_url`**: Paste the copied storage URL.
4. **`alt_text`**: Describe the screenshot (essential for SEO/Accessibility).
5. **`order_index`**: Set order (`0`, `1`, `2`, etc.) to control slides.

### E. Adding Journal Logs (Dev Diaries)
1. Select the **`journal_entries`** table $\rightarrow$ click **Insert row**.
2. **`title`**: Post headline (e.g., `Optimizing DB Queries`).
3. **`slug`**: E.g. `optimizing-db-queries` (routes to `/journal/optimizing-db-queries`).
4. **`content_mdx`**: Write markdown diary body.
5. **`published`**: Toggle to `true` (un-published posts won't appear on the list).
6. **`project_id`**: Optional (link to show post in the project detail sidebar).

---

## 3. Inline Markdown Cheatsheet

Use these syntax styles directly in your description and log editors:

```markdown
## Section Title
This is **bold text** to highlight frameworks like **React**.
Here is a list of modules:
*   `Provider` — state container.
*   `SharedPrefs` — local cache solver.
```
