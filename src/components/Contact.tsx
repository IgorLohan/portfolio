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

        <div className="grid max-w-xs grid-cols-2 gap-3 sm:mx-auto sm:flex sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-indigo-500 px-4 py-3 text-sm font-semibold text-indigo-500 transition-colors hover:bg-indigo-500/10 sm:gap-2.5 sm:px-8 sm:py-4 sm:text-base"
            >
              <img
                src={link.icon}
                alt=""
                className="h-4 w-4 shrink-0 object-contain sm:h-5 sm:w-5"
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
