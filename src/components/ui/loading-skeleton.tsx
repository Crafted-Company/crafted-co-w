import * as React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded bg-muted/60 dark:bg-muted/15",
        className
      )}
      {...props}
    />
  );
}

export function ProjectSkeleton() {
  return (
    <div className="rounded-2xl border border-border/40 p-5 space-y-4">
      <Skeleton className="aspect-video w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-5 w-12 rounded-full" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
    </div>
  );
}

export function JournalSkeleton() {
  return (
    <div className="rounded-2xl border border-border/40 p-6 flex flex-col md:flex-row gap-6">
      <Skeleton className="w-full md:w-48 h-48 md:h-32 rounded-xl shrink-0" />
      <div className="flex-grow space-y-3 justify-center flex flex-col">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
