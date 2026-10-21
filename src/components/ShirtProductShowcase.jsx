import React, { useState } from 'react';
import './ShirtProductShowcase.css';

const shirtProducts = [
  {
    id: 'cloudwalk',
    name: 'CLOUDWALK ELITE',
    tagline: 'Premium cotton-blend shirt with breathable weave. Ideal for all-day comfort and style.',
    price: '₹3,999',
    colorName: 'Pristine White',
    colorHex: '#ffffff',
    sizes: ['38', '40', '42', '44', '46'],
    // 3 rotation angles/views for this shirt
    views: [
      'assets/shirt-white-front.png',
      'assets/shirt-white-side.png',
      'assets/shirt-white-model.png'
    ]
  },
  {
    id: 'shadow',
    name: 'SHADOW STRIKE X',
    tagline: 'Adaptive linen weave with wrinkle-free finish. Built for modern urbanites who demand peak performance.',
    price: '₹4,499',
    colorName: 'Midnight Black',
    colorHex: '#111827',
    sizes: ['38', '40', '42', '44', '46'],
    views: [
      'assets/shirt-black-front.png',
      'assets/shirt-black-side.png',
      'assets/shirt-black-model.png'
    ]
  },
  {
    id: 'aeroflow',
    name: 'AEROFLOW PRO',
    tagline: 'Lightweight performance poplin with moisture-wicking technology for non-stop freshness.',
    price: '₹4,199',
    colorName: 'Electric Blue',
    colorHex: '#2563eb',
    sizes: ['38', '40', '42', '44', '46'],
    views: [
      'assets/shirt-blue-front.png',
      'assets/shirt-blue-side.png',
      'assets/shirt-blue-model.png'
    ]
  }
];

export default function ShirtProductShowcase() {
  const [activeProductIdx, setActiveProductIdx] = useState(0);
  const [activeViewIdx, setActiveViewIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('42');
  const [added, setAdded] = useState(false);

  const product = shirtProducts[activeProductIdx];

  // Handle product switch from bottom thumbnails
  const handleProductChange = (idx) => {
    setActiveProductIdx(idx);
    setActiveViewIdx(0); // Reset to front view
    setAdded(false);
  };

  return (
    <div className="shirt-showcase-container">
      <div className="shirt-content-wrapper">
        
        {/* Left Column: Product Details & Options */}
        <div className="shirt-details-pane">
          <h2 className="shirt-title">{product.name}</h2>
          <p className="shirt-tagline">{product.tagline}</p>
          
          <div className="shirt-price">{product.price}</div>

          <div className="color-picker-section">
            <span className="option-label">Colour — <strong>{product.colorName}</strong></span>
            <div className="color-swatches">
              {shirtProducts.map((p, idx) => (
                <button
                  key={p.id}
                  className={`swatch-btn ${idx === activeProductIdx ? 'selected' : ''}`}
                  style={{ backgroundColor: p.colorHex }}
                  onClick={() => handleProductChange(idx)}
                  title={p.colorName}
                />
              ))}
            </div>
          </div>

          <div className="size-picker-section">
            <div className="size-label-row">
              <span className="option-label">SIZE — <span>SELECT</span></span>
            </div>
            <div className="size-buttons">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button 
            className={`add-bag-btn ${added ? 'added' : ''}`}
            onClick={() => setAdded(true)}
          >
            {added ? '✓ ADDED TO BAG' : 'ADD TO BAG'}
          </button>
        </div>

        {/* Right Column: Main Image Stage & View Switcher */}
        <div className="shirt-stage-pane">
          <div className="main-image-viewport">
            <img 
              src={product.views[activeViewIdx]} 
              alt={product.name} 
              className="active-shirt-img"
              key={`${activeProductIdx}-${activeViewIdx}`}
            />
          </div>

          {/* Angle / View Thumbnails */}
          <div className="view-thumbnails">
            {product.views.map((viewImg, vIdx) => (
              <button
                key={vIdx}
                className={`view-thumb-btn ${vIdx === activeViewIdx ? 'active' : ''}`}
                onClick={() => setActiveViewIdx(vIdx)}
              >
                <img src={viewImg} alt="angle view" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Also Available Products */}
      <div className="bottom-available-bar">
        <span className="available-title">ALSO AVAILABLE</span>
        <div className="available-items-list">
          {shirtProducts.map((p, idx) => (
            <div
              key={p.id}
              className={`available-card ${idx === activeProductIdx ? 'active' : ''}`}
              onClick={() => handleProductChange(idx)}
            >
              <img src={p.views[0]} alt={p.name} />
              <span>{p.id.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}