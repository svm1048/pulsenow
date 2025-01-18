import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';

const MotionLink = motion(Link);

function App() {
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
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transform Your Digital Presence
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl mb-8 gradient-text font-bold"
          >
            200% Organic Growth
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose Pulse?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <feature.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
          >
            Start Your Journey
          </MotionLink>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Pulse Marketing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;