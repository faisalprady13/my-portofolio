import React from 'react';
import DotPattern from './ui/dot-pattern';
import { cn } from '@/lib/utils';
import AnimatedGridPattern from './ui/animated-grid-pattern';
import Image from 'next/image';

interface SectionProps {
  isDarkMode?: boolean;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  background?: backgroundType;
  children: React.ReactNode;
}

export enum backgroundType {
  NONE,
  DOTS,
  GRID,
  IMAGE,
}

const Section: React.FC<SectionProps> = ({
  isDarkMode = false,
  isFullWidth = false,
  isFullHeight = false,
  background = backgroundType.NONE,
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

  const activeBackground = () => {
    switch (background) {
      case backgroundType.DOTS:
        return (
          <DotPattern
            className={cn(
              '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]'
            )}
          />
        );
      case backgroundType.GRID:
        return (
          <AnimatedGridPattern
            numSquares={40}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={0.5}
            className={cn(
              // '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]',
              'inset-x-0 inset-y-[-30%] h-[200%] skew-y-[-4deg]',
              'top-[-50vh]'
            )}
          />
        );

      case backgroundType.IMAGE:
        return (
          <>
            <Image
              src="/images/hero-background.jpg"
              alt="hero image"
              fill
              quality={100}
              priority
              className="z-0 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <div style={sectionStyle} className="relative">
      {activeBackground()}
      <div className="z-10 size-full">{children}</div>
    </div>
  );
};

export default Section;
