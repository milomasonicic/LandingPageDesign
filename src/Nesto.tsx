import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const BoldScrollFlipEffect = () => {
  const { scrollYProgress } = useScroll();

  // Transformacije za tekst
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]); // Manje povećanje
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 180, 360]); // Manja rotacija
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]); // Manji opseg neprozirnosti


  const texts = ["Innovate", "Bold", "Create"];

  return (
    <div className="h-[100vh] bg-gray-950 text-white flex flex-col justify-center items-center">
      {/* Tekst sa efektom */}
      <div className="h-screen flex justify-center items-center sticky top-0">
        {texts.map((text, index) => (
          <motion.div
            key={index}
            style={{
              scale,
              rotateX,
              opacity,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-8xl font-bold"
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BoldScrollFlipEffect;
