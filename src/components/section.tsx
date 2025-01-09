import React from 'react';
import DotPattern from './ui/dot-pattern';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import backgroundImage from '../../public/images/hero-background.jpg';

interface SectionProps {
  isDarkMode?: boolean;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  background?: backgroundType;
  children: React.ReactNode;
  id?: string;
}

export enum backgroundType {
  NONE,
  DOTS,
  GRID,
  IMAGE,
  GRAY,
  WHITE,
}

const activeBackground = (background: backgroundType) => {
  switch (background) {
    case backgroundType.DOTS:
      return (
        <DotPattern
          className={cn(
            '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]'
          )}
        />
      );
    case backgroundType.IMAGE:
      return (
        <>
          <Image
            src={backgroundImage}
            alt="hero image"
            fill
            quality={100}
            className="z-0 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        </>
      );
    case backgroundType.GRAY:
      return <div className="absolute w-full h-full bg-neutral-900 z-10" />;
    case backgroundType.WHITE:
      return <div className="absolute w-full h-full bg-neutral-100 z-10" />;
    default:
      return <></>;
  }
};

const Section: React.FC<SectionProps> = ({
  isDarkMode = false,
  isFullWidth = false,
  isFullHeight = false,
  background = backgroundType.NONE,
  children,
  id,
}) => {
  const sectionStyle: React.CSSProperties = {
    width: isFullWidth ? '100vw' : 'auto',
    height: isFullHeight ? '100vh' : 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDarkMode ? '#121212' : '#eeeeee',
    color: isDarkMode ? '#ffffff' : '#000000',
    paddingTop: isFullHeight ? '0' : '2rem',
    paddingBottom: isFullHeight ? '0' : '2rem',
    paddingLeft: isFullWidth ? '0' : '2rem',
    paddingRight: isFullWidth ? '0' : '2rem',
  };

  return (
    <div style={sectionStyle} className="relative" id={id}>
      {activeBackground(background)}
      <div className="z-10 size-full">{children}</div>
    </div>
  );
};

export default Section;
