import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const leftLinks = [
  { label: "Revista", href: "#" },
  { label: "Archivo", href: "#" },
  { label: "Suscripciones", href: "#" },
];

const rightLinks = [
  { label: "Soporte", href: "#" },
  { label: "Publicidad", href: "#" },
  { label: "Directorio", href: "#" },
];

const socialLinks = [
  { label: "Twitter", href: "#", icon: FaTwitter },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "YouTube", href: "#", icon: FaYoutube },
];

export default function SiteFooter() {
  return (
    <footer className="mt-20 bg-[var(--color-950)] text-[var(--color-100)]">
      <div className="mx-auto max-w-[1600px] px-6 pb-16 pt-12 md:px-10 lg:px-16">
        <div className="flex justify-center">
          <Link
            href="#"
            className="text-5xl font-extrabold uppercase tracking-tight text-white transition-opacity hover:opacity-90 md:text-7xl"
            aria-label="Ir al inicio de Bitacora"
          >
            BITACORA
          </Link>
        </div>

        <div className="mt-10 border-t border-[var(--color-700)]/50 pt-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.9fr] lg:gap-14">
            <div>
              <p className="max-w-xl text-[15px] leading-9 text-[var(--color-200)]">
                BITACORA es un espacio abierto al conocimiento, la critica y la cultura. Documentamos ideas, historias y conversaciones con mirada contemporanea para conectar pasado, presente y futuro.
              </p>
            </div>

            <div>
              <ul className="space-y-4 text-2xl leading-none text-[var(--color-100)] md:text-[30px]">
                {leftLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-4 text-2xl leading-none text-[var(--color-100)] md:text-[30px]">
                {rightLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-3xl font-medium tracking-tight text-white md:text-4xl">Redes sociales</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-700)] text-[var(--color-100)] transition-colors hover:border-[var(--color-300)] hover:text-white"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center text-sm leading-7 text-[var(--color-300)]">
          <p>© 2026. Todos los derechos reservados BITACORA, sociedad, ciencia y literatura.</p>
          <p className="mt-1">
            <Link href="#" className="underline decoration-[var(--color-500)] underline-offset-4 hover:text-white">
              Terminos de uso
            </Link>
            {" | "}
            <Link href="#" className="underline decoration-[var(--color-500)] underline-offset-4 hover:text-white">
              Politica de privacidad
            </Link>
          </p>
        </div>
      </div>

      <div className="h-7 w-full bg-gradient-to-r from-[var(--color-900)] via-[var(--color-800)] to-[var(--color-900)]" />
    </footer>
  );
}