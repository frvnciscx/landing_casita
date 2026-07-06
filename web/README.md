# La Casita del Molde — App web (Next.js)

Migración del [sitio estático](../README.md) al stack objetivo. **Estado: solo el
home está migrado**; las demás rutas se irán construyendo página por página.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (modo `strict` + `noUncheckedIndexedAccess`)
- **Tailwind CSS 3**
- **Fraunces** vía `next/font/google`
- Listo para desplegar en **Vercel / Netlify** (Root Directory = `web`).

## Scripts

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo en http://localhost:3000
npm run build      # build de producción (incluye type-check)
npm run start      # servir el build
npm run typecheck  # solo verificación de tipos
npm run lint       # ESLint (si está configurado)
```

## Estructura

```
web/
├── app/                      # App Router
│   ├── layout.tsx            # <html>, fuente Fraunces, anti-flash de tema
│   ├── page.tsx              # Home (compone las secciones)
│   └── globals.css           # Tailwind + estilos base
├── components/
│   ├── layout/               # Header (nav + tema + menú), Footer
│   ├── sections/             # Hero, Cotizador, Categorias, Populares,
│   │                         #   PortafolioTeaser, BlogPreview, Newsletter
│   ├── ui/                   # Reutilizables: SectionHeading, Stars,
│   │                         #   ProductCard, ProjectCard, PostCard
│   └── widgets/              # Chatbot
├── lib/
│   ├── types.ts              # Producto, Post, Proyecto, Cart/CartItem, ...
│   ├── data.ts               # loaders tipados de los JSON + formatoPrecio
│   └── constants.ts          # NAV_LINKS, CATEGORIAS_HOME, CHAT_FAQ, config cotizador
├── data/                     # productos.json, posts.json, proyectos.json
├── public/                   # logo.png y estáticos
└── (config) package.json · tsconfig.json · tailwind.config.ts · next.config.mjs · postcss.config.mjs
```

## Convenciones

- **Componentes de servidor por defecto**; `"use client"` solo donde hay estado o
  eventos (Header, Cotizador, Newsletter, Chatbot).
- **Datos tipados**: todo el contenido pasa por `lib/types.ts`. Los JSON viven en
  `web/data/` (misma forma que el sitio estático).
- **Sin duplicación de UI**: encabezados de sección y tarjetas viven en
  `components/ui/` y se reutilizan.
- El **carrito** está por ahora solo a nivel de **tipos + UI** (sin lógica).

## Pendiente

- Rutas restantes: `/catalogo`, `/portafolio` (+ `/portafolio/[id]`), `/blog`
  (+ `/blog/[id]`), `/producto/[id]`, `/nosotros`, `/contacto`.
- Lógica real del carrito.
- `npm i sharp` para optimización de imágenes en producción y migrar `<img>`
  remotos a `next/image`.
- Definir el CMS en este stack (Decap sigue sirviendo con salida estática).
