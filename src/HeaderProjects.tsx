import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/client";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

function Projects() {
    return (
        <div className="h-[230px] py-14">
            <AnimatedText1 text ="Projects we are proud of." 
            className ="text-white text-[60px] mt-18 font-mono"></AnimatedText1>
        </div>
    );
}

export default Projects;



type TextProp1 = {
    text: string;
    className?: string;
    el?: keyof JSX.IntrinsicElements;
  };
  
  export const AnimatedText1 = ({
    text,
    el: Wrapper1 = "h1",
    className,
  }: TextProp1) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Omogućava da se tekst ponovo sakrije kada izađe iz centra
        threshold: 0.5, // Pokreće animaciju kada je 50% teksta vidljivo
        rootMargin: "-30% 0% -30% 0%", // Prati samo centar roze diva
      });

    return (
        <div className="max-w-[1440px] mx-auto">
            <Wrapper1 ref={ref} className={className}>
                <motion.div
                    initial={{ opacity: 0.1 }} // Početno stanje (desno i nevidljivo)
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                >  {text}
                </motion.div>
            </Wrapper1>

        </div>
    );
  };
