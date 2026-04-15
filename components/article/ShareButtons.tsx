"use client";

import { useMemo, type ReactNode } from "react";
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type ShareButtonsProps = {
  title: string;
};

type ShareNetwork = {
  name: string;
  href: string;
  icon: ReactNode;
};

export default function ShareButtons({ title }: ShareButtonsProps) {
  const encodedTitle = encodeURIComponent(title);

  const pageUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return window.location.href;
  }, []);

  const encodedUrl = encodeURIComponent(pageUrl);

  const networks: ShareNetwork[] = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FaFacebookF aria-hidden="true" className="h-3.5 w-3.5" />,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <FaXTwitter aria-hidden="true" className="h-3.5 w-3.5" />,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: <FaWhatsapp aria-hidden="true" className="h-3.5 w-3.5" />,
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <FaTelegramPlane aria-hidden="true" className="h-3.5 w-3.5" />,
    },
  ];

  if (!pageUrl) {
    return null;
  }

  return (
    <section aria-label="Compartir articulo" className="mt-8 border-t border-soft pt-6">
      <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
        Compartir
      </p>
      <div className="mt-3 flex flex-wrap gap-2.5">
        {networks.map((network) => (
          <a
            key={network.name}
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Compartir en ${network.name}`}
            className="font-ui inline-flex items-center gap-2 border border-soft px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors duration-200 hover:border-[var(--accent-petroleum)] hover:text-[var(--accent-petroleum)]"
          >
            {network.icon}
            <span>{network.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
