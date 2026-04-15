"use client";
import Image from "next/image";
import Link from "next/link";

type Article = {
	slug: string;
	category: string;
	title: string;
	summary?: string;
	author: string;
	date: string;
	dateISO: string;
	image: {
		src: string;
		alt: string;
	};
};

const featuredArticle: Article = {
	slug: "politica-pacto-fragil-bolivia",
	category: "Politica",
	title: "El pacto fragil: gobernar en tiempos de desconfianza publica",
	summary:
		"Entre alianzas inestables y una ciudadania cada vez mas exigente, la gobernabilidad en Bolivia se redefine en el cruce entre conflicto, legitimidad y memoria politica.",
	author: "Daniela Arce",
	date: "15 abril 2026",
	dateISO: "2026-04-15",
	image: {
		src: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1600&q=80",
		alt: "Vista urbana al atardecer con edificios institucionales y montanas al fondo",
	},
};

const secondaryArticles: Article[] = [
	{
		slug: "cultura-ciudad-archivos-vivos",
		category: "Cultura",
		title: "Archivos vivos: como la ciudad escribe su propia memoria",
		author: "Marcos Canelas",
		date: "14 abril 2026",
		dateISO: "2026-04-14",
		image: {
			src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
			alt: "Personas reunidas en una plaza historica durante una actividad cultural",
		},
	},
	{
		slug: "debate-opinion-espacio-publico",
		category: "Debate",
		title: "El espacio publico como campo de disputa y escucha",
		author: "Lucia Rivero",
		date: "13 abril 2026",
		dateISO: "2026-04-13",
		image: {
			src: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?auto=format&fit=crop&w=1200&q=80",
			alt: "Auditorio con panelistas durante una conversacion publica",
		},
	},
	{
		slug: "conflicto-justicia-territorio",
		category: "Conflicto",
		title: "Justicia y territorio: el lenguaje politico de la crisis",
		author: "Rene Gamarra",
		date: "12 abril 2026",
		dateISO: "2026-04-12",
		image: {
			src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
			alt: "Mesa de trabajo con documentos y personas en discusion",
		},
	},
];

function MetaLine({ author, date, dateISO }: Pick<Article, "author" | "date" | "dateISO">) {
	return (
		<p className="font-ui text-xs uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
			<span>{author}</span>
			<span className="mx-2" aria-hidden="true">
				·
			</span>
			<time dateTime={dateISO}>{date}</time>
		</p>
	);
}

function SecondaryItem({ article, isLast }: { article: Article; isLast: boolean }) {
	return (
		<article className={`group py-6 ${isLast ? "" : "border-b border-soft"}`}>
			<Link
				href={`/articulos/${article.slug}`}
				className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-petroleum)]/60"
			>
				<p className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-wine)]">
					{article.category}
				</p>
				<h3 className="mt-3 font-display text-2xl leading-[1.03] tracking-[-0.02em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-petroleum)] lg:text-[1.75rem]">
					{article.title}
				</h3>
				<div className="mt-4">
					  <MetaLine author={article.author} date={article.date} dateISO={article.dateISO} />
				</div>
			</Link>
		</article>
	);
}

export default function Hero() {
	return (
		<section
			aria-labelledby="hero-heading"
			className="border-y border-soft bg-[var(--background)] px-6 py-10 md:px-8 md:py-14 lg:px-12"
		>
			<div className="mx-auto w-full max-w-[1400px]">
				<header className="mb-8 md:mb-10">
					<p className="font-ui text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-wine)]">
						Edicion actual
					</p>
					<h2
						id="hero-heading"
						className="mt-3 font-display text-4xl leading-[0.95] tracking-[-0.02em] text-[var(--foreground)] md:text-5xl lg:text-6xl"
					>
						Politica, cultura y conflicto
					</h2>
				</header>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-12">
					<article className="group">
						<Link
							href={`/articulos/${featuredArticle.slug}`}
							className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-petroleum)]/60"
						>
							<div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface)]">
								<Image
									src={featuredArticle.image.src}
									alt={featuredArticle.image.alt}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
									sizes="(min-width: 1024px) 66vw, 100vw"
									priority
								/>
							</div>

							<div className="mt-6 max-w-[58ch]">
								<p className="font-ui text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-wine)]">
									{featuredArticle.category}
								</p>
								<h1 className="mt-3 font-display text-4xl leading-[0.93] tracking-[-0.03em] text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-petroleum)] md:text-5xl lg:text-6xl">
									{featuredArticle.title}
								</h1>
								<p className="mt-5 font-body text-lg leading-8 text-[var(--foreground-muted)] md:text-[1.2rem]">
									{featuredArticle.summary}
								</p>
								<div className="mt-6 border-t border-soft pt-4">
									<MetaLine
										author={featuredArticle.author}
										date={featuredArticle.date}
										dateISO={featuredArticle.dateISO}
									/>
								</div>
							</div>
						</Link>
					</article>

					<div className="divide-y divide-transparent lg:pt-1">
						{secondaryArticles.map((article, index) => (
							<SecondaryItem key={article.slug} article={article} isLast={index === secondaryArticles.length - 1} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
