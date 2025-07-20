import React from 'react';
import './WorksSection.css';
import WorkCard from '../WorkCard/WorkCard';
import img from '../../img/abstract.jpg';

const WorksSection: React.FC = () => {
  return (
    <section id="work" className="works-section">
      <div className="works-title">
        <p>Опыт работы</p>
      </div>
      <div className="works-wrapper">
        <WorkCard
          image={img}
          title="Grab, Remote — Front-End Developer"
          duration="Июнь 2024 — н.в."
          description="Разработка главного сайта, лендингов, административной панели и дашбордов на React, Redux, TypeScript; Проектирование адаптивных компонентов и UI-кита, используемого во всех проектах компании; Оптимизация Webpack-конфигурации для уменьшения размера бандла; Настройка CI/CD-пайплайнов для автоматизации сборки и деплоя"
        />
        <WorkCard
          image={img}
          title="Just Space, Tula — Front-End Developer"
          duration="Май 2022 — Май 2024"
          description="Разработка более 10 сайтов и лендингов с использованием React, Redux и TypeScript; Вёрстка по макетам Figma с соблюдением принципов pixel-perfect и адаптивности; Настройка среды разработки: ESLint, Prettier, проверка типов; Применение семантической вёрстки и написание технической документации"
        />
        {/* <WorkCard
          image={img}
          title="You Really Got Me"
          description="The Kinks"
        />
        <WorkCard image={img} title="American Girl" description="Tom Petty" />
        <WorkCard image={img} title="Whole Lotta" description="Led Zeppelin" />
        <WorkCard image={img} title="Under Pressure" description="Queen" /> */}
      </div>
    </section>
  );
};

export default WorksSection;
