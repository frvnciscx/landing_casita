import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-surface dark:bg-surface-dark border-t border-black/5 dark:border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
              <p className="font-display font-semibold text-lg text-ink dark:text-white">
                La Casita del Molde
              </p>
            </div>
            <p className="text-sm text-text-light dark:text-stone-400 mb-4 max-w-xs">
              Transformando ideas en realidad, capa por capa. Calidad y precisión en cada impresión.
            </p>
            <div className="flex gap-3">
              <a className="text-text-light dark:text-stone-400 hover:text-primary-dark dark:hover:text-primary transition-colors rounded-full" href="#" aria-label="Facebook de La Casita del Molde">
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6h1.4V4.9c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.5-4 4.1V11H7.5v3H10v7h3.5Z" /></svg>
              </a>
              <a className="text-text-light dark:text-stone-400 hover:text-primary-dark dark:hover:text-primary transition-colors rounded-full" href="#" aria-label="Instagram de La Casita del Molde">
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5Zm5.25-3.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" /></svg>
              </a>
              <a className="text-text-light dark:text-stone-400 hover:text-primary-dark dark:hover:text-primary transition-colors rounded-full" href="#" aria-label="X (Twitter) de La Casita del Molde">
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.2 3h2.9l-6.4 7.3L21.3 21h-5.9l-4.6-6-5.3 6H2.6l6.9-7.8L2.1 3H8l4.2 5.5L17.2 3Zm-1 16.2h1.6L7.1 4.7H5.4l10.8 14.5Z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-ink dark:text-white mb-4">Tienda</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-light dark:text-stone-400">
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/catalogo">Catálogo completo</Link></li>
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/#popular">Lo más popular</Link></li>
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/#cotiza">Impresión 3D a medida</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-ink dark:text-white mb-4">Empresa</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-light dark:text-stone-400">
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/nosotros">Sobre Nosotros</Link></li>
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/portafolio">Portafolio</Link></li>
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/nosotros#proceso">Proceso creativo</Link></li>
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/blog">Blog</Link></li>
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-ink dark:text-white mb-4">Aprende</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-light dark:text-stone-400">
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/blog?categoria=reposteria">Repostería creativa</Link></li>
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/blog?categoria=jabones">Jabones artesanales</Link></li>
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/blog?categoria=impresion-3d">Impresión 3D</Link></li>
              <li><Link className="hover:text-primary-dark dark:hover:text-primary transition-colors" href="/contacto#faq">Preguntas frecuentes</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/5 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-light dark:text-stone-500">
          <p>© 2026 La Casita del Molde. Todos los derechos reservados.</p>
          <p>Diseñado con ❤️ para creadores.</p>
        </div>
      </div>
    </footer>
  );
}
