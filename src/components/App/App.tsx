import Navigation from '../Navigation/Navigation';
import React, { FC, useEffect } from 'react';
import Header from '../Header/Header';
import LogosSection from '../LogosSection/LogosSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import WorksSection from '../WorksSection/WorksSection';
import ClientsSection from '../ClientsSection/ClientsSection';
import Footer from '../Footer/Footer';

export const App: FC = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <Navigation />
          <Header />
          <LogosSection />
          <SkillsSection />
          <WorksSection />
          <ClientsSection />
          <Footer />
        </div>
      </header>
    </React.Fragment>
  );
};
