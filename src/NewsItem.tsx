import { motion, useInView } from "framer-motion";
import * as React from 'react';
interface NewsItemProps {
    title: string;
    index?: number;
    bgBackground?: string;
}

function NewsItem({ title, index = 0, bgBackground = "blue" }: NewsItemProps) {
    
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div 
        ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.3 }} // ⏳ Delay zavisi od index-a
            className="w-[500px] h-[450px] pt-10 p-4 rounded-lg shadow-md flex items-center justify-center text-white text-2xl font-semibold"
            style={{ backgroundColor: bgBackground }} // 🎨 Dinamična pozadina
        >
            {title}
        </motion.div>
    );
}

export default NewsItem;

