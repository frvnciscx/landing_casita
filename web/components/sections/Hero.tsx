import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-10 pt-10 lg:pt-16 pb-14 lg:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark dark:text-primary">
            Servicio de impresión 3D a medida
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink dark:text-white">
            Tu idea, hecha{" "}
            <span className="relative inline-block">
              <span className="italic text-primary-dark dark:text-primary">molde</span>
              <svg
                className="absolute left-0 -bottom-1 w-full h-3 text-primary"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2,7 Q15,2 30,6 T60,5 T98,7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-text-light dark:text-stone-300 leading-relaxed max-w-lg">
            Convertimos tus archivos y bocetos en moldes, cortadores y piezas
            físicas con impresión 3D a medida. O explora nuestro catálogo de
            herramientas listas para tu próximo proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/#cotiza"
              className="inline-flex items-center justify-center rounded-full h-12 px-7 bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              <span className="material-symbols-outlined mr-2 text-[20px]" aria-hidden="true">
                lightbulb
              </span>
              Cotizar mi idea
            </Link>
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center rounded-full h-12 px-7 border border-black/15 dark:border-white/25 text-ink dark:text-white text-sm font-medium hover:border-ink/50 dark:hover:border-white/60 transition-colors"
            >
              Explorar catálogo
            </Link>
          </div>
          <p className="text-sm text-text-light dark:text-stone-400 pt-2">
            <span className="font-semibold text-ink dark:text-white">Formatos:</span> STL y OBJ · Materiales food-safe disponibles
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute z-20 -top-4 -right-2 lg:-top-6 lg:-right-6 size-24 lg:size-28 rounded-full bg-white text-ink shadow-xl flex items-center justify-center"
            aria-hidden="true"
          >
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
              <defs>
                <path
                  id="circulo-sello-home"
                  d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                />
              </defs>
              <text fontSize="11.5" fontWeight="600" letterSpacing="2.5" fill="currentColor">
                <textPath href="#circulo-sello-home" startOffset="0%">
                  LA CASITA DEL MOLDE • HECHO A MANO •
                </textPath>
              </text>
            </svg>
            <span className="material-symbols-outlined text-2xl relative">favorite</span>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-black/5 dark:border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfkGjoyf23R2SPqypZIy8mNh7VB7mSw0Y_GVlh3wbSQ_2yVcWqCS2rOtRYgo3GE9T258vo_zWF5ZpoXZ7MknRJwxQo1qle17CTM4g3FoEK_lkscZbUfgLzfPkfjMZNczxXEFhG_TdwPIHtOPZgHsskmjAu9MrualV1EhJUjfcibJkn_D3HqF-AAK76LycR-O_YwgvzkB-H2PhoZ-QYLFFH-rMZXl0oUd2wOdpUGj5Q7uzlcgBDm-QXUyYr-X4Us7mz-eGgcrX_ZU9M"
              alt="Primer plano de una impresora 3D extruyendo filamento rosa magenta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
