import React from 'react';
import './WorkCard.css';

interface IWorkCardProps {
  image: string;
  title: string;
  duration: string;
  description: string;
}

const WorkCard: React.FC<IWorkCardProps> = ({
  image,
  title,
  duration,
  description,
}) => {
    const descriptionItems = description.split(';').filter(item => item.trim());

  return (
    <div className="work-card">
      <img src={image} alt={title} className="work-image" />
      <h3 className="work-title">{title}</h3>
      <h3 className="work-duration">{duration}</h3>
      <ul className="work-description">
       {descriptionItems.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
            </ul>
    </div>
  );
};

export default WorkCard;
