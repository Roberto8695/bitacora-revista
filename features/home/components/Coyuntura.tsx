import Image from "next/image";
import Link from "next/link";

type CoyunturaArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  dateLabel: string;
  dateISO: string;
  image: {
    src: string;
    alt: string;
  };
};

const coyunturaIntro =
  "Analisis en tiempo real sobre los dilemas democraticos, actores politicos y reconfiguraciones del campo electoral boliviano.";

const coyunturaArticles: CoyunturaArticle[] = [
  {
    slug: "partidos-reposicionamiento-2026",
    category: "Partidos",
    title: "Reposicionamiento de actores: la lucha por el centro politico en 2026",
    excerpt:
      "Con las elecciones en el horizonte, bloques opuestos compiten por redefinir su identidad electoral. Un analisis de las estrategias y las grietas del juego politico.",
    author: "Roberto Montaño",
    dateLabel: "16 abril 2026",
    dateISO: "2026-04-16",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
      alt: "Imagen de actores politicos en debate publico",
    },
  },
  {
    slug: "representacion-crisis-institucional",
    category: "Instituciones",
    title: "La crisis de representacion que ninguna reforma electoral ha resuelto",
    excerpt:
      "Diputados, senadores y movimientos: el deficit de confianza persiste incluso despues de cambios normativos. ¿Donde estan los lideres que convoquen?",
    author: "Ximena Ortiz",
    dateLabel: "15 abril 2026",
    dateISO: "2026-04-15",
    image: {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
      alt: "Sesion parlamentaria y participacion ciudadana",
    },
  },
  {
    slug: "conflictividad-movilizacion-social",
    category: "Conflicto",
    title: "Movilizacion sin sintesis: la fragmentacion del malestar publico",
    excerpt:
      "Sindicatos, organizaciones indigenas, sectores urbanos: todas demandan pero ninguno articula un proyecto compartido. La paradoja boliviana.",
    author: "Luis Ahumada",
    dateLabel: "14 abril 2026",
    dateISO: "2026-04-14",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
      alt: "Movilizacion y organizacion social en la calle",
    },
  },
  {
    slug: "polarizacion-ciudadania-fragmentada",
    category: "Debate publico",
    title: "Polarizacion y ciudadania fragmentada: como hablamos de Bolivia ahora",
    excerpt:
      "Redes, medios, ciudad: los espacios donde se discute la nacion ya no conversan entre si. Una radiografia del espacio publico roto.",
    author: "Sofía Gutiérrez",
    dateLabel: "13 abril 2026",
    dateISO: "2026-04-13",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
      alt: "Debate publico y espacios de conversacion politica",
    },
  },
];

function CoyunturaCard({ article }: { article: CoyunturaArticle }) {
  return (
    <article className="group flex h-full flex-col border border-soft bg-[var(--surface)]/40 transition-colors duration-200 hover:bg-[var(--surface)]/70">
      <Link
        href={"/articulos/" + article.slug}
        className="flex h-full flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-petroleum)]/50"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface)]">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 100vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="editorial-category font-ui text-[10px] font-semibold uppercase tracking-[0.18em]">
            {article.category}
          </p>

          <h3 className="mt-3 font-display text-xl leading-[1.08] tracking-[-0.01em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-petroleum)] md:text-[1.4rem]">
            {article.title}
          </h3>

          <p className="mt-4 flex-1 font-body text-sm leading-[1.5] text-[var(--foreground-muted)] md:text-base">
            {article.excerpt}
          </p>

          <div className="mt-4 border-t border-soft pt-4">
            <p className="font-ui text-[10px] uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
              <span>{article.author}</span>
              <span className="mx-1.5" aria-hidden="true">
                ·
              </span>
              <time dateTime={article.dateISO}>{article.dateLabel}</time>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function Coyuntura() {
  return (
    <section
      aria-labelledby="coyuntura-heading"
      className="bg-[var(--background)] px-6 py-12 md:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <header className="max-w-2xl">
          <p className="editorial-kicker font-ui text-[11px] font-semibold uppercase tracking-[0.24em]">
            Coyuntura
          </p>
          <h2
            id="coyuntura-heading"
            className="editorial-section-title mt-3 font-display text-4xl leading-[0.95] tracking-[-0.02em] md:text-5xl"
          >
            Coyuntura politica
          </h2>
          <p className="mt-4 max-w-[60ch] font-body text-base leading-7 text-[var(--foreground-muted)] md:text-lg">
            {coyunturaIntro}
          </p>
        </header>

        <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {coyunturaArticles.map((article) => (
            <CoyunturaCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
