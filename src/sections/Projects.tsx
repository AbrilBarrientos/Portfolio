import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "CSS Smooth Animations Generator",
    description: "Easy-to-Use CSS Animations Generator - Copy and Incorporate into Your Projects!",
    image: "/images/cssAniGen-projectPortrait.jpg",
    tags: ["TypeScript", "JavaScript", "HTML", "CSS"],
    link: "https://css-smoth-animations.vercel.app"
  },
  {
    title: "Tip Calculators",
    description: "Brand animations and kinetic typography projects",
    image: "/images/projectPortrait-tipCalculator.jpg",
    tags: ["TypeScript", "JavaScript", "HTML", "CSS"],
    link: "https://calculadora-propinas-swart.vercel.app"
  },
  {
    title: "Log In Simulator",
    description: "Cute Log In session simulator",
    image: "/images/projectPortrait-loginSimulator.jpg",
    tags: ["TypeScript", "JavaScript", "HTML", "CSS"],
    link: "https://log-in-test-sigma.vercel.app"
  },
  {
    title: "Benefit Ecommerce - Grade Project",
    description: "University Project Collab ft. Alvarez",
    image: "/images/projectPortrait-benefit.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://benefit-ecommerce.vercel.app"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className="min-h-screen py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[310px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  View project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    
  );
};

export default Projects;
