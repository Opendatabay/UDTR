import Navbar from "@/components/Navbar/Navbar";
import Background from "@/components/Background/Background";
import Hero from "@/components/Hero/Hero";
import ParallaxV1 from "@/components/ParallaxV1/ParallaxV1";
import HowItWorksV1 from "@/components/HowItWorksV1/HowItWorksV1";
import WhyItMatters from "@/components/WhyItMatters/WhyItMatters";
import HowItWorksV5 from "@/components/HowItWorksV5/HowItWorksV5";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <ParallaxV1 />
          <HowItWorksV1 />
          <WhyItMatters />
          <HowItWorksV5 />
        </main>
        <Footer />
      </div>
    </>
  );
}
