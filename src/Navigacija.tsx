import { div } from "framer-motion/client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "./HamburgerLinks";
import Button from "./HamButton";


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
        <div className="w-full  fixed top-0 left-0
          mx-auto  flex items-center justify-between">
      
                 <div className="text-slate-50 ml-5">logo</div>
            
                <div>
                    <button
                            onClick={toggleMenu}
                            className="mr-5 mt-1 bg-white p-2 w-[45px] h-[45px] rounded-full z-40"
                        >
                            <div className="h-[2px] mt-1 w-[1/2] bg-black hover:transition-all duration-300 hover:mb-1 "></div>
                            <div className="h-[2px] mt-1 w-[3/4] bg-black hover:transition-all duration-300 hover:mt-0"></div>
                    </button>

                </div>
                  
        </div>
    )

}

export default Nav;



/*

                                <li><a href="" className="hover:text-gray-700">Work</a></li>
                                <li><a href="" className="hover:text-gray-700">About</a></li>
                                <li><a href="" className="hover:text-gray-700">Careers</a></li>
                                <li><a href="" className="hover:text-gray-700">Blog</a></li> */