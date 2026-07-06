# La Casita del Molde — Sitio web

Sitio de **La Casita del Molde**: servicio de impresión 3D a medida y catálogo de
moldes, cortadores y herramientas personalizadas para repostería, jabones y
proyectos creativos.

El repositorio contiene **dos versiones** del sitio:

| Versión | Ubicación | Estado |
|--------|-----------|--------|
| **Sitio estático** (HTML + Tailwind por CDN + JS vanilla) | raíz del repo | **Vigente / en producción** |
| **App Next.js** (React + TypeScript + Tailwind) | [`web/`](web/) | **Migración en curso** (solo el home) |

La versión estática es la que se publica hoy. La app en `web/` es la migración al
stack objetivo (ver [`web/README.md`](web/README.md)); avanza página por página y
**aún no reemplaza** al sitio estático.

---

## Sitio estático (raíz)

Sin build ni dependencias: son archivos HTML servidos tal cual. Estilos con
[Tailwind CSS por CDN](https://cdn.tailwindcss.com) y JavaScript vanilla embebido.

### Páginas

| Archivo | Descripción |
|--------|-------------|
| `index.html` | Home: hero, **cotizador multi-tipo**, categorías, populares, teaser de portafolio, blog y newsletter. |
| `catalogo.html` | Catálogo de productos (filtros + orden), data-driven desde `data/productos.json`. |
| `producto.html` | Detalle de producto (`?id=<slug>`). |
| `portafolio.html` | Portafolio de proyectos con filtro por categoría, data-driven desde `data/proyectos.json`. |
| `proyecto.html` | Detalle de proyecto (`?id=<slug>`). |
| `blog.html` | Blog con filtro por categoría, data-driven desde `data/posts.json`. |
| `post.html` | Detalle de artículo (`?id=<slug>`). |
| `nosotros.html` | Sobre nosotros: historia, filosofía, pilares y proceso creativo. |
| `contacto.html` | Contacto + FAQ (acordeón). |

Características transversales: menú móvil, **modo claro/oscuro** con toggle y
persistencia, asistente/chatbot de FAQ flotante, y tipografía **Fraunces** en todo
el sitio.

### Contenido (data-driven)

El catálogo, el blog y el portafolio se renderizan desde JSON en [`data/`](data/):

- `data/productos.json` → `{ "productos": [...] }`
- `data/posts.json` → `{ "posts": [...] }`
- `data/proyectos.json` → `{ "proyectos": [...] }`

> La forma de objeto raíz (`{ "clave": [...] }`) es requisito de Decap CMS.

### Administración de contenido (Decap CMS)

Panel en [`admin/`](admin/) ([`admin/config.yml`](admin/config.yml)) con tres
colecciones: **Catálogo**, **Portafolio** y **Blog**. Permite editar los JSON sin
tocar código. Backend `git-gateway` (Netlify). **Requiere configuración manual**
(ver _Despliegue_) para funcionar en producción.

### Cómo previsualizar

Cualquier servidor estático sirve. En Windows:

```bat
iniciar-servidor.bat            REM levanta http://localhost:8790
```

o manualmente:

```bash
python -m http.server 8790
```

Abre `http://localhost:8790/`.

---

## App Next.js (`web/`)

Migración al stack objetivo: **Next.js (App Router) + TypeScript estricto +
Tailwind CSS**, lista para desplegar en Vercel/Netlify. Solo el **home** está
migrado. Detalles y estructura en [`web/README.md`](web/README.md).

```bash
cd web
npm install
npm run dev        # http://localhost:3000
```

---

## Despliegue

### Sitio estático
Publica la raíz del repo en cualquier hosting estático (Netlify, Vercel, GitHub
Pages, etc.). No requiere build.

### CMS (`/admin`) — pasos manuales pendientes
Para que el panel funcione en producción:
1. Publicar el repo en **Netlify**.
2. Activar **Netlify Identity** + **Git Gateway** en el sitio.
3. Invitar al equipo desde Netlify Identity.
4. En `admin/config.yml`, reemplazar `site_url` / `display_url` por la URL real.

### App Next.js
Al desplegar `web/` en Vercel/Netlify, configurar el **Root Directory = `web`**.

---

## Pendientes

- **Contenido real**: reemplazar los proyectos de ejemplo de `data/proyectos.json`
  (solo `Gomitas` es real), y los **logos placeholder** ("Logoipsum") del hero de
  `nosotros.html` por logos reales.
- **CMS**: completar la configuración de Netlify Identity + Git Gateway.
- **Backend real** para formularios (cotizador, contacto, newsletter): hoy son
  demos de front-end (solo muestran confirmación).
- **Redes sociales**: enlaces del footer aún en `href="#"`.
- **Migración Next.js**: faltan el resto de páginas (catálogo, portafolio, blog,
  nosotros, contacto y sus detalles) y la lógica real del carrito.

---

## Sistema de diseño

- **Color de acento**: magenta `#ff0099` (`primary`), `#cc007a` (`primary-dark`).
- **Tinta / titulares**: `ink #1b1520`. **Fondos**: `paper #faf8f6` / `paper-dark #141016`.
- **Tipografía**: **Fraunces** (serif) en todo el sitio.
- **Modo oscuro**: por clase, con toggle manual y preferencia guardada en `localStorage`.
