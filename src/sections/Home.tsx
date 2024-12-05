import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Graphic Designer | Digital Media Management Professional
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Hi! I'm Abril :) check my portfolio and let's work together. 
        </p>
        <div className="flex space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-[100px] "
          >
            My Projects
          </a>
          <a
            href="#about"
            className="bg-white-600 text-cyan border border-gray-300 px-6 py-3 rounded-[100px] hover:bg-blue-200 transition-colors"
          >
            About Me
          </a>
          <a
            href="#about" target='_blank'
            className="border border-gray-300 px-6 py-3 rounded-[100px] hover:bg-gray-50 transition-colors"
          >
            Download CV vitae
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;