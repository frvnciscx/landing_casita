import Link from "next/link";

interface SectionHeadingProps {
  eyebrow: string;
  titulo: string;
  /** Enlace opcional "ver más" a la derecha. */
  link?: { href: string; label: string };
}

/** Encabezado de sección reutilizable: eyebrow + título + enlace opcional. */
export default function SectionHeading({ eyebrow, titulo, link }: SectionHeadingProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-dark dark:text-primary mb-3">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink dark:text-white">
          {titulo}
        </h2>
      </div>
      {link ? (
        <Link
          className="group inline-flex items-center gap-1 text-sm font-semibold text-ink dark:text-white hover:text-primary-dark dark:hover:text-primary transition-colors rounded-lg"
          href={link.href}
        >
          {link.label}
          <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">
            arrow_forward
          </span>
        </Link>
      ) : null}
    </div>
  );
}
