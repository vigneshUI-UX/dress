import React, { useState } from 'react';
import './GallerySection.css';

const galleryItems = [
  { id: 1, name: 'PHANTOM EDITION', price: '₹20,749', image: 'assets/dress5.png', category: 'LUXURY COUTURE' },
  { id: 2, name: 'NOVA CRYSTAL', price: '₹14,849', image: 'assets/dress6.png', category: 'EVENING WEAR' },
  { id: 3, name: 'ZENITH DARK', price: '₹21,549', image: 'assets/dress7.png', category: 'LUXURY SILK' },
  { id: 4, name: 'LUMINA GOLD', price: '₹24,949', image: 'assets/dress8.png', category: 'BRIDAL COUTURE' },
  { id: 5, name: 'STELLAR ULTRA', price: '₹26,549', image: 'assets/dress9.png', category: 'LIMITED DROP' },
  { id: 6, name: 'VELVET AURA', price: '₹18,949', image: 'assets/dress10.png', category: 'VELVET COLLECTION' },
  { id: 7, name: 'ROYAL DRAPE', price: '₹29,249', image: 'assets/dress11.png', category: 'SIGNATURE PIECE' }
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [detailItem, setDetailItem] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleCardClick = (e, index, item) => {
    e.stopPropagation();
    setCurrentIndex(index);
    setDetailItem(item);
    setAddedToCart(false);
  };

  const handleCardStackClick = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIdx);
    setDetailItem(galleryItems[nextIdx]);
    setAddedToCart(false);
  };

  const activeItem = detailItem || galleryItems[currentIndex];

  return (
    <div className="gallery-container">
      {detailItem ? (
        <div className="detail-screen">
          <button className="back-nav-btn" onClick={() => setDetailItem(null)}>
            ← Back
          </button>

          <div className="detail-box">
            <div 
              className="detail-img-container clickable-stack" 
              onClick={handleCardStackClick}
              title="Click card stack to view next item"
            >
              <div className="bg-stack-shadow-1"></div>
              <div className="bg-stack-shadow-2"></div>
              
              <div className="active-card-wrapper">
                <img src={activeItem.image} alt={activeItem.name} key={activeItem.id} />
              </div>

              <span className="tap-hint">Tap card to next →</span>
            </div>

            <div className="detail-content">
              <h3 key={`title-${activeItem.id}`} className="stable-text-anim">{activeItem.name}</h3>
              <p key={`price-${activeItem.id}`} className="price-tag stable-text-anim">{activeItem.price}</p>
              
              <button 
                className={`cart-btn ${addedToCart ? 'added' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setAddedToCart(true);
                }}
              >
                {addedToCart ? '✓ Added to Cart' : 'ADD TO CART 🛒'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="gallery-stage-wrapper">
          <h2 className="main-heading">The Ultimate COLLECTIONS</h2>
          <p className="sub-heading">COUTURE DRESSES</p>

          <div className="cards-layout-area">
            {galleryItems.map((item, index) => {
              const total = galleryItems.length;
              const centerIdx = Math.floor(total / 2);
              
              const distanceFromCenter = index - centerIdx;
              const archX = distanceFromCenter * 170; // Wide arch gap spacing
              const archY = Math.pow(Math.abs(distanceFromCenter), 1.4) * 10;
              const archRot = distanceFromCenter * 5;

              return (
                <div
                  key={item.id}
                  className="g-card arch-card"
                  style={{
                    '--arch-x': `${archX}px`,
                    '--arch-y': `${archY}px`,
                    '--arch-rot': `${archRot}deg`,
                    zIndex: total - Math.abs(distanceFromCenter)
                  }}
                  onClick={(e) => handleCardClick(e, index, item)}
                >
                  <img src={item.image} alt={item.name} />
                </div>
              );
            })}
          </div>

          <p className="interaction-prompt">
            Click a card to view details
          </p>
        </div>
      )}
    </div>
  );
}