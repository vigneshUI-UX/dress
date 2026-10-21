import React, { useState } from 'react';
import './VerticalCards.css';

const dressItems = [
  {
    id: '01',
    title: 'VALENTINO SILK MAXI',
    designer: 'PIERPAOLO PICCIOLI',
    color: '#d97706',
    description: 'A masterpiece of flowing silk chiffon. Designed for high-end galas and red-carpet entrances that leave an unforgettable impression.',
    specs: { material: 'Pure Silk Chiffon', tailoring: 'Hand-Pleated', closure: 'Invisible Back Zip', length: 'Floor-Length' },
    image: 'assets/dress1.png',
    bgImage: 'assets/dress1.png' // <-- Put your background image file here for card 1
  },
  {
    id: '02',
    title: 'CHANEL VELVET MIDI',
    designer: 'VIRGINIE VIARD',
    color: '#dc2626',
    description: 'Classic Parisian elegance meets modern sophistication. Crafted from rich black and ruby velvet with signature gold-threaded trim.',
    specs: { material: 'Italian Lyon Velvet', tailoring: 'Structured Fit', closure: 'Pearl Button Cuff', length: 'Midi' },
    image: 'assets/dress2.png',
    bgImage: 'assets/dress2.png' // <-- Put your background image file here for card 2
  },
  {
    id: '03',
    title: 'VERSACE SATIN SLIP',
    designer: 'DONATELLA VERSACE',
    color: '#7c3aed',
    description: 'Liquid satin that drapes effortlessly over the silhouette. Features delicate lace inserts and sensual cowl neckline detailing.',
    specs: { material: 'Liquid Silk Satin', tailoring: 'Bias Cut', closure: 'Pull-on Style', length: 'Maxi' },
    image: 'assets/dress3.png',
    bgImage: 'assets/dress3.png' // <-- Put your background image file here for card 3
  },
  {
    id: '04',
    title: 'DIOR EMBROIDERED TULLE',
    designer: 'MARIA GRAZIA CHIURI',
    color: '#2563eb',
    description: 'An ethereal creation of sheer illusion tulle embroidered with intricate botanical motifs and metallic threading.',
    specs: { material: 'French Tulle & Silk', tailoring: 'Hand-Embroidered', closure: 'Corset Lace-up', length: 'Ballgown' },
    image: 'assets/dress4.png',
    bgImage: 'assets/dress4.png' // <-- Put your background image file here for card 4
  },
  {
    id: '05',
    title: 'GUCCI SEQUIN COUTURE',
    designer: 'SABATO DE SARNO',
    color: '#16a34a',
    description: 'Dazzling emerald sequins catch the light from every angle. Tailored with a dramatic high slit and open back construction.',
    specs: { material: 'Micro-Sequin Mesh', tailoring: 'Body-Hugging', closure: 'Side Hook & Eye', length: 'Evening' },
    image: 'assets/dress1.png',
    bgImage: 'assets/dress1.png' // <-- Put your background image file here for card 5
  }
];

export default function VerticalCards() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to item 03
  const [showModal, setShowModal] = useState(false);

  const activeItem = dressItems[activeIndex];

  return (
    <div className="v-accordion-container">
      {/* Full-Screen Dynamic Background Image */}
      <div 
        className="v-global-bg" 
        style={{ backgroundImage: `url(${activeItem.bgImage})` }}
      >
        <div className="v-bg-overlay"></div>
      </div>

      <div className="v-cards-track">
        {dressItems.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={item.id}
              className={`v-panel ${isActive ? 'active' : ''}`}
              style={{
                borderLeftColor: item.color,
                /* Individual Panel Background Image */
                '--panel-bg': `url(${item.bgImage})`
              }}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="v-panel-bg-img"></div>
              <div className="v-panel-dark-tint"></div>

              <div className="v-panel-content">
                <div className="v-panel-top" style={{ color: item.color }}>
                  {item.id}
                </div>

                {!isActive && (
                  <div className="v-vertical-title">
                    <span>{item.title}</span>
                  </div>
                )}

                {isActive && (
                  <div className="v-expanded-content">
                    <div className="v-details-left">
                      <span className="v-designer-tag">{item.designer}</span>
                      <h2 className="v-main-title">{item.title}</h2>
                      <p className="v-description">{item.description}</p>
                      
                      <button 
                        className="v-learn-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowModal(true);
                        }}
                      >
                        EXPLORE DETAILS
                      </button>
                    </div>

                    <div className="v-details-right">
                      <img src={item.image} alt={item.title} className="v-dress-preview" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showModal && (
        <div className="v-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="v-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="v-close-modal" onClick={() => setShowModal(false)}>✕</button>
            <div className="v-modal-header">
              <span className="v-modal-id">{activeItem.id}</span>
              <h3>{activeItem.title}</h3>
              <p>Couture House: {activeItem.designer}</p>
            </div>
            <div className="v-modal-body">
              <img src={activeItem.image} alt={activeItem.title} className="v-modal-img" />
              <div className="v-modal-specs">
                <div className="spec-row"><span>FABRIC MATERIAL</span><strong>{activeItem.specs.material}</strong></div>
                <div className="spec-row"><span>TAILORING</span><strong>{activeItem.specs.tailoring}</strong></div>
                <div className="spec-row"><span>CLOSURE TYPE</span><strong>{activeItem.specs.closure}</strong></div>
                <div className="spec-row"><span>SILHOUETTE LENGTH</span><strong>{activeItem.specs.length}</strong></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}