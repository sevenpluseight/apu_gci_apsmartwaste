import LandingNavbar from "@/components/landing/LandingNavBar";
import HeroSection from "@/components/landing/Hero";
import CampaignOverview from "@/components/landing/CampaignOverview";
import KioskDemo from "@/components/landing/KioskDemo";
import RoleSelection from "@/components/landing/RoleSelection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1.2px,transparent_1.2px)] bg-size-[28px_28px]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-45 -top-45 h-105 w-105 rounded-full bg-[#0BCB51]/10 blur-[140px]" />
        <div className="absolute -right-55 top-[25%] h-112.5 w-112.5 rounded-full bg-[#0BCB51]/8 blur-[150px]" />
        <div className="absolute -bottom-45 left-1/2 h-105 w-105] -translate-x-1/2 rounded-full bg-[#0BCB51]/10 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <LandingNavbar />
        <HeroSection />
        <CampaignOverview />
        <KioskDemo />
        <RoleSelection />
        <Footer />
      </div>
    </main>
  );
}
