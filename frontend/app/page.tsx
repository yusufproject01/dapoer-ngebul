import AboutSection from "@/components/sections/AboutSection";
import CateringSection from "@/components/sections/CateringSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import MarketingSecttion from "@/components/sections/MarketingSection";
import MenuSection from "@/components/sections/MenuSection";

export default function Home() {
  return (
    <main className="w-full h-auto grid overflow-x-hidden sm:pt-20">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <CateringSection />
      <MarketingSecttion />
      <ContactSection />
      <FooterSection />
      {/* <section className="h-full border border-slate-400 mx-8 md:mx-28">
        <AboutSection />
      </section> */}
    </main>
  );
}
