import React from 'react';

const Orb: React.FC<{
  className: string;
  style: React.CSSProperties;
}> = ({ className, style }) => (
  <div
    className={`absolute rounded-full filter blur-3xl opacity-30 dark:opacity-20 animate-drift ${className}`}
    style={style}
  />
);

const BackgroundOrbs: React.FC = () => {
  const orbs = [
    {
      className: 'bg-emerald-400',
      style: {
        width: '400px',
        height: '400px',
        top: '10%',
        left: '20%',
        animationDuration: '70s',
        animationDelay: '0s',
        '--start-x': '0vw',
        '--start-y': '0vh',
        '--end-x': '-20vw',
        '--end-y': '30vh',
      } as React.CSSProperties,
    },
    {
      className: 'bg-amber-300',
      style: {
        width: '300px',
        height: '300px',
        top: '50%',
        left: '80%',
        animationDuration: '90s',
        animationDelay: '-15s',
        '--start-x': '0vw',
        '--start-y': '0vh',
        '--end-x': '15vw',
        '--end-y': '-40vh',
      } as React.CSSProperties,
    },
    {
        className: 'bg-slate-300 dark:bg-slate-700',
        style: {
            width: '250px',
            height: '250px',
            top: '80%',
            left: '10%',
            animationDuration: '120s',
            animationDelay: '-30s',
            '--start-x': '0vw',
            '--start-y': '0vh',
            '--end-x': '25vw',
            '--end-y': '-20vh',
        } as React.CSSProperties,
    },
     {
        className: 'bg-emerald-200 dark:bg-emerald-900',
        style: {
            width: '200px',
            height: '200px',
            top: '30%',
            left: '50%',
            animationDuration: '85s',
            animationDelay: '-5s',
            '--start-x': '0vw',
            '--start-y': '0vh',
            '--end-x': '-15vw',
            '--end-y': '10vh',
        } as React.CSSProperties,
    }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {orbs.map((orb, i) => (
        <Orb key={i} {...orb} />
      ))}
    </div>
  );
};

export default BackgroundOrbs;
