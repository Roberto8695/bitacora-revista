import Link from "next/link";

type ResenaItem = {
  slug: string;
  kind: "Resena" | "Lectura";
  category: string;
  title: string;
  blurb: string;
  author: string;
  dateLabel: string;
  dateISO: string;
  readingTime: number;
};

const intro =
  "Notas breves sobre libros, ensayos y publicaciones recientes para seguir la conversacion intelectual sin perder profundidad.";

const items: ResenaItem[] = [
  {
    slug: "resena-libro-estado-plebeyo",
    kind: "Resena",
    category: "Libro",
    title: "Estado plebeyo: gobernar sin hegemonia estable",
    blurb:
      "Una lectura critica sobre el ciclo politico boliviano y sus limites para construir institucionalidad duradera.",
    author: "Rocio Maldonado",
    dateLabel: "16 abril 2026",
    dateISO: "2026-04-16",
    readingTime: 6,
  },
  {
    slug: "lectura-ensayo-economia-moral",
    kind: "Lectura",
    category: "Ensayo",
    title: "Economia moral y protesta: por que la calle vuelve",
    blurb:
      "Un ensayo que conecta precariedad, legitimidad y repertorios de movilizacion en tiempos de desencanto.",
    author: "Diego Claros",
    dateLabel: "15 abril 2026",
    dateISO: "2026-04-15",
    readingTime: 5,
  },
  {
    slug: "resena-dossier-justicia-territorial",
    kind: "Resena",
    category: "Dossier",
    title: "Justicia territorial y conflicto minero",
    blurb:
      "Revision de un dossier regional que expone la distancia entre normativa ambiental y decision politica.",
    author: "Nadia Vela",
    dateLabel: "14 abril 2026",
    dateISO: "2026-04-14",
    readingTime: 7,
  },
  {
    slug: "lectura-cronica-ciudad-fracturada",
    kind: "Lectura",
    category: "Cronica",
    title: "Ciudad fracturada: habitar entre miedo y rutina",
    blurb:
      "Una cronica urbana que retrata nuevas formas de convivencia, vigilancia y cansancio social.",
    author: "Mario Alanes",
    dateLabel: "13 abril 2026",
    dateISO: "2026-04-13",
    readingTime: 4,
  },
  {
    slug: "resena-pensamiento-publico-andino",
    kind: "Resena",
    category: "Teoria",
    title: "Pensamiento publico andino en clave contemporanea",
    blurb:
      "Balance de una compilacion reciente sobre comunidad politica, territorio y democracia intercultural.",
    author: "Julieta Parra",
    dateLabel: "12 abril 2026",
    dateISO: "2026-04-12",
    readingTime: 6,
  },
];

function ItemMeta({
  category,
  author,
  dateLabel,
  dateISO,
  readingTime,
}: Pick<ResenaItem, "category" | "author" | "dateLabel" | "dateISO" | "readingTime">) {
  return (
    <p className="font-ui text-[10px] uppercase tracking-[0.12em] text-[var(--foreground-muted)] md:text-[11px]">
      <span>{category}</span>
      <span className="mx-1.5" aria-hidden="true">
        ·
      </span>
      <span>{author}</span>
      <span className="mx-1.5" aria-hidden="true">
        ·
      </span>
      <time dateTime={dateISO}>{dateLabel}</time>
      <span className="mx-1.5" aria-hidden="true">
        ·
      </span>
      <span>{readingTime} min</span>
    </p>
  );
}

function CompactRow({ article, index }: { article: ResenaItem; index: number }) {
  return (
    <li className="border-b border-soft last:border-b-0">
      <Link
        href={"/articulos/" + article.slug}
        className="group grid grid-cols-1 gap-3 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-petroleum)]/50 md:py-5 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-5"
      >
        <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-wine)] lg:pt-1">
          {(index + 1).toString().padStart(2, "0")}
        </p>

        <div>
          <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-wine)] md:text-[11px]">
            {article.kind}
          </p>
          <h3 className="mt-2 max-w-[56ch] font-display text-2xl leading-[1.05] tracking-[-0.02em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-petroleum)] md:text-[1.9rem]">
            {article.title}
          </h3>
          <p className="mt-2 max-w-[70ch] font-body text-sm leading-6 text-[var(--foreground-muted)] md:text-base">
            {article.blurb}
          </p>
        </div>

        <div className="lg:pt-1">
          <ItemMeta
            category={article.category}
            author={article.author}
            dateLabel={article.dateLabel}
            dateISO={article.dateISO}
            readingTime={article.readingTime}
          />
        </div>
      </Link>
    </li>
  );
}

export default function Resenas() {
  return (
    <section
      aria-labelledby="resenas-heading"
      className="border-t border-soft bg-[var(--background)] px-6 py-12 md:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <header className="max-w-3xl">
          <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-wine)]">
            Lecturas recomendadas
          </p>
          <h2
            id="resenas-heading"
            className="mt-3 font-display text-4xl leading-[0.95] tracking-[-0.02em] text-[var(--foreground)] md:text-5xl"
          >
            Resenas y lecturas
          </h2>
          <p className="mt-4 max-w-[65ch] font-body text-base leading-7 text-[var(--foreground-muted)] md:text-lg">
            {intro}
          </p>
        </header>

        <ol className="mt-8 border-y border-soft">
          {items.map((article, index) => (
            <CompactRow key={article.slug} article={article} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
