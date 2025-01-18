import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Share2, PenTool } from 'lucide-react';
import Navigation from '../components/Navigation';

const services = [
  {
    icon: Code,
    title: 'Interactive Website Development',
    description: 'Custom-built websites that engage users and drive conversions',
    steps: [
      'Requirements gathering and analysis',
      'UI/UX design and prototyping',
      'Development and testing',
      'Launch and maintenance'
    ]
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love',
    steps: [
      'User research and personas',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Usability testing'
    ]
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Comprehensive social media strategy and execution',
    steps: [
      'Platform audit and strategy',
      'Content calendar creation',
      'Daily posting and engagement',
      'Analytics and reporting'
    ]
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: '100% original, engaging content for your brand',
    steps: [
      'Content strategy development',
      'Copywriting and editing',
      'Visual content creation',
      'Performance tracking'
    ]
  }
];

function Services() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Services
        </motion.h1>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/3">
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-400">{service.description}</p>
                </div>
                <div className="w-full md:w-2/3 bg-gray-800 rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-6">Process</h3>
                  <div className="space-y-6">
                    {service.steps.map((step, stepIndex) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: stepIndex * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                          {stepIndex + 1}
                        </div>
                        <p>{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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

export default Services;