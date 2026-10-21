import React, { useState } from 'react';
import './ServicesPage.css';

const servicesList = [
  {
    id: '01',
    title: 'Bespoke Tailoring',
    desc: 'Custom-fitted gowns and suits designed to your exact body measurements and style vision.',
    icon: '✂️'
  },
  {
    id: '02',
    title: 'Bridal Styling',
    desc: 'Personalized wedding consultations, veil matching, and full bridal party wardrobe coordination.',
    icon: '👑'
  },
  {
    id: '03',
    title: 'Restoration & Alterations',
    desc: 'Expert care for vintage garments, silk restoration, and precision tailoring adjustments.',
    icon: '🧵'
  },
  {
    id: '04',
    title: 'VIP Personal Shopping',
    desc: 'Private atelier access, early runway preview access, and dedicated fashion consultants.',
    icon: '🛍️'
  }
];

export default function ServicesPage() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="services-container">
      {/* Moving Background Neon Elements */}
      <div className="neon-orb s-orb-1"></div>
      <div className="neon-orb s-orb-2"></div>
      <div className="particles-layer">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`particle p-${i % 5}`}></div>
        ))}
      </div>

      <div className="services-header">
        <span className="services-subtitle">HAUTE COUTURE SERVICES</span>
        <h2 className="services-title">Tailored Elegance & Luxury Experience</h2>
      </div>

      <div className="services-grid">
        {servicesList.map((service, idx) => (
          <div
            key={service.id}
            className={`service-card glass-card ${hoveredIdx === idx ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="service-card-top">
              <span className="service-icon">{service.icon}</span>
              <span className="service-id">{service.id}</span>
            </div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.desc}</p>
            <div className="service-card-footer">
              <span className="service-link">BOOK APPOINTMENT →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}