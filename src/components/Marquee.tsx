import React from 'react';
import { motion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, speed = 30, className = "" }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap bg-white/5 border-y border-white/10 py-4 ${className}`}>
      <motion.div
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-8 text-sm font-medium uppercase tracking-[0.2em] text-gray-400"
          >
            <span className="w-2 h-2 bg-luxury-gold rounded-full mr-4" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
