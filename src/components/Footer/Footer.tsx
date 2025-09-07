import React from 'react';
import './Footer.css';
import FooterInfo from '../FooterInfo/FooterInfo';
import FooterForm from '../FooterForm/FooterForm';

const Footer: React.FC = () => {
  return (
    <section id='contact' className="footer-section">
      <div className="info-footer">
        <FooterInfo
          title="Образование"
            description={`Тульский Государственный Университет — Бакалавр компьютерных наук.\n\n Финальный проект: ПО для генерации реалистичных текстов на основе ИИ\n\nGPA: ~3.8 / 4`}
        />
        <FooterForm />
      </div>
    </section>
  );
};

export default Footer;
