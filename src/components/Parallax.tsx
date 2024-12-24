import React, { useEffect, useState } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  backgroundImage: string;
  speed?: number; // Speed of parallax effect (0-1)
  overlay?: boolean; // Whether to add a dark overlay
  className?: string;
}

export default function Parallax({ 
  children, 
  backgroundImage, 
  speed = 0.5,
  overlay = true,
  className = ''
}: ParallaxProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${offsetY * speed}px)`,
        }}
      />
      {overlay && <div className="absolute inset-0 bg-gray-900/70" />}
      <div className="relative">{children}</div>
    </div>
  );
}