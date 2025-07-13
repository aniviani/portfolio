import React from 'react';
import './FooterInfo.css';
import img1 from '../../img/image-email.png';
import img2 from '../../img/image-git.png';
import img3 from '../../img/image-tg.png';

interface IFooterInfoProps {
  title: string;
  description: string;
  image: string;
}

const FooterInfo: React.FC<IFooterInfoProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="info-contact">
      <h3 className="info-title">{title}</h3>
      <p className="info-description">{description}</p>
      <div className="info-icons">
        <a href="mailto:aniviani@yandex.com">
          <img src={img1} alt={title} className="info-image" />
        </a>

        <a
          href="https://github.com/aniviani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img2} alt={title} className="info-image" />
        </a>

        <a
          href="https://t.me/Anastasia_anisiimova"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img3} alt={title} className="info-image" />
        </a>
      </div>
    </div>
  );
};

export default FooterInfo;
