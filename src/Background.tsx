import { motion } from "framer-motion";

export const Bckg = () => {
  return (
    <motion.div
      initial={{ x: '100vw' }}  // Initially position the element off-screen (to the left)
      animate={{ x: 0 }}  // Animate it to its original position
      transition={{ type: 'spring', stiffness: 50 }} // Add transition effect
    >
        
        <div className="bg-teal-300 w-[100%] h-[60px] mt-20">
          miloo
        </div>
    </motion.div>
  );
};
