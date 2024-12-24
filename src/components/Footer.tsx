import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Berimbolo Security</span>
            </div>
            <p className="text-sm">
              Protecting what matters most with advanced security solutions since 2010.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500">Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Returns Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Shipping Info</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © {currentYear} Berimbolo Security. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}