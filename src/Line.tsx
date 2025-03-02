import React from 'react';
import { motion } from 'framer-motion';

const LineDrawing: React.FC = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <motion.svg
        width="100%"
        height="80%"
        viewBox="0 0 100 600" // ViewBox koji se prilagođava visini roditelja
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M50 0 V600" // Linija od vrha do dna (vertikalna)
          fill="transparent"
          stroke="#0f172a"
          strokeWidth="1" // Podešavanje debljine linije (tanji)
          initial={{ strokeDasharray: 600, strokeDashoffset: 600 }} // Skrivena linija
          whileInView={{ strokeDashoffset: 0 }} // Iscrtavanje linije kada uđe u viewport
          transition={{
            duration: 2, // Trajanje iscrtavanja
            ease: 'easeInOut', // Glatka animacija
          }}
        />
      </motion.svg>
    </div>
  );
};

export default LineDrawing;
