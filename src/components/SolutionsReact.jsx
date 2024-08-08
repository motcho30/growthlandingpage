import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const solutions = [
  {
    icon: "💻",
    title: "Engineering",
    description: "Optimize development with cutting-edge platform updates and streamlined processes.",
    link: "Explore engineering solutions"
  },
  {
    icon: "📊",
    title: "Marketing",
    description: "Boost revenue with integrated subscription data and powerful marketing tools.",
    link: "Discover marketing features"
  },
  {
    icon: "🎨",
    title: "Product",
    description: "Enhance product growth with advanced pricing, paywall, and A/B testing capabilities.",
    link: "See product management tools"
  },
  {
    icon: "🛠️",
    title: "Support",
    description: "Deliver exceptional customer service with comprehensive subscription insights.",
    link: "Learn about support features"
  }
];

const SolutionCard = ({ solution, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    delay: index * 100,
  });

  return (
    <animated.div ref={ref} style={springProps} className="solution-card">
      <motion.div 
        className="icon-wrapper"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="icon">{solution.icon}</span>
      </motion.div>
      <h3>{solution.title}</h3>
      <p>{solution.description}</p>
      <motion.a 
        href={`#${solution.title.toLowerCase()}`} 
        className="learn-more"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {solution.link} →
      </motion.a>
    </animated.div>
  );
};

const SolutionsReact = () => {
  return (
    <section className="solutions">
      <h2>Cutting-edge Solutions for Every Team</h2>
      <p className="subtitle">Empower your teams with state-of-the-art tools and cross-platform data accessibility.</p>
      <div className="solution-grid">
        {solutions.map((solution, index) => (
          <SolutionCard key={solution.title} solution={solution} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsReact;