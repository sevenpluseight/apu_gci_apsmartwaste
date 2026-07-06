import LandingNavbar from "@/components/landing/LandingNavBar";
import HeroSection from "@/components/landing/Hero";
import RoleSelection from "@/components/landing/RoleSelection";
import CampaignOverview from "@/components/landing/CampaignOverview";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#0BCB51]/10 blur-[140px]" />

      <div className="relative z-10">
        <LandingNavbar />
        <HeroSection />
        <RoleSelection />
        <CampaignOverview />
        <Footer />
      </div>
    </main>
  );
}
