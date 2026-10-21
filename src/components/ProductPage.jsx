import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import './ProductPage.css';

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [ordered, setOrdered] = useState(false);

  // Trigger Canvas Confetti "Paper Blast" Effect
  const handleOrderClick = () => {
    setOrdered(true);
    
    // Realistic paper blast particle burst
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#22d3ee', '#3b82f6', '#ffffff', '#ec4899', '#8b5cf6'],
      shapes: ['square', 'circle'],
      scalar: 1.2
    });

    setTimeout(() => {
      setOrdered(false);
    }, 4000);
  };

  return (
    <div className="product-page-container">
      {/* Background Neon Orbs */}
      <div className="neon-orb p-orb-1"></div>
      <div className="neon-orb p-orb-2"></div>

      <motion.div 
        className="product-glass-wrapper glass-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* Left Side: Interactive Dress/Shirt Image */}
        <div className="product-image-section">
          <motion.img 
            src="/assets/dress1.png" 
            alt="LUMIÈRE Signature Gown" 
            className="showcase-dress-img"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <div className="image-glow-ring"></div>
        </div>

        {/* Right Side: Product Details & Order Options */}
        <div className="product-details-section">
          <span className="product-category-tag">HAUTE COUTURE EXCLUSIVE</span>
          <h1 className="product-title">VALENTINO SILK MAXI</h1>
          <p className="product-price">₹24,949</p>

          <p className="product-description">
            Crafted from pure Italian silk chiffon with hand-pleated architecture. Designed for red-carpet entrances and unforgettable moments.
          </p>

          {/* Size Selector */}
          <div className="size-selector-box">
            <span className="option-title">SELECT SIZE</span>
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`size-pill ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Order Button with Paper Blast Canvas Effect */}
          <motion.button 
            className={`order-now-btn ${ordered ? 'success' : ''}`}
            onClick={handleOrderClick}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
          >
            {ordered ? '✓ ORDER CONFIRMED!' : 'ORDER NOW ✦'}
          </motion.button>

          {ordered && (
            <motion.p 
              className="success-feedback-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Your bespoke piece has been reserved at our Paris atelier.
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
}