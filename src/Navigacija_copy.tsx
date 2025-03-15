import { div } from "framer-motion/client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "./HamburgerLinks";
import Button from "./HamButton";

interface NavProps {
    isCounterVisible: () => void
}

function Nav() {

    

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };

   /* const animationVariants = {
        hidden: {
            opacity: 0,
            x: 20,
            y: 10,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeInOut",
            },
        },
    };*/

    const containerVariants = {
        hidden: {
          opacity: 0.5,
          y: 0,
        },
        visible: {
          opacity: 1,
          y: 20,
          /*transition: {
            staggerChildren: 0.4, // Kašnjenje između animacija svakog deteta
            delayChildren: 0.1, // Kašnjenje pre nego što se deca počnu animirati
          },*/
        },
      };

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
        hover: { textDecoration:"underline", color: "#1D4ED8" }, // Hover efekt
    };

    const linkovi = ["Work", "About", "Careers", "Blog"];

    return(
        <div className="w-full  z-60
          mx-auto h-[60px] flex items-center bg-zinc-950">
            <nav className="w-full">
                <ul className="flex justify-between items-center">
                    <li className="w-1/4 pl-8 z-40 text-slate-50">logo</li>
                    <div className="hidden z-60 md:flex w-2/4 flex text-slate-50 gap-12 justify-center">
                        <li><a href="">Work</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Blog</a></li>
                    </div>
                    <li className="w-1/4 hidden md:flex  justify-end pr-8 text-slate-50">Contact</li>
                     {/* Hamburger Icon */}
                    <li className="md:hidden flex justify-end pr-8">
                        <button
                            onClick={toggleMenu}
                            className="p-2 bg-white w-[45px] h-[45px] rounded-full z-40"
                        >
                            <div className="h-[2px] mt-1 w-[1/2] bg-black hover:transition-all duration-300 hover:mb-1 "></div>
                            <div className="h-[2px] mt-1 w-[3/4] bg-black hover:transition-all duration-300 hover:mt-0"></div>
                        </button>
                    </li>
                </ul>

                  {/* Hamburger Menu */}
               
                 <div className={`absolute top-0 h-full left-0 w-full bg-white z-10 
                            shadow-lg transform transition-all duration-500 ease-in-out ${
                            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                        }`}
                        > 
                        <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        animate={"visible"} // Animacija kada je meni otvoren
                        //animate={isOpen ? "visible" : "hidden"} // Animacija kada je meni otvoren
                        
                        className="flex mt-24 bg-red-300 h-[45%] pl-8 flex-col gap-4"
                    >
                        
                            {linkovi.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={linkVariants}
                                    whileHover="hover"
                                   // initial="hidden"
                                    className="cursor-pointer  text-lg font-medium"
                                >
                                    <Link title={link} />
                                </motion.li>
                            ))}
                       
                    </motion.ul>

                        <div>
                            icons
                        </div>

                        <div className="w-[85%] mx-auto">     
                            <Button></Button>
                        </div>
                  </div>
                


            </nav>
        </div>
    )

}

export default Nav;



/*

                                <li><a href="" className="hover:text-gray-700">Work</a></li>
                                <li><a href="" className="hover:text-gray-700">About</a></li>
                                <li><a href="" className="hover:text-gray-700">Careers</a></li>
                                <li><a href="" className="hover:text-gray-700">Blog</a></li> */