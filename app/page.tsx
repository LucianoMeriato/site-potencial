import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Pillars from "@/components/Pillars";
import Methodology from "@/components/Methodology";
import StudyTrails from "@/components/StudyTrails";
import Modalidades from "@/components/Modalidades";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <SplashScreen />
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Pillars />
        <Methodology />
        <StudyTrails />
        <Modalidades />
        <Teachers />
        <Testimonials />
        <Timeline />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
