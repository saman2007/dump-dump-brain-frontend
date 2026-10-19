import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import PhilosophySection from "./PhilosophySection/PhilosophySection";
import StreamPreviewSection from "./StreamPreviewSection/StreamPreviewSection";
import CallToActionSection from "./CallToActionSection/CallToActionSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PhilosophySection />
        <StreamPreviewSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
