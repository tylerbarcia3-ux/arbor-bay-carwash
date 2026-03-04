import React from 'react';
import { Check, Info, Droplets, Waves, Shield, Zap } from 'lucide-react';

const packages = [
    { name: 'Economy Wash', price: '$7', features: ['High pressure wash', 'Spot free rinse'] },
    { name: 'Deluxe Wash', price: '$9', features: ['High pressure wash', 'Spot free rinse', 'Foam protection'] },
    { name: 'Premium Wash', price: '$10', features: ['High pressure wash', 'Spot free rinse', 'Foam protection', 'Wheel cleaning'] },
    { name: 'Ultimate Wash', price: '$11', features: ['High pressure wash', 'Spot free rinse', 'Foam protection', 'Triple foam', 'Bottom blast'] },
    { name: 'Triple Foam Wash', price: '$13', features: ['High pressure wash', 'Spot free rinse', 'Foam protection', 'Premium triple foam', 'Clear coat sealant'], highlight: true, note: 'Triple Foam Wash is available in the right automatic bay only.' }
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
                            <div key={index} className={`pricing-card glass-card ${pkg.highlight ? 'highlight' : ''}`}>
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
        .pricing-card.highlight {
          border: 2px solid var(--secondary);
          transform: scale(1.05);
          position: relative;
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
