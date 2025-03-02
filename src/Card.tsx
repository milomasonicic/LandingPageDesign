
import { motion } from "framer-motion"; // Ispravan import

function Card() {
  return (
    <div
      className="bg-teal-400 hover:bg-teal-600 transition-colors duration-300 h-[550px] w-full rounded-b-3xl flex flex-col justify-center items-center mb-16 "
    >
      <h1 className="text-white text-center text-2xl py-8">Lorem ipsum lorem</h1>

      <div className="w-[70%] h-[250px] bg-surgery bg-center bg-cover bg-no-repeat rounded-full">
      </div>
    </div>

   
  );
}

export default Card;









