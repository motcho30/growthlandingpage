import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import TrustedBy from './TrustedBy';

const Hero = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="hero-content">
        <animated.div style={fadeIn}>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Build and scale your subscription business
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The world's top apps use GrowthPulse to power in-app subscriptions,
            manage customers, and boost revenue across iOS, Android, and the web.
          </motion.p>
          <motion.div
            className="cta"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input type="email" placeholder="Your email address" />
            <button className="btn-primary">Start for free</button>
          </motion.div>
          <motion.a
            href="#sales"
            className="talk-to-sales"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Talk to sales →
          </motion.a>
        </animated.div>
      </div>
      <div className="hero-image">
        {/* Add your product mockup or illustration here */}
      </div>
      <TrustedBy />
    </section>
  );
};

export default Hero;