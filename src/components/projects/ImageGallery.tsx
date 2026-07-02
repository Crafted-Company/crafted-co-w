"use client";

import * as React from "react";
import Image from "next/image";
import { ProjectImage } from "@/types/database.types";
import { Card } from "@/components/ui/card";

interface ImageGalleryProps {
  images: ProjectImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [activeImage, setActiveImage] = React.useState<ProjectImage | null>(null);

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
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
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
          </div>
        </div>
      )}
    </div>
  );
}
export default ImageGallery;
