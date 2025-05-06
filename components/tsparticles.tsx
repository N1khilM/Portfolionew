"use client";
import React from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "@tsparticles/engine";

const venomStarOptions: ISourceOptions = {
  background: {
    color: {
      value: "white", // Dark space-like background
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#ffffff", "#d4d4d4", "#a3a3a3"], // Star-like whites and grays
    },
    shape: {
      type: "star", // Star-shaped particles
      options: {
        star: {
          sides: 5,
        },
      },
    },
    opacity: {
      value: { min: 0.5, max: 0.9 },
      animation: {
        enable: true,
        speed: 1.5,
        // minimumValue: 0.3,
        sync: false,
      },
    },
    size: {
      value: { min: 0.5, max: 2 },
      animation: {
        enable: true,
        speed: 0.5,
        // minimumValue: 0.5,
        sync: false,
      },
    },

    move: {
      enable: false,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out",
      },
      attract: {
        enable: true,
        distance: 200, // Stars try to move toward Venom
        rotate: {
          x: 600,
          y: 1200,
        },
      },
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "grab", // Stars reach out to Venom
      },
      onClick: {
        enable: true,
        mode: "push", // Spawn new stars on click
      },
      // resize: true,
    },
    modes: {
      grab: {
        distance: 150, // How far stars reach toward Venom
        links: {
          opacity: 0.7,
          color: "#ffffff",
          blink: true, // Pulsing tendrils
        },
      },
      push: {
        quantity: 4, // New stars per click
      },
    },
  },
  detectRetina: true,
};

const VenomStarParticle: React.FC = () => {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <>
      <Particles id="venom-stars" options={venomStarOptions} />

      <div id="venom-cursor bodyvenom" />
    </>
  );
};

// Custom cursor logic
if (typeof window !== "undefined") {
  const cursor = document.createElement("div");
  cursor.id = "venom-cursor";
  document.body.appendChild(cursor);

  const moveCursor = (e: MouseEvent) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  };

  window.addEventListener("mousemove", moveCursor);
}

export default VenomStarParticle;
