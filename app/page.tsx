import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-50)]">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1280px] flex-1 px-6 py-12 md:px-8 lg:px-12">
        <section className="rounded-3xl border border-[var(--color-200)]/60 bg-white/70 p-8 text-[var(--color-800)] backdrop-blur-sm md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-600)]">
            Proxima seccion
          </p>
          <h1 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl">
            Home de BITACORA en construccion
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-700)] md:text-lg">
            Este header ya esta alineado a tu referencia visual y usa la paleta oficial junto a la tipografia Montserrat con fallback Helvetica.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
