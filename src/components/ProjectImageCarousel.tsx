"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectImageCarouselProps {
  images: string | string[];
  alt: string;
  fallbackSrc?: string;
  gradientClass: string;
}

export function ProjectImageCarousel({
  images,
  alt,
  fallbackSrc,
  gradientClass,
}: ProjectImageCarouselProps) {
  const imageArray = Array.isArray(images) ? images : [images];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageArray.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageArray.length]);

  const src = imageArray.length > 0 ? imageArray[currentIndex] : fallbackSrc;
  if (!src) return null;

  return (
    <div className={`relative h-52 overflow-hidden bg-gradient-to-r ${gradientClass}`}>
      <Image
        key={currentIndex}
        src={src}
        alt={alt}
        width={400}
        height={200}
        className="h-full w-full object-contain opacity-90 transition-opacity duration-500"
      />
      {imageArray.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {imageArray.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === currentIndex ? "bg-white" : "bg-white/40"
              }`}
              aria-hidden
            />
          ))}
        </div>
      )}
    </div>
  );
}
