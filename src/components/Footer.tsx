"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#080505]/90 px-6 py-8 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm text-zinc-500">
          {t("copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
