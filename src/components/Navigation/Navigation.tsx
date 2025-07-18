import React, { useState, useEffect } from 'react';
import './Navigation.css';

const navItems = [
  { id: 'about', label: 'обо мне' },
  { id: 'work', label: 'работы' },
  { id: 'contact', label: 'контакты' },
];

const Navigation: React.FC = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else if (delta < -10) {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`nav-wrapper ${showNav ? 'show' : 'hide'}`}>
      <nav className="nav-container">
        <div className="nav-logo">Logo</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
