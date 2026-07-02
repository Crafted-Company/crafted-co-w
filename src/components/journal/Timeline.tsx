"use client";

import * as React from "react";
import Link from "next/link";
import { GitCommit, Rocket, Star, BookOpen, ArrowUpRight } from "lucide-react";
import { TimelineEvent } from "@/types/database.types";
import { cn } from "@/lib/utils";

interface TimelineProps {
  events: TimelineEvent[];
}

const typeConfigs = {
  commit: {
    icon: GitCommit,
    colorClass: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
  release: {
    icon: Rocket,
    colorClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  milestone: {
    icon: Star,
    colorClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
  learning: {
    icon: BookOpen,
    colorClass: "text-violet-500 bg-violet-500/10 border-violet-500/20",
  },
};

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative border-l border-border/60 dark:border-border/15 ml-4 pl-6 md:pl-8 space-y-8 py-2">
      {events.map((event) => {
        const config = typeConfigs[event.type] || typeConfigs.milestone;
        const Icon = config.icon;
        const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        // Determine destination link
        const hasLink = event.reference_slug && event.reference_type;
        const href =
          event.reference_type === "project"
            ? `/projects/${event.reference_slug}`
            : `/journal/${event.reference_slug}`;

        return (
          <div key={event.id} className="relative group">
            {/* Timeline Dot/Icon */}
            <span
              className={cn(
                "absolute -left-[35px] md:-left-[43px] top-1 flex items-center justify-center w-8 h-8 rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-110",
                config.colorClass
              )}
            >
              <Icon className="w-4 h-4" />
            </span>

            {/* Event Meta & Layout */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-wide text-muted-foreground">
                {formattedDate}
              </span>

              <div className="flex flex-wrap items-baseline gap-2">
                {hasLink ? (
                  <Link
                    href={href || "#"}
                    className="font-serif text-base md:text-lg font-semibold text-foreground hover:text-brand-start transition-colors flex items-center gap-1 group/link"
                  >
                    {event.title}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:translate-y-0 transition-all duration-300" />
                  </Link>
                ) : (
                  <h4 className="font-serif text-base md:text-lg font-semibold text-foreground">
                    {event.title}
                  </h4>
                )}

                {/* Attached Project indicator */}
                {event.project && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/60 border border-border/40 px-1.5 py-0.2 rounded bg-secondary/10">
                    {event.project.name}
                  </span>
                )}
              </div>

              {event.description && (
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Timeline;
