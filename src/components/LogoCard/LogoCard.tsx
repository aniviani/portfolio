import React from 'react';
import './LogoCard.css';

interface LogoCardProps {
  image: string;
  alt: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ image, alt }) => {
  return (
    <div className="logo-card">
      <img src={image} alt={alt || 'logo'} className="logo-image" />
    </div>
  );
};

export default LogoCard;
