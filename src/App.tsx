import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { TrustBar } from "./sections/TrustBar";
import { PainSection } from "./sections/PainSection";
import { SolutionSection } from "./sections/SolutionSection";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";
import { FooterHero } from "./sections/FooterHero";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <PainSection />
      <SolutionSection />
      <Testimonials />
      <FAQ />
      <FooterHero />
      <Footer />
    </main>
  );
}

export default App;
