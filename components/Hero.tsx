import React from 'react';
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-16 md:pb-24">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811292506-727c65c6f34a?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/10 via-slate-50/70 to-slate-50 dark:from-gray-900/10 dark:via-gray-900/70 dark:to-gray-900"></div>
      
      {/* Main Hero Image - positioned on the right half of the screen on desktop */}
      <div className="absolute bottom-0 right-0 top-0 w-1/2 hidden lg:flex items-center justify-center opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <img 
              src="https://images.unsplash.com/photo-1629904853716-f0bc64219164?q=80&w=800&auto=format=fit=crop" 
              alt="Person with a beautiful smile"
              className="object-cover h-full w-full object-center"
          />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2">
            <div className="z-10 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800 dark:text-white drop-shadow-lg opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                    Experience the Future of Dental Care.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 mx-auto lg:mx-0 max-w-xl drop-shadow-md opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                    PearlSmile Dental Studio combines luxury wellness with cutting-edge technology for your brightest, healthiest smile.
                </p>
                {/* On large screens, the form gets a negative margin to overlap the image */}
                <div className="mt-12 w-full max-w-lg mx-auto lg:mx-0 lg:max-w-xl lg:-mr-24 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                    <BookingForm />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
