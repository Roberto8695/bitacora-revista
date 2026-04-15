import Image from "next/image";
import Link from "next/link";

type Interview = {
  slug: string;
  section: string;
  title: string;
  subtitle: string;
  quote: string;
  excerpt: string;
  interviewer: string;
  guest: string;
  dateLabel: string;
  dateISO: string;
  image: {
    src: string;
    alt: string;
  };
};

const featuredInterview: Interview = {
  slug: "entrevista-economia-moral-estado",
  section: "Entrevista destacada",
  title: "La crisis no es solo economica: es tambien una crisis de confianza publica",
  subtitle: "Conversacion con Valeria Zamora",
  quote:
    "Cuando el Estado pierde capacidad de escucha, la calle deja de pedir reformas y empieza a pedir sentido.",
  excerpt:
    "En esta entrevista, la investigadora Valeria Zamora analiza por que la polarizacion boliviana no se explica solo por liderazgos enfrentados, sino por una ruptura sostenida entre instituciones y experiencia cotidiana. Hablamos de legitimidad, representacion y del agotamiento de los lenguajes politicos tradicionales.",
  interviewer: "Entrevista por Andres Beltran",
  guest: "Valeria Zamora",
  dateLabel: "16 abril 2026",
  dateISO: "2026-04-16",
  image: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
    alt: "Entrevista en estudio con dos personas dialogando frente a microfonos",
  },
};

export default function Entrevista() {
  return (
    <section
      aria-labelledby="entrevista-heading"
      className="border-t border-soft bg-[var(--surface)]/45 px-6 py-14 md:px-8 md:py-18 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-wine)]">
          {featuredInterview.section}
        </p>

        <article className="mt-6 border border-soft bg-[var(--background)]">
          <Link
            href={"/articulos/" + featuredInterview.slug}
            className="group grid grid-cols-1 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-petroleum)]/50 lg:grid-cols-[1.1fr_1fr]"
          >
            <div className="relative min-h-[320px] bg-[var(--surface)] md:min-h-[420px] lg:min-h-[560px]">
              <Image
                src={featuredInterview.image.src}
                alt={featuredInterview.image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 54vw, 100vw"
              />
            </div>

            <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
              <header>
                <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-wine)]">
                  {featuredInterview.subtitle}
                </p>
                <h2
                  id="entrevista-heading"
                  className="mt-4 max-w-[16ch] font-display text-4xl leading-[0.95] tracking-[-0.03em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-petroleum)] md:text-5xl"
                >
                  {featuredInterview.title}
                </h2>
                <blockquote className="mt-6 border-l-2 border-[var(--accent-wine)] pl-4 font-display text-2xl leading-[1.08] tracking-[-0.01em] text-[var(--foreground)] md:text-[2rem]">
                  &ldquo;{featuredInterview.quote}&rdquo;
                </blockquote>
                <p className="mt-6 max-w-[58ch] font-body text-base leading-8 text-[var(--foreground-muted)] md:text-lg">
                  {featuredInterview.excerpt}
                </p>
              </header>

              <footer className="mt-8 border-t border-soft pt-4">
                <p className="font-ui text-[10px] uppercase tracking-[0.14em] text-[var(--foreground-muted)] md:text-[11px]">
                  <span>{featuredInterview.interviewer}</span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <span>{featuredInterview.guest}</span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <time dateTime={featuredInterview.dateISO}>{featuredInterview.dateLabel}</time>
                </p>
              </footer>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}
