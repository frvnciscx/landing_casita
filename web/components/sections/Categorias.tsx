import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { CATEGORIAS_HOME } from "@/lib/constants";

export default function Categorias() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-14">
      <SectionHeading
        eyebrow="Categorías"
        titulo="Una herramienta para cada oficio"
        link={{ href: "/catalogo", label: "Ver todo" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CATEGORIAS_HOME.map((c) => (
          <Link
            key={c.titulo}
            href="/catalogo"
            className="group relative overflow-hidden rounded-2xl bg-surface dark:bg-surface-dark border border-black/5 dark:border-white/10 hover:border-primary/40 dark:hover:border-primary/40 transition-[border-color,box-shadow] duration-300 hover:shadow-xl hover:shadow-black/5"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-dark dark:text-primary mb-2">
                {c.eyebrow}
              </p>
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white mb-2">
                {c.titulo}
              </h3>
              <p className="text-sm text-text-light dark:text-stone-400 leading-relaxed">
                {c.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
