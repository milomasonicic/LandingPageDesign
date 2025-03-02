import { motion } from "framer-motion";

export const Imgo = () => {
  return (
    <motion.div
      initial={{ y: '100vh' }}  // Initially position the element off-screen (to the left)
      animate={{ y: 0 }}  // Animate it to its original position
      transition={{ type: 'spring', stiffness: 50 }} // Add transition effect
    >
        
        
        <div className="bg-robot bg-cover bg-center  rounded-lg w-[400px] h-[400px]"></div>
    </motion.div>
  );
};


//import { motion } from "framer-motion";
/*
export const Image = () => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}  // Initially position the element off-screen (to the left)
      animate={{ x: 0 }}  // Animate it to its original position
      transition={{ type: 'spring', stiffness: 50 }} // Add transition effect
    >
        
        <div className="bg-sss bg-cover bg-center  rounded-lg w-[200px] h-[400px]"></div>
    </motion.div>
  );
};
*/