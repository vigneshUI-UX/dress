import React, { useState } from 'react';
import './HeroSection.css';

const slides = [
  {
    id: '01',
    category: 'WINTER',
    title: 'Cozy Knitwear',
    desc: 'Soft, warm, and endlessly huggable. Comfort with character.',
    image: '/assets/char-winter.png',
  },
  {
    id: '02',
    category: 'BRIDAL',
    title: 'The White Vow',
    desc: 'A cascade of lace and light. The moment you’ve always imagined.',
    image: '/assets/char-bridal.png',
  },
  {
    id: '03',
    category: 'SPORT',
    title: 'Active Edit',
    desc: 'Performance pieces that move the way you move. No limits.',
    image: '/assets/char-sport.png',
  },
  {
    id: '04',
    category: 'EVENING',
    title: 'Evening Gown',
    desc: 'Flowing elegance that turns every entrance into a moment.',
    image: '/assets/char-evening.png',
  },
  {
    id: '05',
    category: 'STREET',
    title: 'Street Layers',
    desc: 'Edgy denim and modern cuts for the urban explorer.',
    image: '/assets/char-street.png',
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Bridal

  const activeSlide = slides[activeIndex];

  // Helper function to dynamically map wrapped cyclic offsets (-2, -1, 0, 1, 2)
  const getWrappedOffset = (idx) => {
    const total = slides.length;
    let diff = (idx - activeIndex) % total;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;
    return diff;
  };

  return (
    <div className="hero-container">
      {/* Top Header Logo */}
      <header className="hero-header">
        <h1 className="brand-logo">LUMIÈRE</h1>
      </header>

      {/* Main Content Stage */}
      <div className="hero-content">
        {/* Animated Floating Info Card */}
        <div className="info-card" key={activeSlide.id}>
          <span className="slide-number">0{activeIndex + 1} – {activeSlide.category}</span>
          <h2 className="slide-title">{activeSlide.title}</h2>
          <p className="slide-desc">{activeSlide.desc}</p>
        </div>

        {/* Character Carousel Stage - Always 2 Left, 1 Center, 2 Right */}
        <div className="character-stage">
          {slides.map((slide, idx) => {
            const offset = getWrappedOffset(idx);
            const isCenter = offset === 0;

            return (
              <div
                key={slide.id}
                className={`character-item offset-${offset} ${isCenter ? 'center' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <img src={slide.image} alt={slide.title} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Category Selector Navigation */}
      <div className="category-nav">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            className={`cat-btn ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
}