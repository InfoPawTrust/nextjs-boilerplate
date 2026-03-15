import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutPawTrustSection } from "../components/AboutPawTrustSection";
import { InsuranceComparisonSection } from "../components/InsuranceComparisonSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { HowItWorks } from "../components/HowItWorks";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Hundekrankenversicherung | PawTrust",
  description:
    "Finde die passende Hundekrankenversicherung – Vergleich, Tarife und Beratung bei PawTrust.",
};

export default function HundekrankenversicherungPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main>
        <HeroSection variant="dog" />
        <AboutPawTrustSection variant="dog" />
        <InsuranceComparisonSection />
        <BenefitsSection variant="dog" />
        <HowItWorks variant="dog" />
        <CTASection variant="dog" />
      </main>
      <Footer />
    </div>
  );
}
