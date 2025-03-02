import React from "react";

type GardenAiProps = {
  title: string;
  description: string;
  bgClass?: string;
};

function GardenAi({
  title,
  description,
  bgClass
}: GardenAiProps) {
  return (
    <div
      className={`w-[330px] h-[330px] md:w-[450px] md:h-[450px] bg-cover bg-center bg-no-repeat 
        ${bgClass} rounded-[20%]  shadow-2xl 
        transition-all duration-300 ease-in-out flex flex-col items-center justify-center p-8`}
    >
      <h1 className="text-center text-2xl md:text-5xl text-white font-serif">{title}</h1>
      <p className="text-white mt-4 text-md md:text-lg">{description}</p>
    </div>
  );
}

export default GardenAi;
