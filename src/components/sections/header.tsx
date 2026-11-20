const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="font-semibold text-primary">
          [PLACEHOLDER: marca]
        </a>
        <nav aria-label="Principal" className="flex gap-3 text-sm sm:gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
