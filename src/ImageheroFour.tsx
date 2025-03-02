
import { Title } from "./Title"; // Import Hero komponente
import { motion } from "framer-motion";
import { Button } from "./Button";


export const Textbl = () => {
  return (
    <motion.div
      initial={{ y: '100vh' }}  // Initially position the element off-screen (to the left)
      animate={{ y: 0 }}  // Animate it to its original position
      transition={{ type: 'spring', stiffness: 50 }} // Add transition effect
    >
        
        
        <div className="bg-gray-800 rounded-lg w-[750px] h-[650px]
          p-20
        ">
          <Title></Title>

        
        <div className="mt-10">
            <Button variant="tertiary">
            Book an appointment
          </Button>


          <Button variant="secondary" className="ml-4">
            Request a call
          </Button>
        

        </div>
        </div>  
    </motion.div>
  );
};



/*



          
          <div className="h-[300px] w-[300px] ">
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

      </div>


*/

/*

  <!--Button variant="tertiary" className="ml-4">
            Tertiary Button
          </Button-->
          */
