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
  const [cardWidth, setCardWidth] = useState(320);
  const [cardsPerSlide, setCardsPerSlide] = useState(2);

  const recalc = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;

    const viewport = containerRef.current.clientWidth;

    const firstCard =
      trackRef.current.querySelector<HTMLElement>('.client-card');
    const width = firstCard ? firstCard.offsetWidth : 320;

    const perSlide = Math.max(1, Math.floor(viewport / width));

    setCardWidth(width);
    setCardsPerSlide(perSlide);

    const max = Math.ceil(cardsData.length / perSlide) - 1;
    setCurrentSlide((prev) => Math.min(prev, max));
  }, []);

  const updateTransform = useCallback(
    (index: number) => {
      if (trackRef.current) {
        const offset = index * cardWidth * cardsPerSlide;
        trackRef.current.style.transform = `translateX(-${offset}px)`;
      }
    },
    [cardWidth, cardsPerSlide],
  );

  useEffect(
    () => updateTransform(currentSlide),
    [currentSlide, updateTransform],
  );

  useEffect(() => {
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [recalc]);

  const maxSlide = Math.ceil(cardsData.length / cardsPerSlide) - 1;

  return (
    <section className="clients-section">
      <p className="clients-title">Отзывы клиентов</p>

      <div className="carousel-wrapper">
        <button
          className="carousel-button prev"
          onClick={() => setCurrentSlide((p) => Math.max(p - 1, 0))}
          disabled={currentSlide === 0}
        >
          ‹
        </button>
        <div className="carousel-container">
          <div className="carousel-track" ref={trackRef}>
            <ClientCard
              title="отзыв 1"
              description="Gemma Nolen, Google"
              rating={3}
            />
            <ClientCard
              title="отзыв 2"
              description="Gemma Nolen, Google"
              rating={5}
            />
            <ClientCard
              title="отзыв 3"
              description="Gemma Nolen, Google"
              rating={4}
            />
            <ClientCard
              title="отзыв 4"
              description="Gemma Nolen, Google"
              rating={1}
            />
            <ClientCard
              title="отзыв 5"
              description="Gemma Nolen, Google"
              rating={4}
            />
            <ClientCard
              title="отзыв 6"
              description="Gemma Nolen, Google"
              rating={3}
            />
            <ClientCard
              title="отзыв 7"
              description="Gemma Nolen, Google"
              rating={4}
            />
            <ClientCard
              title="отзыв 8"
              description="Gemma Nolen, Google"
              rating={5}
            />
            <ClientCard
              title="отзыв 9"
              description="Gemma Nolen, Google"
              rating={2}
            />
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
