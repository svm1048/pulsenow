import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MotionLink = motion(Link);

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <MotionLink
            to="/"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Activity className="w-8 h-8" />
            </motion.div>
            <span className="font-bold text-xl">PULSE</span>
          </MotionLink>

          <div className="flex space-x-8">
            <MotionLink
              to="/"
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-blue-400 font-semibold' 
                  : 'text-white hover:text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </MotionLink>
            <MotionLink
              to="/services"
              className={`transition-colors ${
                isActive('/services')
                  ? 'text-blue-400 font-semibold'
                  : 'text-white hover:text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Services
            </MotionLink>
            <MotionLink
              to="/pricing"
              className={`transition-colors ${
                isActive('/pricing')
                  ? 'text-blue-400 font-semibold'
                  : 'text-white hover:text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pricing
            </MotionLink>
            <MotionLink
              to="/contact"
              className={`transition-colors ${
                isActive('/contact')
                  ? 'text-blue-400 font-semibold'
                  : 'text-white hover:text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </MotionLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;