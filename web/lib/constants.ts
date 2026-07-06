import type { TipoCotizacion } from "@/lib/types";

/** Enlace de navegación del sitio. */
export interface NavLink {
  href: string;
  label: string;
}

/** Navegación principal (escritorio y móvil). El estado activo se calcula por ruta. */
export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Tienda" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/nosotros", label: "Sobre Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

/** Categoría destacada en el home. */
export interface CategoriaHome {
  eyebrow: string;
  titulo: string;
  desc: string;
  img: string;
  alt: string;
}

export const CATEGORIAS_HOME: CategoriaHome[] = [
  {
    eyebrow: "Destacado",
    titulo: "Impresión 3D personalizada",
    desc: "Piezas y herramientas a medida para ceramistas, escultores y artistas plásticos, a partir de tu propio diseño.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx7MxVPLJXJoR7EkBxdrC-3neIhWZSdmnJ6NPTIkC-qGQl7uluOXDmEK3sSP-IDvtvdHvyi3QDAK3LMeeZEvYGXDknHmLkwKR8CNGL6PzOsPVpIXhHQBEqT-13y0PqqplK7exBqafAzFQ5eeVDqTFYSt0Gdw1kDQAwMz5DPZYzxRQzPOZ-Gnmnm9d0VpNvLrNut1AGrUDDr73GPwFTs5SUlXzp2UxLV1OFoVkIVNknF2q8l-b1k-8_YFoMa0JetH5VyTTppwpPzyLO",
    alt: "Herramientas de escultura en arcilla y moldes sobre una mesa",
  },
  {
    eyebrow: "Repostería",
    titulo: "Cortadores y moldes de repostería",
    desc: "Cortadores, marcadores y moldes food-safe para galletas, fondant y chocolate con el detalle que tu marca merece.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAInPR71rK6Tqb1Npjyz8_eMOKUSIWOO4yruPUUUMo6i2errmhMcE5x0l6PsL3CXQDq6x1EML1C6dYB_8XZTDtEMnnEZ66-fZdmr2tRkOQJCBMHFo05ac1fA3knvAh0scNuXzq6WYMqWF2_czrYugOiuTtgJ4WNJzu_KUgdvNDceuxPGLygB--ILdAhZloM3WQxcWBNeiHEJa4ZpiSQcNsvTLd3bMQBz74lWRzNqWeX-w4HCpb1_JXdKqFvOFLMQdPoXboMpFL15vsa",
    alt: "Cortadores de galletas de colores sobre una superficie de horneado",
  },
  {
    eyebrow: "Jabones y velas",
    titulo: "Moldes de silicona",
    desc: "Moldes flexibles de grado platino para jabones artesanales, velas y piezas de resina con desmolde impecable.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdi_MFJ4-EdkKmG2kp8jaxuLDkmMqbqmaSqLErjvA2v3_IGYMQMLZA1-i1---hXGzg_HO_vyfsJ6rd6b8RDMcYVNboKtn1x2bZZwA5BjIlhGYK45vIuP6hyIiv3v10kAkxpbSAme2F8NWUaFmQqpa4DxWd4YdypCNyr5FFJJE0iBs1QzEJvYDM6SL_Ll5j0iBYsYykAdL9qx02boYeQR23z5KjnHx7HG1LPuf-IwOjHDVfUWL6PfuPtGLXNuGcW-WyxohO2aLt3hho",
    alt: "Moldes de silicona con relieve floral para jabones artesanales",
  },
];

/** Pregunta y respuesta del asistente (FAQ). */
export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const CHAT_FAQ: FaqItem[] = [
  {
    pregunta: "¿Hacen envíos a todo el país?",
    respuesta:
      "Sí, enviamos a todo el país. Los pedidos del catálogo se despachan en 24–48 hrs y el tiempo de entrega depende de tu ubicación.",
  },
  {
    pregunta: "¿Los materiales son seguros para alimentos?",
    respuesta:
      "Sí. Usamos PLA Premium, un bioplástico food-safe certificado para contacto indirecto con alimentos, y silicona de grado platino para los moldes de jabón.",
  },
  {
    pregunta: "¿Puedo pedir un diseño personalizado?",
    respuesta:
      "Claro. Sube tu archivo STL u OBJ, o cuéntanos tu idea desde la sección Cotizar mi idea. Revisamos la viabilidad técnica sin costo.",
  },
  {
    pregunta: "¿Cuánto tardan en fabricar un pedido?",
    respuesta:
      "Los productos del catálogo se despachan en 24–48 hrs. Los diseños personalizados toman entre 3 y 7 días hábiles según la complejidad.",
  },
  {
    pregunta: "¿Cómo se cotiza una pieza personalizada?",
    respuesta:
      "El precio depende del tamaño, la complejidad y el material. Cuéntanos tu idea y te enviamos una cotización sin compromiso.",
  },
  {
    pregunta: "Quiero hablar con una persona",
    respuesta:
      "Con gusto. Escríbenos desde nuestra página de contacto y te respondemos a la brevedad.",
  },
];

// --- Configuración del cotizador ---

export const MAX_BYTES_DISENO = 25 * 1024 * 1024;
export const MAX_BYTES_IMAGEN = 10 * 1024 * 1024;

export const NOMBRES_TIPO: Record<TipoCotizacion, string> = {
  diseno: "tu diseño",
  cortador: "tu cortador de galletas",
  topper: "tu topper para pastel",
};

export interface PasoCotizador {
  icon: string;
  titulo: string;
  desc: string;
}

export const PASOS_COTIZADOR: PasoCotizador[] = [
  { icon: "cloud_upload", titulo: "1. Cuéntanos tu idea", desc: "Sube tu archivo STL u OBJ, o describe el cortador o topper que necesitas." },
  { icon: "rule", titulo: "2. Verificamos", desc: "Revisamos la viabilidad técnica y te confirmamos materiales y tiempos." },
  { icon: "print", titulo: "3. Fabricamos", desc: "Producción de alta resolución con materiales seguros para tu uso." },
  { icon: "local_shipping", titulo: "4. Recibe en casa", desc: "Envío rápido y seguro a cualquier parte del país." },
];

export interface OpcionTipo {
  value: TipoCotizacion;
  icon: string;
  titulo: string;
  sub: string;
}

export const OPCIONES_TIPO: OpcionTipo[] = [
  { value: "diseno", icon: "view_in_ar", titulo: "Diseño propio", sub: "Tu archivo STL, OBJ o enlace" },
  { value: "cortador", icon: "cookie", titulo: "Cortador de galletas", sub: "Elige tamaño y tipo" },
  { value: "topper", icon: "cake", titulo: "Topper para pastel", sub: "Elige tamaño y colores" },
];
