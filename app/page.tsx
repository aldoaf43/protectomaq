import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <Solutions />
      <LeadMagnet />
      <Footer />
    </main>
  );
}
