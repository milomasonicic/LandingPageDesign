import React from "react";
import { motion } from "framer-motion";

export function Treatment({
  text,
  w,
  h,
  bgColor,
  x = -100,
  x1 = 0,
}: {
  text: string;
  w: number;
  h: number;
  bgColor: string;
  x?: number;
  x1?: number;
}) {
  return (
    <motion.div
    initial={{ y: '-100vh' }}  // Initially position the element off-screen (to the left)
    animate={{ y: 0 }}  // Animate it to its original position
    transition={{ type: 'spring', stiffness: 50 }} // Add transition effect
    >
      <div
        className={`${bgColor} mt-1 rounded-b-lg`}
        style={{
          width: `${w}px`,
          height: `${h}px`,
        }}
      >
        {text}
      </div>
    </motion.div>
  );
}





import LineDrawing from "./Line";

function Top() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-[1440px] mx-auto flex h-[600px] items-center">
        {/* Leva strana sa naslovom */}
        <div className="flex-1 flex flex-col items-start space-y-4 pl-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Path to Progress
          </h1>
          <p className="text-lg text-gray-600">
            Follow our journey as we bridge technology and innovation, paving the way for a brighter future.
          </p>
        </div>

        {/* Središnji deo sa linijom */}
        <div className="w-[222px] h-[400px] relative">
          <LineDrawing />
          {/* Dodavanje krugova na liniji */}
          <div className="absolute top-0 -left-3 bg-blue-500 h-6 w-6 rounded-full"></div>
          <div className="absolute top-[33%] -left-3 bg-green-500 h-6 w-6 rounded-full"></div>
          <div className="absolute top-[66%] -left-3 bg-purple-500 h-6 w-6 rounded-full"></div>
          <div className="absolute bottom-0 -left-3 bg-red-500 h-6 w-6 rounded-full"></div>
        </div>

        {/* Desna strana sa ključnim tačkama */}
        <div className="flex-1 flex flex-col space-y-12 pr-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              2015: Founded
            </h2>
            <p className="text-gray-600">
              The year we started our mission to innovate.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              2018: Breakthrough Innovation
            </h2>
            <p className="text-gray-600">
              Developed our first award-winning product.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              2023: Global Reach
            </h2>
            <p className="text-gray-600">
              Expanded our solutions worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;







////ILI OVA VERZIJA
/*import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import AnimText from "./AnimText";
import Icons from "./Ikone";

function LandingPage() {
  const ref = useRef(null);
  const controls = useAnimation();

  // Scroll animation
  const { scrollYProgress } = useScroll();
  
  const translateY = useTransform(scrollYProgress, [0, 0.3], ["100px", "0px"]); // Početak van ekrana, dolazi prema dolje
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]); // Fade-in efekt
  const scaleY = useTransform(scrollYProgress, [0, 0.1], [0.5, 1]); // Povećava se pri skrolovanju


  const inView = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="w-full bg-gray-100 relative">
      <div
        ref={ref}
        className="relative mx-auto max-w-[1440px] mt-28 px-9 h-[700px] z-20"
      >
        <div className="w-[80%] h-[63%]">
          <AnimText delay={1} />
        </div>

        {/* Sekcija sa motion div-om */}
      /*  <div className="w-full flex md:flex-row flex-col h-[37%] relative z-10">
          <div className="md:w-1/2 bg-blue-300 w-full flex items-center h-[100%] z-20">
            <div className="flex flex-col items-center">
              <div className="text-2xl text-slate-900">
                <ul>
                  <li>Web Design</li>
                  <li>UI/UX</li>
                  <li>DEVELOPMENT</li>
                </ul>
              </div>
            </div>
          </div>

        

          <div className="w-1/2 flex bg-red-300 justify-center items-center h-[100%] hidden md:flex z-20">
            <Icons />
          </div>
        </div>
      </div>
     
      <div className="w-full h-[600px] ">
      <motion.div 
           style={{
            transformOrigin: "center", // Animacija širenja iz centra
            translateY,
            scaleY,
            opacity,
          }}
        className="w-1/2 mx-auto h-[100px] flex flex-col md:flex-row justify-center items-center bg-teal-300">
        <div className="w-[100px] h-[100px] bg-customwebp bg-cover bg-center bg-no-repeat">
            ffjadj
        </div>
      </motion.div>

      </div>
    </div>
  );
}

export default LandingPage;*/

/*

<div
          className="w-full bg-customwebp h-[350px] bg-cover bg-center bg-no-repeat md:hidden"
        ></div>  


 //Motion.div koji se spušta i širi 
 <div className="w-full relative flex justify-center items-center">
 <motion.div
   style={{
     transformOrigin: "center", // Animacija širenja iz centra
     translateY,
     scaleX,
     opacity,
   }}
   className="absolute top-0 w-[100%] h-[600px] bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 z-10"
 ></motion.div>
</div>*/