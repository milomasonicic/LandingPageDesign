import { motion, useScroll, useTransform } from "framer-motion";

function Thrd() {
  const { scrollYProgress } = useScroll(); // Praćenje koliko je korisnik skrolovao (0 do 1)
  
  // Mapa skrola: 0 (početak) -> 100% (gore)
  const translateY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div className="w-full h-[700px] bg-zinc-950 flex justify-center items-center relative overflow-hidden">
      {/* Animirani div koji se podiže */}
      <motion.div
        className="hidden md:block absolute bottom-0 flex items-center left-0 w-full h-full  bg-zinc-950 bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ y: translateY }}
      >
        <div className="max-w-[500px] h-[80%] rounded-full mx-auto bg-customwebpbb bg-cover bg-center">
          
        </div>
      </motion.div>

      <div className="md:hidden block absolute bottom-0 left-0 w-full h-[60%]  bg-customwebpbb bg-cover bg-center bg-no-repeat flex justify-center items-center" > </div>
    </div>
  );
}

export default Thrd;
