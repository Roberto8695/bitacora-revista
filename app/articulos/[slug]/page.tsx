import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/article/ShareButtons";

type ArticlePageData = {
	slug: string;
	category: string;
	title: string;
	summary: string;
	author: string;
	dateLabel: string;
	dateISO: string;
	image?: {
		src: string;
		alt: string;
	};
	body: string[];
};

const articles: ArticlePageData[] = [
	{
		slug: "politica-pacto-fragil-bolivia",
		category: "Politica",
		title: "El pacto fragil: gobernar en tiempos de desconfianza publica",
		summary:
			"Entre alianzas inestables y una ciudadania cada vez mas exigente, la gobernabilidad en Bolivia se redefine en el cruce entre conflicto, legitimidad y memoria politica.",
		author: "Daniela Arce",
		dateLabel: "15 abril 2026",
		dateISO: "2026-04-15",
		image: {
			src: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1600&q=80",
			alt: "Vista urbana al atardecer con edificios institucionales y montanas al fondo",
		},
		body: [
			"La gobernabilidad boliviana atraviesa un ciclo de pactos cortos, negociaciones fragmentadas y disputas narrativas que condicionan la capacidad de decision del Estado.",
			"En este contexto, los acuerdos politicos ya no se sostienen solo por afinidad ideologica, sino por la administracion pragmatica del conflicto en escenarios de alta desconfianza publica.",
			"El reto central para los proximos años no sera unicamente construir mayoria parlamentaria, sino reconstruir legitimidad institucional y capacidad de escucha social.",
		],
	},
	{
		slug: "cultura-ciudad-archivos-vivos",
		category: "Cultura",
		title: "Archivos vivos: como la ciudad escribe su propia memoria",
		summary:
			"Una lectura sobre memoria urbana, patrimonio cotidiano y practicas culturales que producen relato publico.",
		author: "Marcos Canelas",
		dateLabel: "14 abril 2026",
		dateISO: "2026-04-14",
		image: {
			src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
			alt: "Personas reunidas en una plaza historica durante una actividad cultural",
		},
		body: [
			"Los archivos ciudadanos no solo preservan el pasado: tambien organizan disputas presentes sobre identidad, pertenencia y reconocimiento.",
			"Cuando barrios, colectivos y plataformas comunitarias documentan su experiencia, producen una memoria activa que interpela a la historia oficial.",
			"La ciudad aparece entonces como un texto plural, escrito por voces que negocian entre olvido, conflicto y deseo de futuro.",
		],
	},
	{
		slug: "debate-opinion-espacio-publico",
		category: "Debate",
		title:
			"Un analisis de las campaña politicas en TikTok 2026: candidatos a alcaldes y gobernadores de los cuatro municipios mas grandes de Bolivia bajo la lupa",
		summary:
			"Redes, performance y discurso: como se disputa hoy la atencion electoral en plataformas de video corto.",
		author: "Valeria Peredo Rodriguez",
		dateLabel: "13 abril 2026",
		dateISO: "2026-04-13",
		image: {
			src: "/images/tiktok.webp",
			alt: "Campana politica en espacio publico con creadores de contenido y uso de TikTok",
		},
		body: [
			"Hoy en día, TikTok es la red social con más usuarios en Bolivia. Existen muchas razones para la adopción masiva de esta plataforma de videos, pero una de las más importantes es la capacidad que tiene de proveer a los usuarios contenido personalizado, y una experiencia cercana a la vida diaria de sus creadores de contenido favoritos. Este aspecto también tiene repercusiones para las campañas políticas, permitiendo la emergencia de figuras desde esta red social,a partir de la construcción de una base de seguidores y un electorado potencial, a partir de la creación de contenido.",
			"Esta investigación analiza el uso de TikTok por parte de candidatos a alcaldías y gobernaciones en Bolivia durante la campaña electoral municipal y departamental de 2026. La base de datos analizada se construyó mediante una recolección manual. Inicialmente, se elaboró una lista de los candidatos a alcaldes en las cuatro ciudades más grandes del país (Santa Cruz, El Alto, La Paz y Cochabamba) y de los candidatos a gobernadores en los tres departamentos del eje central. En total, se monitorearon 87 cuentas de TikTok entre el 19 de enero al 6 de febrero de 2026. La base de datos de tiktoks comprende 1787 videos publicados entre el 10 de enero y el 06 de febrero de 2026. Para cada registro, se consideró el siguiente modelo de datos:",
			"• id: identificador del TikTok",
			"• candidato: nombre del candidato",
			"• fecha: fecha en la que se subió el tiktok",
			"• url: enlace al video",
			"• vistas: cantidad de vistas al momento de recolectar el dato, que sirve como una aproximación a la recepción que tuvo determinado contenido.",
			"• tema: macro categoría sobre lo que se habla en el video",
			"• subtema: subcategoría de lo que se habla en el video",
			"• tipo de video: tipo de contenido audiovisual producido en tiktok",
			"El análisis de datos y las visualizaciones se realizaron dentro del entorno y lenguaje de programación R. Para una mejor visualización de los gráficos, se presenta el informe en un archivo de R noteboook y HTML.",
		],
	},
	{
		slug: "conflicto-justicia-territorio",
		category: "Conflicto",
		title: "Justicia y territorio: el lenguaje politico de la crisis",
		summary:
			"Una lectura sobre legalidad, soberania local y conflictos por reconocimiento en escenarios territoriales complejos.",
		author: "Rene Gamarra",
		dateLabel: "12 abril 2026",
		dateISO: "2026-04-12",
		image: {
			src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
			alt: "Mesa de trabajo con documentos y personas en discusion",
		},
		body: [
			"La crisis territorial no se expresa solo en bloqueos o movilizacion, sino en disputas de sentido sobre justicia, autonomia y autoridad publica.",
			"Cada conflicto evidencia un desacople entre marcos normativos y realidades locales, especialmente en zonas donde coexisten multiples jurisdicciones.",
			"Comprender ese lenguaje politico es clave para imaginar salidas institucionales mas legitimas y duraderas.",
		],
	},
	{
		slug: "fragmentacion-democratica-2026",
		category: "Instituciones",
		title: "La fragmentacion democratica en crisis",
		summary:
			"Como la ruptura institucional profundiza el conflicto politico y debilita la gobernanza en Bolivia.",
		author: "Dr. Carlos Morales",
		dateLabel: "15 de abril",
		dateISO: "2026-04-15",
		body: [
			"La fragmentacion institucional erosiona la capacidad de decision y debilita los mecanismos de coordinacion entre niveles del Estado.",
			"En ausencia de pactos de largo plazo, la politica opera en clave reactiva, con incentivos de corto alcance.",
			"Revertir este escenario exige reconstruir confianza publica y reglas estables de negociacion democratica.",
		],
	},
	{
		slug: "actores-institucionales-conflicto",
		category: "Analisis",
		title: "Actores institucionales en pugna",
		summary:
			"Un analisis de las tensiones entre poderes y su impacto en la legitimidad estatal y la representacion ciudadana.",
		author: "Dra. Alejandra Rojas",
		dateLabel: "14 de abril",
		dateISO: "2026-04-14",
		body: [
			"Las tensiones entre organos del Estado no son anomalas aisladas, sino sintomas de un equilibrio institucional inestable.",
			"Cuando cada actor compite por imponer su narrativa de legitimidad, se debilita la percepcion de imparcialidad publica.",
			"El resultado es una ciudadania que observa mas confrontacion que cooperacion entre instituciones.",
		],
	},
	{
		slug: "memoria-representacion-politica",
		category: "Memoria",
		title: "Memoria colectiva y representacion politica",
		summary:
			"Como los procesos historicos moldean la configuracion de poderes y la demanda de inclusion politica en territorios.",
		author: "Prof. Javier Espinoza",
		dateLabel: "13 de abril",
		dateISO: "2026-04-13",
		body: [
			"La memoria politica no es un inventario del pasado, sino una estructura activa que organiza expectativas de reconocimiento.",
			"En Bolivia, los relatos historicos de exclusion e inclusion siguen marcando la legitimidad de liderazgos y agendas publicas.",
			"Sin una lectura territorial de esas memorias, toda reforma institucional nace incompleta.",
		],
	},
	{
		slug: "partidos-reposicionamiento-2026",
		category: "Partidos",
		title: "Reposicionamiento de actores: la lucha por el centro politico en 2026",
		summary:
			"Con las elecciones en el horizonte, bloques opuestos compiten por redefinir su identidad electoral.",
		author: "Roberto Montaño",
		dateLabel: "16 abril 2026",
		dateISO: "2026-04-16",
		image: {
			src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
			alt: "Imagen de actores politicos en debate publico",
		},
		body: [
			"La disputa por el centro politico no se reduce a posicionamiento ideologico: implica construir marcos de credibilidad y eficacia.",
			"Los partidos buscan ampliar base electoral sin perder identidad, una tension que multiplica contradicciones internas.",
			"La eleccion de 2026 podria definirse menos por liderazgos carismaticos y mas por capacidad de articulacion territorial.",
		],
	},
	{
		slug: "representacion-crisis-institucional",
		category: "Instituciones",
		title: "La crisis de representacion que ninguna reforma electoral ha resuelto",
		summary:
			"Diputados, senadores y movimientos: el deficit de confianza persiste incluso despues de cambios normativos.",
		author: "Ximena Ortiz",
		dateLabel: "15 abril 2026",
		dateISO: "2026-04-15",
		image: {
			src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
			alt: "Sesion parlamentaria y participacion ciudadana",
		},
		body: [
			"Las reformas electorales recientes corrigieron procedimientos, pero no resolvieron la distancia entre representantes y representados.",
			"La confianza no se restituye solo con nuevas reglas, sino con practicas politicas capaces de sostener escucha y rendicion de cuentas.",
			"El desafio pendiente es institucionalizar canales de mediacion con mayor legitimidad social.",
		],
	},
	{
		slug: "conflictividad-movilizacion-social",
		category: "Conflicto",
		title: "Movilizacion sin sintesis: la fragmentacion del malestar publico",
		summary:
			"Sindicatos, organizaciones indigenas y sectores urbanos demandan, pero sin un proyecto compartido de convergencia.",
		author: "Luis Ahumada",
		dateLabel: "14 abril 2026",
		dateISO: "2026-04-14",
		image: {
			src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
			alt: "Movilizacion y organizacion social en la calle",
		},
		body: [
			"La protesta social mantiene intensidad, pero la coordinacion intersectorial es cada vez mas dificil.",
			"Cada actor interpreta la crisis desde su propia urgencia, lo que limita acuerdos programaticos de mayor escala.",
			"El riesgo es una representacion atomizada del malestar, sin traduccion institucional efectiva.",
		],
	},
	{
		slug: "polarizacion-ciudadania-fragmentada",
		category: "Debate publico",
		title: "Polarizacion y ciudadania fragmentada: como hablamos de Bolivia ahora",
		summary:
			"Redes, medios y ciudad: los espacios donde se discute la nacion ya no conversan entre si.",
		author: "Sofia Gutierrez",
		dateLabel: "13 abril 2026",
		dateISO: "2026-04-13",
		image: {
			src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
			alt: "Debate publico y espacios de conversacion politica",
		},
		body: [
			"La esfera publica boliviana se ha segmentado en circuitos de informacion que rara vez se encuentran.",
			"Esa fragmentacion dificulta construir diagnósticos compartidos y amplifica percepciones de amenaza mutua.",
			"Sin puentes de conversacion entre comunidades discursivas, la polarizacion se vuelve estructura y no coyuntura.",
		],
	},
	{
		slug: "justicia-plurinacional-implementacion",
		category: "Justicia",
		title: "Justicia plurinacional: entre el mandato constitucional y la debilidad institucional",
		summary:
			"A mas de una decada, el sistema de justicia indigena coexiste con lo ordinario de manera tensa.",
		author: "Alvaro Flores",
		dateLabel: "15 abril 2026",
		dateISO: "2026-04-15",
		body: [
			"La justicia plurinacional avanza de manera desigual, condicionada por brechas de capacidad estatal y disputas de competencia.",
			"Persisten zonas grises entre jurisdiccion ordinaria e indigena, donde los conflictos se resuelven sin reglas claras de coordinacion.",
			"Consolidar el modelo exige inversion institucional, formacion y mecanismos de articulacion territorial.",
		],
	},
	{
		slug: "educacion-currículo-politico",
		category: "Educacion",
		title: "El curriculo como arena politica: que enseña Bolivia sobre si misma",
		summary:
			"Reforma, identidad y memoria: cada cambio curricular refleja luchas sobre que nacion queremos.",
		author: "Veronica Jimenez",
		dateLabel: "14 abril 2026",
		dateISO: "2026-04-14",
		body: [
			"El curriculo escolar funciona como dispositivo de disputa simbolica sobre historia, pertenencia e identidad colectiva.",
			"Las reformas educativas condensan proyectos de pais en tension, y por eso producen debates que trascienden el aula.",
			"En Bolivia, el desafio no es solo actualizar contenidos, sino sostener consensos pedagogicos de largo plazo.",
		],
	},
	{
		slug: "salud-publica-fragmentacion",
		category: "Salud publica",
		title: "Salud fragmentada: por que Bolivia no logra un sistema nacional coherente",
		summary:
			"Sistema publico, caja y municipios: multiples jurisdicciones que no siempre dialogan.",
		author: "Carlos Mendoza",
		dateLabel: "13 abril 2026",
		dateISO: "2026-04-13",
		body: [
			"La fragmentacion de la gobernanza sanitaria reduce eficiencia y profundiza desigualdades de acceso territorial.",
			"Sin interoperabilidad institucional, el sistema multiplica costos administrativos y limita continuidad de atencion.",
			"La reforma pendiente exige integrar financiamiento, rectoria y datos bajo una arquitectura comun.",
		],
	},
	{
		slug: "gobernanza-territorial-mineria",
		category: "Territorio",
		title: "Gobernanza territorial: mineria, tierra y conflicto en el centro del estado",
		summary:
			"Donde se toman decisiones sobre recursos, desarrollo y soberania, el Estado pierde autoridad frente a actores diversos.",
		author: "Jaime Sandoval",
		dateLabel: "12 abril 2026",
		dateISO: "2026-04-12",
		body: [
			"Los conflictos por recursos revelan una gobernanza territorial tensionada entre centralizacion normativa y dinamicas locales.",
			"Empresas, comunidades y gobiernos subnacionales negocian poder en marcos regulatorios frecuentemente incompletos.",
			"Fortalecer el Estado en territorio requiere capacidades tecnicas, coordinacion interinstitucional y legitimidad social.",
		],
	},
];

