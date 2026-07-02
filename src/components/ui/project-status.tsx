import * as React from "react";
import { cn } from "@/lib/utils";

export type ProjectStatusType = "completed" | "in_progress" | "paused";

interface ProjectStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status: ProjectStatusType;
}

const statusConfig = {
  completed: {
    label: "Completed",
    dotClass: "bg-emerald-500 shadow-emerald-500/20",
    pulse: false,
    textClass: "text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  in_progress: {
    label: "In Progress",
    dotClass: "bg-amber-500 shadow-amber-500/20",
    pulse: true,
    textClass: "text-amber-700 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  paused: {
    label: "Paused",
    dotClass: "bg-slate-400 shadow-slate-400/20",
    pulse: false,
    textClass: "text-slate-700 dark:text-slate-400 bg-slate-500/10 border-slate-500/20",
  },
};

export function ProjectStatus({ status, className, ...props }: ProjectStatusProps) {
  const config = statusConfig[status];

  if (!config) return null;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] tracking-wide font-mono uppercase font-semibold select-none",
        config.textClass,
        className
      )}
      {...props}
    >
      <span className="relative flex h-1.5 w-1.5">
        {config.pulse && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-400" />
        )}
        <span className={cn("relative inline-flex rounded-full h-1.5 w-1.5 shadow-[0_0_8px]", config.dotClass)} />
      </span>
      <span>{config.label}</span>
    </div>
  );
}
