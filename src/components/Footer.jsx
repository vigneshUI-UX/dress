import React from 'react';
import './Footer.css';

export default function Footer({ 
  brandName = "VICKY", 
  tagline = "Pioneering the intersection of haute couture craftsmanship and immersive 3D digital web experiences."
}) {
  return (
    <footer className="standalone-footer">
      <div className="footer-content-grid">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <span className="footer-brand">{brandName}</span>
          <p className="footer-text">{tagline}</p>
          <span className="footer-copyright">© 2026 vicky Couture. All rights reserved.</span>
        </div>

        {/* Column 2: Atelier Locations */}
        <div className="footer-col">
          <h4>FLAGSHIP ATELIERS</h4>
          <ul>
            <li>Place Vendôme, Paris, France</li>
            <li>Fifth Avenue, New York, USA</li>
            <li>Ginza District, Tokyo, Japan</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-col">
          <h4>CLIENT SERVICES</h4>
          <ul>
            <li><a href="#bespoke">Bespoke Fitting Guide</a></li>
            <li><a href="#security">3D Portal Security</a></li>
            <li><a href="#concierge">VIP Concierge Support</a></li>
            <li><a href="#shipping">Global Insured Shipping</a></li>
          </ul>
        </div>

        {/* Column 4: Legal & Compliance */}
        <div className="footer-col">
          <h4>LEGAL & PRIVACY</h4>
          <ul>
            <li><a href="#privacy">Privacy Statement</a></li>
            <li><a href="#terms">Terms of Atelier Access</a></li>
            <li><a href="#cookies">Cookie Preferences</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}