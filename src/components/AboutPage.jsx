import React, { useState } from 'react';
import './AboutPage.css';

const milestones = [
  { year: '1890', title: 'Atelier Foundation', desc: 'Established in Paris as a bespoke tailoring house for royalty.' },
  { year: '1955', title: 'Haute Couture Debut', desc: 'Introduced revolutionary liquid silk draping techniques across Europe.' },
  { year: '2010', title: 'Global Expansion', desc: 'Opened flagship luxury boutiques in Milan, Tokyo, and New York.' },
  { year: '2026', title: 'Digital Atelier', desc: 'Pioneered interactive digital fittings and 3D web showcases.' }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="about-container">
      {/* Background Neon Lighting & Floating Particles */}
      <div className="neon-orb orb-1"></div>
      <div className="neon-orb orb-2"></div>
      <div className="particles-layer">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`particle p-${i % 5}`}></div>
        ))}
      </div>

      <div className="about-header">
        <span className="about-subtitle">OUR HERITAGE & VISION</span>
        <h2 className="about-title">Crafting Timeless Elegance Since 1890</h2>
      </div>

      <div className="about-grid">
        {/* Left Side: Glassmorphism Stat Cards */}
        <div className="about-stats-column">
          <div className="stat-card glass-card">
            <span className="stat-number">130+</span>
            <span className="stat-label">Years of Craftsmanship</span>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Ethical Silk & Fine Textiles</span>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-number">45K+</span>
            <span className="stat-label">Bespoke Couture Fits</span>
          </div>
        </div>

        {/* Right Side: Timeline with Flipping Transitions */}
        <div className="about-timeline-column glass-card">
          <h3>ATELIER MILESTONES</h3>
          <div className="timeline-nav">
            {milestones.map((m, idx) => (
              <button
                key={m.year}
                className={`timeline-tab ${idx === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {m.year}
              </button>
            ))}
          </div>

          <div className="timeline-content-box flip-animation" key={milestones[activeTab].year}>
            <span className="timeline-year-tag">{milestones[activeTab].year}</span>
            <h4>{milestones[activeTab].title}</h4>
            <p>{milestones[activeTab].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}