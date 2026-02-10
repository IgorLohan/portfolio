"use client";

import { useEffect } from "react";

const SCROLL_KEY = "locale-switch-scroll";

export function RestoreScrollAfterLocaleSwitch() {
  useEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved !== null) {
      sessionStorage.removeItem(SCROLL_KEY);
      const y = parseInt(saved, 10);
      if (!Number.isNaN(y)) {
        requestAnimationFrame(() => {
          window.scrollTo(0, y);
        });
      }
    }
  }, []);
  return null;
}
