import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import PhilosophySection from "./PhilosophySection/PhilosophySection";
import StreamPreviewSection from "./StreamPreviewSection/StreamPreviewSection";
import CallToActionSection from "./CallToActionSection/CallToActionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <StreamPreviewSection />
      <CallToActionSection />
    </>
  );
}
