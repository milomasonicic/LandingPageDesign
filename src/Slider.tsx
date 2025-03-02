import React, { useState } from "react";
import { motion } from "framer-motion";
import TypingTitle from "./TitleType";
import { div } from "framer-motion/client";

const images = [
  "1 (1).jpg",
  "1 (2).jpg",
  "1 (3).jpg",
  "1 (4).jpg",
];

const titles = [
  "Working with 4Dev has been a game-changer for our business. Their team delivered a tailored solution that streamlined our operations and boosted efficiency by 35%. We couldn’t ask for a better partner!",
  "The professionalism and expertise of 4Dev are unmatched. Their innovative software transformed our customer experience, leading to a 50% increase in customer retention. Truly outstanding!",
"From start to finish, the team at 4Dev exceeded our expectations. Their dedication to delivering high-quality results on time and within budget has been phenomenal. We highly recommend them!",
  "Partnering with 4Dev was the best decision we made. Their deep understanding of our industry challenges enabled them to create a custom platform that doubled our productivity. Their support is second to none!"
];

const names = [
  "— Michael T., Head of Operations at PrimeRetail Inc.",
  "— Emily R., Founder of BrightFuture Startups",
  "— David K., CTO of Synergy Enterprises",
  "— Sarah L., COO of InnovateTech Solutions"
]

function Slider() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleCircleClick = (index) => {
    setCurrentImage(index); // Promeni trenutnu sliku i naslov
  };

  return (
    <div className="bg-gray-50 w-full">
    <div className="md:px-20 px-0 bg-gray-300 
      rounded-full
      container mx-auto flex md:flex-row flex-col items-center justify-between 
      md:h-[450px] h-[700px]">
      {/* Gornji deo: Slika i naslov */}
      <div className="flex md:flex-row flex-col  items-center justify-center 
        space-x-8 md:max-w-[950px] 
        w-[100%] md:h-[500px] h-[600px]  bg-gray-100 rounded-lg shadow-lg">
        <div className="">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className="w-[400px] 
            mx-auto h-[400px] rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
     
        <div className="max-w-[400px]">
          <h3 className="text-slate-800 mt-2 text-lg text-gray-600 italic">
            {titles[currentImage]}
          </h3>
          <h4 className="text-slate-800 mt-5">
            {names[currentImage]}
          </h4>
          
        </div>
      </div>

      {/* Donji deo: Kružići za menjanje slika */}
      <div className="flex md:flex-row md:mb-0 mb-9 justify-center space-x-4 mt-4 pb-4">
        {images.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => handleCircleClick(index)}
            className={`w-8 h-8 rounded-full cursor-pointer ${
              currentImage === index ? "bg-slate-900" : "bg-stone-50"
            }`}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Slider;
/*
<TypingTitle title={titles[currentImage]} />

*/