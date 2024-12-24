import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Advanced Surveillance',
    description: 'State-of-the-art security camera systems with AI-powered monitoring'
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and monitoring services'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Immediate alert system with rapid response protocols'
  },
  {
    icon: Award,
    title: 'Certified Solutions',
    description: 'Industry-certified security solutions and professional installation'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Berimbolo Security</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Protecting businesses and homes since 2010 with cutting-edge security solutions and unmatched expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300">Years in Business</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-gray-600 dark:text-gray-300">Customers Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600 dark:text-gray-300">Uptime Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
}