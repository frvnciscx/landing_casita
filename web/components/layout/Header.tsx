"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

function esActivo(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [oscuro, setOscuro] = useState(false);

  useEffect(() => {
    setOscuro(document.documentElement.classList.contains("dark"));
  }, []);

  function alternarTema() {
    const nuevo = !document.documentElement.classList.contains("dark");
    const win = window as unknown as { aplicarTema?: (o: boolean) => void };
    if (win.aplicarTema) win.aplicarTema(nuevo);
    else document.documentElement.classList.toggle("dark", nuevo);
    try {
      localStorage.setItem("tema", nuevo ? "oscuro" : "claro");
    } catch {
      /* almacenamiento no disponible */
    }
    setOscuro(nuevo);
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-paper/80 dark:bg-paper-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/10">
      <div className="px-4 lg:px-10 flex items-center justify-between py-4 max-w-[1280px] mx-auto w-full">
        <Link href="/" className="flex items-center gap-3 rounded-lg">
          <Image src="/logo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="font-display text-xl font-semibold tracking-tight text-ink dark:text-white">
            La Casita del Molde
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9" aria-label="Principal">
          {NAV_LINKS.map((e) => {
            const activo = esActivo(pathname, e.href);
            return (
              <Link
                key={e.href}
                href={e.href}
                aria-current={activo ? "page" : undefined}
                className={
                  activo
                    ? "text-sm font-medium text-ink dark:text-white relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                    : "text-sm font-medium text-text-light dark:text-stone-400 hover:text-ink dark:hover:text-white transition-colors"
                }
              >
                {e.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={alternarTema}
            aria-label={oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="p-2 rounded-lg text-ink dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] dark:hidden" aria-hidden="true">
              dark_mode
            </span>
            <span className="material-symbols-outlined text-[20px] hidden dark:inline" aria-hidden="true">
              light_mode
            </span>
          </button>
          <Link
            href="/#cotiza"
            className="hidden sm:inline-flex items-center justify-center rounded-full h-10 px-5 bg-ink text-white dark:bg-white dark:text-ink text-sm font-semibold hover:bg-ink/90 dark:hover:bg-white/90 transition-colors"
          >
            <span className="mr-2 material-symbols-outlined text-[18px]" aria-hidden="true">
              lightbulb
            </span>
            <span>Cotizar mi idea</span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            className="lg:hidden p-2 text-ink dark:text-white rounded-lg"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {menuAbierto ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      <div
        id="menu-movil"
        hidden={!menuAbierto}
        className="lg:hidden border-t border-black/5 dark:border-white/10 bg-paper dark:bg-paper-dark px-4 pb-6 pt-2"
      >
        <nav className="flex flex-col" aria-label="Menú móvil">
          {NAV_LINKS.map((e) => {
            const activo = esActivo(pathname, e.href);
            return (
              <Link
                key={e.href}
                href={e.href}
                aria-current={activo ? "page" : undefined}
                onClick={() => setMenuAbierto(false)}
                className={
                  activo
                    ? "py-3 text-base font-semibold text-ink dark:text-white border-b border-black/5 dark:border-white/10"
                    : "py-3 text-base font-medium text-text-light dark:text-stone-300 border-b border-black/5 dark:border-white/10 hover:text-ink dark:hover:text-white"
                }
              >
                {e.label}
              </Link>
            );
          })}
          <Link
            href="/#cotiza"
            onClick={() => setMenuAbierto(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full h-11 px-6 bg-ink text-white dark:bg-white dark:text-ink text-sm font-semibold"
          >
            Cotizar mi idea
          </Link>
        </nav>
      </div>
    </header>
  );
}
