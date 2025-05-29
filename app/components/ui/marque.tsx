import React from 'react';
import { MarqueeProps } from '../../types';

const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  speed = 50, 
  direction = 'left', 
  pauseOnHover = true,
  className = '',
  gradient = true 
}) => {
  const animationDirection = direction === 'left' ? 'scroll-left' : 'scroll-right';
  
  return (
    <div className={`relative overflow-hidden text-white ${className}`}>
      {/* Marquee content */}
      <div 
        className={`flex animate-marquee whitespace-nowrap ${pauseOnHover ? 'hover:pause' : ''}`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        <div className="flex items-center space-x-8 px-4">
          {children}
        </div>
        <div className="flex items-center space-x-8 px-4">
          {children}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee linear infinite;
        }
        
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
