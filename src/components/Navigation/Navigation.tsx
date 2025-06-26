import React from 'react';
import './Navigation.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const Navigation: React.FC = () => {
  return (
    <header>
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
