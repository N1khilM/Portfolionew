import type { Metadata } from "next";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LazySections from "@/components/lazysections";

export const metadata: Metadata = {
  title: "Nikhil Portfolio",
  description: "Nikhil's portfolio website",
  keywords: ["Nikhil", "Portfolio", "Web Development"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <LazySections />
      </main>
      <Footer />
    </div>
  );
}
