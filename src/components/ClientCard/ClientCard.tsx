import React from 'react';
import './ClientCard.css';

interface IClientCardProps {
  title: string;
  description: string;
  rating: number;
}

const ClientCard: React.FC<IClientCardProps> = ({
  title,
  description,
  rating,
}) => {
  const getStarColor = (rating: number): string => {
    switch (rating) {
      case 1:
        return '#b94a48'; 
      case 2:
        return '#d98c4c';   
      case 3:
        return '#d9b84c'; 
      case 4:
        return '#a3c76d'; 
      case 5:
      default:
        return '#5a9f80';
    }
  };

  const renderStars = (count: number) => {
    const starColor = getStarColor(count);
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`star ${i < count ? 'filled' : ''}`}
        style={{ color: i < count ? starColor : '#e0e0e0' }}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="client-card">
      <div className="client-rating">{renderStars(rating)}</div>
      <h3 className="client-title">{title}</h3>
      <p className="client-description">{description}</p>
    </div>
  );
};

export default ClientCard;
