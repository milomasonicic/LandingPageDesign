"use client";
import { motion, useInView } from "framer-motion";
import AiHospital from "./Aihospital";
import GardenAi from "./GardenAi";
import React, { useRef } from "react";
import Counter1 from "./Counter1";
import { div } from "framer-motion/client";

export default function AnimatedHeightWhenInView() {
  const ref = useRef(null);

  // Praćenje kada je element u vidnom polju
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (

   
    <div className="bg-zinc-950 md:h-[650px] h-auto gap-4 w-full py-8 font-bold flex flex-wrap md:flex-row justify-center">
           <GardenAi title={"SciFi Garden"} bgClass="bg-stone-50 hover:bg-zinc-800 rounded-[40%]" description={"Bringing natture and tech together"}></GardenAi>
        
           <GardenAi title={"Geometric Wonders"} bgClass="bg-zinc-900  hover:bg-stone-50 rounded-[5%]" description={"Digital solutions and much more"}></GardenAi>
           <GardenAi title={"Art of shapes"} bgClass="bg-stone-100 hover:bg-zinc-900 rounded-[60%]" description={"Bringing natture and tech together"}></GardenAi>
           <GardenAi title={"Music is key"} bgClass="bg-stone-50 hover:bg-zinc-800 rounded-[20%]" description={"Bringing natture and tech together"}></GardenAi>
       
      </div>
    
     ) 
}

/*
 <AiHospital title={"AI Garden"} description={"Bringing natture and tech together"} ></AiHospital>
            <GardenAi></GardenAi>


<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div
        ref={ref}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#09090b",
          height:"80vh"
        }}  </div>
    </div>


 <motion.div
          initial={{ height: "100px", backgroundColor: "#fafafa" }}
          animate={isInView ? { height: "900px", backgroundColor: "#09090b" } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
            borderRadius: "8px",
          }}
        >
        </motion.div>

*/





/*"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section style={itemContainer}>
      <div ref={ref} style={item}>
        <figure style={progressIconContainer}>
          <svg
            style={progressIcon}
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
           
            <circle
              cx="50"
              cy="50"
              r="40"
              style={{
                fill: "none",
                stroke: "#ddd",
                strokeWidth: 5,
                opacity: 0.3,
              }}
            />
           
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              style={{
                fill: "none",
                stroke: "#ff0088",
                strokeWidth: 5,
                strokeDasharray: "251.2", // 2 * π * r (r=40)
                strokeDashoffset: "251.2",
                pathLength: scrollYProgress,
              }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}

export default function TrackElementWithinViewport() {
  return (
    <div className="bg-blue-300" style={{ height: "200vh" }}>
      <Item />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
/*
const itemContainer: React.CSSProperties = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const progressIconContainer: React.CSSProperties = {
  position: "sticky",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const progressIcon: React.CSSProperties = {
  transform: "rotate(-90deg)", // Pomeranje početka animacije na vrh
  transformOrigin: "center",
};

const item: React.CSSProperties = {
  height: "100vh", // Visina elementa za skrol
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
*/