import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './icons/ThemeIcons';
import { PearlSmileLogoIcon } from './icons/AppIcons';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Services', 'Testimonials', 'Contact'];

  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? 'py-3 bg-white/95 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'py-6'}
    `}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <PearlSmileLogoIcon className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
          <span className="text-xl font-bold tracking-wider transition-colors duration-500 text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400">
            PearlSmile
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="transition-colors duration-300 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400"
            >
              {link}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('booking')}
            className="hidden sm:inline-block bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book Now
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 transition-colors"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;