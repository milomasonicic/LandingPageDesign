import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export interface IAnimTextProps {
  delay: number;
}

function We({ delay }: IAnimTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Pokreće animaciju kada sekcija uđe u viewport
  const controls = useAnimation();

  const companies = [
    "Bloomberg", "The New York Times", "Johns Hopkins University",
    "Doctors Without Borders", "Ferrero", "Product Hunt", "Serie A Tim",
    "Sony Music", "Wolff Olins", "Volta", "Kron", "Reply",
    "Defiance ETF", "Nextatlas", "Tignum", "Conviva",
    "Credem", "Evooq", "CMC Markets", "Property Simple", "Slip.stream"
  ];

  const baseText = [
    "Bloomberg", "The New York Times", "Johns Hopkins University",
    "Doctors Without Borders", "Ferrero", "Product Hunt", "Serie A Tim",
    "Sony Music", "Wolff Olins", "Volta", "Kron", "Reply",
    "Defiance ETF", "Nextatlas", "Tignum", "Conviva",
    "Credem", "Evooq", "CMC Markets", "Property Simple", "Slip.stream"
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="h-[300px] max-w-[1440px] p-14 bg-zinc-950 mx-auto overflow-hidden relative">
      
      <div className="absolute pt-8  top-0 left-0 w-full">
        {baseText.map((bs, index) => (
          <motion.span
            key={bs}
            className="text-xl md:text-2xl m-2 text-blue-800"
          >
         {bs}
          </motion.span>
        ))}
      </div>

      <div className="absolute pt-8 top-0 left-0 w-full">
      
        {companies.map((company, index) => (
          <motion.span
            key={company}
            className="text-xl md:text-2xl m-2 text-center text-blue-800"
            initial={{ opacity: 0, color: "rgb(30,30,30)" }} // Skoro crna boja
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                color: "rgb(255,255,255)", // Bela boja prilikom otkrivanja
                transition: { delay: index * 0.2, duration: 1.2, ease: "easeOut" } // Veći delay i sporija animacija
              }
            }}
          >
            {company}

          </motion.span>
            
        ))}
      </div>
    </div>
  );
}

export default We;








/*

  <motion.div
                className="w-[60px] h-[60px] rounded-full bg-customwebp bg-cover bg-center absolute bg-no-repeat"
                style={{ x: mouseX, y: mouseY }}
            />

            const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const updateMousePosition = (event) => {
            mouseX.set(event.clientX - 10); // Centriramo div na kursoru
            mouseY.set(event.clientY - 10);
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);

        
    }, [mouseX, mouseY]);


*/
