import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-center">
      <motion.h2 
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Ramu Master
      </motion.h2>
      <motion.p
        className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Ramu Master, born on July 26, 1980, is a Spiritual Science Teacher and the 
        visionary Founder of the Dhyana Osmania Foundation and Dhyana Dharma Ashram.
        He holds an M.Sc. in Mathematics and Physics and is dedicated to spreading 
        meditation and spiritual knowledge.
      </motion.p>
    </section>
  );
};

export default About;