export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080505]/90 px-6 py-8 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Igor Lohan. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
