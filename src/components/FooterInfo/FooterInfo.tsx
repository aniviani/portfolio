import React from 'react';
import './FooterInfo.css';
import { ReactComponent as EmailIcon } from '../../img/email.svg';
import { ReactComponent as GitIcon } from '../../img/github.svg';
import { ReactComponent as TgIcon } from '../../img/telegram.svg';

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
  const descriptionItems = description
    .split('\n')
    .filter((item) => item.trim());

  return (
    <div className="info-contact">
      <h3 className="info-title">{title}</h3>
      <div className="info-description">
        {descriptionItems.map((item, index) => (
          <div key={index} className="description-item">
            {item.trim()}
          </div>
        ))}
      </div>
      <div className="info-icons">
        <a href="mailto:aniviani@yandex.com">
          <EmailIcon className="info-image" title="E-mail" />
        </a>

        <a
          href="https://github.com/aniviani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitIcon className="info-image" title="GitHub" />
        </a>

        <a
          href="https://t.me/Anastasia_anisiimova"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TgIcon className="info-image tg" title="Telegram" />
        </a>
      </div>
    </div>
  );
};

export default FooterInfo;
