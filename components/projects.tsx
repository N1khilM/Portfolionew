"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Check } from "lucide-react";

type Project = {
  title: string;
  role: string;
  stack: string[];
  description: string;
  keyHighlights: string[];
  image: string;
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
      role: "Full-Stack Developer",
      stack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      description:
        "A full-featured e-commerce platform with real-time inventory management, secure payment processing, and responsive design. Built with scalability in mind.",
      keyHighlights: [
        "Integrated Stripe for seamless checkout and payment flow",
        "Developed admin panel for order tracking and product management",
        "Achieved <200ms average page load using optimized APIs",
      ],
      image: "/marketsquare.png",
      demoUrl: "http://marketsquare.pythonanywhere.com/",
      githubUrl: "https://github.com/N1khilM/marketsquare",
    },
    {
      title: "Expense Tracker",
      role: "Backend Developer",
      stack: ["Node.js", "Express", "MongoDB", "JWT", "React"],
      description:
        "A comprehensive financial management application with secure authentication and robust backend infrastructure for tracking personal and business expenses.",
      keyHighlights: [
        "Implemented JWT for secure user authentication and authorization",
        "Built role-based access control system for different user permissions",
        "Designed RESTful APIs with comprehensive documentation",
        "Optimized MongoDB queries for improved performance",
      ],
      image: "/ExpenseTrackerBackendPostman.png",
      demoUrl: "https://expense-tracker-pro-full.vercel.app/",
      githubUrl: "https://github.com/N1khilM/expense_tracker_pro",
    },
    {
      title: "Weather App",
      role: "Frontend Developer",
      stack: ["React", "OpenWeather API", "JavaScript", "CSS"],
      description:
        "An intuitive weather application providing real-time forecasts, location-based data, and customizable user preferences for a personalized weather experience.",
      keyHighlights: [
        "Integrated geolocation services for precise location-based forecasts",
        "Implemented caching mechanism to reduce API calls by 40%",
        "Designed responsive UI with day/night mode based on local time",
        "Reduced loading time by 25% through API response optimization",
      ],
      image: "/WeatherMe.png",
      demoUrl: "https://github.com/N1khilM/weather-app",
      githubUrl: "https://github.com/N1khilM/weather-app",
    },
    {
      title: "Calculator",
      role: "Frontend Developer",
      stack: ["JavaScript", "HTML5", "CSS3", "Web Storage API"],
      description:
        "A feature-rich calculator web application with advanced mathematical functions, memory storage capabilities, and an intuitive user interface.",
      keyHighlights: [
        "Implemented complex mathematical operations with precision handling",
        "Created responsive design that adapts to all screen sizes",
        "Added history feature using local storage for past calculations",
        "Built custom animations for button interactions",
      ],
      image: "/calculator.png",
      demoUrl: "",
      githubUrl: "https://github.com/N1khilM/Calculator",
    },
    {
      title: "Task Manager",
      role: "Full-Stack Developer",
      stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      description:
        "A collaborative task management platform with real-time updates, team assignments, and progress tracking for improved productivity.",
      keyHighlights: [
        "Developed real-time notifications using Socket.io",
        "Created drag-and-drop interface for task prioritization",
        "Implemented team collaboration features with access controls",
        "Built analytics dashboard for productivity insights",
      ],
      image: "/taskmanager.png",
      demoUrl: "https://nikhilmugali-portfolio.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Currency Converter",
      role: "Frontend Developer",
      stack: ["React", "Exchange Rate API", "ChartJS", "Tailwind CSS"],
      description:
        "A modern currency conversion tool with historical rate charts, customizable favorites, and offline functionality for travelers and financial analysts.",
      keyHighlights: [
        "Integrated live exchange rates from multiple reliable APIs",
        "Developed interactive charts showing rate fluctuations over time",
        "Built offline mode using service workers and IndexedDB",
        "Created custom converter for 170+ currencies with favorite selections",
      ],
      image: "/currencyconverter.png",
      demoUrl: "https://nikhilmugali-portfolio.vercel.app/",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
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

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-52 overflow-hidden">
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/80 transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card text-foreground p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="View code on GitHub"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">
                      {project.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {project.keyHighlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check
                            size={16}
                            className="text-primary mt-0.5 flex-shrink-0"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-muted px-2 py-1 rounded-md"
                      >
                        {tech}
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
