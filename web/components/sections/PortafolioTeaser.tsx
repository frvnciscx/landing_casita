import { proyectos } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function PortafolioTeaser() {
  const destacados = proyectos.slice(0, 3);
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-16">
      <SectionHeading
        eyebrow="Portafolio"
        titulo="Proyectos en los que hemos trabajado"
        link={{ href: "/portafolio", label: "Ver portafolio" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destacados.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
