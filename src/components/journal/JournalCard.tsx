"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { JournalEntry } from "@/types/database.types";
import { Card, CardContent } from "@/components/ui/card";

interface JournalCardProps {
  entry: JournalEntry;
}

export function JournalCard({ entry }: JournalCardProps) {
  const [imgSrc, setImgSrc] = React.useState<string | null>(entry.cover_image);
  const [imgError, setImgError] = React.useState(false);

  const formattedDate = new Date(entry.published_at).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <Link href={`/journal/${entry.slug}`} className="group block h-full">
      <Card
        className="overflow-hidden h-full flex flex-col md:flex-row border-border/80 dark:border-border/40 group-hover:border-brand-start/40 dark:group-hover:border-brand-start/30 transition-all duration-300"
        hoverable
      >
        {/* Post Image Preview (if present) */}
        {entry.cover_image && !imgError && (
          <div className="relative w-full md:w-48 h-48 md:h-auto overflow-hidden bg-muted dark:bg-muted/10 shrink-0">
            <Image
              src={imgSrc || ""}
              alt={entry.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 200px"
              onError={() => {
                setImgError(true);
              }}
            />
          </div>
        )}

        {/* Content */}
        <CardContent className="p-6 flex-grow flex flex-col justify-between">
          <div className="space-y-3">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono">
              {entry.project && (
                <span className="font-semibold text-brand-start uppercase tracking-wider">
                  {entry.project.name}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
              {entry.reading_time && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {entry.reading_time} min read
                </span>
              )}
            </div>

            {/* Title & Excerpt */}
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-brand-start transition-colors duration-300 flex items-center gap-1.5">
                {entry.title}
              </h3>
              {entry.excerpt && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {entry.excerpt}
                </p>
              )}
            </div>
          </div>

          {/* Read Action indicator */}
          <div className="mt-4 pt-4 border-t border-border/40 dark:border-border/10 flex items-center justify-between text-xs font-semibold text-muted-foreground group-hover:text-brand-start transition-colors">
            <span>Read Log Entry</span>
            <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
export default JournalCard;
