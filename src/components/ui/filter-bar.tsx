"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  options: FilterOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export function FilterBar({ options, selectedValue, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 pb-1 border-b border-border/10">
      {options.map((option) => {
        const isActive = selectedValue === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className="relative px-3.5 py-1 text-xs font-medium font-mono uppercase tracking-wider rounded-lg outline-none select-none transition-colors duration-200 text-muted-foreground hover:text-foreground"
          >
            {isActive && (
              <motion.span
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-secondary/80 dark:bg-secondary/40 rounded-lg -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <span className={isActive ? "text-foreground font-semibold" : ""}>
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
export default FilterBar;
