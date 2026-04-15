import Link from "next/link";

export default function CtaEditorial() {
  return (
    <section
      aria-labelledby="cta-editorial-heading"
      className="border-t border-soft bg-[var(--surface)]/55 px-6 py-14 md:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1400px] border border-soft bg-[var(--background)] p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div>
            <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-wine)]">
              Cierre editorial
            </p>
            <h2
              id="cta-editorial-heading"
              className="mt-3 max-w-[16ch] font-display text-4xl leading-[0.95] tracking-[-0.03em] text-[var(--foreground)] md:text-5xl"
            >
              Recibe cada edicion y recorre nuestro archivo
            </h2>
            <p className="mt-5 max-w-[62ch] font-body text-base leading-8 text-[var(--foreground-muted)] md:text-lg">
              Bitacora publica analisis, entrevistas y lecturas para entender los conflictos del presente boliviano.
              Suscribete para recibir nuevas ediciones y revisa nuestro archivo para seguir la conversacion completa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <article className="border border-soft bg-[var(--surface)]/35 p-5 md:p-6">
              <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-wine)]">
                Boletin
              </p>
              <h3 className="mt-2 font-display text-3xl leading-[0.98] tracking-[-0.02em] text-[var(--foreground)]">
                Suscribete
              </h3>
              <p className="mt-3 font-body text-sm leading-6 text-[var(--foreground-muted)] md:text-base">
                Recibe los contenidos clave de la semana en tu correo con seleccion editorial.
              </p>
              <Link
                href="/suscribete"
                className="font-ui mt-5 inline-flex items-center justify-center rounded-full border border-[var(--accent-petroleum)] bg-[var(--accent-petroleum)] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--background)] transition-colors duration-200 hover:bg-transparent hover:text-[var(--accent-petroleum)]"
              >
                Quiero suscribirme
              </Link>
            </article>

            <article className="border border-soft bg-[var(--surface)]/35 p-5 md:p-6">
              <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-wine)]">
                Memoria editorial
              </p>
              <h3 className="mt-2 font-display text-3xl leading-[0.98] tracking-[-0.02em] text-[var(--foreground)]">
                Explorar archivo
              </h3>
              <p className="mt-3 font-body text-sm leading-6 text-[var(--foreground-muted)] md:text-base">
                Accede a ediciones, dossieres y columnas para reconstruir el mapa de debates recientes.
              </p>
              <Link
                href="/archivo"
                className="font-ui mt-5 inline-flex items-center justify-center rounded-full border border-soft px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--accent-petroleum)] hover:text-[var(--accent-petroleum)]"
              >
                Ir al archivo
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
