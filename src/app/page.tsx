import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import ParallaxV1 from "@/components/ParallaxV1/ParallaxV1";
import LogoShowcase from "@/components/LogoShowcase/LogoShowcase";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ParallaxV1 />
        <LogoShowcase />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
