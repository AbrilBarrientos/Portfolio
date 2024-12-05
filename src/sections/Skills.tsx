import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaFigma, FaPaintBrush, FaUserAlt, FaTasks, FaUsers } from 'react-icons/fa';

const skills = [
    {
        icon: FaHtml5,
        title: "HTML",
        experience: "+3 years",
        description: "Expert in developing semantic and responsive websites with HTML5, ensuring accessibility and SEO optimization.",
    },
    {
        icon: FaCss3Alt,
        title: "CSS",
        experience: "+3 years",
        description: "Advanced CSS3 skills, including Flexbox, Grid, and animations for dynamic, mobile-first, and visually appealing layouts.",
    },
    {
        icon: FaJsSquare,
        title: "JavaScript",
        experience: "+3 years",
        description: "Proficient in JavaScript, with experience in ES6, asynchronous programming, and building interactive web applications using React.js.",
    },
    {
        icon: FaFigma,
        title: "Figma",
        experience: "+2 years",
        description: "Creating interactive prototypes and UI designs, collaborating with development teams to bring concepts to life.",
    },
    // {
    //     icon: FaAdobe,
    //     title: "Adobe Photoshop",
    //     experience: "+4 years",
    //     description: "Skilled in digital image editing, graphic design, photo manipulation, and creating assets for web and print.",
    // },
    {
        icon: FaPaintBrush,
        title: "Paint Tool SAI",
        experience: "+2 years",
        description: "Creating digital illustrations, concept art, and character designs with Paint Tool SAI.",
    },
    {
        icon: FaUserAlt,
        title: "Teamwork",
        experience: "Ongoing",
        description: "Strong ability to collaborate in cross-functional teams, fostering a positive and productive work environment.",
    },
    {
        icon: FaTasks,
        title: "Project Management",
        experience: "Ongoing",
        description: "Efficient in managing projects from start to finish, ensuring timely delivery, and meeting client expectations using tools like Trello and Asana.",
    },
    {
        icon: FaUsers,
        title: "Communication",
        experience: "Ongoing",
        description: "Excellent written and verbal communication skills, with experience presenting ideas to clients and team members effectively.",
    },
];

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" ref={ref} className=" min-h-screen py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Skills & Experience</h2>
                
                
                <div className="flex flex-wrap gap-6 w-full">
                    {skills.map((skill, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full md:w-1/2 lg:w-1/2 xl:w-1/4"
                        >
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                            <skill.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                            <h3 className="text-xl font-bold text-gray-900">{skill.title}</h3>
                            <p className="text-blue-600 font-medium">{skill.experience}</p>
                            <p className="text-gray-600">{skill.description}</p>
                            </div>
                        </div>
                        </motion.div>
                    ))}
                    </div>


            </motion.div>
        </section>
    );
    

};

export default Skills;
