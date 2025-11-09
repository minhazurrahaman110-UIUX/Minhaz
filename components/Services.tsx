
import React from 'react';
import type { Service } from '../types';
import GlassCard from './GlassCard';
import { ToothIcon, SparklesIcon, AcademicCapIcon } from './icons/AppIcons';

const services: Service[] = [
  {
    icon: SparklesIcon,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our range of aesthetic treatments, including veneers, bonding, and smile makeovers.',
  },
  {
    icon: ToothIcon,
    title: 'Root Canal Therapy',
    description: 'Relieve pain and save your natural teeth with our gentle and effective root canal procedures.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Teeth Whitening',
    description: 'Achieve a brilliantly white smile with our professional in-office and take-home whitening systems.',
  },
];

const ServiceCard: React.FC<{ service: Service, animationDelay: string }> = ({ service, animationDelay }) => (
  <GlassCard 
    className="p-8 text-center flex flex-col items-center group"
    animationDelay={animationDelay}
  >
    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-full mb-4 transition-all duration-300 group-hover:scale-110">
      <service.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
    <p className="text-gray-600 dark:text-gray-400 flex-grow">{service.description}</p>
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