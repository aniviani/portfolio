import React from 'react';
import './SkillsSection.css';
import SkillCard from '../SkillCard/SkillCard';
import img from '../../img/abstract.jpg';

const SkillsSection: React.FC = () => {
  return (
    <section id="about" className="skills-section">
      <div className="skills-wrapper">
        <SkillCard
          image={img}
          title="Интерфейсы на React и TypeScript"
          description="Разрабатываю надёжные пользовательские интерфейсы на основе компонентов. Использую современные подходы к архитектуре и стилям: CSS-in-JS, BEM, модульные стили."
        />
        <SkillCard
          image={img}
          title="Автоматизация и CI/CD"
          description="Внедряю пайплайны на GitHub Actions для автоматической сборки, тестирования и деплоя. Настраиваю контроль качества кода с помощью ESLint, Prettier и TypeScript."
        />
        <SkillCard
          image={img}
          title="Опыт в коммерческой разработке"
          description="Более трёх лет занимаюсь разработкой интерфейсов для веб-приложений. Реализовывала адаптивные компоненты, проектировала UI-киты и сопровождала продукты на всех этапах жизненного цикла."
        />
      </div>
    </section>
  );
};

export default SkillsSection;
