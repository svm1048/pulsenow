import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

function Contact() {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get in Touch
        </motion.h1>

        <div className="max-w-3xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEmailRevealed(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg mb-8"
          >
            Reveal Contact Email
          </motion.button>

          {isEmailRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 p-8 rounded-lg mb-12"
            >
              <p className="text-xl mb-4">Please send your inquiries to:</p>
              <p className="text-2xl font-bold text-blue-400">ithan.menachery@gmail.com</p>
              <p className="mt-4 text-gray-400">
                We'll get back to you within 24 hours!
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Pulse Marketing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;