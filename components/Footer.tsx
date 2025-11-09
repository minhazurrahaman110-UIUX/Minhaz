
import React from 'react';
import { PearlSmileLogoIcon } from './icons/AppIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-gray-800/50 border-t border-slate-200 dark:border-gray-700/50">
      <div className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
        <div className="flex justify-center items-center gap-2 mb-4">
            <PearlSmileLogoIcon className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold text-gray-800 dark:text-white">PearlSmile Dental Studio</span>
        </div>
        <p>&copy; {new Date().getFullYear()} PearlSmile Dental Studio. All Rights Reserved.</p>
        <p className="text-sm mt-2">Designed for a brighter future.</p>
      </div>
    </footer>
  );
};

export default Footer;