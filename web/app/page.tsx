import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Cotizador from "@/components/sections/Cotizador";
import Categorias from "@/components/sections/Categorias";
import Populares from "@/components/sections/Populares";
import PortafolioTeaser from "@/components/sections/PortafolioTeaser";
import BlogPreview from "@/components/sections/BlogPreview";
import Newsletter from "@/components/sections/Newsletter";
import Chatbot from "@/components/widgets/Chatbot";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-[72px]">
      <Header />
      <main id="contenido" className="flex-1 flex flex-col">
        <Hero />
        <Cotizador />
        <Categorias />
        <Populares />
        <PortafolioTeaser />
        <BlogPreview />
        <Newsletter />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
