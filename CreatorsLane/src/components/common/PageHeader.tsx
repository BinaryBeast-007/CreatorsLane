import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div 
      className={`relative pt-24 pb-12 md:pt-32 md:pb-20 ${
        backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-br from-primary-600 to-primary-800'
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay for background images */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      )}
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white opacity-90">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}