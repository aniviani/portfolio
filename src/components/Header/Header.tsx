import React from 'react';
import './Header.css';
import abstractImg from '../../img/abstract.jpg';

const Header: React.FC = () => {
  return (
    <header>
      <div className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <p className="tagline">Branding | Image making</p>
            <h1 className="main-title">
              My awesome
              <br />
              portfolio
            </h1>
            <p className="subtext">
              And I made it myself! Yes. In Figma with Anima
            </p>
          </div>

          <div className="pages">
            <img
              src={abstractImg}
              alt="Decorative abstract design"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
