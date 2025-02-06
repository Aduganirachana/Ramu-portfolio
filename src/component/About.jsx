import React from "react";
import { motion } from "framer-motion";
import "../App.css"

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-center w-full flex items-center justify-center gap-14">
      <div className="w-[35%] px-4 py-10 rounded-md shadow shadow-gray-200 shadow-xl">
      <motion.h2 
        className="text-2xl font-bold text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Introduction
      </motion.h2>
      <motion.p
        className="mt-6 text-md text-gray-700 w-[85%] mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Introducing Ramu Master, a distinguished Spiritual Science Teacher and the 
        visionary Founder and Chairman of the Dhyana Osmania Foundation and Dhyana 
        Dharma Ashram. With an unwavering commitment to meditation and spiritual science, 
        Ramu Master has been a guiding light for individuals seeking inner peace, self-realization, and holistic well-being.
      </motion.p>
      </div>
      <div className="w-[35%] px-4 py-10 rounded-md shadow shadow-gray-200 shadow-xl">
      <motion.h2 
        className="text-2xl font-bold text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Ramu Master
      </motion.h2>
      <motion.p
        className="mt-6 text-md text-gray-700 w-[85%] mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Ramu Master, born on July 26, 1980, is a Spiritual Science Teacher and the 
        visionary Founder of the Dhyana Osmania Foundation and Dhyana Dharma Ashram.
        He holds an M.Sc. in Mathematics and Physics and is dedicated to spreading 
        meditation and spiritual knowledge.His mission is to integrate meditation and 
        spiritual science into the education systems of all countries.
      </motion.p>
      </div>
      
    </section>
  );
};

export default About;