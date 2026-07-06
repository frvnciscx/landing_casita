import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Casita del Molde - Moldes Personalizados y Herramientas Creativas",
  description:
    "Servicio de impresión 3D a medida y catálogo de moldes y herramientas personalizadas para repostería, jabones y proyectos creativos. Tu idea hecha molde.",
};

// Aplica el tema antes de pintar para evitar parpadeo (mismo comportamiento
// que el sitio estático: sigue al sistema salvo que haya preferencia guardada).
const themeScript = `(function () {
  function aplicarTema(oscuro) {
    document.documentElement.classList.toggle("dark", oscuro);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", oscuro ? "#141016" : "#faf8f6");
  }
  window.aplicarTema = aplicarTema;
  var guardado = null;
  try { guardado = localStorage.getItem("tema"); } catch (e) {}
  aplicarTema(guardado ? guardado === "oscuro" : window.matchMedia("(prefers-color-scheme: dark)").matches);
  try {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
      var g = null;
      try { g = localStorage.getItem("tema"); } catch (err) {}
      if (!g) aplicarTema(e.matches);
    });
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#faf8f6" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-paper text-text-main dark:bg-paper-dark dark:text-stone-200 antialiased">
        {children}
      </body>
    </html>
  );
}
