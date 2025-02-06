import React from "react";
import { motion } from "framer-motion";
import "../App.css"

const Hero = () => {
  return (
    <section className="hero-bg  h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, x: -100 }}  
        animate={{ opacity: 1, x: 0 }}      
        transition={{ duration: 2 }}
      >
        Welcome to Ramu Master’s Teachings
      </motion.h1>
      <motion.p
        className="text-lg mt-4"
        initial={{ opacity: 0, x: -100 }}  
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Explore the world of meditation, mind programming, and spiritual growth.
      </motion.p>
      <motion.a 
        href="#about"
        className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition"
        whileHover={{ scale: 1.1 }}
      >
        Learn More
      </motion.a>
    </section>
  );
};

export default Hero;