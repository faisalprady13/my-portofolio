import Hero from "@/components/Hero";
import Section from "@/components/section";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap min-h-screen w-screen font-[family-name:var(--font-raleway)]">
      <Section>
        <Hero />
      </Section>
      <Section isDarkMode>asd</Section>
    </div>
  );
}
