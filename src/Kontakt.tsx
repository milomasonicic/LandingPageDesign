import { useState } from "react";
import { motion } from "framer-motion";

const show = { opacity: 1, display: "block" };
const hide = { opacity: 0, transitionEnd: { display: "none" } };

export default function Kontakt() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center bg-slate-50 w-full h-[700px] p-6">
     
      <motion.form 
        className="w-full max-w-[800px] min-h-[400px] p-6 rounded-2xl shadow-lg flex flex-col gap-4 bg-white"
        animate={isVisible ? show : hide}
      >
        <div className="flex flex-col gap-3">
          <input 
            type="text" 
            placeholder="Ime" 
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea 
            placeholder="Poruka" 
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[150px]"
          />
        </div>
      </motion.form>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsVisible(!isVisible)}
        className="max-w-[450px] h-[90px] font-mono 
        mt-4 px-4 py-2 text-4xl text-zinc-950 rounded-lg transition-all 
        border-2 border-black"
      >
        {isVisible ? "Send" : "Contact Us"}
      </motion.button>
    </div>
  );
}
