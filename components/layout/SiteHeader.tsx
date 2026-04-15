import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";

const leftNavItems = [
  { label: "Revista", href: "#" },
  { label: "Secciones", href: "#", hasArrow: true },
  { label: "Blogs", href: "#", hasArrow: true },
  { label: "Archivo", href: "#" },
];

const rightNavItems = [
  { label: "Buscador", href: "#", withSearchIcon: true },
  { label: "Suscribete", href: "#" },
  { label: "Bitacora Plus", href: "#" },
];

function NavItem({
  label,
  href,
  hasArrow,
  withSearchIcon,
}: {
  label: string;
  href: string;
  hasArrow?: boolean;
  withSearchIcon?: boolean;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-100)] transition-colors hover:text-white"
    >
      {withSearchIcon ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 text-[var(--color-200)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 12L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ) : null}
      <span>{label}</span>
      {hasArrow ? <span className="text-[var(--color-400)]">v</span> : null}
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="border-b border-white/5 bg-gradient-to-r from-[var(--color-950)] via-[var(--color-900)] to-[var(--color-950)] text-white">
      <div className="mx-auto grid h-24 w-full max-w-[1600px] grid-cols-[1fr_auto] items-center gap-6 px-6 md:grid-cols-3 md:px-8 lg:px-12">
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegacion principal izquierda">
          {leftNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>

        <Link
          href="#"
          className="justify-self-start text-3xl font-extrabold uppercase tracking-tight text-white transition-opacity hover:opacity-90 md:justify-self-center md:text-7xl"
          aria-label="Ir al inicio de Bitacora"
        >
          BITACORA
        </Link>

        <nav className="hidden items-center justify-end gap-8 md:flex" aria-label="Navegacion principal derecha">
          {rightNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center gap-1 rounded-full border border-white/20 px-2.5 text-[var(--color-100)] transition-colors hover:border-white/40 hover:text-white"
            aria-label="Cambiar tema"
          >
            <FiSun className="h-3.5 w-3.5" aria-hidden="true" />
            <FiMoon className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </nav>

        <button
          type="button"
          className="justify-self-end rounded-full border border-white/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-100)] transition-colors hover:border-white/40 hover:text-white md:hidden"
          aria-label="Abrir menu principal"
        >
          Menu
        </button>
      </div>
    </header>
  );
}