"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Typewriting from "./Typewriting";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative pt-24 md:pt-32 pb-16 md:pb-24 min-h-[90vh] flex items-center overflow-hidden"
      >
        <div className="absolute  -z-10 h-full w-full bg-gradient-to-br from-background via-primary/15 to-secondary/10 dark:from-background dark:via-primary/15 dark:to-secondary/10" />

        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col space-y-6 text-center lg:text-left"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg md:text-xl text-primary font-semibold"
              >
                Hey, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                Nikhil Mugali
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl font-medium min-h-[2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                <Typewriting />
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-muted-foreground max-w-lg text-base md:text-lg"
              >
                I'm a full-stack developer with a passion for building web apps
                that are not just functional, but intuitive and efficient. I
                focus on JavaScript ecosystems (React, Node, Next.js) and Python
                frameworks like Django to deliver reliable solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90 shadow-lg"
                >
                  <Link href="#contact">Let's Connect</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <Link
                    href="/resume.pdf"
                    download
                    target="_blank"
                    aria-label="Download Resume"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full text-primary hover:bg-primary/10"
                  asChild
                >
                  <Link
                    href="https://github.com/N1khilM"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub Profile"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex justify-center items-center"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 p-2 shadow-xl">
                <Image
                  src="/avatar.png"
                  alt="Nikhil Mugali"
                  width={384}
                  height={384}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Link href="#about" className="flex flex-col items-center pb-8">
        <span className="text-muted-foreground text-sm mb-2">
          Explore My Work
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </Link>
    </>
  );
}
