import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10 p-6 rounded-t-2xl shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left - Logo or Text */}
        <div className=" text-center sm:text-left mx-auto ">
          <h2 className="text-lg font-bold tracking-wide">Employee Manager</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
        </div>
        

        {/* Middle - Links */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </div>

        {/* Right - Icons */}
        <div className="flex gap-4">
          <a href="mailto:example@email.com" className="hover:text-white transition">
            <Mail size={20} />
          </a>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
