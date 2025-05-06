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
              I’m <span className="font-bold">Nikhil Mugali</span>, a passionate{" "}
              <span className="font-bold">Full-Stack Developer</span> with
              expertise in <span className="font-bold">ReactJS</span>,{" "}
              <span className="font-bold">Node.js</span>, and{" "}
              <span className="font-bold">Django</span>. I thrive on building
              scalable, performant web applications with a focus on clean design
              and seamless user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I began my coding journey during my{" "}
                <span className="font-bold">BCA</span> at BMHECs CSI College of
                Commerce, Dharwad, where I developed a strong foundation in
                programming. Further honing my skills during my
                <span className="font-bold"> MCA</span> at{" "}
                <span className="font-bold">Karnatak University</span>, I
                explored various technologies, from frontend frameworks to
                backend architectures.
              </p>
              <p className="text-muted-foreground">
                Through hands-on projects like{" "}
                <span className="font-bold">MarketSquare</span>,{" "}
                <span className="font-bold">Expense Tracker Pro</span>, and my
                personal <span className="font-bold">Portfolio</span>, I&apos;ve
                built a deep understanding of building{" "}
                <span className="font-bold">responsive</span>,{" "}
                <span className="font-bold">secure</span>, and
                <span className="font-bold">scalable</span> applications.
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
            <h3 className="text-2xl font-bold mb-8 text-center">What I Do</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <Code className="text-primary mb-4 h-10 w-10" />
                <h4 className="text-xl font-bold mb-2">
                  Full-Stack Development
                </h4>
                <p className="text-muted-foreground">
                  Building end-to-end web applications using{" "}
                  <span className="font-bold">ReactJS</span>,
                  <span className="font-bold">Node.js</span>, and{" "}
                  <span className="font-bold">Django</span>, ensuring
                  scalability and performance.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <Palette className="text-primary mb-4 h-10 w-10" />
                <h4 className="text-xl font-bold mb-2">UI/UX Design</h4>
                <p className="text-muted-foreground">
                  Crafting clean, user-friendly interfaces with a focus on
                  <span className="font-bold">responsive design</span> and{" "}
                  <span className="font-bold">
                    web performance optimization
                  </span>
                  .
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <Lightbulb className="text-primary mb-4 h-10 w-10" />
                <h4 className="text-xl font-bold mb-2">Problem Solving</h4>
                <p className="text-muted-foreground">
                  Tackling complex coding challenges with innovative solutions,
                  ensuring efficient and maintainable codebases.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
