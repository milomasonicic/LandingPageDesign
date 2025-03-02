import React from "react";

interface ImageContainerProps {
  imageSource: string;
  description: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageSource, description }) => {
  return (
    <div>
      <div
        className={`w-[530px] h-[330px] 
            md:w-[550px] md:h-[550px] bg-cover bg-center
            
            bg-no-repeat 
        ${imageSource}`}
      ></div>
      <p className="">{description}</p>
    </div>
  );
};

export default ImageContainer;

