import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type CounterProps = {
  targetNumber: number; // Ciljni broj za brojač
  label: string; // Tekst ispod brojača
  color?: string; // Opcionalna boja brojača
};

const Counter: React.FC<CounterProps> = ({ targetNumber, label, color = 'blue' }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true }); // Aktivira animaciju samo jednom kada je u vidokrugu

  useEffect(() => {
    if (inView) {
      // Podešavanje ukupnog trajanja animacije (npr. 2 sekunde)
      const duration = 2000; // Trajanje animacije u milisekundama
      const intervalSpeed = duration / targetNumber; // Brzina intervala za postizanje cilja

      const interval = setInterval(() => {
        setCurrentValue((prev) => {
          if (prev < targetNumber) {
            return prev + 1; // Uvećaj brojanje za 1
          }
          clearInterval(interval); // Zaustavi interval kada dostigne ciljni broj
          return prev;
        });
      }, intervalSpeed);

      return () => clearInterval(interval); // Očisti interval prilikom demontaže komponente
    }
  }, [inView, targetNumber]);

  return (
    <div ref={ref} className="flex flex-col w-full items-center">
      <span className="text-2xl text-zinc-50 text-center mb-2">{label}</span>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 2.2 }}
        className={`text-6xl font-bold  text-zinc-50 `}
      >
        {currentValue}
      </motion.div>
      
    </div>
  );
};

export default Counter;
/*
text-${color}-500*/
