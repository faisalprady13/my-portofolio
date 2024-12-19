import React from 'react';
import DotPattern from './ui/dot-pattern';
import { cn } from '@/lib/utils';

interface SectionProps {
  isDarkMode?: boolean;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  isDarkMode = false,
  isFullWidth = false,
  isFullHeight = false,
  children,
}) => {
  const sectionStyle: React.CSSProperties = {
    width: isFullWidth ? '100vw' : 'auto',
    height: isFullHeight ? '100vh' : 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDarkMode ? '#232121' : '#eeeeee',
    color: isDarkMode ? '#ffffff' : '#000000',
    paddingTop: isFullHeight ? '0' : '2rem',
    paddingBottom: isFullHeight ? '0' : '2rem',
    paddingLeft: isFullWidth ? '0' : '2rem',
    paddingRight: isFullWidth ? '0' : '2rem',
  };

  return (
    <div style={sectionStyle} className="relative">
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]'
        )}
      />
      <div className="z-10 size-full">{children}</div>
    </div>
  );
};

export default Section;
