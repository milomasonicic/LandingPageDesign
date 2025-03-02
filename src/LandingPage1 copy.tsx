/*import { motion, useAnimation, useScroll, useTransform  } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import AnimText from "./AnimText";
import Kartica from "./Kartica";
import Icons from "./Ikone";
import Naslov from "./Naslov";*/
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";


function Land() {


    return(
        <main className="mx-auto max-w-[1440px] relative mt-12">
            
             <section className="flex h-[570px] md:h-[530px]  flex-col justify-center items-center relative">

                <AnimatedText text ="4DEV – Crafting Digital Excellence" className ="p-4 md:p-8  text-white text-[55px] md:text-[90px] font-mono"></AnimatedText>
            </section>

            <section className="flex h-[570px] md:h-[530px] flex-col justify-center items-center">
                <AnimatedText text ="UI/UX, Web Development, and Beyond" className ="p-4  md:p-8  text-white text-[60px] md:text-[90px] font-mono"></AnimatedText>
            </section>

            <section className="flex h-[570px] md:h-[530px]  flex-col justify-center items-center">
                <AnimatedText text ="Your Vision, Our Mission" className ="p-4 md:p-8 text-white text-[60px] md:text-[90px] font-mono"></AnimatedText>
            </section>

        </main>
        
    )


}

export default Land

type TextProp = {
    text: string;
    className?: string;
    el?: keyof JSX.IntrinsicElements;
  };
  
  export const AnimatedText = ({
    text,
    el: Wrapper = "p",
    className,
  }: TextProp) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Omogućava da se tekst ponovo sakrije kada izađe iz centra
        threshold: 0.3, // Pokreće animaciju kada je 50% teksta vidljivo
        rootMargin: "-30% 0% -30% 0%", // Prati samo centar roze diva
      });

    return (
      <Wrapper ref={ref} className={className}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}

         >  <div className="py-32">
              {text}
           </div>
        </motion.div>
      </Wrapper>
    );
  };
*/

  /* ANIMATE PRESENCE ----OVO VIDEJTI

  import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Land() {
  const sections = [
    {
      text: "4DEV – Crafting Digital Excellence",
      className: "p-4 md:p-8 text-white text-[55px] md:text-[90px] font-mono",
    },
    {
      text: "UI/UX, Web Development, and Beyond",
      className: "p-4 md:p-8 text-white text-[60px] md:text-[90px] font-mono",
    },
    {
      text: "Your Vision, Our Mission",
      className: "p-4 md:p-8 text-white text-[60px] md:text-[90px] font-mono",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Menja sekciju na svakih 5 sekundi (5000ms)
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <main className="mx-auto max-w-[1440px] relative mt-12 h-[730px] overflow-hidden">
      <AnimatePresence>
        <motion.section
          key={current}
          className="flex h-full flex-col justify-center items-center absolute top-0 left-0 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className={sections[current].className}>
            {sections[current].text}
          </div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
}

export default Land;
*/