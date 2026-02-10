"use client";

import { useTranslations } from "next-intl";
import { Countdown } from "./Countdown";
import { ScrollRevealItem } from "./ScrollReveal";

const contactKeys = ["email", "whatsapp", "linkedin", "github"] as const;

const contactHrefs: Record<(typeof contactKeys)[number], string> = {
  email: "mailto:igorlohan301@gmail.com",
  whatsapp: "https://wa.me/5583986854857",
  linkedin: "https://linkedin.com/in/igor-lohan",
  github: "https://github.com/igorlohan",
};

const contactIcons: Record<(typeof contactKeys)[number], string> = {
  email: "https://cdn.simpleicons.org/gmail/ffffff",
  whatsapp: "https://cdn.simpleicons.org/whatsapp/ffffff",
  linkedin: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg",
  github: "https://cdn.simpleicons.org/github/ffffff",
};

export function Contact() {
  const t = useTranslations("contact");
  const contactLinks = contactKeys.map((key) => ({
    key,
    label: t(key),
    href: contactHrefs[key],
    icon: contactIcons[key],
  }));

  return (
    <section
      id="contato"
      className="bg-[#0a0808]/85 px-6 py-24 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <ScrollRevealItem>
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
            {t("title")}
          </h2>
        </ScrollRevealItem>
        <ScrollRevealItem delay={50}>
          <p className="mb-10 text-lg text-zinc-400">
            {t("subtitle")}
          </p>
        </ScrollRevealItem>

        <div className="grid max-w-xs grid-cols-2 gap-3 sm:mx-auto sm:flex sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5">
          {contactLinks.map((link, index) => (
            <ScrollRevealItem key={link.key} delay={index * 80}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#8b4040] px-4 py-3 text-sm font-semibold text-[#a85555] transition-colors hover:bg-[#8b4040]/10 sm:gap-2.5 sm:px-8 sm:py-4 sm:text-base"
              >
                <img
                  src={link.icon}
                  alt=""
                  className="h-4 w-4 shrink-0 object-contain sm:h-5 sm:w-5"
                  aria-hidden
                />
                {link.label}
              </a>
            </ScrollRevealItem>
          ))}
        </div>

        <ScrollRevealItem delay={150}>
          <div className="mt-14 flex flex-col items-center">
            <Countdown className="mt-0" />
          </div>
        </ScrollRevealItem>
      </div>
    </section>
  );
}
