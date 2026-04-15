import Image from "next/image";
import Link from "next/link";

type CulturaItem = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body?: string;
  bodyExtended?: string;
  bodyClosing?: string;
  bodyFinal?: string;
  author: string;
  dateLabel: string;
  dateISO: string;
  image: {
    src: string;
    alt: string;
  };
};

const intro =
  "Cine, arte y critica cultural para leer el pulso simbolico del pais: escenas, lenguajes y tensiones que tambien hacen politica.";

const featured: CulturaItem = {
  slug: "cine-boliviano-giro-documental",
  category: "Cine",
  title: "El giro documental en el cine boliviano: memoria, archivo y calle",
  excerpt:
    "Nuevas peliculas reabren preguntas sobre verdad publica y representacion social desde una estetica de urgencia. Entre camaras pequenas, archivos recuperados y testimonios en primera persona, la escena documental boliviana esta construyendo una forma distinta de narrar el presente.",
  body:
    "Lejos del formato institucional, esta ola de obras combina investigacion periodistica, memoria comunitaria y exploracion formal para mostrar como se vive el conflicto en barrios, territorios y periferias. El resultado es una cartografia visual mas incomoda y mas honesta sobre poder, identidad y futuro compartido.",
  bodyExtended:
    "Tambien emerge una etica de produccion que privilegia equipos pequenos, rodajes de larga duracion y colaboraciones con colectivos locales, lo que permite un registro mas cercano de la experiencia social. En lugar de explicar Bolivia desde arriba, estas peliculas la observan desde adentro, desde la voz de quienes habitan la incertidumbre todos los dias.",
  bodyClosing:
    "Por eso, mas que una tendencia pasajera, el nuevo documental boliviano se perfila como una practica cultural de largo aliento: interroga archivos oficiales, discute versiones del pasado y abre un espacio de conversacion publica donde el espectador deja de ser consumidor pasivo para convertirse en testigo critico de su tiempo.",
  bodyFinal:
    "En esa tension entre estetica y urgencia politica, el cine documental vuelve a ocupar un lugar central: no solo registra la epoca, tambien la discute y la incomoda.",
  author: "Paula Rojas",
  dateLabel: "15 abril 2026",
  dateISO: "2026-04-15",
  image: {
    src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
    alt: "Proyector de cine en una sala con luz tenue",
  },
};

const items: CulturaItem[] = [
  {
    slug: "teatro-independiente-ciudad-fragmentada",
    category: "Escena",
    title: "Teatro independiente y ciudad fragmentada",
    excerpt:
      "Nuevos montajes trabajan la violencia cotidiana desde formatos breves y de alta proximidad.",
    author: "Carla Vera",
    dateLabel: "14 abril 2026",
    dateISO: "2026-04-14",
    image: {
      src: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80",
      alt: "Escenario teatral con luces encendidas y butacas vacias",
    },
  },
  {
    slug: "arte-publico-muralismo-conflicto",
    category: "Arte",
    title: "Muralismo y conflicto: quien escribe la pared",
    excerpt:
      "El arte publico vuelve a ser un territorio de disputa entre memoria barrial y discurso oficial.",
    author: "Mateo Salinas",
    dateLabel: "13 abril 2026",
    dateISO: "2026-04-13",
    image: {
      src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80",
      alt: "Mural colorido en una pared urbana",
    },
  },
  {
    slug: "critica-digital-canon-cultural",
    category: "Critica",
    title: "Quien define el canon en la era de plataformas",
    excerpt:
      "Entre reels y ensayos largos, la critica busca nuevas formas para sostener debate cultural riguroso.",
    author: "Lucia Campos",
    dateLabel: "12 abril 2026",
    dateISO: "2026-04-12",
    image: {
      src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
      alt: "Cuaderno abierto con texto escrito y una taza de cafe",
    },
  },
];

