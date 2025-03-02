import { motion, useAnimation, useScroll, useTransform  } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import AnimText from "./AnimText";
import Kartica from "./Kartica";
import Icons from "./Ikone";
import Naslov from "./Naslov";

function LandingPage() {

  const ref = useRef(null);
  //animacija za DIV
  const controls = useAnimation();
  
  //scroll animation
  const { scrollYProgress } = useScroll(); // Praćenje skrola
  const translateY = useTransform(scrollYProgress, [0, 0.1], ["0px", "500px"]);
  //const width = useTransform(scrollYProgress, [0, 0.9], ["50%", "100%"]);
  //const height = useTransform(scrollYProgress, [0, 0.3], ["25%", "75vh"]);
 

  const inView = useInView({ triggerOnce: true });

  // Function to split the text into words and then letters
  const text = "Transforming ideas into digital solutions";
  const splitText = text.split("");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

 
  return (
    <div className="w-full bg-gray-100">
        <div 
        ref={ref}
        className="mx-auto max-w-[1440px] 
        mt-28
        px-9
        h-[700px]
        ">
        <div className="w-[80%] h-[63%]">
            <AnimText delay={1}></AnimText>
            
        </div>

        <div className="w-full flex md:flex-row flex-col  h-[37%]">

        <div className="w-1/2 h-[100%] hidden md:block">
          
          <motion.div   
            style={{
              //width, 
              translateY,
              position: "relative"
            }}
            className="bg-slate-800 w-[100px] h-[100px]
            rounded-full
            bg-center mx-auto bg-contain bg-no-repeat"
          ></motion.div>

          </div> 

          <div className="md:w-1/2 bg-blue-300 w-full flex items-center
           h-[100%]">
            <div className='flex flex-col items-center'>
                        
                        <div className="text-2xl text-slate-900">
                                  <ul>
                                    <li>
                                      Web Design
                                    </li>

                                    <li>
                                      UI/UX
                                    </li>

                                    <li>
                                      DEVELOPMENT bg-customwebp
                                    </li>
                                  </ul> 
                        </div>
            
                    </div>
           
          </div>
      

          <div className="w-1/2 flex 
            bg-red-300
            justify-center items-center h-[100%] hidden md:flex">
            <Icons></Icons> 
          </div> 
        </div>

        </div>

        <div className="  w-full h-[600px] 
            flex flex-col md:flex-row justify-center items-center 
            bg-gray-100">
            <div className="w-full  bg-customwebp h-[350px]  bg-cover bg-center 
            bg-no-repeat md:hidden"></div>  
            <h1>mozda nesto</h1>
        </div>

        
   
    </div>
  );
}

export default LandingPage;