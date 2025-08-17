import React from 'react';
import './Header.css';
import img from '../../img/about-me.svg';

const Header: React.FC = () => {
  return (
    <header>
      <div className="hero-section">
        <div className="hero-text">
          <p className="tagline">
            Front-End Developer | React | TypeScript | CSS-in-JS
          </p>
          <h1 className="main-title">Анастасия Анисимова</h1>
          <p className="subtext">
            Разрабатываю надёжные веб-интерфейсы с фокусом на масштабируемость,
            производительность и соответствие современным стандартам. Более трёх
            лет опыта в коммерческой разработке.
          </p>
        </div>

        <img src={img} alt="Decorative abstract design" className="hero-img" />
      </div>
    </header>
  );
};

export default Header;
