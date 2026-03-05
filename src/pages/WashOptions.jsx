import React from 'react';
import { Check, Info, Droplets, Waves, Shield, Zap } from 'lucide-react';

const packages = [
    { 
      name: 'Economy', 
      price: '$7', 
      features: ['Foam Action Cleaner', 'High Pressure Rinse', 'Low Pressure Rinse', 'Spot Free Rinse'] 
    },
    { 
      name: 'Deluxe', 
      price: '$9', 
      features: ['Undercarriage', 'Presoak Detergent', 'Foam Action Cleaner', 'High Pressure Rinse', 'High Pressure Polish Wax', 'Spot Free Rinse', 'Dryer'] 
    },
    { 
      name: 'Premium', 
      price: '$10', 
      features: ['Undercarriage', 'Presoak Detergent', '3X Front & Rear Foam Action Cleaner', '3X Front & Rear High Pressure Rinse', 'High Pressure Polish Wax', 'Spot Free Rinse', 'Dryer'] 
    },
    { 
      name: 'Ultimate', 
      price: '$11', 
      features: ['Undercarriage', 'Presoak Detergent', '3X Front & Rear Foam Action Cleaner', '3X Front & Rear High Pressure Rinse', 'Clear Coat Wax', 'High Pressure Polish Wax', 'Spot Free Rinse', 'Dryer'], 
      badge: 'Best Value',
      highlightColor: 'var(--primary)'
    },
    { 
      name: 'Triple Foam', 
      price: '$13', 
      features: ['Triple Foam', 'Undercarriage', 'Presoak Detergent', '3X Front & Rear Foam Action Cleaner', '3X Front & Rear High Pressure Rinse', 'Clear Coat Wax', 'High Pressure Polish Wax', 'Spot Free Rinse', 'Dryer'], 
      badge: 'BEST WASH',
      highlight: true, 
      note: 'Available in Right Tunnel Only.',
      highlightColor: 'var(--secondary)'
    }
];

const WashOptions = () => {
    return (
        <div className="wash-options-page">
            <section className="section bg-water">
                <div className="container">
                    <div className="section-header text-center">
                        <h1>Wash Packages</h1>
                        <p>Choose the level of clean your vehicle deserves. Our touchless bays ensure a scratch-free finish every time.</p>
                    </div>

                    <div className="pricing-grid">
                        {packages.map((pkg, index) => (
                            <div key={index} 
                                 className={`pricing-card glass-card ${pkg.highlight ? 'highlight' : ''}`}
                                 style={pkg.highlightColor ? { borderColor: pkg.highlightColor } : {}}>
                                {pkg.badge && (
                                  <div className="pkg-badge" style={{ backgroundColor: pkg.highlightColor || 'var(--primary)' }}>
                                    {pkg.badge}
                                  </div>
                                )}
                                <h3>{pkg.name}</h3>
                                <div className="price">{pkg.price}</div>
                                <ul className="features">
                                    {pkg.features.map((feat, fIndex) => (
                                        <li key={fIndex}><Check size={18} /> {feat}</li>
                                    ))}
                                </ul>
                                {pkg.note && (
                                    <div className="pkg-note">
                                        <Info size={16} /> {pkg.note}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Icons Section */}
            <section className="section">
                <div className="container">
                    <div className="feature-icons-grid">
                        <div className="feature-item">
                            <div className="icon-box"><Droplets /></div>
                            <h4>Spot Free Rinse</h4>
                        </div>
                        <div className="feature-item">
                            <div className="icon-box"><Zap /></div>
                            <h4>High Pressure Wash</h4>
                        </div>
                        <div className="feature-item">
                            <div className="icon-box"><Shield /></div>
                            <h4>Foam Protection</h4>
                        </div>
                        <div className="feature-item">
                            <div className="icon-box"><Waves /></div>
                            <h4>Touchless Cleaning</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Self Serve Section */}
            <section className="section bg-light">
                <div className="container self-serve-content">
                    <div className="self-serve-text">
                        <h2>Self Serve Wash Bays</h2>
                        <p>Arbor Bay CarWash offers six self-serve wash bays allowing you to wash your vehicle exactly the way you want. Our bays feature professional pressure washing equipment and are available 24 hours a day.</p>
                        <ul className="self-serve-list">
                            <li><Check size={20} /> High-pressure wands</li>
                            <li><Check size={20} /> Foaming brushes</li>
                            <li><Check size={20} /> Tire & engine cleaner</li>
                            <li><Check size={20} /> Vacuum stations available</li>
                        </ul>
                    </div>
                    <div className="self-serve-image glass-card">
                        <img src="/assets/foam_texture.png" alt="Self Serve Car Wash Foam" />
                        <div className="image-overlay">
                            <span>Available 24/7</span>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .text-center { text-align: center; }
        .section-header { max-width: 700px; margin: 0 auto 4rem; }
        .section-header h1 { font-size: 3rem; margin-bottom: 1rem; }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .pricing-card {
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: var(--transition);
        }
        .pricing-card:hover { transform: translateY(-5px); }
        .pricing-card {
          border: 2px solid transparent;
        }
        .pricing-card.highlight {
          transform: scale(1.05);
          position: relative;
        }
        .pkg-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.85rem;
          text-transform: uppercase;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          z-index: 10;
        }
        .pricing-card.highlight:hover { transform: scale(1.05) translateY(-5px); }
        .pricing-card h3 { font-size: 1.25rem; margin-bottom: 1rem; height: 3rem; display: flex; align-items: center; }
        .pricing-card .price { font-size: 2.5rem; font-weight: 800; color: var(--primary); margin-bottom: 1.5rem; }
        .pricing-card .features { text-align: left; width: 100%; margin-bottom: 1.5rem; }
        .pricing-card .features li { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--text-light); }
        .pricing-card .features li svg { color: var(--secondary); }
        .pricing-card .pkg-note { margin-top: auto; font-size: 0.75rem; color: var(--accent); padding-top: 1rem; border-top: 1px solid #eee; display: flex; gap: 5px; }

        .feature-icons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }
        .icon-box {
          width: 80px;
          height: 80px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .icon-box svg { width: 32px; height: 32px; }

        .self-serve-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .self-serve-text h2 { font-size: 2.5rem; margin-bottom: 1.5rem; }
        .self-serve-list { margin: 2rem 0; }
        .self-serve-list li { display: flex; align-items: center; gap: 12px; margin-bottom: 1rem; font-weight: 600; }
        .self-serve-list li svg { color: var(--secondary); }
        .self-serve-image { position: relative; border-radius: 20px; overflow: hidden; }
        .self-serve-image img { width: 100%; display: block; opacity: 0.9; }
        .image-overlay { position: absolute; top: 20px; right: 20px; background: var(--secondary); color: white; padding: 5px 15px; border-radius: 20px; font-weight: 700; font-size: 0.8rem; }

        @media (max-width: 992px) {
          .self-serve-content { grid-template-columns: 1fr; text-align: center; }
          .self-serve-list { display: inline-block; text-align: left; }
          .feature-icons-grid { grid-template-columns: 1fr 1fr; }
        }
      `}} />
        </div>
    );
};

export default WashOptions;
