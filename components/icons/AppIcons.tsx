import React from 'react';

export const PearlSmileLogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.5 8C8.672 8 8 8.672 8 9.5v7c0 .828.672 1.5 1.5 1.5h.5c.828 0 1.5-.672 1.5-1.5v-7C11.5 8.672 10.828 8 10 8h-.5zm5 0c-.828 0-1.5.672-1.5 1.5v7c0 .828.672 1.5 1.5 1.5h.5c.828 0 1.5-.672 1.5-1.5v-7c0-.828-.672-1.5-1.5-1.5h-.5z" />
  </svg>
);

// Replaced original complex/transformed path with a cleaner, more robust version to prevent rendering errors.
export const ToothIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 7.5h-10.5a.75.75 0 00-.75.75v6a3 3 0 003 3h5.25a3 3 0 003-3v-6a.75.75 0 00-.75-.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25c0-1.5-1.5-1.5-1.5-1.5s-1.5 0-1.5 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 5.25c0-1.5-1.5-1.5-1.5-1.5s-1.5 0-1.5 1.5" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M16 17v4m-2-2h4M15 3l-3 6-3-6 3 6 3-6zM5 21l3-6 3 6-3-6-3 6z" />
    </svg>
);

// Replaced original complex path with a simpler, more robust version to prevent rendering errors.
export const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
    </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const UserGroupIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

// Replaced original malformed path with a simpler, more robust version to prevent rendering errors.
export const BeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 3h15"></path>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 14h12"></path>
  </svg>
);

export const LoadingSpinner: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);