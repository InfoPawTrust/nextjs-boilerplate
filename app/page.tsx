import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { HowItWorks } from "./components/HowItWorks";
import { InsuranceComparisonSection } from "./components/InsuranceComparisonSection";
import { TrustSection } from "./components/TrustSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorks />
        <InsuranceComparisonSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
