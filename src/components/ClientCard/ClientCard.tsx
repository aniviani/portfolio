import React from 'react';
import './ClientCard.css';

interface ClientCardProps {
  title: string;
  description: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ title, description }) => {
  return (
    <div className="client-card">
      <h3 className="client-title">{title}</h3>
      <p className="client-description">{description}</p>
    </div>
  );
};

export default ClientCard;
