import Link from "next/link";
import type { Post } from "@/lib/types";

/** Tarjeta de artículo del blog. */
export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface dark:bg-surface-dark border border-black/5 dark:border-white/10 hover:border-primary/40 dark:hover:border-primary/40 transition-[border-color,box-shadow] duration-300 hover:shadow-xl hover:shadow-black/5"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-paper dark:bg-paper-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.imagen.src} alt={post.imagen.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-dark dark:text-primary">
          {post.emoji} {post.categoria}
        </p>
        <h3 className="font-display text-lg font-semibold text-ink dark:text-white leading-tight group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">
          {post.titulo}
        </h3>
        <p className="text-sm text-text-light dark:text-stone-400 leading-relaxed line-clamp-2">
          {post.resumen}
        </p>
        <p className="mt-auto pt-3 text-xs text-text-light dark:text-stone-500">
          {post.autor} · {post.fechaTexto} · {post.minutos} min
        </p>
      </div>
    </Link>
  );
}
