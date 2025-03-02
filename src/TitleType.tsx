import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function TypingTitle({ title, paragraph }) {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setDisplayedText(""); // Resetuj tekst pri promeni naslova
    setCharIndex(0); // Resetuj indeks
  }, [title]);

  useEffect(() => {
    if (charIndex < title.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + title[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, title]);

  return (
    <motion.h1
      className="text-xl font-bold text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.p
      className="text-xl font-bold text-gray-800"
      initial={{ opacity: 0, y: 50 }} // Početno stanje (skriveno i pomaknuto dolje)
      animate={{ opacity: 1, y: 0 }}   // Krajnje stanje (vidljivo i na svojoj poziciji)
      transition={{ delay: 5, duration: 1 }} // Animacija nakon 25 sekundi s trajanjem od 1 sekunde
    >
      {displayedText}
     </motion.p>
    </motion.h1>
  );
}

export default TypingTitle;
