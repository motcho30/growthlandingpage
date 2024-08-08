import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Notion', src: '/path-to-notion-logo.svg' },
  { name: 'Goodnotes', src: '/path-to-goodnotes-logo.svg' },
  { name: 'VSCO', src: '/path-to-vsco-logo.svg' },
  { name: 'Stocktwits', src: '/path-to-stocktwits-logo.svg' },
  { name: 'Buffer', src: '/path-to-buffer-logo.svg' },
];

const TrustedBy = () => {
  return (
    <div className="trusted-by">
      <p>Trusted by over 30,000 apps</p>
      <div className="logo-container">
        {logos.map((logo, index) => (
          <motion.img
            key={logo.name}
            src={logo.src}
            alt={`${logo.name} logo`}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;