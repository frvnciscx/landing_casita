import productosJson from "@/data/productos.json";
import postsJson from "@/data/posts.json";
import proyectosJson from "@/data/proyectos.json";
import type { Producto, Post, Proyecto } from "@/lib/types";

// La forma de los JSON (objeto raíz con la clave del arreglo) coincide con lo
// que espera Decap CMS. Casteamos vía `unknown` porque TS infiere tipos
// literales al importar JSON.
export const productos: Producto[] = (
  productosJson as unknown as { productos: Producto[] }
).productos;

export const posts: Post[] = (postsJson as unknown as { posts: Post[] }).posts;

export const proyectos: Proyecto[] = (
  proyectosJson as unknown as { proyectos: Proyecto[] }
).proyectos;

/** Formatea un precio en pesos mexicanos. */
export function formatoPrecio(valor: number): string {
  return (
    "$" +
    valor.toLocaleString("es-MX", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}
