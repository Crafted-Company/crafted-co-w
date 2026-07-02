import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, History, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/animations/PageTransition";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ImageGallery } from "@/components/projects/ImageGallery";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";
import {
  getProjectBySlug,
  getProjectImages,
  getProjectVersions,
  getJournalEntries,
} from "@/lib/supabase";

export const dynamic = "force-dynamic";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedImages = await getProjectImages(project.id);
  const relatedVersions = await getProjectVersions(project.id);
  const allJournal = await getJournalEntries();
  const relatedJournal = allJournal.filter((j) => j.project_id === project.id);

  return (
    <PageTransition>
      <div className="py-12 flex-grow">
        <Container className="space-y-8">
          {/* Back Nav */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-brand-start transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Projects
          </Link>

          {/* Project Details Hero */}
          <ProjectHero project={project} />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main content column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Markdown Content */}
              {project.full_description_mdx && (
                <div className="prose dark:prose-invert max-w-none">
                  <MarkdownRenderer content={project.full_description_mdx} />
                </div>
              )}

              {/* Gallery */}
              <ImageGallery images={relatedImages} />
            </div>

            {/* Sidebar column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Version History */}
              {relatedVersions.length > 0 && (
                <div className="rounded-2xl border border-border/40 p-6 bg-card/30 space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-border/40">
                    <History className="w-4 h-4 text-brand-start" />
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      Version History
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {relatedVersions.map((version) => {
                      const releaseDate = new Date(version.released_at).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      );
                      return (
                        <div key={version.id} className="space-y-1.5 text-sm">
                          <div className="flex justify-between items-baseline gap-2">
                            <span className="font-mono font-semibold text-foreground">
                              {version.version}
                            </span>
                            <span className="text-[10px] text-muted-foreground font-mono">
                              {releaseDate}
                            </span>
                          </div>
                          <div className="text-muted-foreground pl-2 border-l border-border/60">
                            <MarkdownRenderer content={version.changes_mdx} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Related Journal Logs */}
              {relatedJournal.length > 0 && (
                <div className="rounded-2xl border border-border/40 p-6 bg-card/30 space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-border/40">
                    <FileText className="w-4 h-4 text-brand-start" />
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      Development Logs
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {relatedJournal.map((entry) => {
                      const entryDate = new Date(entry.published_at).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                        }
                      );
                      return (
                        <li key={entry.id} className="group/item">
                          <Link
                            href={`/journal/${entry.slug}`}
                            className="block space-y-0.5"
                          >
                            <span className="text-[10px] font-mono text-muted-foreground">
                              {entryDate}
                            </span>
                            <h4 className="text-sm font-medium text-foreground group-hover/item:text-brand-start transition-colors duration-200 line-clamp-1">
                              {entry.title}
                            </h4>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}
