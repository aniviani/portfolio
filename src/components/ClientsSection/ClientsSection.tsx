import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ClientsSection.css';
import ClientCard from '../ClientCard/ClientCard';

const cardsData = Array.from({ length: 9 }, (_, i) => ({
  title: `отзыв ${i + 1}`,
  description: 'Gemma Nolen, Google',
  rating: (i % 5) + 1,
}));

const ClientsSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(32);
  const [visibleCards, setVisibleCards] = useState(2);

  const recalc = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;

    const firstCard =
      trackRef.current.querySelector<HTMLElement>('.client-card');
    if (!firstCard) return;

    const cardStyle = window.getComputedStyle(firstCard);
    const newCardWidth = firstCard.offsetWidth;
    const newGap = parseInt(cardStyle.marginRight) || 32;

    setCardWidth(newCardWidth);
    setGap(newGap);

 const isMobile = window.matchMedia('(max-width: 468px)').matches;
    setVisibleCards(isMobile ? 1 : 2);
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
      // Сброс текущего слайда при изменении количества видимых карточек
      setCurrentSlide(0);
    };
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [recalc]);

  const maxSlide = cardsData.length - visibleCards;

  return (
    <section className="clients-section">
      <p className="clients-title">Отзывы клиентов</p>

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
