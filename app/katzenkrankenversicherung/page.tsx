import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutPawTrustSection } from "../components/AboutPawTrustSection";
import { InsuranceComparisonSection } from "../components/InsuranceComparisonSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { HowItWorks } from "../components/HowItWorks";
import { FAQSection } from "../components/FAQSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Katzenkrankenversicherung vergleichen | PawTrust",
  description:
    "Vergleiche Katzenkrankenversicherungen mit bis zu 100 % Kostenübernahme. Finde schnell und kostenlos den passenden Schutz für deine Katze.",
};

export default function KatzenkrankenversicherungPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main>
        <HeroSection variant="cat" />
        <AboutPawTrustSection variant="cat" />
        <InsuranceComparisonSection />
        <BenefitsSection variant="cat" />
        <HowItWorks variant="cat" />
        <FAQSection variant="cat" />
        <CTASection variant="cat" />
      </main>
      <Footer />
    </div>
  );
}
