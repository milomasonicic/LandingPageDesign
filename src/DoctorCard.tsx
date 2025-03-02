import React from "react";
import { motion } from "framer-motion";

function DoctorCard() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-sm rounded-lg shadow-lg bg-white p-4"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible" // Animira kada je u vidnom polju
      viewport={{ once: true, amount: 0.5 }} // Animacija se pokreće samo jednom kada je 50% elementa u vidnom polju
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {/* Slika doktora */}
      <motion.img
        src="https://via.placeholder.com/150"
        alt="Doctor"
        className="w-full h-48 object-cover rounded-t-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      {/* Tekstualni sadržaj */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">Dr. John Doe</h3>
        <p className="text-gray-600 mt-2">
          Specijalista opšte medicine sa 10+ godina iskustva. Stručnjak za
          preventivnu medicinu i konsultacije.
        </p>
      </div>
    </motion.div>
  );
}

export default DoctorCard;
