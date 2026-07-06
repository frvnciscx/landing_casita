import { productos } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";

export default function Populares() {
  const destacados = productos.slice(0, 4);
  return (
    <section id="popular" className="w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-16">
      <SectionHeading
        eyebrow="Lo más popular"
        titulo="Favoritos de la comunidad"
        link={{ href: "/catalogo", label: "Ver catálogo" }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destacados.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
