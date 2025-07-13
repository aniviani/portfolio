import React from 'react';
import './SkillCard.css';

interface ISkillCardProps {
  image: string;
  title: string;
  description: string;
}

const SkillCard: React.FC<ISkillCardProps> = ({ image, title, description }) => {
  return (
    <div className="skill-card">
      <img src={image} alt={title} className="skill-image" />
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </div>
  );
};

export default SkillCard;
