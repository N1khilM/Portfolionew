import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollIndicator from "@/components/scroll-indicator";
import BackgroundEffect from "@/components/background-effect";
import VenomStarParticle from "@/components/tsparticles";
import { ShootingStars } from "@/components/tsparticlesShootingstars";

export const metadata: Metadata = {
  title: "Nikhil Portfolio",
  description: "Nikhil's portfolio website",
  keywords: ["Nikhil", "Portfolio", "Web Development"],
  og: {
    title: "Nikhil Portfolio",
    description: "Nikhil's portfolio website",
    type: "website",
    url: "#",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <BackgroundEffect />
      <Navbar />
      <VenomStarParticle />
      <ShootingStars />
      <ScrollIndicator />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
