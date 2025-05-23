import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Counter from "./Counter";

export default function Images() {
    // Hook za praćenje vidljivosti srednjeg diva
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <div className="hidden md:flex max-w-[1440px] mx-auto md:h-auto h-[2px] items-center justify-between gap-10 bg-zinc-950 p-10">

            {/* Srednji div - animiran */}
            <Counter targetNumber={72} label="TECH PROFESSIONALS"></Counter>
            <motion.div
                ref={ref}
                className="w-[170px] h-[170px] mx-auto rounded-full bg-customwebp bg-cover bg-center"
                initial={{ y: -100, opacity: 0 }} // Početna pozicija iznad i nevidljivo
                animate={inView ? { y: 0, opacity: 1 } : {}} // Kada je u vidokrugu, pomera se i postaje vidljivo
                transition={{ duration: 0.8, ease: "easeOut" }} // Glatka animacija
            ></motion.div>

            <Counter targetNumber={222} label="PROJECTS"></Counter>


            {/* Treći div */}

            
          
        </div>
    );
}