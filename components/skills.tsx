"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Lightbulb, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "Frontend Development",
    description:
      "Creating responsive, performant user interfaces with React, Next.js, and modern CSS",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    name: "Backend Development",
    description: "Building scalable server-side applications and RESTful APIs",
    technologies: ["Node.js", "Django", "Express", "PostgreSQL"],
  },
  {
    icon: Globe,
    name: "Full Stack Development",
    description: "End-to-end application development with modern tech stacks",
    technologies: ["MERN Stack", "Django Stack", "RESTful APIs", "GraphQL"],
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Designing intuitive interfaces focused on user experience",
    technologies: ["Figma", "Adobe XD", "Responsive Design", "Accessibility"],
  },
  {
    icon: Zap,
    name: "Performance Optimization",
    description: "Optimizing web applications for speed and efficiency",
    technologies: ["Lazy Loading", "Code Splitting", "Caching", "SEO"],
  },
  {
    icon: Lightbulb,
    name: "Problem Solving",
    description: "Finding elegant solutions to complex technical challenges",
    technologies: ["Algorithms", "Data Structures", "System Design", "Debug"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Skills & Expertise{" "}
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and areas of
            expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <skill.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
