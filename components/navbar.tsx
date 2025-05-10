"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Start", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Exp", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#hero" className="text-2xl font-bold text-foreground">
          <span className="text-primary ">&lt;</span>
          <span className="glow">NIKHIL</span>
          <span className="text-primary ">/&gt;</span>
        </Link>
        <style jsx>{`
          .glow {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.8),
              0 0 12px rgba(255, 255, 255, 0.6);
          }
        `}</style>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="text-foreground focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 top-16 bg-background z-40 flex flex-col items-center pt-10"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl py-4 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name} <span className="text-primary">/&gt;</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {item.name} <span className="text-primary">/&gt;</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </motion.header>
  );
}
