import React from 'react';
import { ChatIcon, WhatsAppIcon, SparklesIcon } from './icons/FloatingIcons';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-4">
      <button 
        className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group animate-float animate-pulse-glow"
        style={{ animationDelay: '0s' }}
      >
        <SparklesIcon className="w-6 h-6 text-amber-500 group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 px-3 py-1.5 text-sm bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          AI Assistant
        </span>
      </button>
      <button 
        className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group animate-float"
        style={{ animationDelay: '0.2s' }}
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
         <span className="absolute right-full mr-4 px-3 py-1.5 text-sm bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </button>
      <button 
        className="bg-emerald-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group animate-float"
        style={{ animationDelay: '0.4s' }}
      >
        <ChatIcon className="w-6 h-6 text-white" />
         <span className="absolute right-full mr-4 px-3 py-1.5 text-sm bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Live Chat
        </span>
      </button>
    </div>
  );
};

export default FloatingElements;