import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';

const MotionLink = motion(Link);

const marketingPhrases = [
  "200% Organic Growth",
  "10x Social Engagement",
  "8x Customer Retention",
  "24/7 Expert Support",
  "5x Lead Generation",
  "95% Client Satisfaction",
  "Global Brand Reach",
  "Optimized for 5x Efficiency",
  "50% Faster Deployment"
];

function App() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % marketingPhrases.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold mb-6"
          >
            Transform Your Digital Presence
          </motion.h1>
          <div className="h-12 md:h-16 mb-8"> {/* Fixed height container */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPhraseIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-3xl gradient-text font-bold"
              >
                {marketingPhrases[currentPhraseIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <MotionLink
            to="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
          >
            Get Started
          </MotionLink>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          >
            Why Choose Pulse?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: Zap, 
                title: 'Affordable Pricing', 
                desc: 'Competitive pricing for maximum value' 
              },
              { 
                icon: Target, 
                title: 'Quality Lead Generation', 
                desc: 'Strategic focus on converting high-value prospects into sustainable revenue streams' 
              },
              { 
                icon: Users, 
                title: 'Expert Team', 
                desc: 'Industry professionals with proven success' 
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 p-6 md:p-8 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <feature.icon className="w-10 h-10 md:w-12 md:h-12 mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-base md:text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 md:mb-8"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-lg md:text-xl hover:bg-gray-200 transition-colors"
          >
            Start Your Journey
          </MotionLink>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 md:py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="text-sm md:text-base">&copy; 2024 Pulse Marketing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;