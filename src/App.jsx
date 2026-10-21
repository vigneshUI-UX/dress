import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import VerticalCards from './components/VerticalCards';
import ShirtProductShowcase from './components/ShirtProductShowcase';
import GallerySection from './components/GallerySection';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProductPage from './components/ProductPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer'; // <-- Import Footer

import './App.css';

export default function App() {
  const heroRef = useRef(null);
  const verticalRef = useRef(null);
  const shirtRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Sticky Top Glass Navigation Bar */}
      <nav className="global-nav">
        <span className="nav-logo" onClick={() => scrollToSection(heroRef)}>  VICKY</span>
        <div className="nav-links">
          <button onClick={() => scrollToSection(heroRef)}>Hero</button>
          <button onClick={() => scrollToSection(verticalRef)}>Collections</button>
          <button onClick={() => scrollToSection(shirtRef)}>3D Showcase</button>
          <button onClick={() => scrollToSection(galleryRef)}>Gallery</button>
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
          <button onClick={() => scrollToSection(servicesRef)}>Services</button>
          <button onClick={() => scrollToSection(productRef)}>Order</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </div>
      </nav>

      <section ref={heroRef} className="app-section">
        <HeroSection />
      </section>

      <section ref={verticalRef} className="app-section">
        <VerticalCards />
      </section>

      <section ref={shirtRef} className="app-section">
        <ShirtProductShowcase />
      </section>

      <section ref={galleryRef} className="app-section">
        <GallerySection />
      </section>

      <section ref={aboutRef} className="app-section">
        <AboutPage />
      </section>

      <section ref={servicesRef} className="app-section">
        <ServicesPage />
      </section>

      <section ref={productRef} className="app-section">
        <ProductPage />
      </section>

      <section ref={contactRef} className="app-section">
        <ContactPage />
      </section>

      {/* Sleek Bottom Footer Component */}
      <Footer />
    </div>
  );
}