
import React from 'react';
import type { Service } from '../types';
import GlassCard from './GlassCard';
import { ToothIcon, SparklesIcon, AcademicCapIcon } from './icons/AppIcons';

const services: Service[] = [
  {
    icon: SparklesIcon,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our range of aesthetic treatments, including veneers, bonding, and smile makeovers.',
    image: 'https://images.unsplash.com/photo-1600170052733-29a8a7c1c7a0?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: ToothIcon,
    title: 'Root Canal Therapy',
    description: 'Relieve pain and save your natural teeth with our gentle and effective root canal procedures.',
    image: 'https://images.unsplash.com/photo-1588776239933-3cf38b55d38c?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: AcademicCapIcon,
    title: 'Teeth Whitening',
    description: 'Achieve a brilliantly white smile with our professional in-office and take-home whitening systems.',
    image: 'https://images.unsplash.com/photo-1619890184209-3a3f52478f73?q=80&w=800&auto=format&fit=crop',
  },
];

const ServiceCard: React.FC<{ service: Service, animationDelay: string }> = ({ service, animationDelay }) => (
  <GlassCard 
    className="p-0 text-center flex flex-col group h-full"
    animationDelay={animationDelay}
  >
    <div className="h-48 overflow-hidden rounded-t-2xl">
      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="relative p-6 pt-16 flex flex-col items-center flex-grow">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-full border-4 border-slate-50 dark:border-gray-900 transition-transform duration-300 group-hover:scale-105">
        <service.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
    </div>
  </GlassCard>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Our Signature Services</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We offer a comprehensive suite of services tailored to meet your unique dental needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} animationDelay={`${index * 150}ms`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;