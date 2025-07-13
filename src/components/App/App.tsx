import Navigation from '../Navigation/Navigation';
import React, { FC, useEffect } from 'react';
import Header from '../Header/Header';
import LogosSection from '../LogosSection/LogosSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import WorksSection from '../WorksSection/WorksSection';
import ClientsSection from '../ClientsSection/ClientsSection';
import Footer from '../Footer/Footer';
import '../App/App.css'

export const App: React.FC = () => {
  return (
    <React.Fragment>
          <Navigation />
          <Header />
          <LogosSection />
          <SkillsSection />
          <WorksSection />
          <ClientsSection />
          <Footer />
    </React.Fragment>
  );
};
