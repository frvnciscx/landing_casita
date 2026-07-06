"use client";

import { useRef, useState } from "react";
import type { TipoCotizacion } from "@/lib/types";
import {
  MAX_BYTES_DISENO,
  MAX_BYTES_IMAGEN,
  NOMBRES_TIPO,
  PASOS_COTIZADOR,
  OPCIONES_TIPO,
} from "@/lib/constants";

interface ArchivoInfo {
  name: string;
  size: number;
}

function formatoTamano(bytes: number): string {
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

export default function Cotizador() {
  const [panelAbierto, setPanelAbierto] = useState(false);
  const [tipo, setTipo] = useState<TipoCotizacion>("diseno");
  const [archivo, setArchivo] = useState<ArchivoInfo | null>(null);
  const [errorArchivo, setErrorArchivo] = useState("");
  const [imagen, setImagen] = useState<ArchivoInfo | null>(null);
  const [errorImagen, setErrorImagen] = useState("");
  const [mensaje, setMensaje] = useState("");

  const inputArchivo = useRef<HTMLInputElement>(null);
  const inputImagen = useRef<HTMLInputElement>(null);
  const correoRef = useRef<HTMLInputElement>(null);
  const enlaceRef = useRef<HTMLInputElement>(null);
  const dropzoneRef = useRef<HTMLDivElement>(null);

  function manejarArchivo(file: File | undefined) {
    setErrorArchivo("");
    if (!file) return;
    if (file.size > MAX_BYTES_DISENO) {
      setArchivo(null);
      if (inputArchivo.current) inputArchivo.current.value = "";
      setErrorArchivo(`Ese archivo pesa ${formatoTamano(file.size)}. El máximo permitido es 25 MB.`);
      return;
    }
    setArchivo({ name: file.name, size: file.size });
  }

  function manejarImagen(file: File | undefined) {
    setErrorImagen("");
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setImagen(null);
      if (inputImagen.current) inputImagen.current.value = "";
      setErrorImagen("Ese archivo no es una imagen. Usa JPG, PNG o WebP.");
      return;
    }
    if (file.size > MAX_BYTES_IMAGEN) {
      setImagen(null);
      if (inputImagen.current) inputImagen.current.value = "";
      setErrorImagen(`Esa imagen pesa ${formatoTamano(file.size)}. El máximo permitido es 10 MB.`);
      return;
    }
    setImagen({ name: file.name, size: file.size });
  }

  function quitarImagen() {
    setImagen(null);
    setErrorImagen("");
    if (inputImagen.current) inputImagen.current.value = "";
  }

  function cambiarTipo(nuevo: TipoCotizacion) {
    setTipo(nuevo);
    setErrorArchivo("");
    setErrorImagen("");
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMensaje("");
    const correo = correoRef.current;
    if (!correo || !correo.checkValidity()) {
      correo?.focus();
      return;
    }
    if (tipo === "diseno" && !archivo && !enlaceRef.current?.value.trim()) {
      setErrorArchivo("Sube un archivo o comparte un enlace para continuar.");
      dropzoneRef.current?.focus();
      return;
    }
    setMensaje(
      `¡Gracias! Revisaremos ${NOMBRES_TIPO[tipo]} y te enviaremos la cotización a ${correo.value}.`,
    );
    e.currentTarget.reset();
    setArchivo(null);
    setErrorArchivo("");
    quitarImagen();
    setTipo("diseno");
  }

  const inputClase =
    "rounded-lg border border-white/15 bg-white/5 text-white placeholder-stone-500 focus:ring-2 focus:ring-primary focus:border-primary h-12 px-4";

  return (
    <section id="cotiza" className="w-full bg-ink text-white py-16 lg:py-24 scroll-mt-24 border-y border-transparent dark:border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Impresión 3D a medida</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold leading-tight">
              ¿Tienes una idea en mente?
            </h2>
            <p className="text-lg text-stone-300 leading-relaxed max-w-lg">
              Convierte tus archivos digitales en moldes físicos, o encarga cortadores de galletas y toppers para pastel hechos a tu medida. Rápido, preciso y accesible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => setPanelAbierto((v) => !v)}
                aria-expanded={panelAbierto}
                aria-controls="panel-subida"
                className="inline-flex items-center justify-center rounded-full h-12 px-7 bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                <span className="material-symbols-outlined mr-2 text-[20px]" aria-hidden="true">request_quote</span>
                Cotizar mi idea
              </button>
            </div>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PASOS_COTIZADOR.map((p) => (
              <li key={p.titulo} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="size-11 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined" aria-hidden="true">{p.icon}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{p.titulo}</h3>
                <p className="text-sm text-stone-400">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {panelAbierto ? (
          <div id="panel-subida" className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8">
            <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
              <fieldset>
                <legend className="block text-sm font-medium text-white mb-3">¿Qué quieres cotizar?</legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {OPCIONES_TIPO.map((r) => (
                    <label key={r.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="tipo-cotizacion"
                        value={r.value}
                        checked={tipo === r.value}
                        onChange={() => cambiarTipo(r.value)}
                        className="peer sr-only"
                      />
                      <span className="flex h-full flex-col gap-1 rounded-2xl border border-white/15 bg-white/5 p-4 transition-colors hover:border-white/40 peer-checked:border-primary peer-checked:bg-primary/10 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">{r.icon}</span>
                        <span className="text-sm font-semibold text-white">{r.titulo}</span>
                        <span className="text-xs text-stone-400">{r.sub}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {tipo === "diseno" ? (
                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2" htmlFor="archivo-diseno">Sube tu archivo</label>
                    <div
                      ref={dropzoneRef}
                      tabIndex={0}
                      role="button"
                      aria-label="Elegir o arrastrar tu archivo de diseño"
                      onClick={() => inputArchivo.current?.click()}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          inputArchivo.current?.click();
                        }
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.add("border-primary");
                      }}
                      onDragLeave={(e) => e.currentTarget.classList.remove("border-primary")}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.remove("border-primary");
                        manejarArchivo(e.dataTransfer.files[0]);
                      }}
                      className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-white/25 hover:border-primary transition-colors p-8 text-center cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-4xl text-primary" aria-hidden="true">cloud_upload</span>
                      <p className="text-sm text-stone-200">
                        <span className="font-semibold text-white">Arrastra tu archivo aquí</span> o haz clic para elegirlo
                      </p>
                      <p className="text-xs text-stone-400">STL, OBJ o ZIP · Máx. 25&nbsp;MB</p>
                    </div>
                    <input
                      ref={inputArchivo}
                      id="archivo-diseno"
                      name="archivo"
                      type="file"
                      accept=".stl,.obj,.zip"
                      className="sr-only"
                      onChange={(e) => manejarArchivo(e.target.files?.[0])}
                    />
                    {archivo ? <p className="text-sm text-stone-200 mt-3">{archivo.name} · {formatoTamano(archivo.size)}</p> : null}
                    {errorArchivo ? <p role="alert" className="text-sm text-primary mt-3">{errorArchivo}</p> : null}
                  </div>
                  <div className="flex items-center gap-3" aria-hidden="true">
                    <span className="h-px flex-1 bg-white/10"></span>
                    <span className="text-xs text-stone-400 uppercase tracking-wide">o</span>
                    <span className="h-px flex-1 bg-white/10"></span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white" htmlFor="enlace-diseno">Comparte el enlace de tu archivo</label>
                    <input ref={enlaceRef} id="enlace-diseno" name="enlace" type="url" inputMode="url" placeholder="https://drive.google.com/…" className={inputClase} />
                    <p className="text-xs text-stone-400">Funciona con Google Drive, Dropbox, WeTransfer, etc.</p>
                  </div>
                </div>
              ) : null}

              {tipo === "cortador" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white" htmlFor="tamano-cortador">Tamaño del cortador</label>
                    <select id="tamano-cortador" name="tamano-cortador" defaultValue="7 cm" className={inputClase}>
                      <option value="5 cm">5 cm</option>
                      <option value="7 cm">7 cm (estándar)</option>
                      <option value="10 cm">10 cm</option>
                      <option value="12 cm">12 cm</option>
                      <option value="otro">Otro (indícalo en la descripción)</option>
                    </select>
                  </div>
                  <fieldset>
                    <legend className="text-sm font-medium text-white">Tipo de cortador</legend>
                    <div className="mt-3 flex flex-col gap-2">
                      <label className="inline-flex items-center gap-3 text-sm text-stone-200">
                        <input type="radio" name="tipo-cortador" value="Solo cortador" defaultChecked className="text-primary border-white/25 bg-white/5 focus:ring-primary focus:ring-offset-0" />
                        Solo cortador
                      </label>
                      <label className="inline-flex items-center gap-3 text-sm text-stone-200">
                        <input type="radio" name="tipo-cortador" value="Cortador y marcador" className="text-primary border-white/25 bg-white/5 focus:ring-primary focus:ring-offset-0" />
                        Cortador y marcador (sella el diseño)
                      </label>
                    </div>
                  </fieldset>
                </div>
              ) : null}

              {tipo === "topper" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white" htmlFor="tamano-topper">Tamaño del topper</label>
                    <select id="tamano-topper" name="tamano-topper" defaultValue="15 cm" className={inputClase}>
                      <option value="10 cm">10 cm</option>
                      <option value="15 cm">15 cm (estándar)</option>
                      <option value="20 cm">20 cm</option>
                      <option value="otro">Otro (indícalo en la descripción)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white" htmlFor="colores-topper">Número de colores</label>
                    <select id="colores-topper" name="colores-topper" defaultValue="1 color" className={inputClase}>
                      <option value="1 color">1 color</option>
                      <option value="2 colores">2 colores</option>
                      <option value="3 colores">3 colores</option>
                      <option value="4 o más colores">4 o más colores</option>
                    </select>
                  </div>
                </div>
              ) : null}

              {tipo !== "diseno" ? (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white" htmlFor="descripcion-cotizacion">
                      Descripción <span className="font-normal text-stone-400">(opcional)</span>
                    </label>
                    <textarea id="descripcion-cotizacion" name="descripcion" rows={3} placeholder="Ej. forma de dinosaurio con el nombre Mateo, lo necesito para el 20 de julio…" className="rounded-lg border border-white/15 bg-white/5 text-white placeholder-stone-500 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-white">
                      Imagen de referencia <span className="font-normal text-stone-400">(opcional)</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <button type="button" onClick={() => inputImagen.current?.click()} className="inline-flex items-center gap-2 rounded-full h-11 px-5 border border-white/25 text-sm font-medium text-white hover:border-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">add_photo_alternate</span>
                        Adjuntar imagen
                      </button>
                      {imagen ? <p className="text-sm text-stone-200">{imagen.name} · {formatoTamano(imagen.size)}</p> : null}
                      {imagen ? <button type="button" onClick={quitarImagen} className="text-sm text-stone-400 underline hover:text-white rounded">Quitar</button> : null}
                    </div>
                    <input ref={inputImagen} id="imagen-referencia" name="imagen" type="file" accept="image/*" className="sr-only" onChange={(e) => manejarImagen(e.target.files?.[0])} />
                    <p className="text-xs text-stone-400">JPG, PNG o WebP · Máx. 10&nbsp;MB</p>
                    {errorImagen ? <p role="alert" className="text-sm text-primary">{errorImagen}</p> : null}
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white" htmlFor="correo-diseno">Tu correo electrónico</label>
                <input ref={correoRef} id="correo-diseno" name="correo" type="email" required autoComplete="email" inputMode="email" spellCheck={false} placeholder="tu@correo.com" className={inputClase} />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 self-start rounded-full h-12 px-8 bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">send</span>
                Solicitar cotización
              </button>
              <p aria-live="polite" className="text-sm font-semibold text-primary min-h-[1.25rem]">{mensaje}</p>
            </form>
          </div>
        ) : null}
      </div>
    </section>
  );
}
