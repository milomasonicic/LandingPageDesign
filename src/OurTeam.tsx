import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Card from "./Card";

function OurTeam() {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);


  return <div>
    Our Team
    <Card></Card>
  </div>;
}

export default OurTeam;
