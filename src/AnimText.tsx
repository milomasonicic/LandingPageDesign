import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import RedoAnimText from "./RedoAnimText";

export interface IAnimTextProps {
  delay: number;
}

export default function AnimText({ delay }: IAnimTextProps) {
  const [done, setDone] = useState(false);
  const baseText = "Lets grow together and create better world"; // Text to animate
  const count = useMotionValue(0); // Motion value to control the "typing" effect
  const rounded = useTransform(count, (latest) => Math.round(latest)); // Round the motion value for text slicing
  const displayText = useTransform(rounded, (latest) => baseText.slice(0, latest)); // Display the text progressively

  // Effect to animate the text "typing"
  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1.5, // Adjust duration for speed of typing
      ease: "easeInOut",
      onComplete: () => {
        setDone(true); // Mark animation as done when it finishes
      },
    });
    return controls.stop;
  }, [count, baseText.length, delay]);

  return (
    <div className="relative px-4">
      {/* The base text (white) */}
      <motion.span
        className="absolute pt-8 top-0 left-0 text-6xl md:text-8xl font-semibold text-slate-400"
      >
        {baseText}
      </motion.span>

      {/* The animated text (black) */}
      <motion.span
        className="absolute pt-8 top-0 left-0 text-6xl md:text-8xl font-semibold text-slate-900"
        style={{
          // Animate the number of characters from 0 to full length
          WebkitBackgroundClip: "text", // This will allow the text to be "clipped" as an effect
         // background: "linear-gradient(90deg, rgba(0,0,0,0) 50%, #000 50%)", // Optional gradient effect
        }}
      >
        {displayText}
      </motion.span>

      {done && <br />}
      
    </div>
  );
}

/*
<RedoAnimText delay={delay + 1} />
<RedoAnimText delay={delay + 1} />

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const companies = [
  "Bloomberg", "The New York Times", "Johns Hopkins University", 
  "Doctors Without Borders", "Ferrero", "Product Hunt", "Serie A Tim", 
  "Sony Music", "Wolff Olins", "Volta", "Kron", "Reply", 
  "Defiance ETF", "Nextatlas", "Tignum", "Conviva", 
  "Credem", "Evooq", "CMC Markets", "Property Simple", "Slip.stream"
];

export default function We() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Pokreće animaciju kada element uđe u viewport
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center text-slate-900 overflow-hidden">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-gray-700" 
        initial={{ opacity: 0, y: 20 }} 
        animate={controls} 
        variants={{ 
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1.5, ease: "easeOut" } // Usporen glavni naslov
          } 
        }}
      >
        **We have worked for** —
      </motion.h1>

      <div className="flex flex-wrap justify-center mt-6 w-3/4">
        {companies.map((company, index) => (
          <motion.span
            key={company}
            className="text-2xl md:text-3xl font-semibold m-2 text-gray-800"
            initial={{ opacity: 0, color: "rgb(30,30,30)" }} // Skoro crna boja
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                color: "rgb(255,255,255)", // Bela boja prilikom otkrivanja
                transition: { delay: index * 0.2, duration: 1.2, ease: "easeOut" } // Veći delay i sporija animacija
              }
            }}
          >
            {company},
          </motion.span>
        ))}
      </div>
    </div>
  );
}

     

*/
