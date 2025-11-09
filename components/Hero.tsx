

import React from 'react';
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-cover bg-center animate-zoomIn" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent dark:from-gray-900 dark:via-gray-900/70 dark:to-black/80"></div>
      
      <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800 dark:text-white drop-shadow-lg opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Experience the Future of Dental Care.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 drop-shadow-md opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            PearlSmile Dental Studio combines luxury wellness with cutting-edge technology for your brightest, healthiest smile.
          </p>
        </div>
        <div className="z-10 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;