import React from 'react';
import { motion } from 'framer-motion';

type IconCardProps = {
  title?: string;
  paragraph?: string;
  className?: string;
  width?: string;
  height?: string;
  icons?: React.ComponentType<{ className?: string }>[]; 
};

const IconCard: React.FC<IconCardProps> = ({
  title = 'Default Title',
  paragraph = '',
  className = '',
  width = '',
  height = '',
  icons = [],
}) => {
  return (
    <motion.div
      className={`border rounded-lg shadow-lg p-4 ${width} ${height} ${className}`}
      initial={{ opacity: 0, y: 150 }} // start off-screen and invisible
      transition={{ type: 'spring', stiffness: 50, duration: 1.5 }} // Add transition effect
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place when in view
      viewport={{ once: true }} // trigger the animation once when it enters the viewport
    
    >
      <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
      <p className="text-center mt-4">{paragraph}</p>
      <div className="flex justify-around items-center">
        {icons.map((Icon, index) => (
          <Icon key={index} className="text-4xl text-gray-700" />
        ))}
      </div>
    </motion.div>
  );
};

export default IconCard;
