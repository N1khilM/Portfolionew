"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nikhil Mugali. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Currently open to freelance and full-time opportunities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/N1khilM"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/nikhilmugali"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:nikhilmugali10@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Download Resume"
            >
              <FileText size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
