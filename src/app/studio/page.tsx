import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import Background from "@/components/ui/Background";
import Studio from "@/components/studio/Studio";


export default function StudioPage() {

  return (

    <main className="relative overflow-hidden">

      <Background />

      <div className="relative z-10">

        <Header />
6
        <Studio />

        <Footer />

      </div>

    </main>

  );
}