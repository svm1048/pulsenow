import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MotionLink = motion(Link);

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '4,499 ₹',
      features: [
        'Social Media Management',
        'Basic SEO',
        'Monthly Report',
        'Email Marketing',
        'Short Form Content Edits',
      ],
    },
    {
      name: 'Professional',
      price: '7,999 ₹',
      features: [
        'Everything in Starter',
        'Advanced SEO',
        'Content Creation',
        'Lead Generation',
        'Priority Support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Everything in Professional',
        'Custom Strategy',
        'Dedicated Manager',
        '24/7 Support',
        'Performance Marketing',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Pricing Plans
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                rounded-lg p-8
                ${plan.highlighted
                  ? 'bg-gradient-to-b from-blue-600 to-blue-800 transform scale-105'
                  : 'bg-gray-800'
                }
              `}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  block w-full mt-8 py-3 rounded-full font-bold text-center
                  ${plan.highlighted
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-600 text-white'
                  }
                `}
              >
                Get Started
              </MotionLink>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mt-20"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">
            Contact our team to discuss your specific needs and how we can help grow your business.
          </p>
          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-lg"
          >
            Contact Us
          </MotionLink>
        </motion.div>
      </div>

      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Pulse Marketing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Pricing;