import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-sm mb-4">
          Food Mania is a fully-fledged food ordering website developed by the author, @SubhamKumarTripathy, who has expertise in website development and UI/UX design. Refer to the link below to contact the author.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 my-6">
          <a href="https://github.com/Subham-kumar-Tripathy" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/subham-kumar-tripathy-62149721b/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://www.facebook.com/share/1NzUZdFFni/" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/subham_since2002?igsh=MTBvZmExOWt4OXdjZA==" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
            <FaInstagram />
          </a>
        </div>

        <div className="border-t border-gray-700 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">
            © All Rights Reserved 2025 <span className="text-blue-400">Subham Kumar Tripathy</span>
          </p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
            <a href="#" className="hover:text-gray-400">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

