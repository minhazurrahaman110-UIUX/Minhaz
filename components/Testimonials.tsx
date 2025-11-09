

import React from 'react';
import type { Testimonial } from '../types';
import { StarIcon } from './icons/AppIcons';
import GlassCard from './GlassCard';

const testimonials: Testimonial[] = [
  {
    name: 'Jessica L.',
    title: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1557555187-23d685287bc3?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    rating: 5,
    comment: 'An unparalleled experience! The clinic is beautiful, and the staff made me feel so comfortable. My smile has never looked better.',
  },
  {
    name: 'David R.',
    title: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    rating: 5,
    comment: 'The technology they use is incredible. The whole process was seamless and pain-free. I highly recommend PearlSmile to everyone.',
  },
  {
    name: 'Chloe K.',
    title: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    rating: 5,
    comment: 'It feels more like a spa than a dental clinic. A truly luxurious and calming atmosphere. The results are phenomenal!',
  },
];

const Rating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex justify-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'}`} />
    ))}
  </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial; animationDelay: string }> = ({ testimonial, animationDelay }) => (
  <GlassCard 
    className="p-8 h-full flex flex-col justify-center items-center text-center group"
    animationDelay={animationDelay}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/50 shadow-md object-cover" />
    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{testimonial.name}</h3>
    <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-2">{testimonial.title}</p>
    <Rating rating={testimonial.rating} />
    <p className="mt-4 text-gray-600 dark:text-gray-400 italic">"{testimonial.comment}"</p>
  </GlassCard>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-emerald-50/50 to-slate-50 dark:from-gray-800/50 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Words From Our Patients</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover why our patients love their experience at PearlSmile Dental Studio.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} animationDelay={`${index * 150}ms`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;