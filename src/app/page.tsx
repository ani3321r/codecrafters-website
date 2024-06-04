// import AboutUs from "@/components/AboutUs";
import FooterNew from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className='bg-grid-white/[]0.3 min-h-screen bg-black/[0.96] antialiased'>
      <h1 className='text-center text-2xl'></h1>
      <HeroSection />
      <Navbar />
      <FooterNew />
    </main>
  );
}
