import React from 'react';
import { cn } from '@/lib/utils';

interface GradientProgressBarProps {
  currentLevel: number;
  hue: number;
  className?: string;
}

export function GradientProgressBar({
  currentLevel,
  className,
  hue,
}: GradientProgressBarProps) {
  const levels = [1, 2, 3, 4, 5];

  const getColor = (level: number) => {
    const lightness = 75 - (level - 1) * 8; // This will give us a range from 0 (red) to 120 (green)
    return `hsl(${hue}, 90%, ${lightness}%)`;
  };

  return (
    <div
      className={cn(
        'w-full h-2 bg-gray-200 overflow-hidden skew-x-[-45deg]',
        className
      )}
      role="progressbar"
      aria-valuenow={currentLevel}
      aria-valuemin={1}
      aria-valuemax={5}
    >
      <div className="h-full flex">
        {levels.map((level) => (
          <div
            key={level}
            className={cn(
              'h-full flex-1 transition-all duration-300 ease-in-out relative',
              level <= currentLevel ? 'opacity-100' : 'opacity-0'
            )}
            style={{ backgroundColor: getColor(level) }}
          >
            {level < 5 && (
              <div className="absolute right-0 top-0 w-0.5 h-full bg-white" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
