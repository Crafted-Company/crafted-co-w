import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-8 mt-auto bg-background transition-colors duration-300">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          <span>© {currentYear} Crafted Co.</span>
          <span className="mx-2">•</span>
          <span>Handcrafted with dedication.</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:aditya@example.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/Aditya0973"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Behance
          </a>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
