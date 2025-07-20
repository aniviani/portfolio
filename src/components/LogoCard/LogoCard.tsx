import React from 'react';
import './LogoCard.css';

interface ILogoCardProps {
  logo: React.ReactNode;
  alt: string;
}

const LogoCard: React.FC<ILogoCardProps> = ({ logo, alt }) => {
  return (
    <div className="logo-card" aria-label={alt}>
      {logo}
    </div>
  );
};

export default LogoCard;
