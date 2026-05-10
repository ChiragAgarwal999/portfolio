"use client";

const nav = ["about", "skills", "experience", "projects", "education", "certifications", "achievements", "contact"];

export function Navbar({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <p className="font-semibold gradient-text">{name}</p>
        <ul className="hidden gap-4 text-sm md:flex">
          {nav.map((n) => (
            <li key={n}>
              <a href={`#${n}`} className="capitalize text-muted hover:text-white">
                {n}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
