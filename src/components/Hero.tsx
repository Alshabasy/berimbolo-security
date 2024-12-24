import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Parallax from './Parallax';

export default function Hero() {
  return (
    <Parallax
      backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6096684.jpg&f=1&nofb=1&ipt=b366d92a5bdc0c316b9e05e7425a90bdbe8a191eb16aa6ba5b1bcd8003f61dd6&ipo=images"
      className="h-[600px]"
    >
      <div className="h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="h-16 w-16 text-blue-500 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced Security Solutions for Modern Business
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Protect what matters most with state-of-the-art surveillance systems and 24/7 monitoring services.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
            Explore Products
          </button>
        </div>
      </div>
    </Parallax>
  );
}