"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("./about"), { ssr: false });
const Projects = dynamic(() => import("./projects"), { ssr: false });
const Experience = dynamic(() => import("./experience"), { ssr: false });
const Skills = dynamic(() => import("./skills"), { ssr: false });
const Contact = dynamic(() => import("./contact"), { ssr: false });
const BackgroundEffect = dynamic(() => import("./background-effect"), {
  ssr: false,
});
const VenomStarParticle = dynamic(() => import("./tsparticles"), {
  ssr: false,
});
const ShootingStars = dynamic(() => import("./tsparticlesShootingstars"), {
  ssr: false,
});
const ScrollIndicator = dynamic(() => import("./scroll-indicator"), {
  ssr: false,
});

export default function LazySections() {
  return (
    <>
      <BackgroundEffect />
      <VenomStarParticle />
      <ShootingStars />
      <ScrollIndicator />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
