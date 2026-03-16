import React from "react";
import { Leaf, Clock, MapPin, HandMetal } from "lucide-react";

const About = () => {
    return (
        <div className="about-page">
            <section className="section page-header fade-in">
                <div className="container">
                    <div className="section-header text-center">
                        <h1>About Arbor Bay CarWash</h1>
                        <p>Locally owned and operated, delivering premium car care to the Pittsburgh community.</p>
                    </div>
                </div>
            </section>

            {/* Split Story Section */}
            <section className="section story-section">
                <div className="container story-grid">
                    <div className="story-content fade-in delay-1">
                        <h2>Our Story</h2>
                        <p>Arbor Bay CarWash was built on a simple premise: providing the highest quality car wash experience without the hassle. We serve drivers from Wexford to the North Hills, giving them a reliable, consistent wash every time.</p>
                        <p>Our facility is equipped with state-of-the-art touchless automatics and robust self-serve bays, ensuring that whether you want a quick automated wash or prefer to handle the wand yourself, you have the best tools at your disposal.</p>
                        <p>We take pride in our Pittsburgh roots and our commitment to the community. When you wash at Arbor Bay, you aren't just cleaning your car; you are supporting a local business that cares.</p>
                    </div>
                    <div className="story-image fade-in delay-2 glow-border">
                        <div className="image-wrapper">
                            <img src="/assets/new-seo-logo.jpg" alt="Arbor Bay Car Wash Facility" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Strip */}
            <section className="section bg-dark text-center values-strip">
                <div className="container">
                    <h2>Our Core Values</h2>
                    <div className="values-grid fade-in">
                        <div className="value-card">
                            <div className="icon-box"><Leaf size={32} /></div>
                            <h4>Eco-Friendly</h4>
                            <p>We use safe, biodegradable cleaning solutions that protect your car and our environment.</p>
                        </div>
                        <div className="value-card">
                            <div className="icon-box"><HandMetal size={32} /></div>
                            <h4>Touchless Care</h4>
                            <p>Advanced laser-guided tracking cleans your vehicle thoroughly without a single brush touching the paint.</p>
                        </div>
                        <div className="value-card">
                            <div className="icon-box"><Clock size={32} /></div>
                            <h4>Always Open</h4>
                            <p>Day or night, rain or shine, our facility is brilliantly lit and operational 24/7/365.</p>
                        </div>
                        <div className="value-card">
                            <div className="icon-box"><MapPin size={32} /></div>
                            <h4>Local Business</h4>
                            <p>Proudly serving and operating in Pittsburgh, PA. We treat every customer like our neighbor.</p>
                        </div>
                    </div>
                </div>
                {/* Wave Divider */}
                <div className="wave-divider"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path></svg></div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .page-header { padding-top: 6rem; padding-bottom: 2rem; }
        .section-header { max-width: 800px; margin: 0 auto; }
        .section-header h1 { font-size: 4.5rem; margin-bottom: 1.5rem; text-transform: uppercase; }
        .section-header p { font-size: 1.25rem; color: var(--text-light); line-height: 1.8; }

        .story-section { padding-top: 2rem; padding-bottom: 6rem; }
        .story-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 5rem;
           align-items: center;
        }

        .story-content h2 { font-size: 3.5rem; margin-bottom: 2rem; }
        .story-content p { font-size: 1.15rem; color: var(--text-light); line-height: 1.8; margin-bottom: 1.5rem; }

        .story-image { position: relative; border-radius: 20px; }
        .image-wrapper { border-radius: 24px; overflow: hidden; box-shadow: var(--shadow); height: 100%; min-height: 400px; }
        .image-wrapper img { width: 100%; height: 100%; object-fit: cover; display: block; }
        
        .glow-border::before {
           content: "";
           position: absolute;
           inset: -3px;
           background: linear-gradient(45deg, var(--secondary), transparent, var(--primary));
           z-index: -1;
           border-radius: 27px;
           opacity: 0.6;
        }

        .values-strip { padding: 6rem 0 10rem; }
        .values-strip h2 { font-size: 3.5rem; margin-bottom: 4rem; }
        
        .values-grid {
           display: grid;
           grid-template-columns: repeat(4, 1fr);
           gap: 2.5rem;
        }

        .value-card {
           background: rgba(255,255,255,0.03);
           border: 1px solid rgba(255,255,255,0.1);
           padding: 2.5rem 2rem;
           border-radius: 16px;
           transition: var(--transition);
        }

        .value-card:hover {
           transform: translateY(-5px);
           background: rgba(255,255,255,0.05);
           border-color: rgba(0, 191, 255, 0.3);
        }

        .icon-box {
          width: 80px;
          height: 80px;
          background: rgba(0, 191, 255, 0.1);
          color: var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .value-card h4 { font-size: 1.75rem; color: var(--white); margin-bottom: 1rem; }
        .value-card p { color: rgba(255,255,255,0.7); font-size: 1.05rem; }

        @media (max-width: 992px) {
           .story-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
           .image-wrapper { min-height: 300px; }
           .values-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        
        @media (max-width: 576px) {
           .values-grid { grid-template-columns: 1fr; }
        }
      `}} />
        </div>
    );
};

export default About;
