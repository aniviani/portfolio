import Navigation from '../Navigation/Navigation';
import React, { FC, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import LogosSection from '../LogosSection/LogosSection';
import SkillsSection from '../SkillsSection/SkillsSection';


export const App: FC = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <Navigation />
          <Header />
          <LogosSection />
          <SkillsSection />
        </div>
      </header>
    </React.Fragment>
  );
};
