"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Typewriting: React.FC = () => {
  return (
    <span className="inline-block min-w-[300px] md:min-w-[400px] text-left">
      <div>
        <Typewriter
          words={[
            "Full-Stack Developer",
            "MERN Stack Expert",
            "Django Specialist",
            "Problem Solver",
            "Team Collaborator",
            "Performance Optimizer",
            "Open Source Enthusiast",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>
    </span>
  );
};

export default Typewriting;
