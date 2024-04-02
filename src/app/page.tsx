import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[]0.3">
      <h1 className="text-2xl text-center"></h1>
      <HeroSection />
      <Navbar />

      </main>
  );
}