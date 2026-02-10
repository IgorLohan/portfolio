"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const navKeys = ["inicio", "sobre", "projetos", "contato"] as const;

export function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const setLocale = (newLocale: "pt-BR" | "en") => {
    if (newLocale === locale) return;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("locale-switch-scroll", String(window.scrollY));
    }
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  const navLinks = navKeys.map((key) => ({
    href: `#${key === "inicio" ? "inicio" : key}`,
    label: t(`nav.${key}`),
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0808]/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-20">
        <a
          href="#inicio"
          className="text-xl font-bold text-white transition-opacity hover:opacity-90"
        >
          {t("brand")}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <span className="flex items-center gap-1 text-sm text-zinc-500">
            <button
              type="button"
              onClick={() => setLocale("pt-BR")}
              className={locale === "pt-BR" ? "font-semibold text-white" : "text-zinc-400 hover:text-white"}
              aria-current={locale === "pt-BR" ? "true" : undefined}
            >
              {t("localePt")}
            </button>
            <span aria-hidden>|</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={locale === "en" ? "font-semibold text-white" : "text-zinc-400 hover:text-white"}
              aria-current={locale === "en" ? "true" : undefined}
            >
              {t("localeEn")}
            </button>
          </span>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={t("ariaMenu")}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/5 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
