import * as React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { JournalEntry } from "@/types/database.types";

interface JournalHeroProps {
  entry: JournalEntry;
}

export function JournalHero({ entry }: JournalHeroProps) {
  const formattedDate = new Date(entry.published_at).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="space-y-6 py-8 border-b border-border/40 dark:border-border/10 mb-8">
      {/* Back to project link */}
      {entry.project && (
        <Link
          href={`/projects/${entry.project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-brand-start transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to {entry.project.name}
        </Link>
      )}

      {/* Title */}
      <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-4xl">
        {entry.title}
      </h1>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-muted-foreground pt-2">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
        {entry.reading_time && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{entry.reading_time} min read</span>
          </div>
        )}
        {entry.project && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-semibold text-brand-start px-1.5 py-0.5 rounded border border-brand-start/20 bg-brand-start/5">
              {entry.project.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
export default JournalHero;
