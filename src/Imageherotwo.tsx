import { motion } from "framer-motion";

export const Img = () => {
  return (
    <motion.div
      initial={{ y: '-100vh' }}  // Initially position the element off-screen (to the left)
      animate={{ y: 0 }}  // Animate it to its original position
      transition={{ type: 'spring', stiffness: 50 }} // Add transition effect
    >
         <div className="bg-ooo bg-cover bg-center  rounded-lg w-[200px] h-[400px]"></div>

    </motion.div>
  );
};
