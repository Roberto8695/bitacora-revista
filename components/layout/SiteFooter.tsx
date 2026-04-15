import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Revista",
    links: [
      { label: "Archivo", href: "/archivo" },
      { label: "Ediciones", href: "/ediciones" },
      { label: "Suscripciones", href: "/suscripciones" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Publicidad", href: "/publicidad" },
      { label: "Directorio", href: "/directorio" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaTwitter className="w-4 h-4" />,
    href: "https://twitter.com/bitacorabo",
    label: "Twitter",
  },
  {
    icon: <FaFacebookF className="w-4 h-4" />,
    href: "https://facebook.com/bitacorabo",
    label: "Facebook",
  },
  {
    icon: <FaInstagram className="w-4 h-4" />,
    href: "https://instagram.com/bitacorabo",
    label: "Instagram",
  },
  {
    icon: <FaYoutube className="w-4 h-4" />,
    href: "https://youtube.com/bitacorabo",
    label: "YouTube",
  },
];

interface FooterLegalLink {
  label: string;
  href: string;
}

const legalLinks: FooterLegalLink[] = [
  { label: "Términos de uso", href: "/terminos" },
  { label: "Política de privacidad", href: "/privacidad" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#1f3a42] text-[#e8e3db] border-t border-[#2d5566]">
      {/* Main footer content */}
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          {/* Left column: Bitácora branding and description */}
          <div className="md:col-span-4">
            <h3 id="bita" className="font-display text-2xl md:text-3xl mb-4 text-[#f7f3ec]">
              Bitácora
            </h3>
            <p className="font-body text-sm md:text-base leading-relaxed text-[#b8afa8] max-w-sm">
              Revista digital boliviana dedicada al análisis del pensamiento
              público, la política, la cultura y el conflicto. Contribuyendo a
              la reflexión crítica sobre nuestra época.
            </p>
          </div>

          {/* Middle columns: Navigation sections */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            {footerSections.map((section) => (
              <nav key={section.title}>
                <p className="font-ui font-semibold uppercase tracking-widest text-xs text-[#f7f3ec] mb-4">
                  {section.title}
                </p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-ui text-sm text-[#b8afa8] hover:text-[#f7f3ec] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Right column: Social links */}
          <div className="md:col-span-3">
            <p className="font-ui font-semibold uppercase tracking-widest text-xs text-[#f7f3ec] mb-4">
              Síguenos
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#2d5566] flex items-center justify-center text-[#b8afa8] hover:text-[#f7f3ec] hover:border-[#f7f3ec] transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2d5566]"></div>

        {/* Bottom section: Copyright and legal links */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-ui text-xs text-[#6d6461] tracking-wide">
            © 2026 Bitácora. Revista boliviana de pensamiento público.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-ui text-xs text-[#6d6461] hover:text-[#b8afa8] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
