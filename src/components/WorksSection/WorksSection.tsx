import React from 'react';
import './WorksSection.css';
import WorkCard from '../WorkCard/WorkCard';
import img1 from '../../img/grabrFi.svg';
import img2 from '../../img/justspace.svg';

const WorksSection: React.FC = () => {
  return (
    <section id="work" className="works-section">
      <div className="works-title">
        <p>Опыт работы</p>
      </div>
      <div className="works-wrapper">
        <WorkCard
          image={img1}
          title="GrabFi, Remote — Front-End Developer"
          duration="Июнь 2024 — н.в."
          description="Разработка главного сайта, лендингов, административной панели и дашбордов на React, Redux, TypeScript; Проектирование адаптивных компонентов и UI-кита, используемого во всех проектах компании; Оптимизация Webpack-конфигурации для уменьшения размера бандла; Настройка CI/CD-пайплайнов для автоматизации сборки и деплоя"
        />
        <WorkCard
          image={img2}
          title="Just Space, Tula — Front-End Developer"
          duration="Май 2022 — Май 2024"
          description="Разработка более 10 сайтов и лендингов с использованием React, Redux и TypeScript; Вёрстка по макетам Figma с соблюдением принципов pixel-perfect и адаптивности; Настройка среды разработки: ESLint, Prettier, проверка типов; Применение семантической вёрстки и написание технической документации"
        />
      </div>
    </section>
  );
};

export default WorksSection;
