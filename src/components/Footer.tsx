const footerLinks = [
  { label: "GitHub", href: "https://github.com/igorlohan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/igorlohan" },
  {
    label: "WhatsApp",
    href: "https://wa.me/5583986854857",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080505]/90 px-6 py-14 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5">
        <p className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
