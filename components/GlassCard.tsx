import React, { useRef, useEffect, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animationDelay?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', id, animationDelay = '0ms' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // Animate when 10% of the element is visible
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      id={id}
      ref={cardRef}
      className={`
        bg-white/30 dark:bg-gray-800/20
        backdrop-blur-xl
        border border-white/20 dark:border-gray-700/30
        rounded-2xl
        shadow-lg
        transform
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10
        ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}
        ${className}
      `}
      style={{ animationDelay }}
    >
      {children}
    </div>
  );
};

export default GlassCard;