import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import React from "react";

const Component = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const mouseXPosition = mouse.clientX || 0;
  const mouseYPosition = mouse.clientY || 0;

  const variants = {
    default: {
      opacity: 1,
      height: 10,
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

  const { scrollYProgress } = useScroll();
  const texts = [
    "UI/UX, Web Development, and Beyond",
    "4DEV4U",
  ];

  const textIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);
  const textSize = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["2rem", "3rem", "4rem", "5rem", "5rem"]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = textIndex.onChange((value) => {
      setCurrentIndex(Math.round(value));
    });
    return () => unsubscribe();
  }, [textIndex]);

  return (
    <div ref={ref} className="h-[400vh] relative" style={{ cursor: 'none' }}>
      {/* Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none flex items-center justify-center text-white"
        variants={variants}
        animate={cursorVariant}
        style={{
          zIndex: 9999,
        }}
      >
        <span>{cursorText}</span>
      </motion.div>

      {/* Text Section */}
      <div className="h-screen flex items-center justify-center sticky top-0">
        {texts.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            style={{ fontSize: textSize }}
            animate={{
              opacity: index === currentIndex ? 0.5 : 0,
              y: index === currentIndex ? 0 : 20,
            }}
            transition={{ duration: 0.1 }}
            className={`project text-7xl font-italic font-mono ${
              index === currentIndex ? "block" : "hidden"
            }`}
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Scrolling Effect */}
      <motion.div
        className="h-[50vh] bg-gradient-to-b from-gray-700 to-gray-900"
        style={{
          scaleY: scrollYProgress,
          originY: 0,
          position: "sticky",
          top: 0,
        }}

        

      >
        <h1 className="text-gray-50 text-4xl text-center font-bold">    "Building the Future, Together</h1>
      </motion.div>
    </div>
  );
};

export default Component;
