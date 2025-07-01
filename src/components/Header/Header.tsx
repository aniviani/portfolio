import React from 'react';
import './Header.css';
import img from '../../img/abstract.jpg';

const Header: React.FC = () => {
  return (
    <header>
      <div className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <p className="tagline">Фронтенд | React | Адаптивный дизайн</p>
            <h1 className="main-title">Мое портфолио</h1>
            <p className="subtext">
              Создаю понятные и стабильные пользовательские интерфейсы. Внимание
              к деталям, адаптивность, масштабируемость.
            </p>
          </div>

          <div className="pages">
            <img
              src={img}
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
