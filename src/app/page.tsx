import LandingNavbar from "@/components/landing/LandingNavBar";
import HeroSection from "@/components/landing/Hero";
import RoleSelection from "@/components/landing/RoleSelection";
import CampaignOverview from "@/components/landing/CampaignOverview";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <LandingNavbar />
      <HeroSection />
      <RoleSelection />
      <CampaignOverview />
      <Footer />
    </main>
  );
}
