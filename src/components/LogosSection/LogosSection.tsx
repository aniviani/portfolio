import React from 'react';
import './LogosSection.css';
import LogoCard from '../LogoCard/LogoCard';
import img1 from '../../img/image-react.png';
import img2 from '../../img/image-TS.png';
import img3 from '../../img/image-css.png';

const LogosSection: React.FC = () => {
  return (
    <section>
      <div className="logos-sections">
        <div className="logos">
          <LogoCard image={img1} alt="React logo" />
          <LogoCard image={img2} alt="TypeScript logo" />
          <LogoCard image={img3} alt="CSS logo" />
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
