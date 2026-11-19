import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { FeaturedCase } from "@/components/projects/FeaturedCase";
import { Cybersecurity } from "@/components/cybersecurity/Cybersecurity";
import { Developer } from "@/components/developer/Developer";
import { CreativeStudio } from "@/components/creative-studio/CreativeStudio";
import { Journey } from "@/components/journey/Journey";
import { Philosophy } from "@/components/philosophy/Philosophy";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FeaturedCase />
      <Cybersecurity />
      <Developer />
      <CreativeStudio />
      <Journey />
      <Philosophy />
      <Contact />
    </>
  );
}
