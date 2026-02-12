"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface ProjectImageCarouselProps {
  images: string | string[];
  alt: string;
  fallbackSrc?: string;
  gradientClass: string;
  /** Modal: container preenche o espaço e imagem nítida (object-contain). */
  fill?: boolean;
  /** Classes extras no container. */
  containerClassName?: string;
  priority?: boolean;
}

export function ProjectImageCarousel({
  images,
  alt,
  fallbackSrc,
  gradientClass,
  fill = false,
  containerClassName = "",
  priority = false,
}: ProjectImageCarouselProps) {
  const t = useTranslations("modal");
  const imageArray = Array.isArray(images) ? images : [images];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageArray.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageArray.length]);

  const goPrev = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  };

  const goNext = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % imageArray.length);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    handler: (e: React.KeyboardEvent) => void
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handler(e);
    }
  };

  const src = imageArray.length > 0 ? imageArray[currentIndex] : fallbackSrc;
  if (!src) return null;

  const imageClass = fill
    ? "h-full w-full object-contain opacity-95 transition-opacity duration-500"
    : "h-full w-full object-cover opacity-90 transition-opacity duration-500";

  const containerHeightClass = fill ? "min-h-[55vh] flex-1 w-full" : "h-52";

  return (
    <div
      className={`relative shrink-0 overflow-hidden bg-gradient-to-r ${gradientClass} ${containerHeightClass} ${containerClassName}`.trim()}
    >
      <Image
        key={currentIndex}
        src={src}
        alt={alt}
        width={1200}
        height={800}
        sizes="(max-width: 1280px) 100vw, 1152px"
        quality={95}
        priority={priority}
        className={imageClass}
      />
      {imageArray.length > 1 && (
        <>
          <span
            role="button"
            tabIndex={0}
            onClick={goPrev}
            onKeyDown={(e) => handleKeyDown(e, goPrev)}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={t("prevImage")}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          <span
            role="button"
            tabIndex={0}
            onClick={goNext}
            onKeyDown={(e) => handleKeyDown(e, goNext)}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={t("nextImage")}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
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
        </>
      )}
    </div>
  );
}
