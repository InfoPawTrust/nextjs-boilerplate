import { Navbar } from "../components/Navbar";
import { FAQSection } from "../components/FAQSection";
import { InsuranceComparisonSection } from "../components/InsuranceComparisonSection";
import { AboutPawTrustSection } from "../components/AboutPawTrustSection";
import { HowItWorks } from "../components/HowItWorks";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "FAQ | PawTrust",
  description:
    "Häufige Fragen zu Tierkrankenversicherung und PawTrust – Hund, Katze und Vergleich.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main>
        <FAQSection variant="full" background="white" />
        <InsuranceComparisonSection />
        <AboutPawTrustSection variant="general" />
        <HowItWorks variant="general" />
        <CTASection variant="general" />
      </main>
      <Footer />
    </div>
  );
}
