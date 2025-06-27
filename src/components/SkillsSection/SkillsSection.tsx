import React from 'react';
import './SkillsSection.css';
import SkillCard from '../SkillCard/SkillCard';
import img from '../../img/abstract.jpg';

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section">
      <div className="skills-wrapper">
        <SkillCard
          image={img}
          title="Product design"
          description="This is a template Figma file, turned into code using Anima."
        />
        <SkillCard
          image={img}
          title="Art direction"
          description="This is a template Figma file, turned into code using Anima."
        />
        <SkillCard
          image={img}
          title="Visual design"
          description="This is a template Figma file, turned into code using Anima."
        />
      </div>
    </section>
  );
};

export default SkillsSection;
