import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const Hero = () => {
  return (
    <section className="hero-bg h-screen flex flex-col justify-center items-center text-center px-4 md:px-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      
      {/* Heading */}
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, x: -100 }}  
        animate={{ opacity: 1, x: 0 }}      
        transition={{ duration: 2 }}
      >
        Welcome to Ramu Master’s Teachings
      </motion.h1>
      
      {/* Paragraph */}
      <motion.p
        className="text-base sm:text-lg md:text-xl mt-4"
        initial={{ opacity: 0, x: -100 }}  
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Explore the world of meditation, mind programming, and spiritual growth.
      </motion.p>
      
      {/* Button */}
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
