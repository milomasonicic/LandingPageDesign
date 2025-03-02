import { motion } from "framer-motion";

export const Textblock = () => {
  return (
    <motion.div
      initial={{ y: '100vh' }}  // Initially position the element off-screen (to the left)
      animate={{ y: 0 }}  // Animate it to its original position
      transition={{ type: 'spring', stiffness: 50 }} // Add transition effect
    >
        
        <div className="bg-teal-300 w-[100%] h-[100%] mt-20">
          miloo
          miloo
          miloo
        </div>
    </motion.div>
  );
};
