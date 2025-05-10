"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  Instagram,
  Facebook,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm currently open to freelance and full-time opportunities. Got an
            idea or a role I'd be perfect for? Let's talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-10 backdrop-blur-sm bg-card/60 border border-border/50 mx-auto max-w-3xl space-y-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a
                    href="mailto:nikhilkingh008@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    nikhilkingh008@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground">Dharwad, Karnataka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t space-y-4">
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="https://github.com/N1khilM"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-card hover:bg-muted px-4 py-2 rounded-md transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/nikhilmugali"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-card hover:bg-muted px-4 py-2 rounded-md transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>

              {/* <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors w-full md:w-auto mx-auto"
              >
                <FileText className="h-5 w-5" />
                <span>Download Resume</span>
              </motion.a> */}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
