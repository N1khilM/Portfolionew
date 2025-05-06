"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Award } from "lucide-react";

type TimelineItem = {
  title: string;
  company?: string;
  location: string;
  period: string;
  description: string;
  type: "work" | "education";
};
type CertificationItem = {
  title: string;
  platform: string;
  year: string;
};

export default function Experience() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const timeline: TimelineItem[] = [
    {
      title: "Software Developer",
      company: "Freelance",
      location: "Remote",
      period: "2025 - Present",
      description:
        "Building scalable web applications using ReactJS, Node.js, and Django. Focused on performance optimization and responsive design.",
      type: "work",
    },
    {
      title: "Master's in Computer Application",
      location: "Karnataka University, Dharwad",
      period: "2022 - 2024",
      description:
        "Specialized in full-stack development and web technologies. Developed several projects including an e-commerce platform.",
      type: "education",
    },
    {
      title: "Bachelor's in Computer Application",
      location: "CSI College of Commerce, Dharwad",
      period: "2019 - 2022",
      description:
        "Focused on software development principles, database management, and web technologies.",
      type: "education",
    },
    // {
    //   title: "Intern - Web Development",
    //   company: "XYZ Tech Solutions",
    //   location: "Dharwad, Karnataka",
    //   period: "2020 - 2021",
    //   description:
    //     "Assisted in building responsive websites and maintaining web applications with a focus on frontend performance.",
    //   type: "work",
    // },
    {
      title: "Pre-University (PCMB)",
      location: "Govt PU College, Dharwad",
      period: "2017 - 2019",
      description:
        "Completed pre-university education with a focus on Physics, Chemistry, Mathematics, and Biology.",
      type: "education",
    },

    {
      title: "Secondary School Education (SSLC)",
      location: "St. Joseph’s Convent High School, Basavakalyan",
      period: " - 2017",
      description:
        "Completed secondary education with a strong interest in science and technology.",
      type: "education",
    },
  ];

  const certifications: CertificationItem[] = [
    {
      title: "Programming with Python 3.X",
      platform: "Simplilearn",
      year: "2022",
    },
    { title: "Next.js Web Development", platform: "Udemy", year: "2025" },
    { title: "NodeJS Masterclass", platform: "Udemy", year: "2024" },
    { title: "ReactJS Crash Course", platform: "Udemy", year: "2024" },
    { title: "Responsive Web Design", platform: "freeCodeCamp", year: "2024" },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
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
              <span className="text-primary">&lt;</span> Experience & Education{" "}
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and educational background that have
              shaped my skills and expertise.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:transform md:-translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary md:transform md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className="md:w-1/2 pl-10 md:pl-0 md:pr-10 md:text-right">
                    <div
                      className={`bg-card p-6 rounded-lg border border-border ${
                        index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        {item.type === "work" ? (
                          <Briefcase className="text-primary mr-2 h-5 w-5" />
                        ) : (
                          <GraduationCap className="text-primary mr-2 h-5 w-5" />
                        )}
                        <span className="text-lg font-bold">{item.title}</span>
                      </div>

                      {item.company && (
                        <p className="text-foreground mb-1">{item.company}</p>
                      )}

                      <div className="flex items-center text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{item.period}</span>
                      </div>

                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div variants={itemVariants} className="text-center mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">&lt;</span> Certifications{" "}
              <span className="text-primary">/&gt;</span>
            </h2>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-4">
                  <Award className="text-primary h-5 w-5" />
                  <span className="font-semibold">{cert.title}</span> —{" "}
                  {cert.platform} ({cert.year})
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
