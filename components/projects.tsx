"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects: Project[] = [
    {
      title: "MarketSquare E-Commerce",
      description:
        "Full-stack e-commerce platform built with Django and Python, featuring real-time product updates and optimized performance.",
      image: "/marketsquare.png",
      tags: ["Django", "Python", "REST APIs", "Tailwind CSS"],
      demoUrl: "http://marketsquare.pythonanywhere.com/",
      githubUrl: "https://github.com/N1khilM/marketsquare",
    },
    {
      title: "Expense Tracker",
      description:
        "Secure financial management tool with JWT authentication, role-based access control, and intuitive UI.",
      image: "/ExpenseTrackerBackendPostman.png",
      tags: ["MERN Stack", "JWT", "MongoDB", "React"],
      demoUrl: "https://expense-tracker-pro-full.vercel.app/",
      githubUrl: "https://github.com/N1khilM/expense_tracker_pro",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather updates with geolocation and optimized API performance, reducing latency by 25%.",
      image: "/WeatherMe.png",
      tags: ["ReactJS", "OpenWeather API", "JavaScript", "CSS"],
      demoUrl: "https://github.com/N1khilM/weather-app",
      githubUrl: "https://github.com/N1khilM/weather-app",
    },
    {
      title: "Calculator",
      description:
        "Modern, responsive portfolio website with smooth animations and server-side rendering.",
      image: "/calculator.png",
      tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      demoUrl: "",
      githubUrl: "https://github.com/N1khilM/Calculator",
    },
    {
      title: "Task Manager",
      description:
        "Modern, responsive portfolio website with smooth animations and server-side rendering.",
      image: "/taskmanager.png",
      tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      demoUrl: "https://nikhilmugali-portfolio.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Currency Converter",
      description:
        "Modern, responsive portfolio website with smooth animations and server-side rendering.",
      image: "/currencyconverter.png",
      tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      demoUrl: "https://nikhilmugali-portfolio.vercel.app/",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">&lt;</span> My Projects{" "}
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent projects showcasing my expertise in
              full-stack development, problem-solving, and UI/UX design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <Link
                        href={project.demoUrl}
                        className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/80 transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Link
                        href={project.githubUrl}
                        className="bg-card text-foreground p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="View code on GitHub"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-muted px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
