import React from 'react';
import './WorksSection.css';
import WorkCard from '../WorkCard/WorkCard';
import img from '../../img/abstract.jpg';

const WorksSection: React.FC = () => {
  return (
    <section className="works-section">
      <div className="works-title">
        <p>Последние работы</p>
      </div>
      <div className="works-wrapper">
        <WorkCard image={img} title="Free Bird" description="Lynyrd Skenerd" />
        <WorkCard image={img} title="Purple Haze" description="Jimi Hendrix" />
        <WorkCard
          image={img}
          title="You Really Got Me"
          description="The Kinks"
        />
        <WorkCard image={img} title="American Girl" description="Tom Petty" />
        <WorkCard image={img} title="Whole Lotta" description="Led Zeppelin" />
        <WorkCard image={img} title="Under Pressure" description="Queen" />
      </div>
    </section>
  );
};

export default WorksSection;
