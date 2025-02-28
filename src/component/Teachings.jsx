import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

const Teachings = () => {
  // Data for teachings and their details
  const teachings = [
    { 
      title: "Mind Programming", 
      details: "Transforming thought patterns for success and positivity." 
    },
    { 
      title: "Emotional Fitness", 
      details: "Building emotional resilience and intelligence for personal well-being." 
    },
    { 
      title: "Creative Visualization", 
      details: "Using the power of imagination to manifest one’s desires." 
    },
    { 
      title: "Law of Attraction", 
      details: "Applying universal principles to attract positivity and abundance." 
    }
  ];

  // State to track the selected teaching
  const [selectedTeaching, setSelectedTeaching] = useState(null);

  return (
    <section id="teachings" className="py-16 bg-gray-100 text-center px-4 md:px-10">
      
      {/* Title */}
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-purple-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Teachings and Philosophy
      </motion.h2>

      {/* Teaching Items */}
      <motion.div 
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {teachings.map((teaching, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg text-gray-700 font-semibold cursor-pointer hover:bg-purple-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedTeaching(teaching)}
          >
            {teaching.title}
          </motion.div>
        ))}
      </motion.div>

      {/* Display Selected Teaching Details */}
      {selectedTeaching && (
        <motion.div
          className="mt-8 p-6 bg-white shadow shadow-gray-400 shadow-xl rounded-xl max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-purple-600">{selectedTeaching.title}</h3>
          <p className="text-base sm:text-lg text-gray-700 mt-2">{selectedTeaching.details}</p>
          <button 
            className="mt-8 px-5 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg"
            onClick={() => setSelectedTeaching(null)}
          >
            Close
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Teachings;
