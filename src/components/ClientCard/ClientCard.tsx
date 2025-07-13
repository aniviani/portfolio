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
        return '#e74c3c';
      case 2:
        return '#e67e22';
      case 3:
        return '#f1c40f';
      case 4:
        return '#a3e635';
      case 5:
      default:
        return '#00b67a';
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
