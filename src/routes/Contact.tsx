import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check } from 'lucide-react';
import Navigation from '../components/Navigation';

function Contact() {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const email = "ithan.menachery@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16"
        >
          Get in Touch
        </motion.h1>

        <div className="max-w-3xl mx-auto">
          {!isEmailRevealed ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEmailRevealed(true)}
                className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Reveal Contact Email</span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-800 p-6 md:p-8 rounded-lg"
            >
              <div className="text-center space-y-4">
                <p className="text-lg md:text-xl mb-4">Please send your inquiries to:</p>
                <div className="relative bg-gray-700 rounded-lg p-4 md:p-5 break-all">
                  <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                    <span className="text-lg md:text-2xl font-mono font-bold text-blue-400 select-all">
                      {email}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={copyToClipboard}
                      className="inline-flex items-center space-x-1 bg-gray-600 hover:bg-gray-500 rounded-md px-3 py-1.5 transition-colors"
                      aria-label="Copy email address"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-sm">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">Copy</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
                <p className="text-gray-400 text-base md:text-lg mt-4">
                  We'll get back to you within 24 hours!
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <footer className="bg-black py-6 md:py-8 border-t border-gray-800 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="text-sm md:text-base">&copy; 2024 Pulse Marketing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;