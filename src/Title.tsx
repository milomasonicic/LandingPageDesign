import { motion } from "framer-motion";


/*
export const Title = () => {

  const text = "We offer permanent Health".split(" ");

  return (
    <motion.div
      className="text-4xl text-stone-50 pt-16 pb-12"
      initial={{ x: '80vw' }}  // Initially position the element off-screen (to the left)
      animate={{ x: 20 }}  // Animate it to its original position
      transition={{ type: 'spring', stiffness: 50 }} // Add transition effect
    >
        
        We offer permanent Health
    </motion.div>
  );
};
*/

export const Title = () => {
  const text = "We offer permanent health and lasting happiness for a better tomorrow".split(" ");

  return (
    <div>
    <div className="py-16">
      {text.map((el, i) => (
        <motion.span
          key={i}
          className="text-gray-100 mx-1 font-montserrat text-4xl uppercase"
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{
            duration: 1.75,
            delay: i * 0.2, // Animacija svake reči
            type: "spring", // Koristi efekat sa oprugom za prirodniji pokret
            stiffness: 120,
          }}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>

      </div> 
   

    
  );
};

/*


      <div>
      <motion.div
        initial={{ pathLength: 0, opacity: 0 }} // Početno stanje kružnog iscrtavanja
        animate={{ pathLength: 1, opacity: 1 }} // Krajnje stanje kružnog iscrtavanja
        transition={{ duration: 3 }} // Trajanje iscrtavanja 3 sekunde
        className="relative flex justify-center items-center mt-12"
      >
        <svg width="200" height="200" className="absolute">
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="teal"
            strokeWidth="5"
            fill="none"
            className="circle-path"
          />
        </svg>
        <div className="flex">
          <div className="absolute text-2xl font-bold text-teal-700">42%</div>
        

        </div>
      </motion.div>




*/