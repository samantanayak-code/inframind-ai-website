"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
  layout?: "grid" | "carousel";
}

export function ScreenshotGallery({ screenshots, layout = "grid" }: ScreenshotGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (screenshots.length === 0) return null;

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + screenshots.length) % screenshots.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % screenshots.length : null));

  return (
    <>
      <div className={layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "flex gap-4 overflow-x-auto pb-4"}>
        {screenshots.map((s, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800 cursor-pointer"
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
              <div className="p-3 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-white">{s.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/70 hover:text-white z-10">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white/70 hover:text-white z-10">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white/70 hover:text-white z-10">
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[16/9] mx-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={screenshots[lightbox].src}
              alt={screenshots[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80">
              <p className="text-sm text-white text-center">{screenshots[lightbox].caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
