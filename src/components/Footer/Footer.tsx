import React from 'react';
import './Footer.css';
import FooterInfo from '../FooterInfo/FooterInfo';
import img from '../../img/abstract.jpg';
import FooterForm from '../FooterForm/FooterForm';

const Footer: React.FC = () => {
  return (
    <section id='contact' className="footer-section">
      <div className="info-footer">
        <FooterInfo
          title="Давайте работать вместе"
          description="Если вам нужен адаптивный, чистый и современный интерфейс — я готова помочь. Разрабатываю компоненты на React и TypeScript, превращаю дизайн-макеты в работающие веб-страницы. Буду рада сотрудничеству над интересными проектами."
          image={img}
        />
        <FooterForm />
      </div>
    </section>
  );
};

export default Footer;
