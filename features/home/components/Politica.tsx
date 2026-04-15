import Link from "next/link";

type PolicyArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  dateLabel: string;
  dateISO: string;
  readingTime?: number;
};

const policyIntro =
  "Analisis de diseño institucional, gobernanza, reforma estatal y decisiones estrategicas que moldean la capacidad publica. Una lectura sobre politicas que importan.";

const featuredPolicyArticle: PolicyArticle = {
  slug: "justicia-plurinacional-implementacion",
  category: "Justicia",
  title: "Justicia plurinacional: entre el mandato constitucional y la debilidad institucional",
  excerpt:
    "A mas de una decada, el sistema de justicia indigena coexiste con lo ordinario de manera tensa. Un balance sobre avances, conflictos territoriales, capacidades instaladas, y los nudos que requieren transformacion.",
  author: "Álvaro Flores",
  dateLabel: "15 abril 2026",
  dateISO: "2026-04-15",
  readingTime: 12,
};

const secondaryPolicyArticles: PolicyArticle[] = [
  {
    slug: "educacion-currículo-politico",
    category: "Educación",
    title: "El currículo como arena politica: que enseña Bolivia sobre si misma",
    excerpt: "Reforma, identidad, memoria: cada cambio curricular refleja luchas sobre que nacion queremos. Una radiografia de 20 años de tensiones pedagogicas.",
    author: "Verónica Jiménez",
    dateLabel: "14 abril 2026",
    dateISO: "2026-04-14",
    readingTime: 9,
  },
  {
    slug: "salud-publica-fragmentacion",
    category: "Salud pública",
    title: "Salud fragmentada: por que Bolivia no logra un sistema nacional coherente",
    excerpt: "Sistema publico, CAJA, municipios: multiples jurisdicciones que no dialogan. Una evaluacion de la arquitectura sanitaria boliviana y sus limites.",
    author: "Carlos Mendoza",
    dateLabel: "13 abril 2026",
    dateISO: "2026-04-13",
    readingTime: 10,
  },
  {
    slug: "gobernanza-territorial-mineria",
    category: "Territorio",
    title: "Gobernanza territorial: mineria, tierra y conflicto en el centro del estado",
    excerpt: "Donde se toman las decisiones sobre recursos, desarrollo y soberania, el estado pierde autoridad frente a actores privados y colectivos. Un diagnostico.",
    author: "Jaime Sandoval",
    dateLabel: "12 abril 2026",
    dateISO: "2026-04-12",
    readingTime: 14,
  },
];

function PolicyMeta({
  author,
  dateLabel,
  dateISO,
  readingTime,
}: Pick<PolicyArticle, "author" | "dateLabel" | "dateISO" | "readingTime">) {
  return (
    <div className="font-ui flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
      <span>{author}</span>
      <span className="h-0.5 w-0.5 rounded-full bg-[var(--border-soft)]" aria-hidden="true" />
      <time dateTime={dateISO}>{dateLabel}</time>
      {readingTime && (
        <>
          <span className="h-0.5 w-0.5 rounded-full bg-[var(--border-soft)]" aria-hidden="true" />
          <span>{readingTime} min</span>
        </>
      )}
    </div>
  );
}

function SecondaryPolicyItem({ article, isLast }: { article: PolicyArticle; isLast: boolean }) {
  return (
    <article className={isLast ? "" : "border-b border-soft pb-6"}>
      <Link
        href={"/articulos/" + article.slug}
        className="group block py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-petroleum)]/50"
      >
        <p className="editorial-category font-ui text-[10px] font-semibold uppercase tracking-[0.2em]">
          {article.category}
        </p>
        <h3 className="mt-2 font-display text-lg leading-[1.1] tracking-[-0.01em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-petroleum)] md:text-xl">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-2 font-body text-sm leading-[1.55] text-[var(--foreground-muted)]">
          {article.excerpt}
        </p>
        <div className="mt-3">
          <PolicyMeta
            author={article.author}
            dateLabel={article.dateLabel}
            dateISO={article.dateISO}
            readingTime={article.readingTime}
          />
        </div>
      </Link>
    </article>
  );
}

export default function Politica() {
  return (
    <section
      aria-labelledby="politica-heading"
      className="bg-[var(--background)] px-6 py-12 md:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1400px] border-t border-soft pt-8 md:pt-10">
        <header className="max-w-3xl">
          <p className="editorial-kicker font-ui text-[11px] font-semibold uppercase tracking-[0.24em]">
            Politicas publicas
          </p>
          <h2
            id="politica-heading"
            className="editorial-section-title mt-3 font-display text-4xl leading-[0.95] tracking-[-0.02em] md:text-5xl"
          >
            Politicas publicas
          </h2>
          <p className="mt-5 max-w-[70ch] font-body text-base leading-8 text-[var(--foreground-muted)] md:text-lg">
            {policyIntro}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <article className="group lg:border-r lg:border-soft lg:pr-10">
            <Link
              href={"/articulos/" + featuredPolicyArticle.slug}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-petroleum)]/50"
            >
              <p className="editorial-category font-ui text-[10px] font-semibold uppercase tracking-[0.2em]">
                {featuredPolicyArticle.category}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-[1.02] tracking-[-0.02em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-petroleum)] md:text-4xl">
                {featuredPolicyArticle.title}
              </h3>
              <p className="mt-5 max-w-[65ch] font-body text-base leading-8 text-[var(--foreground-muted)] md:text-lg">
                {featuredPolicyArticle.excerpt}
              </p>
              <div className="mt-6">
                <PolicyMeta
                  author={featuredPolicyArticle.author}
                  dateLabel={featuredPolicyArticle.dateLabel}
                  dateISO={featuredPolicyArticle.dateISO}
                  readingTime={featuredPolicyArticle.readingTime}
                />
              </div>
            </Link>
          </article>

          <div className="lg:pt-1">
            {secondaryPolicyArticles.map((article, index) => (
              <SecondaryPolicyItem
                key={article.slug}
                article={article}
                isLast={index === secondaryPolicyArticles.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
