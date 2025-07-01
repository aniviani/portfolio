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
          title="React-разработка"
          description="Создаю интерфейсы на основе компонентов с использованием React и TypeScript."
        />
        <SkillCard
          image={img}
          title="Адаптивный дизайн"
          description="Превращаю макеты в живые, отзывчивые интерфейсы. Использую Flexbox и CSS Grid, медиа-запросы. Гарантирую корректное отображение на экранах любого размера."
        />
        <SkillCard
          image={img}
          title="Работа в команде"
          description="Уверенно использую Git, работаю с ветками и pull request. Понимаю основы командной разработки, пишу структурированный код и легко адаптируюсь к чужому проекту."
        />
      </div>
    </section>
  );
};

export default SkillsSection;
