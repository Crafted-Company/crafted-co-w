import * as React from "react";
import { Info } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <Card
      className="p-10 text-center flex flex-col items-center justify-center border-dashed border-border/60 bg-muted/5 dark:bg-muted/2% rounded-2xl max-w-lg mx-auto"
      hoverable={false}
    >
      <div className="w-10 h-10 rounded-full bg-secondary/80 dark:bg-secondary/40 flex items-center justify-center mb-4 text-muted-foreground">
        <Info className="w-5 h-5" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      {action && <div className="shrink-0">{action}</div>}
    </Card>
  );
}
export default EmptyState;
