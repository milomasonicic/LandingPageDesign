import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { div } from "framer-motion/client";

function Kartica(){

const [patients, setPatients] = useState(0);

  useEffect(() => {
    // Animate the numbers to their target values
    const patientInterval = setInterval(() => {
      setPatients((prev) => (prev < 72 ? prev + 1 : 72)); // Count up to 1000 patients
    }, 5); // Adjust interval for speed

    // Clean up intervals on component unmount
    return () => {
      clearInterval(patientInterval);
     
    };
  }, []);



    return(
        <div className='flex flex-col items-center'>
            
            <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, delay: 3 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-bold text-slate-900"
                    >
                      {patients}+ 
            </motion.div>

            <h1 className='text-2xl font-bold 
            text-slate-900'> Successful projects</h1>

        </div>
    )
}

export default Kartica