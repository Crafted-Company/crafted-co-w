"use client";

import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <div className="relative w-16 h-16">
        {/* Soft back-glow scaling pulse */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-brand-start via-brand-mid to-brand-end opacity-20 blur-md rounded-full"
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Custom shape spinner */}
        <motion.svg
          viewBox="0 0 91 96"
          className="w-16 h-16 relative z-10"
          animate={{
            rotate: 360,
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <defs>
            <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--brand-0)" />
              <stop offset="50%" stopColor="var(--brand-50)" />
              <stop offset="100%" stopColor="var(--brand-100)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#loaderGrad)"
            d="M12.05 46.6653C20.85 41.0653 20.6 28.1032 21.05 21.6653C22.0499 16.1653 28.0502 6.66529 40.5502 5.66529C50.5502 4.86529 62.1 11.6032 65.5502 15.6653C73.5502 24.9986 85.9502 48.4653 71.5502 67.6653C57.1502 86.8653 36.5502 82.6653 28.0502 78.1653L10.05 64.6653C7.05002 60.9986 3.25002 52.2653 12.05 46.6653Z"
          />
        </motion.svg>
      </div>
      <span className="font-mono text-[10px] tracking-widest text-brand-start uppercase animate-pulse">
        Initializing Workspace...
      </span>
    </div>
  );
}
export default Loader;
