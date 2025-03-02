import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Card from "./Card";
import DoctorCard from "./DoctorCard";

function Bios() {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);


  return <div className="container mx-auto bg-pink-400">
        <DoctorCard></DoctorCard>
  </div>;
}

export default Bios;
