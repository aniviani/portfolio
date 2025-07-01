import React from 'react';
import './ClientsSection.css';
import ClientCard from '../ClientCard/ClientCard';

const ClientsSection: React.FC = () => {
  return (
    <section className="clients-section">
      <div className="clients-title">
        <p>Клиенты</p>
      </div>
      <div className="clients-wrapper">
        <ClientCard
          title="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          description="Gemma Nolen, Google"
        />
        <ClientCard
          title="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          description="Gemma Nolen, Google"
        />
        <ClientCard
          title="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          description="Gemma Nolen, Google"
        />
      </div>
    </section>
  );
};

export default ClientsSection;
