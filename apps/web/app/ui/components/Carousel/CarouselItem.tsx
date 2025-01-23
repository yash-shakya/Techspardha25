import React, { ReactNode } from 'react';

interface CarouselItemProps {
  children: ReactNode;
  width?: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children, width }) => {
  return (
    <div
      className="inline-flex items-center justify-center h-48"
      style={{ width: width }}
    >
      {children}
    </div>
  );
};