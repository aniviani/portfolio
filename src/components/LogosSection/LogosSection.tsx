import React from 'react';
import './LogosSection.css';
import LogoCard from '../LogoCard/LogoCard';
import { ReactComponent as ReactLogo } from '../../img/react.svg';
import { ReactComponent as TSLogo } from '../../img/typescript.svg';
import { ReactComponent as CSSLogo } from '../../img/css.svg';
import { ReactComponent as HTMLLogo } from '../../img/html.svg';

const LogosSection: React.FC = () => {
  return (
    <section>
      <div className="logos-sections">
        <div className="logos">
          <LogoCard logo={<ReactLogo />} alt="React" />
          <LogoCard logo={<TSLogo />} alt="TypeScript" />
          <LogoCard logo={<CSSLogo />} alt="CSS" />
          <LogoCard logo={<HTMLLogo />} alt="HTML" />
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
