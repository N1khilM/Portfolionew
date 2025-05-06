"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import { Card } from "@/components/ui/card";

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
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm always open to opportunities and collaborations. Let's build
            something amazing together!
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

              {/* Phone */}
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a
                    href="tel:+919113279296"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +91 91132 79296
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

            {/* Social Icons */}
            <div className="pt-8 border-t flex justify-center space-x-6">
              <motion.a
                href="https://github.com/N1khilM"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-primary hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/nikhilmugali"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-primary hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/nikhil.kingh.3"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-primary hover:text-foreground transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/realnikhill/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-primary hover:text-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
