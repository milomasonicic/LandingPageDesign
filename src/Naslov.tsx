import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Naslov({ naslov, paragraph }: { naslov: string; paragraph: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="w-[1/2]">
            {/* Animacija za naslov */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                className="text-6xl
                text-slate-900
               
                mt-24 
                text-center"
            >
                {naslov}
            </motion.h1>

            {/* Animacija za paragraf */}
            <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                className="mt-2 text-slate-900
                "
            >
                {paragraph}
            </motion.p>
        </div>
    );
}

export default Naslov;