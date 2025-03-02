import { motion } from "framer-motion";

export const Image = ({ x, x1, w, h, sss}: { x: number; x1: number; w: number; h: number; sss: string } ) => {
  return (
    <motion.div
      initial={{ x }} // Početna pozicija elementa
      animate={{ x: x1 }} // Ciljna pozicija elementa
      transition={{ type: 'spring', stiffness: 50 }} // Add transition effect
    >
        
        <div className={`bg-${sss} bg-cover rounded-lg`}
        style={{
          width: `${w}px`, 
          height: `${h}px`,
        }}></div>
    </motion.div>
  );
};
