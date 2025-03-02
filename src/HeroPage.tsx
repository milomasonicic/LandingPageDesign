import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import React from "react";

const Component = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll();

  const yPos = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 20, 40, 60]);
  const bckg = useTransform(scrollYProgress, [0, 1], ["#ff5c5c", "#4a90e2"]);

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 50,
    leaveDelay: 50,
  });

  const mouseXPosition = mouse.clientX || 0;
  const mouseYPosition = mouse.clientY || 0;

  const variants = {
    default: {
      opacity: 1,
      height: 20,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition - 5,
      y: mouseYPosition - 5,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    project: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 40,
      y: mouseYPosition - 40,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  function projectEnter() {
    setCursorText("4DEV");
    setCursorVariant("project");
  }

  function projectLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  const texts = [
    "4DEV4U",
    "UI/UX, Web Development, and Beyond",
    "Your Vision, Our Mission",
  ];

  const textIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2]);
  const color = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ['#ff5c5c', '#ff9933', '#4a90e2', '#4a90e2']);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = textIndex.onChange((value) => {
      setCurrentIndex(Math.round(value));
    });
    return () => unsubscribe();
  }, [textIndex]);

  return (
    <div ref={ref} className="h-[300vh] relative" style={{ cursor: "none", color: color }}>
      {/* Prilagođeni kursor */}
      <motion.div
        className="fixed pointer-events-none 
        flex items-center justify-center text-white"
        variants={variants}
        animate={cursorVariant}
        style={{
          zIndex: 9999,
          transform: `translateY(${yPos}px)`,
        }}
      >
        <span>{cursorText}</span>
      </motion.div>

      {/* Sekcija za natpise */}
      <div className="h-screen flex items-center justify-center sticky top-0">
        {texts.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1, y: 200 }} // Početna pozicija sa donje strane ekrana
            style={{ color: color }}
            animate={{
              opacity: index === currentIndex ? 1 : 0, // Tekst postaje vidljiv kad se odgovarajući index prikaže
              y: index === currentIndex ? 0 : 200, // Tekst dolazi sa dna i postepeno penje
            }}
            transition={{
              opacity: { duration: 0.2 }, // Efekat opaciteta
              y: { type: "spring", stiffness: 180, damping: 295 }, // Prolećni efekat za vertikalno pomeranje
            }}
            className={`project text-7xl font-italic font-mono ${index === currentIndex ? "block" : "hidden"}`}
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Ostali sadržaj */}
    </div>
  );
};

export default Component;
