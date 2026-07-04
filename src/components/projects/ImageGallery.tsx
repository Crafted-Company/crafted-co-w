"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectImage } from "@/types/database.types";
import { Card } from "@/components/ui/card";

interface ImageGalleryProps {
  images: ProjectImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [activeImage, setActiveImage] = React.useState<ProjectImage | null>(null);

  const currentIndex = activeImage
    ? images.findIndex((img) => img.id === activeImage.id)
    : -1;

  const showNext = (e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation();
    if (currentIndex < images.length - 1) {
      setActiveImage(images[currentIndex + 1]);
    }
  };

  const showPrev = (e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      setActiveImage(images[currentIndex - 1]);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeImage) return;
      if (e.key === "ArrowRight") showNext(e);
      if (e.key === "ArrowLeft") showPrev(e);
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage, currentIndex]);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
        Gallery & Renders
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <Card
            key={image.id}
            onClick={() => setActiveImage(image)}
            className="overflow-hidden cursor-pointer border-border/60 hover:border-brand-start/40 aspect-video relative group"
            hoverable
          >
            <Image
              src={image.image_url}
              alt={image.alt_text}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {image.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[10px] font-mono text-foreground uppercase tracking-wide">
                  {image.caption}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setActiveImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full border border-border/60 bg-background/80 hover:bg-background text-foreground transition-all duration-300"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Arrow */}
            {currentIndex > 0 && (
              <button
                onClick={showPrev}
                className="absolute left-4 md:left-8 z-50 p-3 rounded-full border border-border/60 bg-background/80 hover:bg-background hover:scale-105 text-foreground hover:text-brand-start transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Arrow with a mount-bounce hint animation */}
            {currentIndex < images.length - 1 && (
              <motion.button
                onClick={showNext}
                initial={{ x: 0 }}
                animate={{ x: [0, 8, 0, 8, 0] }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute right-4 md:right-8 z-50 p-3 rounded-full border border-border/60 bg-background/80 hover:bg-background hover:scale-105 text-foreground hover:text-brand-start transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            )}

            {/* Image Box */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl bg-card"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            >
              <Image
                src={activeImage.image_url}
                alt={activeImage.alt_text}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              {activeImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-background/90 border-t border-border p-4 text-center">
                  <p className="text-xs font-mono text-muted-foreground">
                    {activeImage.caption}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default ImageGallery;
