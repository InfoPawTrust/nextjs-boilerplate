import { Suspense } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FunnelPageClient } from "./FunnelPageClient";

function FunnelFallback() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main className="flex min-h-[60vh] items-center justify-center pb-16 pt-4">
        <p className="text-dark-slate/70">Laden …</p>
      </main>
      <Footer />
    </div>
  );
}

export default function FunnelPage() {
  return (
    <Suspense fallback={<FunnelFallback />}>
      <FunnelPageClient />
    </Suspense>
  );
}
