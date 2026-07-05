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

const BRAND_COLORS = [
  "#433fa9", // deep purple
  "#6864f6", // light purple
  "#a9452d", // rust red
  "#d97706", // amber orange
  "#f97316", // bright orange
];

export function PixelEasterEgg() {
  const clickCountRef = React.useRef(0);
  const [particles, setParticles] = React.useState<Particle[]>([]);
  const [shatterScale, setShatterScale] = React.useState(0);
  const lastClickTime = React.useRef(0);

  // Initialize from localStorage on mount (runs once)
  React.useEffect(() => {
    const saved = localStorage.getItem("pixelated-easter-egg");
    if (saved === "true") {
      document.documentElement.classList.add("pixelated-easter-egg");
      clickCountRef.current = 5;
    }
  }, []);

  // Sync the SVG filter to the document root style (only when transitioning)
  React.useEffect(() => {
    if (shatterScale > 0) {
      document.documentElement.style.filter = "url(#digital-shatter-filter)";
    } else {
      document.documentElement.style.filter = "";
    }
    return () => {
      document.documentElement.style.filter = "";
    };
  }, [shatterScale]);

  // Dynamic SVG Displacement Wave transition
  const triggerShatterTransition = React.useCallback((applyPixelated: boolean) => {
    let start = performance.now();
    const duration = 600;

    const animate = (time: number) => {
      const elapsed = time - start;
      if (elapsed < duration) {
        const peak = duration / 2;
        let scale = 0;

        if (elapsed < peak) {
          scale = (elapsed / peak) * 160;
        } else {
          if (applyPixelated) {
            document.documentElement.classList.add("pixelated-easter-egg");
            localStorage.setItem("pixelated-easter-egg", "true");
          } else {
            document.documentElement.classList.remove("pixelated-easter-egg");
            localStorage.removeItem("pixelated-easter-egg");
          }
          scale = 160 - ((elapsed - peak) / peak) * 160;
        }

        setShatterScale(scale);
        requestAnimationFrame(animate);
      } else {
        setShatterScale(0);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  // Play retro sound using Web Audio API
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

      osc1.start();
      osc1.stop(ctx.currentTime + 0.18);
      osc2.start();
      osc2.stop(ctx.currentTime + 0.08);
    } catch (e) {
      // Fail silently if browser blocks audio
    }
  }, []);

  const handleClick = React.useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastClickTime.current < 100) return;
    lastClickTime.current = now;

    // Increment click count ref
    clickCountRef.current = clickCountRef.current + 1;
    const nextCount = clickCountRef.current;
    console.log(`Easter egg click registered. Current count: ${nextCount}`);

    // Play Sound
    const soundIndex = nextCount > 5 ? nextCount - 5 : nextCount;
    playRetroSound(soundIndex);

    // Spawn Particles
    const spawnX = e.clientX;
    const spawnY = e.clientY;
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
        size: 6 + Math.floor(Math.random() * 8),
        color: BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)],
      });
    }
    setParticles((curr) => [...curr, ...newParticles]);

    // Handle transition triggers
    if (nextCount === 5) {
      triggerShatterTransition(true);
    } else if (nextCount === 10) {
      triggerShatterTransition(false);
      clickCountRef.current = 0;
    }
  }, [playRetroSound, triggerShatterTransition]);

  // Hook up event listener globally (attaches once, reads Ref directly to avoid closure stale bugs)
  React.useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Climbing parent element tree to ensure compatibility with SVG elements
      let current: HTMLElement | null = target;
      let isTrigger = false;
      
      while (current && current !== document.documentElement) {
        if (current.id === "easter-egg-trigger") {
          isTrigger = true;
          break;
        }
        current = current.parentElement;
      }

      if (isTrigger) {
        handleClick(e);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleClick]);

  // Cleanup old particles
  React.useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles([]);
    }, 1200);
    return () => clearTimeout(timer);
  }, [particles]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        .pixelated-easter-egg {
          image-rendering: pixelated !important;
          image-rendering: crisp-edges !important;
          font-family: 'VT323', monospace !important;
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

        .pixelated-easter-egg body {
          font-size: 1.25rem !important;
        }

        .pixelated-easter-egg h1 {
          font-size: 3.5rem !important;
          font-weight: normal !important;
        }

        .pixelated-easter-egg h2 {
          font-size: 2.2rem !important;
          font-weight: normal !important;
        }

        .pixelated-easter-egg h3 {
          font-size: 1.8rem !important;
          font-weight: normal !important;
        }

        .pixelated-easter-egg p, 
        .pixelated-easter-egg span, 
        .pixelated-easter-egg a,
        .pixelated-easter-egg button {
          text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
          border-radius: 0px !important;
        }
      `}</style>

      {/* SVG Displacement Glitch Filter Definition (always in DOM so browser registers ID) */}
      <svg width="0" height="0" style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}>
        <defs>
          <filter id="digital-shatter-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.35" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={shatterScale} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

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
                y: p.y + p.vy * 30 + 100,
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
                borderRadius: "0px",
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
export default PixelEasterEgg;
