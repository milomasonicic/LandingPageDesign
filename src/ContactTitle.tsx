import { motion, useInView } from "framer-motion";
import * as React from 'react';
function ContactTitle() {

     const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="">
            {/* Kontener za reči */}
            <div className="px-8 text-4xl text-zinc-800 gap-4">
                {/* Animacija za prvu reč */}
                <div className="flex">
                <motion.h1 
                    initial={{ opacity: 0 }} 
                    ref={ref}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                    className="text-9xl"
                >
                    Let's
                </motion.h1>
                
                {/* Animacija za drugu reč sa delay-em */}
                <motion.h1 
                    initial={{ opacity: 0 }} 
                    ref={ref}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }} 
                     className="text-9xl px-4 font-italic"
                >
                    Talk
                </motion.h1>

                </div>

                <motion.div initial={{ opacity: 0 }} 
                    ref={ref}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.8 }} >
                    
                    We want to hear more from you.
                </motion.div>
            </div>
        </div>
    );
}

export default ContactTitle;
