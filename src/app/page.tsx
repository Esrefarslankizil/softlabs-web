import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Process />
        <Work />
        <Integrations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <DemoModal />
    </>
  );
}
