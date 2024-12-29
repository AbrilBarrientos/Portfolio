
import { motion } from 'framer-motion';
import { Home, Briefcase, GraduationCap, User, Github, Linkedin, Star, Instagram } from 'lucide-react';
import MyPhoto from './MyPhoto';



const menuItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: Briefcase, label: 'Projects', id: 'projects' },
  { icon: GraduationCap, label: 'Education', id: 'education' },
  { icon: Star, label: 'Skills', id: 'skills' },
  { icon: User, label: 'About Me', id: 'about' }

];

const Sidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.aside
      initial={{ x: -264 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg p-6"
    >
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <MyPhoto/>
          <h2 className="text-2xl font-bold text-gray-800">Abril Barrientos</h2>
          <p className="text-gray-600 mb-4">Argentina, CABA</p>
          
        </div>

        <nav className="flex-1">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-6 border-t border-gray-00">
        <div className="flex justify-around space-x-4">
          <a
            href="https://github.com/AbrilBarrientos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/abril-barrientos-44a094275/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/graficabru"  // Replace with your actual Instagram profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;