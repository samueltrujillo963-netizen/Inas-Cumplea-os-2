import React from 'react';

interface LogoProps {
  size?: 'small' | 'large';
  showIcon?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'large', showIcon = true }) => {
  const textSizeClass = size === 'large' ? 'text-3xl' : 'text-2xl';
  const iconSize = size === 'large' ? '32px' : '24px';
  const iconMargin = size === 'large' ? '-mt-4' : '-mt-2';

  return (
    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer select-none">
      <div className="relative flex items-center">
        <h1 className={`font-fredoka ${textSizeClass} tracking-tight leading-none flex items-center`}>
          <span className="text-secondary" style={{ textShadow: '2px 2px 0px #15803d, 3px 3px 0px rgba(0,0,0,0.1)' }}>I</span>
          <span className="text-primary" style={{ textShadow: '2px 2px 0px #be185d, 3px 3px 0px rgba(0,0,0,0.1)' }}>n</span>
          <span className="text-accent" style={{ textShadow: '2px 2px 0px #c2410c, 3px 3px 0px rgba(0,0,0,0.1)' }}>a</span>
          <span className="text-highlight" style={{ textShadow: '2px 2px 0px #1d4ed8, 3px 3px 0px rgba(0,0,0,0.1)' }}>'</span>
          <span className="text-highlight" style={{ textShadow: '2px 2px 0px #1d4ed8, 3px 3px 0px rgba(0,0,0,0.1)' }}>s</span>
          <span className="ml-2 text-secondary" style={{ textShadow: '2px 2px 0px #15803d, 3px 3px 0px rgba(0,0,0,0.1)' }}>C</span>
          <span className="text-primary" style={{ textShadow: '2px 2px 0px #be185d, 3px 3px 0px rgba(0,0,0,0.1)' }}>u</span>
          <span className="text-accent" style={{ textShadow: '2px 2px 0px #c2410c, 3px 3px 0px rgba(0,0,0,0.1)' }}>m</span>
          <span className="text-highlight" style={{ textShadow: '2px 2px 0px #1d4ed8, 3px 3px 0px rgba(0,0,0,0.1)' }}>p</span>
          <span className="text-secondary" style={{ textShadow: '2px 2px 0px #15803d, 3px 3px 0px rgba(0,0,0,0.1)' }}>l</span>
          <span className="text-primary" style={{ textShadow: '2px 2px 0px #be185d, 3px 3px 0px rgba(0,0,0,0.1)' }}>e</span>
          <span className="text-accent" style={{ textShadow: '2px 2px 0px #c2410c, 3px 3px 0px rgba(0,0,0,0.1)' }}>a</span>
          <span className="text-highlight" style={{ textShadow: '2px 2px 0px #1d4ed8, 3px 3px 0px rgba(0,0,0,0.1)' }}>ñ</span>
          <span className="text-secondary" style={{ textShadow: '2px 2px 0px #15803d, 3px 3px 0px rgba(0,0,0,0.1)' }}>o</span>
          <span className="text-primary" style={{ textShadow: '2px 2px 0px #be185d, 3px 3px 0px rgba(0,0,0,0.1)' }}>s</span>
        </h1>
        {showIcon && (
          <div className={`relative ml-1 ${iconMargin}`}>
            <span 
              className={`material-icons text-primary ${size === 'large' ? 'animate-bounce' : ''}`} 
              style={{ fontSize: iconSize, textShadow: '2px 2px 0px #be185d' }}
            >
              celebration
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;