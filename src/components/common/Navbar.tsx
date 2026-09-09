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

          {/* Prominent Crafted Store Button with External Shining Boundary Star */}
          <div className="relative inline-flex items-center">
            {/* External 4-Point Star on the boundary (zooming in & out / shining) */}
            <motion.span
              animate={{ scale: [0.9, 1.35, 0.9], rotate: [0, 20, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -top-1.5 -right-1.5 z-20 pointer-events-none text-brand-start filter drop-shadow-[0_0_6px_rgba(104,100,246,0.7)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M12 3 Q12 12 21 12 Q12 12 12 21 Q12 12 3 12 Q12 12 12 3 Z" />
              </svg>
            </motion.span>

            <Link
              href="/store"
              className={`group relative inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 border backdrop-blur-md overflow-hidden ${
                pathname.startsWith("/store")
                  ? "border-brand-start bg-brand-start/15 text-brand-start shadow-[0_0_12px_rgba(104,100,246,0.3)] dark:border-white dark:bg-white/15 dark:text-white dark:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                  : "border-brand-start/40 hover:border-brand-start bg-card/90 hover:bg-muted/70 text-foreground shadow-sm dark:border-white/30 dark:hover:border-white dark:bg-[#241E1E]/80 dark:hover:bg-[#2C2525] dark:text-white dark:shadow-[0_0_15px_rgba(104,100,246,0.2)]"
              }`}
            >
              {/* Slanted rectangle strips animation moving left-to-right and right-to-left quickly */}
              <motion.div
                animate={{ x: ["-25%", "25%", "-25%"] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-40"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 6px,
                    rgba(104, 100, 246, 0.45) 6px,
                    rgba(104, 100, 246, 0.45) 12px,
                    transparent 12px,
                    transparent 18px,
                    rgba(169, 69, 45, 0.4) 18px,
                    rgba(169, 69, 45, 0.4) 24px
                  )`,
                  width: "160%",
                  left: "-30%"
                }}
              />

              <span className="relative z-10 tracking-widest text-[11px] font-bold">
                Store
              </span>
            </Link>
          </div>
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
          className="md:hidden absolute top-14 left-0 w-full bg-background border-b border-border shadow-lg p-4 flex flex-col gap-2.5"
        >
          {navLinks.map((link) => {
            const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-secondary text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Prominent Store link in Mobile Drawer */}
          <Link
            href="/store"
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-sm font-mono uppercase tracking-wider font-semibold transition-all duration-300 ${
              pathname.startsWith("/store")
                ? "border-brand-start bg-brand-start/15 text-brand-start dark:border-white dark:bg-white/15 dark:text-white shadow-md"
                : "border-border bg-card text-foreground hover:bg-muted dark:border-white/30 dark:bg-gradient-to-r dark:from-brand-start/20 dark:via-brand-mid/20 dark:to-brand-end/20 dark:text-white"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-brand-start animate-pulse">
                <path d="M12 3 Q12 12 21 12 Q12 12 12 21 Q12 12 3 12 Q12 12 12 3 Z" />
              </svg>
              <span>Crafted Store</span>
            </div>
            <span className="text-[10px] font-mono text-brand-start bg-brand-start/10 px-2 py-0.5 rounded border border-brand-start/20">
              Apps & Suite
            </span>
          </Link>
        </motion.div>
      )}
    </header>
  );
}
export default Navbar;
