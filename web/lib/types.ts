// Tipos estrictos compartidos por el sitio.

/** Imagen con texto alternativo obligatorio (accesibilidad). */
export interface Imagen {
  src: string;
  alt: string;
}

/** Categorías del catálogo de productos. */
export type CategoriaProducto =
  | "Herramientas"
  | "Repostería"
  | "Jabones"
  | "Kits Temáticos";

/** Etiqueta destacada opcional de un producto. */
export type BadgeProducto = "Nuevo" | "Popular" | "Personalizable";

/** Un producto del catálogo. */
export interface Producto {
  id: string;
  nombre: string;
  categoria: CategoriaProducto | string;
  badge: BadgeProducto | string | null;
  precio: number;
  rating: number;
  reviews: number;
  desc: string;
  descLarga: string;
  specs: string[];
  imgs: Imagen[];
}

/** Un artículo del blog. */
export interface Post {
  id: string;
  titulo: string;
  categoria: string;
  categoriaSlug: string;
  emoji: string;
  destacado: boolean;
  autor: string;
  autorIniciales: string;
  fecha: string;
  fechaTexto: string;
  minutos: number;
  resumen: string;
  imagen: Imagen;
  contenido: string[];
}

/** Un proyecto del portafolio. */
export interface Proyecto {
  id: string;
  titulo: string;
  categoria: string;
  categoriaSlug: string;
  emoji: string;
  destacado: boolean;
  cliente: string;
  fecha: string;
  fechaTexto: string;
  resumen: string;
  imagen: Imagen;
  etiquetas: string[];
  /** Descripción larga opcional (un string por párrafo). */
  contenido?: string[];
  /** Galería de imágenes opcional. */
  galeria?: Imagen[];
}

// --- Carrito (solo tipos + UI por ahora; la lógica se implementa después) ---

/** Una línea del carrito de compras. */
export interface CartItem {
  productoId: string;
  nombre: string;
  precio: number;
  imagen: Imagen;
  cantidad: number;
}

/** Estado del carrito de compras. */
export interface Cart {
  items: CartItem[];
  /** Suma de precio * cantidad de todas las líneas. */
  subtotal: number;
}

/** Tipo de cotización que el cliente puede solicitar. */
export type TipoCotizacion = "diseno" | "cortador" | "topper";
