import Link from "next/link";
import type { Proyecto } from "@/lib/types";

/** Tarjeta de proyecto del portafolio. */
export default function ProjectCard({ p }: { p: Proyecto }) {
  return (
    <Link
      href={`/portafolio?categoria=${p.categoriaSlug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface dark:bg-surface-dark border border-black/5 dark:border-white/10 hover:border-primary/40 dark:hover:border-primary/40 transition-[border-color,box-shadow] duration-300 hover:shadow-xl hover:shadow-black/5"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-paper dark:bg-paper-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.imagen.src} alt={p.imagen.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-dark dark:text-primary">
          {p.emoji} {p.categoria}
        </p>
        <h3 className="font-display text-lg font-semibold text-ink dark:text-white leading-tight group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">
          {p.titulo}
        </h3>
        <p className="text-sm text-text-light dark:text-stone-400 leading-relaxed line-clamp-2">
          {p.resumen}
        </p>
      </div>
    </Link>
  );
}
