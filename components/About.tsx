
import React from 'react';
import GlassCard from './GlassCard';
import { UserGroupIcon, BeakerIcon } from './icons/AppIcons';

const aboutImages = [
  {
    src: 'https://images.unsplash.com/photo-1533044078864-83953e541f3c?q=80&w=600&auto=format&fit=crop',
    alt: 'Modern dental examination room with chair and equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1629904853716-f0bc64219164?q=80&w=600&auto=format&fit=crop',
    alt: 'Bright and clean dental clinic interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1606214223363-03986a7d51e7?q=80&w=600&auto=format&fit=crop',
    alt: 'Close-up of a tooth model and dental instruments',
  },
  {
    src: 'https://images.unsplash.com/photo-1629904853893-c44242859139?q=80&w=600&auto=format&fit=crop',
    alt: 'A young child smiling during a dental check-up',
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-emerald-50/50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Your Smile, Our Passion</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            At PearlSmile, we are dedicated to providing a serene, luxurious experience backed by the most advanced dental technology available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <GlassCard className="p-6 flex items-start gap-4" animationDelay="100ms">
              <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full">
                <UserGroupIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Expert Dentists</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our team of highly-skilled and compassionate dentists is committed to continuous education and providing personalized care.
                </p>
              </div>
            </GlassCard>
            <GlassCard className="p-6 flex items-start gap-4" animationDelay="200ms">
              <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-full">
                <BeakerIcon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Advanced Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  From digital X-rays to laser dentistry, we utilize state-of-the-art equipment for precise diagnostics and comfortable treatments.
                </p>
              </div>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {aboutImages.map((image, index) => (
              <div 
                key={index} 
                className="opacity-0 animate-fadeInUp" 
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="rounded-xl shadow-lg w-full h-full object-cover aspect-square" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
