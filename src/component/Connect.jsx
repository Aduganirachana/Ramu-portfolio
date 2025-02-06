import React from "react";
import { motion } from "framer-motion";
import "../App.css"

const Connect = () => {
  return (
    <section id="connect" className="py-16 bg-gradient-to-r from-blue-400 via-blue-700  to-blue-400 text-white text-center">
      <motion.h2 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Connect with Ramu Master
      </motion.h2>
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Follow on Instagram and subscribe to YouTube for the latest updates.
      </motion.p>
      <motion.div 
        className="mt-6 flex justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a 
          href="https://www.instagram.com/ramumaster" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-pink-500 rounded-lg font-semibold shadow-lg hover:bg-pink-600 hover:text-white transition"
        >
          Instagram
        </a>
        <a 
          href="https://www.youtube.com/c/NLIGHTTV" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold shadow-lg hover:bg-red-600 hover:text-white transition"
        >
          YouTube
        </a>
      </motion.div>
    </section>
  );
};

export default Connect;