const articlesBySlug = new Map(articles.map((article) => [article.slug, article]));

export async function generateStaticParams() {
	return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const article = articlesBySlug.get(slug);

	if (!article) {
		return {
			title: "Articulo no encontrado | Bitacora",
		};
	}

	return {
		title: `${article.title} | Bitacora`,
		description: article.summary,
	};
}

export default async function ArticlePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const article = articlesBySlug.get(slug);

	if (!article) {
		notFound();
	}

	return (
		<article className="bg-background px-6 py-10 md:px-8 md:py-14 lg:px-12">
			<div className="mx-auto w-full max-w-245">
				<header className="border-b border-soft pb-8">
					<p className="editorial-category font-ui text-[11px] font-semibold uppercase tracking-[0.24em]">
						{article.category}
					</p>
					<h1 className="mt-3 font-display text-4xl leading-[0.95] tracking-[-0.02em] text-foreground md:text-5xl">
						{article.title}
					</h1>
					<p className="mt-5 max-w-[68ch] font-body text-lg leading-8 text-(--foreground-muted)">
						{article.summary}
					</p>

					<div className="mt-6 font-ui text-xs uppercase tracking-[0.14em] text-(--foreground-muted)">
						<span>{article.author}</span>
						<span className="mx-2" aria-hidden="true">
							·
						</span>
						<time dateTime={article.dateISO}>{article.dateLabel}</time>
					</div>
				</header>

				{article.image ? (
					  <div className="relative mt-8 aspect-video w-full overflow-hidden border border-soft bg-(--surface)">
						<Image
							src={article.image.src}
							alt={article.image.alt}
							fill
							className="object-cover"
							sizes="(min-width: 1024px) 980px, 100vw"
							priority
						/>
					</div>
				) : null}

				<div className="mt-9 space-y-6">
					{article.body.map((paragraph) => (
						<p
							key={paragraph}
							className="font-body text-[1.08rem] leading-8 text-foreground md:text-[1.14rem]"
						>
							{paragraph}
						</p>
					))}
				</div>

				<ShareButtons title={article.title} />

				<footer className="mt-10 border-t border-soft pt-6">
					<Link
						href="/"
						className="editorial-link font-ui text-xs font-semibold uppercase tracking-[0.2em]"
					>
						Volver a portada
					</Link>
				</footer>
			</div>
		</article>
	);
}
