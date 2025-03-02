
import { motion } from "framer-motion";


import { div } from "framer-motion/client";

function MiddleSection() {
  return (
    <div className="container mx-auto bg-slate-50 py-32
    
    px-12 flex">
        <div className="w-[99%] mx-auto">
            <motion.div
            initial={{
            opacity: 0,
            width: 200, // Početna širina
            }}
            whileInView={{
            opacity: 1,
            width: "98%", // Ciljna širina (cela širina roditelja)
            transition: {
                duration: 2, // Trajanje animacije
                ease: "easeInOut", // Easing funkcija za glatkoću
            },
            }}
            viewport={{ once: true }}
        
        >            
            <div  className="flex bg-customwebp bg-center bg-cover bg-no-repeat h-[500px] rounded-3xl opacity-90">
            
              <div className="w-[60%] h-[150px] ">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // Početno stanje (skriveno i pomaknuto dolje)
                    animate={{ opacity: 1, y: 0 }}   // Krajnje stanje (vidljivo i na svojoj poziciji)
                    transition={{ delay: 4, duration: 1 }} // Animacija nakon 25 sekundi s trajanjem od 1 sekunde
                  
                  >
                        <h1 className="text-gray-900 mx-1 font-montserrat 
                        text-3xl pt-16 px-8 ">We offer best opetions</h1>

                        <motion.div
                          initial={{ opacity: 0, y: 50 }} // Početno stanje (skriveno i pomaknuto dolje)
                          animate={{ opacity: 1, y: 0 }}   // Krajnje stanje (vidljivo i na svojoj poziciji)
                          transition={{ delay: 5, duration: 1 }} // Animacija nakon 25 sekundi s trajanjem od 1 sekunde
                        
                        >
                              <p className="text-stone-50 px-8 font-montserrat mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, cum?</p>
                        </motion.div>
                  </motion.div>
              </div>


              <div className="w-[30%] mb-32">
                

              </div>
            </div>
        </motion.div>

        

        </div>

      

    </div>
    
  );
}

export default MiddleSection;
/*

<div className="w-[30%] px-4">

        <Card></Card>

      </div>
function MiddleSection({ text, index })
  <motion.div
      className="card"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <p className="card-text">{text}</p>
    </motion.div> */