import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border bg-background",
        brand:
          "border-transparent bg-gradient-to-r from-brand-start via-brand-mid to-brand-end text-white",
        glow: "border-brand-start/30 bg-brand-start/5 text-brand-start dark:text-brand-start/90 shadow-[0_0_10px_rgba(67,63,169,0.1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

function Tag({ className, name, ...props }: TagProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "bg-muted/10 text-muted-foreground hover:text-foreground dark:hover:bg-muted/30 transition-colors border-border/80",
        className
      )}
      {...props}
    >
      #{name}
    </Badge>
  );
}

export interface TechBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  tech: string;
}

function TechBadge({ className, tech, ...props }: TechBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "font-mono text-[10px] tracking-wide bg-secondary/50 text-foreground border-border/50",
        className
      )}
      {...props}
    >
      {tech}
    </Badge>
  );
}

export { Badge, Tag, TechBadge, badgeVariants };
