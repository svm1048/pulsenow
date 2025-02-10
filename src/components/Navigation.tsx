import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MotionLink = motion(Link);

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/pricing', label: 'Pricing' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <MotionLink
                key={path}
                to={path}
                className={`transition-colors text-lg ${
                  isActive(path) 
                    ? 'text-blue-400 font-semibold' 
                    : 'text-white hover:text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </MotionLink>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'pb-4' : ''}`}
        >
          <div className="flex flex-col space-y-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/pricing', label: 'Pricing' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <MotionLink
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors py-2 px-4 rounded-lg text-lg ${
                  isActive(path)
                    ? 'text-blue-400 font-semibold bg-gray-800'
                    : 'text-white hover:bg-gray-800'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </MotionLink>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navigation;