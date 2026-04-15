"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMoon, FiSun, FiX } from "react-icons/fi";

const leftNavItems = [
  { label: "Revista", href: "/" },
  { label: "Secciones", href: "#", hasArrow: true },
  { label: "Autores", href: "#", hasArrow: true },
  { label: "Archivo", href: "/archivo" },
];

const rightNavItems = [
  { label: "Buscador", href: "#", withSearchIcon: true },
  { label: "Suscribete", href: "/suscribete" },
  { label: "Bitacora Plus", href: "/plus" },
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
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--nav-link)] transition-colors duration-200 hover:text-[var(--nav-link-hover)]"
    >
      {withSearchIcon ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 text-[var(--nav-link-icon)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 12L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ) : null}
      <span>{label}</span>
      {hasArrow ? <span className="text-[var(--nav-link-icon)]"></span> : null}
    </Link>
  );
}

export default function SiteHeader() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-soft bg-[var(--background)] text-[var(--foreground)] shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        <div className="mx-auto grid h-24 w-full max-w-[1600px] grid-cols-[1fr_auto] items-center gap-6 px-6 md:grid-cols-3 md:px-8 lg:px-12">
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegacion principal izquierda">
            {leftNavItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </nav>

          <Link
            href="/"
            className="font-display justify-self-start text-3xl font-semibold uppercase tracking-[0.08em] text-[var(--foreground)] transition-colors hover:text-[var(--accent-wine)] md:justify-self-center md:text-7xl"
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
              className="font-ui inline-flex h-9 items-center justify-center gap-1 rounded-full border border-soft bg-[var(--surface)] px-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)] transition-colors hover:border-[var(--accent-petroleum)] hover:text-[var(--foreground)]"
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <FiSun className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <FiMoon className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
          </nav>

          <div className="flex items-center justify-end gap-3 md:hidden">
            <button
              type="button"
              className="font-ui inline-flex h-9 items-center justify-center gap-1 rounded-full border border-soft bg-[var(--surface)] px-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)] transition-colors hover:border-[var(--accent-petroleum)] hover:text-[var(--foreground)]"
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <FiSun className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <FiMoon className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              className="font-ui justify-self-end rounded-full border border-soft bg-[var(--surface)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground-muted)] transition-colors hover:border-[var(--accent-petroleum)] hover:text-[var(--foreground)]"
              aria-label="Abrir menu principal"
              onClick={() => setMenuOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 transition-opacity duration-200 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu drawer */}
      <nav
        className={`fixed top-0 right-0 z-50 h-screen w-80 max-w-[90vw] transform overflow-y-auto bg-[var(--background)] transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        aria-label="Menu navegacion mobile"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between border-b border-soft px-6 py-6">
          <span className="font-display text-lg font-semibold uppercase text-[var(--foreground)]">
            Menu
          </span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-[var(--surface)]"
            onClick={closeMenu}
            aria-label="Cerrar menu"
          >
            <FiX className="h-5 w-5 text-[var(--foreground)]" />
          </button>
        </div>

        <div className="space-y-8 px-6 py-8">
          {/* Left navigation section */}
          <div>
            <p className="font-ui mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--foreground-muted)]">
              Principal
            </p>
            <ul className="space-y-3">
              {leftNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-ui text-sm font-semibold uppercase tracking-[0.15em] text-[var(--nav-link)] transition-colors hover:text-[var(--nav-link-hover)]"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right navigation section */}
          <div>
            <p className="font-ui mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--foreground-muted)]">
              Servicios
            </p>
            <ul className="space-y-3">
              {rightNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-ui text-sm font-semibold uppercase tracking-[0.15em] text-[var(--nav-link)] transition-colors hover:text-[var(--nav-link-hover)]"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}