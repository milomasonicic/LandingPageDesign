//import { div } from "framer-motion/client";
import "./horizontalskrol.css"
import ImageContainer from "./ImageContainer"
import { useRef } from "react";
import {motion, useScroll, useTransform}  from "framer-motion"

export default function HorizontallScroll(){

    const targetRef = useRef(null);

    const {scrollYProgress} = useScroll({target: targetRef})
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%'])

    return(
        <div className="carousel" ref={targetRef}>
           <div className="contentContainer overflow-hidden">
            <motion.div className="images" style={{ x }} >
                <div>
                    <ImageContainer imageSource="bg-ooo" description="lala"></ImageContainer>
                </div>

                <div>
                    <ImageContainer imageSource="bg-ooo" description="lala"></ImageContainer>
                </div>

                <div>
                    <ImageContainer imageSource="bg-ooo" description="lala"></ImageContainer>
                </div>

                <div>
                    <ImageContainer imageSource="bg-ooo" description="lala"></ImageContainer>
                </div>

             

              

            </motion.div>
           </div>
        </div> 
    )
}