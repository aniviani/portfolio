import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ClientsSection.css';
import ClientCard from '../ClientCard/ClientCard';

const cardsData = [
  {
    title: 'JavaScript / TypeScript',
    description:
      'Работаю со строгой типизацией, уверенно использую современные возможности языка.',
    rating: 5,
  },
  {
    title: 'React / Redux',
    description:
      'Проектирую интерфейсы, использую Redux для управления состоянием в сложных приложениях.',
    rating: 4,
  },
  {
    title: 'HTML / CSS / BEM / CSS-in-JS',
    description:
      'Пишу адаптивную и поддерживаемую вёрстку. Опыт с CSS-модулями и styled-components.',
    rating: 5,
  },
  {
    title: 'MySQL / PostgreSQL',
    description:
      'Работа с базами данных: структура, запросы, интеграция через API.',
    rating: 4,
  },
  {
    title: 'Git / DevOps (basic)',
    description:
      'Работа в ветках, настройка CI/CD, линтинг и проверка кода на этапе сборки.',
    rating: 5,
  },
];

const ClientsSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(32);
  const [visibleCards, setVisibleCards] = useState(2);

  const recalc = useCallback(() => {
    if (!trackRef.current || !containerRef.current) return;

    const cards =
      trackRef.current.querySelectorAll<HTMLElement>('.client-card');
    if (!cards.length) return;

    const first = cards[0];
    const cw = first.offsetWidth;

    const style = window.getComputedStyle(trackRef.current);
    let rawGap = style.columnGap || style.rowGap || style.gap || '0';
    let g = parseFloat(rawGap);

    if (Number.isNaN(g) || g === 0) {
      const second = cards[1];
      g = second ? second.offsetLeft - first.offsetLeft - cw : 0;
    }

    const containerWidth = containerRef.current.offsetWidth;
    const vis = Math.max(1, Math.floor(containerWidth / (cw + g)));

    setCardWidth(cw);
    setGap(g);
    setVisibleCards(vis);
  }, []);

  const updateTransform = useCallback(
    (index: number) => {
      if (trackRef.current) {
        const offset = currentSlide * (cardWidth + gap);
        trackRef.current.style.transform = `translateX(-${offset}px)`;
      }
    },
    [currentSlide, cardWidth, gap],
  );

  useEffect(
    () => updateTransform(currentSlide),
    [currentSlide, updateTransform],
  );

  useEffect(() => {
    recalc();
    const handleResize = () => {
      recalc();
      setCurrentSlide(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [recalc]);

  const maxSlide = Math.max(cardsData.length - visibleCards, 0);

  return (
    <section id="skills" className="clients-section">
      <p className="clients-title">Мои навыки</p>

      <div className="carousel-wrapper" ref={containerRef}>
        <button
          className="carousel-button prev"
          onClick={() => setCurrentSlide((p) => Math.max(p - 1, 0))}
          disabled={currentSlide === 0}
        >
          ‹
        </button>
        <div className="carousel-container">
          <div className="carousel-track" ref={trackRef}>
            {cardsData.map((card, index) => (
              <ClientCard
                key={index}
                title={card.title}
                description={card.description}
                rating={card.rating}
              />
            ))}
          </div>
        </div>
        <button
          className="carousel-button next"
          onClick={() => setCurrentSlide((p) => Math.min(p + 1, maxSlide))}
          disabled={currentSlide === maxSlide}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default ClientsSection;