function Meta({
  author,
  dateLabel,
  dateISO,
}: Pick<CulturaItem, "author" | "dateLabel" | "dateISO">) {
  return (
    <p className="font-ui text-[10px] uppercase tracking-[0.14em] text-[var(--foreground-muted)] md:text-[11px]">
      <span>{author}</span>
      <span className="mx-1.5" aria-hidden="true">
        ·
      </span>
      <time dateTime={dateISO}>{dateLabel}</time>
    </p>
  );
}

function Card({ article }: { article: CulturaItem }) {
  return (
    <article className="group h-full border border-soft bg-[var(--surface)]/40 transition-colors duration-200 hover:bg-[var(--surface)]/75">
      <Link
        href={"/articulos/" + article.slug}
        className="flex h-full flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-petroleum)]/50"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface)]">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="editorial-category font-ui text-[10px] font-semibold uppercase tracking-[0.2em]">
            {article.category}
          </p>
          <h3 className="mt-3 font-display text-2xl leading-[1.03] tracking-[-0.02em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-petroleum)]">
            {article.title}
          </h3>
          <p className="mt-3 flex-1 font-body text-sm leading-6 text-[var(--foreground-muted)]">
            {article.excerpt}
          </p>
          <div className="mt-4 border-t border-soft pt-4">
            <Meta author={article.author} dateLabel={article.dateLabel} dateISO={article.dateISO} />
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function Cultura() {
  return (
    <section
      aria-labelledby="cultura-heading"
      className="border-t border-soft bg-[var(--background)] px-6 py-12 md:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <header className="max-w-3xl">
          <p className="editorial-kicker font-ui text-[11px] font-semibold uppercase tracking-[0.24em]">
            Cultura y critica
          </p>
          <h2
            id="cultura-heading"
            className="editorial-section-title mt-3 font-display text-4xl leading-[0.95] tracking-[-0.02em] md:text-5xl"
          >
            Cultura y critica
          </h2>
          <p className="mt-5 max-w-[68ch] font-body text-base leading-8 text-[var(--foreground-muted)] md:text-lg">
            {intro}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
          <article className="group border border-soft bg-[var(--surface)]/30">
            <Link
              href={"/articulos/" + featured.slug}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-petroleum)]/50"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface)]">
                <Image
                  src={featured.image.src}
                  alt={featured.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>

              <div className="p-6 md:p-7">
                <p className="editorial-category font-ui text-[10px] font-semibold uppercase tracking-[0.2em]">
                  {featured.category}
                </p>
                <h3 className="mt-3 max-w-[20ch] font-display text-4xl leading-[0.95] tracking-[-0.03em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-petroleum)] md:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-5 max-w-[62ch] font-body text-base leading-8 text-[var(--foreground-muted)] md:text-lg">
                  {featured.excerpt}
                </p>
                {featured.body ? (
                  <p className="mt-4 max-w-[62ch] font-body text-base leading-8 text-[var(--foreground-muted)] md:text-lg">
                    {featured.body}
                  </p>
                ) : null}
                {featured.bodyExtended ? (
                  <p className="mt-4 max-w-[62ch] font-body text-base leading-8 text-[var(--foreground-muted)] md:text-lg">
                    {featured.bodyExtended}
                  </p>
                ) : null}
                {featured.bodyClosing ? (
                  <p className="mt-4 max-w-[62ch] font-body text-base leading-8 text-[var(--foreground-muted)] md:text-lg">
                    {featured.bodyClosing}
                  </p>
                ) : null}
                {featured.bodyFinal ? (
                  <p className="mt-4 max-w-[62ch] font-body text-base leading-8 text-[var(--foreground-muted)] md:text-lg">
                    {featured.bodyFinal}
                  </p>
                ) : null}
                <div className="mt-6 border-t border-soft pt-4">
                  <Meta
                    author={featured.author}
                    dateLabel={featured.dateLabel}
                    dateISO={featured.dateISO}
                  />
                </div>
              </div>
            </Link>
          </article>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
            {items.map((article) => (
              <Card key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
