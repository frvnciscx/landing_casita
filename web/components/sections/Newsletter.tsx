"use client";

import { useState } from "react";

export default function Newsletter() {
  const [enviado, setEnviado] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const correo = form.elements.namedItem("correo") as HTMLInputElement | null;
    if (!correo || !correo.checkValidity()) {
      correo?.focus();
      return;
    }
    setEnviado(true);
    form.reset();
  }

  return (
    <section id="comunidad" className="w-full max-w-[1280px] mx-auto px-4 lg:px-10 pb-20">
      <div className="rounded-3xl bg-surface dark:bg-surface-dark border border-black/5 dark:border-white/10 px-6 py-12 md:px-12 text-center flex flex-col items-center gap-5">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink dark:text-white">
          Únete a la comunidad
        </h2>
        <p className="text-text-light dark:text-stone-400 max-w-xl">
          Recibe ideas, tutoriales y novedades de impresión 3D directo en tu correo. Sin spam.
        </p>
        <form onSubmit={onSubmit} noValidate className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <label htmlFor="correo-newsletter" className="sr-only">
            Tu correo electrónico
          </label>
          <input
            id="correo-newsletter"
            name="correo"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@correo.com"
            className="flex-1 rounded-full border border-black/15 dark:border-white/15 bg-paper dark:bg-paper-dark text-ink dark:text-white placeholder-text-light/70 dark:placeholder-stone-500 focus:ring-2 focus:ring-primary focus:border-primary h-12 px-5"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full h-12 px-7 bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            Suscribirme
          </button>
        </form>
        <p aria-live="polite" className="text-sm font-semibold text-primary-dark dark:text-primary min-h-[1.25rem]">
          {enviado ? "¡Gracias! Muy pronto recibirás novedades en tu correo." : ""}
        </p>
      </div>
    </section>
  );
}
