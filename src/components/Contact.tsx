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
      className="bg-[#0a0808]/85 px-4 py-14 sm:px-6 sm:py-20 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <ScrollRevealItem>
          <h2 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </ScrollRevealItem>
        <ScrollRevealItem delay={50}>
          <p className="mb-8 text-base text-zinc-400 sm:mb-10 sm:text-lg">
            {t("subtitle")}
          </p>
        </ScrollRevealItem>

        <div className="mx-auto grid max-w-[280px] grid-cols-2 gap-x-3 gap-y-1.5 sm:flex sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5">
          {contactLinks.map((link, index) => (
            <ScrollRevealItem key={link.key} delay={index * 80} className="min-w-0">
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-lg border-2 border-[#8b4040] px-2.5 py-2 text-xs font-semibold text-[#a85555] transition-colors hover:bg-[#8b4040]/10 sm:min-h-0 sm:w-auto sm:gap-2.5 sm:rounded-xl sm:px-8 sm:py-4 sm:text-base"
              >
                <img
                  src={link.icon}
                  alt=""
                  className="h-3.5 w-3.5 shrink-0 object-contain sm:h-5 sm:w-5"
                  aria-hidden
                />
                {link.label}
              </a>
            </ScrollRevealItem>
          ))}
        </div>

        <ScrollRevealItem delay={150}>
          <div className="mt-10 flex flex-col items-center sm:mt-14">
            <Countdown className="mt-0" />
          </div>
        </ScrollRevealItem>
      </div>
    </section>
  );
}
