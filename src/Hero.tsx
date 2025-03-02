
import { Image } from "./Imagehero"; // Import Hero komponente
//import { Img } from "./Imageherotwo"; // Import Hero komponente
//import { Imgo } from "./ImageheroThree"; // Import Hero komponente
import { Textbl } from "./ImageheroFour"; // Import Hero komponente
//import  { Bckg } from "./Background"
//import {Treatment} from "./Treatments"
import { Treatment } from "./Treatments";

export const Hero = () => {

  const images = [
   
    { x: 950, x1: 0, w: 360, h: 400, sss: "robot", bgColor:"bg-teal-200"},
    { x: -1450, x1: 0, w: 360, h: 400, sss: "ooo", bgColor:"bg-yellow-200" },
  ];

 /*dadda<Image {...image} />  */

  return (
    <div className="relative">

      <div className=" py-8 container  gap-4 mx-auto flex h-[620px] rounded-xl  px-4 ">
              <div className="w-[50%]" >
                  <Textbl></Textbl>
                </div>
              <div className="flex gap-4 z-30 w-[50%]">
               
              {images.map((image, index) => (
                <div className="" key={index}>
                    <Image {...image} />
                  <Treatment text={"Cutting edge technology"} w={image.w} h={150} bgColor={image.bgColor}></Treatment>
                </div>
              ))}

               
              </div> 
         
      </div>

    </div>
  );
};


/*
border-4 border-gray-700

 <!--div className="px-2">
                  <Imgo></Imgo>
                </div>

                <div className="px-2">
                  <Img></Img>
                </div>
*/
/*
slete 950 


  <!--div className="flex z-20">
            <Title></Title> 
          </div-->


  <div className="inset-0 z-30">
                      <Textblock></Textblock> 
                </div>

*/