import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center py-24 bg-background transition-colors duration-300">
      <Container className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tight text-brand-start">
            404
          </h1>
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            Vault Path Unmapped
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The link you followed does not exist within the Crafted Co archive. It may have moved or was never registered.
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "gradient" }), "inline-flex items-center gap-1.5")}
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Workspace
          </Link>
        </div>
      </Container>
    </div>
  );
}
