import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Monitor, Phone } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: "Illustration COMISSIONS",
    description: "Sell commissioned illustrations in comic, anime styles, character creation, and custom art design for streamers. Maintain constant communication with clients to ensure accurate composition. Manage social media to promote and sell illustration services, achieving a growing base of satisfied clients."
  },
  {
    icon: Monitor,
    title: "Custom Web Sites | UX/UI Responsive Design",
    description: "Design and develop customized websites tailored to client needs. Create visual identities and graphic materials. Oversee complete project management, from initial structure to final delivery, covering all necessary aspects."
  },
  {
    icon: Phone,
    title: " Customer Service Representative | Health Plans Seller",
    description: "Provide support to clients regarding benefits and services related to social security, resolving inquiries and ensuring customer satisfaction. Develop communication skills and manage complex situations, delivering effective and quick solutions."
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="min-h-screen py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
              I am a passionate and motivated student dedicated to learning and growing in the dynamic fields of web design and application development. My mission is to master cutting-edge digital tools and creative techniques to deliver innovative solutions that create value for people and businesses alike.
              </p>
              <p className="mb-4">
              I continuously seek to understand how things work and strive to improve them.
              </p>
              <p>
                I enjoy tackling challenges and crafting efficient, impactful solutions. I am committed to ongoing education, quickly adapting to new technologies and industry trends.
              </p>
              <p>
                Currently, I am focusing on refining my skills in UI/UX design and web development while contributing to projects that make a real difference. My goal is to join a team where I can apply my creativity and passion to drive meaningful results.
              </p>
            </div>
          </div>
          
          <div>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <skill.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{skill.title}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;