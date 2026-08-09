'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export const NetworkVisual = () => {
  const init = useMemo(() => async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={init}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full h-[400px] lg:h-full min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        <Particles
          id="tsparticles-network"
          className="absolute inset-0 w-full h-full"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab", // Grabs particles with lines when hovering
                },
                resize: {
                   enable: true
                }
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.8,
                    color: "#1C81AC",
                  },
                },
              },
            },
            particles: {
              color: {
                value: ["#1C81AC", "#3EB985"], // Cyan and Green
              },
              links: {
                color: "#1C81AC", // Cyan links to contrast with Navy background
                distance: 120,
                enable: true,
                opacity: 0.4,
                width: 1.5,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 70, // Number of nodes
              },
              opacity: {
                value: 0.8,
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                }
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 4 },
                animation: {
                  enable: true,
                  speed: 2,
                  sync: false
                }
              },
            },
            detectRetina: true,
          }}
        />
        {/* Decorative center glow to anchor the network */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle_at_center,#1C81AC_0%,transparent_70%)] opacity-20 rounded-full pointer-events-none" />
      </motion.div>
    </ParticlesProvider>
  );
};
