const contactLinks = [
  {
    label: "Email",
    href: "mailto:igorlohan301@gmail.com",
    icon: "https://cdn.simpleicons.org/gmail/ffffff",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5583986854857",
    icon: "https://cdn.simpleicons.org/whatsapp/ffffff",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/igor-lohan",
    icon: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/igorlohan",
    icon: "https://cdn.simpleicons.org/github/ffffff",
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="bg-[#0a0a0f] px-6 py-24 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="mb-10 text-lg text-zinc-400">
          Estou sempre aberto a novas oportunidades e projetos interessantes.
          Entre em contato por email ou WhatsApp!
        </p>

        <div className="flex flex-row flex-nowrap items-center justify-center gap-4 overflow-x-auto sm:gap-5">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl border-2 border-indigo-500 px-8 py-4 text-base font-semibold text-indigo-500 transition-colors hover:bg-indigo-500/10"
            >
              <img
                src={link.icon}
                alt=""
                className="h-5 w-5 shrink-0 object-contain"
                aria-hidden
              />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
