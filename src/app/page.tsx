import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import Process from "@/components/process/Process";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Background from "@/components/ui/Background";


export default function Home() {

  return (

    <main className="relative overflow-hidden bg-[#071522]">

      <Background />

      <div className="relative z-10 -space-y-px">

        <Header />

        <Hero />

        <Services />

        <Portfolio />

        <Process />

        <CTA />

        <Footer />

      </div>

    </main>

  );

}