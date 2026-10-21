import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Bespoke Dress', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-container">
      {/* Moving Background Neon Orbs & Particles */}
      <div className="neon-orb c-orb-1"></div>
      <div className="neon-orb c-orb-2"></div>
      <div className="particles-layer">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`particle p-${i % 5}`}></div>
        ))}
      </div>

      <div className="contact-wrapper">
        {/* Left Side Info */}
        <div className="contact-info-side">
          <span className="contact-subtitle">GET IN TOUCH</span>
          <h2 className="contact-title">Visit Our Atelier or Request a Consultation</h2>
          <p className="contact-desc">
            Experience bespoke luxury tailored specifically for you. Schedule your private fitting session or reach out with custom dress inquiries.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="item-label">FLAGSHIP ATELIER</span>
              <strong>Tamil Nadu, Erode, 638313</strong>
            </div>
            <div className="contact-item">
              <span className="item-label">DIRECT CONCIERGE</span>
              <strong>7305195172</strong>
            </div>
            <div className="contact-item">
              <span className="item-label">EMAIL INQUIRIES</span>
              <strong>vignesh123@gmail.com</strong>
            </div>
          </div>
        </div>

        {/* Right Side Glassmorphism Form */}
        <div className="contact-form-side glass-card">
          {submitted ? (
            <div className="success-card">
              <h3>✓ Appointment Requested</h3>
              <p>Thank you, {formData.name}. Our head fashion consultant will contact you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)}>Send Another Request</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>RESERVE A CONSULTATION</h3>

              <div className="form-group">
                <label>FULL NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lady Vivienne"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  placeholder="vivienne@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>REQUESTED SERVICE</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="Bespoke Dress">Bespoke Dress Fitting</option>
                  <option value="Bridal Suite">Bridal Suite Consultation</option>
                  <option value="Custom Shirt">Custom Shirt Tailoring</option>
                  <option value="Styling Session">Private Styling Session</option>
                </select>
              </div>

              <div className="form-group">
                <label>YOUR MESSAGE / SPECIFICATIONS</label>
                <textarea
                  rows="3"
                  placeholder="Share details about your event date or styling preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="submit-form-btn">
                SEND REQUEST
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}