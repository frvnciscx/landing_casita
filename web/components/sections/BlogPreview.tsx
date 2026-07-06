import { posts } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import PostCard from "@/components/ui/PostCard";

export default function BlogPreview() {
  const recientes = posts.slice(0, 3);
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-16">
      <SectionHeading
        eyebrow="Blog & tutoriales"
        titulo="Aprende con nosotros"
        link={{ href: "/blog", label: "Ver todos los artículos" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recientes.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
