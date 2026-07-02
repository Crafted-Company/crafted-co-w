"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home", exact: true },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/now", label: "Now" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-md transition-colors duration-300">
      <Container className="flex h-14 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            viewBox="0 0 91 96"
            className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500"
          >
            <defs>
              <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--brand-0)" />
                <stop offset="50%" stopColor="var(--brand-50)" />
                <stop offset="100%" stopColor="var(--brand-100)" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#navLogoGrad)"
              d="M12.05 46.6653C20.85 41.0653 20.6 28.1032 21.05 21.6653C22.0499 16.1653 28.0502 6.66529 40.5502 5.66529C50.5502 4.86529 62.1 11.6032 65.5502 15.6653C73.5502 24.9986 85.9502 48.4653 71.5502 67.6653C57.1502 86.8653 36.5502 82.6653 28.0502 78.1653L10.05 64.6653C7.05002 60.9986 3.25002 52.2653 12.05 46.6653Z" 
            />
          </svg>
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            Crafted Co.
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm font-medium transition-colors hover:text-foreground text-muted-foreground"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavLink"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-start to-brand-mid"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={isActive ? "text-foreground font-semibold" : ""}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-14 left-0 w-full bg-background border-b border-border shadow-lg p-4 flex flex-col gap-3"
        >
          {navLinks.map((link) => {
            const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}
export default Navbar;
