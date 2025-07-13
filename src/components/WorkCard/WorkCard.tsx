import React from 'react';
import './WorkCard.css';

interface IWorkCardProps {
  image: string;
  title: string;
  description: string;
}

const WorkCard: React.FC<IWorkCardProps> = ({ image, title, description }) => {
  return (
    <div className="work-card">
      <img src={image} alt={title} className="work-image" />
      <h3 className="work-title">{title}</h3>
      <p className="work-description">{description}</p>
    </div>
  );
};

export default WorkCard;
