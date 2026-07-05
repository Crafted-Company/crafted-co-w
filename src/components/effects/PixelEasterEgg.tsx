"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

const BRAND_COLORS = ["#433fa9", "#6864f6", "#7cff6b", "#60a5fa", "#3b82f6"];

export function PixelEasterEgg() {
  const [clickCount, setClickCount] = React.useState(0);
  const [particles, setParticles] = React.useState<Particle[]>([]);
  const lastClickTime = React.useRef(0);

  // Play retro chiptune block crunch sound using Web Audio API
  const playRetroSound = React.useCallback((count: number) => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const baseFreq = 220 + count * 80;

      // Triangle Sweep (Base tone)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.18);
      gain1.gain.setValueAtTime(0.12, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);

      // Square Sweep (Retro crunch)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "square";
      osc2.frequency.setValueAtTime(baseFreq * 1.5, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.08);
      gain2.gain.setValueAtTime(0.06, ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      // Trigger start/stop
      osc1.start();
      osc1.stop(ctx.currentTime + 0.18);
      osc2.start();
      osc2.stop(ctx.currentTime + 0.08);
    } catch (e) {
      console.warn("Web Audio API not allowed or supported yet.", e);
    }
  }, []);

  const handleClick = React.useCallback((e: MouseEvent) => {
    const now = Date.now();
    // Throttle double clicks if too fast, but allow regular clicking
    if (now - lastClickTime.current < 80) return;
    lastClickTime.current = now;

    setClickCount((prev) => {
      const nextCount = prev + 1;
      
      // Play sound
      const soundIndex = nextCount > 5 ? nextCount - 5 : nextCount;
      playRetroSound(soundIndex);

      // Spawn particles at click coordinates
      const spawnX = e.clientX;
      const spawnY = e.clientY;

      // Particle count increases with clicks!
      const burstSize = 8 + (nextCount % 5) * 5; 
      const newParticles: Particle[] = [];

      for (let i = 0; i < burstSize; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 6;
        newParticles.push({
          id: Math.random(),
          x: spawnX,
          y: spawnY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 6 + Math.floor(Math.random() * 8), // square pixel sizes
          color: BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)],
        });
      }

      setParticles((curr) => [...curr, ...newParticles]);

      // Handle document pixelation class toggle
      if (nextCount === 5) {
        document.documentElement.classList.add("pixelated-easter-egg");
      } else if (nextCount === 10) {
        document.documentElement.classList.remove("pixelated-easter-egg");
        return 0; // reset
      }

      return nextCount;
    });
  }, [playRetroSound]);

  // Hook up event listener to the logo shape SVG
  React.useEffect(() => {
    const trigger = document.getElementById("easter-egg-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", handleClick);
    return () => {
      trigger.removeEventListener("click", handleClick);
      // Clean up global class on unmount
      document.documentElement.classList.remove("pixelated-easter-egg");
    };
  }, [handleClick]);

  // Cleanup old particles from memory
  React.useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles([]);
    }, 1200);
    return () => clearTimeout(timer);
  }, [particles]);

  return (
    <>
      {/* Self-contained styling injected dynamically. Deleting this component removes these styles automatically. */}
      <style jsx global>{`
        .pixelated-easter-egg {
          image-rendering: pixelated !important;
          image-rendering: crisp-edges !important;
          font-family: 'Courier New', Courier, monospace !important;
        }
        .pixelated-easter-egg::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999999;
          background: 
            linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%),
            linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
          background-size: 100% 4px, 6px 100%;
          opacity: 0.85;
        }
        .pixelated-easter-egg h1, 
        .pixelated-easter-egg h2, 
        .pixelated-easter-egg h3, 
        .pixelated-easter-egg h4, 
        .pixelated-easter-egg p, 
        .pixelated-easter-egg span, 
        .pixelated-easter-egg a,
        .pixelated-easter-egg button {
          text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
          border-radius: 0px !important; /* Retro blocky styling override */
        }
      `}</style>

      {/* Render Particles */}
      <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ 
                x: p.x, 
                y: p.y, 
                opacity: 1, 
                scale: 1,
                rotate: 0
              }}
              animate={{ 
                x: p.x + p.vx * 30, 
                y: p.y + p.vy * 30 + 100, // drag down like gravity
                opacity: 0,
                scale: 0.4,
                rotate: Math.random() * 360
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                position: "absolute",
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 8px ${p.color}aa`,
                borderRadius: "0px", // square pixel shape
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
