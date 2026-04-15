"use client";
import Link from "next/link";

type DossierArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  dateLabel: string;
  dateISO: string;
};

const mockArticles: DossierArticle[] = [
  {
    slug: "fragmentacion-democratica-2026",
    category: "Instituciones",
    title: "La fragmentación democrática en crisis",
    excerpt:
      "Cómo la ruptura institucional profundiza el conflicto político y debilita la gobernanza en Bolivia.",
    author: "Dr. Carlos Morales",
    dateLabel: "15 de abril",
    dateISO: "2026-04-15",
  },
  {
    slug: "actores-institucionales-conflicto",
    category: "Análisis",
    title: "Actores institucionales en pugna",
    excerpt:
      "Un análisis de las tensiones entre poderes y su impacto en la legitimidad estatal y la representación ciudadana.",
    author: "Dra. Alejandra Rojas",
    dateLabel: "14 de abril",
    dateISO: "2026-04-14",
  },
  {
    slug: "memoria-representacion-politica",
    category: "Memoria",
    title: "Memoria colectiva y representación política",
    excerpt:
      "Cómo los procesos históricos moldean la configuración de poderes y la demanda de inclusión política en territorios.",
    author: "Prof. Javier Espinoza",
    dateLabel: "13 de abril",
    dateISO: "2026-04-13",
  },
];

function DossierMeta({
  category,
  author,
  dateLabel,
  dateISO,
}: {
  category: string;
  author: string;
  dateLabel: string;
  dateISO: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-secondary">
      <span className="editorial-category font-ui font-semibold uppercase tracking-wide text-xs">
        {category}
      </span>
      <span className="h-1 w-1 rounded-full bg-[var(--accent-wine)]/55"></span>
      <time dateTime={dateISO} className="font-ui">
        {dateLabel}
      </time>
      <span className="h-1 w-1 rounded-full bg-[var(--accent-wine)]/55"></span>
      <span className="font-ui italic">{author}</span>
    </div>
  );
}

function DossierItem({ article }: { article: DossierArticle }) {
  return (
    <Link href={`/articulos/${article.slug}`}>
      <article className="group cursor-pointer border-b border-soft py-6 transition-colors duration-200 hover:border-[var(--accent-petroleum)]/45">
        <div className="space-y-2">
          <DossierMeta
            category={article.category}
            author={article.author}
            dateLabel={article.dateLabel}
            dateISO={article.dateISO}
          />
          <h3 className="font-display text-2xl md:text-3xl leading-tight group-hover:underline decoration-wine underline-offset-2">
            {article.title}
          </h3>
          <p className="text-secondary leading-relaxed max-w-2xl">
            {article.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default function Dossier() {
  return (
    <section
      aria-labelledby="dossier-heading"
      className="home-dossier py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 border-t border-soft pt-8">
        <header className="mb-8 md:mb-12">
          <div className="mb-4">
            <p className="editorial-kicker font-ui text-xs font-semibold uppercase tracking-widest">
              Tema central
            </p>
          </div>
          <h2
            id="dossier-heading"
            className="editorial-section-title mb-4 max-w-3xl font-display text-5xl leading-tight md:text-6xl"
          >
            Gobernanza en transición
          </h2>
          <p className="font-body text-lg md:text-xl text-secondary leading-relaxed max-w-2xl">
            Tres perspectivas sobre la reconfiguración institucional, los
            conflictos de poder y la memoria política en Bolivia.
          </p>
        </header>

        <div className="space-y-0 divide-y divide-soft">
          {mockArticles.map((article) => (
            <DossierItem key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
