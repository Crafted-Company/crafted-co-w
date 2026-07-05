"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hideCustom, setHideCustom] = useState(false); // Used to show native cursor on inputs

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for cursor follow (tuned for slightly faster responsiveness)
  const springConfig = { damping: 28, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Accessibility Checks: Hide on touch devices or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    // Hide native cursor globally
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Offset half of cursor size (32px / 2 = 16)
      mouseY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Detect hover on interactive elements
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest('[data-slot="button"]') ||
        target.getAttribute("data-hoverable") === "true";

      // Detect if hover is over text input or textarea
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      setIsHovered(!!isInteractive);
      setHideCustom(!!isInput);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (hideCustom) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference select-none hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full text-white"
        animate={{
          scale: isHovered ? 1.3 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Elegant 4-point sparkle path matching the Crafted Co logo style */}
        <path d="M12 3 Q12 12 21 12 Q12 12 12 21 Q12 12 3 12 Q12 12 12 3 Z" />
      </motion.svg>
    </motion.div>
  );
}
export default CustomCursor;
