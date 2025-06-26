import React from 'react';
import './SkillCard.css';

interface SkillCardProps {
  image: string;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ image, title, description }) => {
  return (
    <div className="skill-card">
      <img src={image} alt={title} className="skill-image" />
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </div>
  );
};

export default SkillCard;
