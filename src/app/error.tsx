"use client";

import * as React from "react";
import { RotateCcw, Home } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log error to console
    console.error("Layout Error:", error);
  }, [error]);

  return (
    <div className="flex-grow flex items-center justify-center py-24 bg-background transition-colors duration-300">
      <Container className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-destructive">
            Error
          </h1>
          <h2 className="font-serif text-lg md:text-xl font-semibold text-foreground">
            System Execution Disrupted
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            An unexpected error occurred while rendering this workspace view. The compiler logs have captured the event.
          </p>
        </div>
        <div className="pt-4 flex justify-center gap-3">
          <Button onClick={() => reset()} variant="outline" className="flex items-center gap-1.5">
            <RotateCcw className="w-4 h-4" />
            Reload Page
          </Button>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "gradient" }), "inline-flex items-center gap-1.5")}
          >
            <Home className="w-4 h-4" />
            Go to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
