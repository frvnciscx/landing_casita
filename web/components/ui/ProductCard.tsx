import Link from "next/link";
import { formatoPrecio } from "@/lib/data";
import type { Producto } from "@/lib/types";
import Stars from "@/components/ui/Stars";

/** Tarjeta de producto del catálogo. */
export default function ProductCard({ p }: { p: Producto }) {
  const badgeColor = p.badge === "Popular" ? "bg-amber-500" : "bg-primary";
  const img = p.imgs[0];
  return (
    <article className="group relative bg-surface dark:bg-surface-dark rounded-2xl border border-black/5 dark:border-white/10 hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-xl hover:shadow-black/5 transition-[box-shadow,border-color] duration-300 overflow-hidden flex flex-col">
      <div className="relative aspect-square bg-paper dark:bg-paper-dark overflow-hidden">
        {p.badge ? (
          <span className={`absolute top-3 left-3 z-10 ${badgeColor} text-white text-[11px] font-semibold px-2.5 py-1 rounded-full`}>
            {p.badge}
          </span>
        ) : null}
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img.src} alt={img.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover p-8" />
        ) : null}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-1 text-sm">
          <span role="img" aria-label={`Calificación: ${p.rating} de 5 estrellas`} className="flex items-center">
            <Stars rating={p.rating} />
          </span>
          <span className="text-text-light dark:text-stone-500 text-xs ml-1 tabular">({p.reviews})</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-ink dark:text-white leading-tight group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">
          <Link href="/catalogo" className="before:absolute before:inset-0 before:content-['']">
            {p.nombre}
          </Link>
        </h3>
        <p className="text-xs text-text-light dark:text-stone-400 line-clamp-2">{p.desc}</p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-lg font-semibold text-ink dark:text-white tabular">{formatoPrecio(p.precio)}</span>
          <button
            type="button"
            aria-label={`Agregar ${p.nombre} al carrito`}
            className="relative z-10 bg-ink text-white dark:bg-white dark:text-ink hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white rounded-full p-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </article>
  );
}
