import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/animations/PageTransition";
import { JournalHero } from "@/components/journal/JournalHero";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";
import { getJournalEntryBySlug } from "@/lib/supabase";

export const dynamic = "force-dynamic";

interface JournalEntryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function JournalEntryPage({ params }: JournalEntryPageProps) {
  const { slug } = await params;
  const entry = await getJournalEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="py-12 flex-grow">
        <Container className="space-y-8">
          {/* Back Nav */}
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-brand-start transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Journal
          </Link>

          {/* Post Content Wrapper */}
          <article className="max-w-3xl mx-auto space-y-8">
            {/* Journal Header Hero */}
            <JournalHero entry={entry} />

            {/* Featured Image Banner */}
            {entry.cover_image && (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-muted">
                <Image
                  src={entry.cover_image}
                  alt={entry.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            )}

            {/* Markdown Log Body */}
            <div className="prose dark:prose-invert max-w-none pt-4">
              <MarkdownRenderer content={entry.content_mdx} />
            </div>
          </article>
        </Container>
      </div>
    </PageTransition>
  );
}
