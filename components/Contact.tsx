
import React from 'react';
import GlassCard from './GlassCard';
import { LocationMarkerIcon, PhoneIcon, MailIcon } from './icons/ContactIcons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are here to answer your questions and help you begin your journey to a perfect smile.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <GlassCard className="p-8" animationDelay="100ms">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <LocationMarkerIcon className="w-6 h-6 text-emerald-500" />
                <span>123 Dental Ave, Smile City, ST 12345</span>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-emerald-500" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon className="w-6 h-6 text-emerald-500" />
                <span>contact@pearlsmile.studio</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white">Opening Hours</h3>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Monday - Friday</span>
              <span>9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Saturday</span>
              <span>10:00 AM - 2:00 PM</span>
            </div>
          </GlassCard>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257591961642!2d-122.42172838468165!3d37.78443997975768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809f6b5b5b5b%3A0x2a3e6f9b1b7b7c8a!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1618453086789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="grayscale-[50%] contrast-120"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;