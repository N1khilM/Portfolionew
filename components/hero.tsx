"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative pt-24 md:pt-32 pb-16 md:pb-24 min-h-[90vh] flex items-center"
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/80" />

        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-end">
            {/* LEFT: Hero Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-6"
            >
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-primary"
                >
                  Hello, I&apos;m
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                >
                  Nikhil Mugali
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl text-muted-foreground font-medium"
                >
                  Full-Stack Developer
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground max-w-xl text-base md:text-lg"
              >
                I build exceptional and accessible digital experiences for the
                web. Specialized in ReactJS, Next.js, Node.js, Django, and
                MongoDB with a passion for creating elegant solutions to complex
                problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#contact">Get in touch</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href="/resume.pdf"
                    download="Nikhil_Mugali_Resume.pdf"
                    target="_blank"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* RIGHT: Avatar Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-1 flex justify-center items-center">
                <Image
                  src="/avatar.png"
                  alt="avatar"
                  width={384}
                  height={384}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          />
        </div>
      </section>

      <Link href="#about" className="flex flex-col items-center">
        <span className="text-muted-foreground text-sm mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </Link>
    </>
  );
}
