"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Palette, Lightbulb } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "ReactJS", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Django", level: 80 },
    { name: "REST APIs", level: 85 },
    { name: "SQLite", level: 75 },
    { name: "Git & GitHub", level: 85 },
    { name: "UI/UX Design", level: 70 },
    { name: "Web Performance Optimization", level: 75 },
  ];

  const strengths = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing clean, maintainable code that follows best practices and industry standards.",
    },
    {
      icon: Palette,
      title: "User-Friendly Interfaces",
      description:
        "Designing intuitive and efficient user interfaces that enhance the user experience.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Solving complex problems with simple, elegant solutions that scale.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">&lt;</span> About Me{" "}
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a full-stack developer with a passion for building web apps
              that are not just functional, but intuitive and efficient. I focus
              on JavaScript ecosystems (React, Node, Next.js) and Python
              frameworks like Django to deliver reliable solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                With extensive experience in both frontend and backend
                development, I specialize in creating scalable web applications
                that deliver exceptional user experiences. My approach combines
                technical expertise with a keen eye for design and usability.
              </p>
              <p className="text-muted-foreground">
                Currently open to freelance, contract, and full-time roles, I'm
                always excited to take on new challenges and contribute to
                innovative projects.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Core Strengths
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border"
                >
                  <strength.icon className="text-primary mb-4 h-10 w-10" />
                  <h4 className="text-xl font-bold mb-2">{strength.title}</h4>
                  <p className="text-muted-foreground">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
