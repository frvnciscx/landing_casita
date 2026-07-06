"use client";

import { useEffect, useRef, useState } from "react";
import { CHAT_FAQ, type FaqItem } from "@/lib/constants";

interface Mensaje {
  contenido: string;
  esUsuario: boolean;
  html?: boolean;
}

export default function Chatbot() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [mostrarChips, setMostrarChips] = useState(true);
  const cerrarRef = useRef<HTMLButtonElement>(null);
  const botonRef = useRef<HTMLButtonElement>(null);
  const finRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    finRef.current?.scrollIntoView({ block: "end" });
  }, [mensajes, mostrarChips]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && abierto) cerrar();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [abierto]);

  function abrir() {
    setAbierto(true);
    if (mensajes.length === 0) {
      setMensajes([
        {
          contenido: "¡Hola! 👋 Soy el asistente de La Casita del Molde. Elige una pregunta para empezar.",
          esUsuario: false,
        },
      ]);
      setMostrarChips(true);
    }
    setTimeout(() => cerrarRef.current?.focus(), 0);
  }

  function cerrar() {
    setAbierto(false);
    botonRef.current?.focus();
  }

  function seleccionar(item: FaqItem) {
    setMostrarChips(false);
    setMensajes((prev) => [...prev, { contenido: item.pregunta, esUsuario: true }]);
    setTimeout(() => {
      setMensajes((prev) => [...prev, { contenido: item.respuesta, esUsuario: false }]);
      setMostrarChips(true);
    }, 400);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {abierto ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Asistente de La Casita del Molde"
          className="w-[92vw] max-w-sm rounded-3xl bg-surface dark:bg-surface-dark border border-black/10 dark:border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[70vh]"
        >
          <div className="flex items-center justify-between gap-3 px-5 py-4 bg-ink text-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="size-9 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <span className="material-symbols-outlined text-[20px]">forum</span>
              </span>
              <div>
                <p className="font-display font-semibold leading-tight text-sm">Asistente LCDM</p>
                <p className="text-xs text-stone-300">Respuestas al instante</p>
              </div>
            </div>
            <button ref={cerrarRef} type="button" onClick={cerrar} aria-label="Cerrar chat" className="p-1.5 rounded-full hover:bg-white/10 transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">close</span>
            </button>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 flex flex-col gap-3" aria-live="polite">
            {mensajes.map((m, i) => (
              <div
                key={i}
                className={
                  m.esUsuario
                    ? "self-end max-w-[85%] rounded-2xl rounded-br-sm bg-ink dark:bg-white text-white dark:text-ink px-4 py-2.5 text-sm"
                    : "self-start max-w-[85%] rounded-2xl rounded-bl-sm bg-paper dark:bg-paper-dark text-text-main dark:text-stone-200 px-4 py-2.5 text-sm leading-relaxed"
                }
              >
                {m.contenido}
              </div>
            ))}
            {mostrarChips ? (
              <div className="flex flex-wrap gap-2">
                {CHAT_FAQ.map((item) => (
                  <button
                    key={item.pregunta}
                    type="button"
                    onClick={() => seleccionar(item)}
                    className="px-3.5 py-2 rounded-full border border-black/10 dark:border-white/15 text-xs font-medium text-ink dark:text-white hover:border-primary hover:text-primary-dark dark:hover:text-primary transition-colors"
                  >
                    {item.pregunta}
                  </button>
                ))}
              </div>
            ) : null}
            <div ref={finRef} />
          </div>
          <div className="border-t border-black/5 dark:border-white/10 px-4 py-3 text-xs text-text-light dark:text-stone-400 flex-shrink-0">
            ¿No encuentras tu respuesta?{" "}
            <a href="/contacto" className="font-semibold text-primary-dark dark:text-primary hover:underline">Escríbenos</a>.
          </div>
        </div>
      ) : null}
      <button
        ref={botonRef}
        type="button"
        onClick={() => (abierto ? cerrar() : abrir())}
        aria-label={abierto ? "Cerrar asistente de ayuda" : "Abrir asistente de ayuda"}
        aria-expanded={abierto}
        className="size-14 rounded-full bg-primary text-white shadow-xl shadow-primary/30 flex items-center justify-center hover:bg-primary-dark transition-colors"
      >
        <span className="material-symbols-outlined" aria-hidden="true">chat</span>
      </button>
    </div>
  );
}
