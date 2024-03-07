import { ChooseSection, CollectionSection, HeroSection, WorksSection } from "@/components";
import { BiSolidCoffeeBean } from "react-icons/bi";

export default function Home() {
  return (
    <main>
      {/* ---- Hero ---- */}
      <HeroSection />

      {/* ---- Collection ---- */}
      <CollectionSection />

      {/* ---- Why us ---- */}
      <ChooseSection />

      {/* ---- How it works ---- */}
      <WorksSection />
    </main>
  );
}
