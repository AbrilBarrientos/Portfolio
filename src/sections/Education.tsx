import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Star } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    title: "Título de Bachiller con orientación en Economía y Administración",
    institution: "Instituto Superior de Formación Académica - ISFA",
    year: "2020-2024",
    description: "Secundario - COMPLETO",
    certificate: "/certificates/analitico-abrBar.pdf",
  },
  {
    icon: Star,
    title: "Desarrollo Web",
    institution: "CODERHOUSE",
    year: "2024",
    description: "9 weeks | 36 hs.",
    certificate: "/certificates/webdev-certificate.png",
  },
  {
    icon: Star,
    title: "JavaScript",
    institution: "CODERHOUSE",
    year: "2024",
    description: "9 weeks | 36 hs.",
    certificate: "/certificates/js-certificate.png",
  },
  {
    icon: GraduationCap,
    title: "Certificación Profesional en Gestión de Medios Digitales",
    institution: "Da Vinci Primera Escuela de Arte Multimedial",
    year: "2024",
    description: "Digital media certification.",
    certificate: "https://davinci.edu.ar/carreras/desarrollo-web-y-mobile",
  },
  {
    icon: Award,
    title: "Técnico Superior en Diseño y Programación Web",
    institution: "Da Vinci Primera Escuela de Arte Multimedial",
    year: "2024 - ",
    description: "Sr. Web developer | UX/UI designer.",
    certificate: "https://davinci.edu.ar/carreras/desarrollo-web-y-mobile",
  },
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" ref={ref} className="min-h-screen py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Education & Certifications</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-blue-600 font-medium">{item.institution}</p>
                  <p className="text-gray-500 text-sm mb-2">{item.year}</p>
                  <p className="text-gray-600">{item.description}</p>
                  
                  {/* Render the button only if a certificate URL is available */}
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
                    >
                      Check Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
