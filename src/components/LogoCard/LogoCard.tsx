import React from 'react';
import './LogoCard.css';

interface ILogoCardProps {
  image: string;
  alt: string;
}

const LogoCard: React.FC<ILogoCardProps> = ({ image, alt }) => {
  return (
    <div className="logo-card">
      <img src={image} alt={alt || 'logo'} className="logo-image" />
    </div>
  );
};

export default LogoCard;
