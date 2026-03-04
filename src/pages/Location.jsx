import React from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { CONFIG } from '../config';

const Location = () => {
  return (
    <div className="location-page">
      <section className="section bg-water">
        <div className="container location-grid">
          <div className="location-info">
            <div className="badge">Visit Us Anytime</div>
            <h1>Our Location</h1>
            <p className="address-text">
              <strong>Arbor Bay CarWash</strong><br />
              5625 Babcock Blvd<br />
              Pittsburgh, PA 15237
            </p>

            <div className="location-features">
              <div className="feat-item">
                <Clock size={20} />
                <span>Open 24 Hours / 7 Days a Week</span>
              </div>
              <div className="feat-item">
                <Navigation size={20} />
                <span>Easy access from Babcock Blvd</span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//5625+Babcock+Blvd,+Pittsburgh,+PA+15237"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Get Directions <Navigation size={20} />
            </a>

            <div className="seo-text glass-card">
              <p>Conveniently located on Babcock Blvd, Arbor Bay CarWash proudly serves drivers from <strong>Wexford</strong>, <strong>McCandless</strong>, <strong>Ross Township</strong>, and the <strong>North Hills</strong> area.</p>
            </div>
          </div>

          <div className="map-container glass-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.6136!2d-80.0125!3d40.5401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f3b7c8b00001%3A0x0!2zNTYyNSBCYWJjb2NrIEJsdmQsIFBpdHRzYnVyZ2gsIFBBIDE1MjM3!5e0!3m2!1sen!2sus!4v1710000000000"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              title="Arbor Bay CarWash Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Need Help / Refund Section */}
      <section className="section bg-light" id="support">
        <div className="container">
          <div className="support-card glass-card text-center">
            <div className="support-icon-header">
              <Mail size={32} color="var(--secondary)" />
            </div>
            <h2>Need Help / Refund Request?</h2>
            <p className="support-desc">If you experienced a system malfunction or were charged incorrectly, submit a support request and we’ll review it.</p>

            <div className="support-actions">
              <a
                href="https://forms.gle/y5oAmoNDyg8jDHvr6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-google-form"
              >
                Submit a Support Request <ExternalLink size={20} />
              </a>

              <p className="support-secondary">
                Email us: <a href={`mailto:${CONFIG.SUPPORT_EMAIL}`}>{CONFIG.SUPPORT_EMAIL}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }
        .address-text {
          font-size: 1.5rem;
          margin: 1.5rem 0;
          color: var(--accent);
        }
        .location-features {
          margin-bottom: 2rem;
        }
        .feat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
          font-weight: 600;
          color: var(--text-light);
        }
        .feat-item svg { color: var(--secondary); }
        .btn-large {
          padding: 15px 40px;
          font-size: 1.2rem;
          width: fit-content;
        }
        .seo-text {
          margin-top: 3rem;
          padding: 1.5rem;
          font-size: 0.95rem;
          color: var(--text-light);
          border-left: 4px solid var(--secondary);
        }
        
        .map-container {
          padding: 10px;
          overflow: hidden;
        }

        /* New Support Card Styles */
        .support-card {
            max-width: 700px;
            margin: 0 auto;
            padding: 3rem;
            border-top: 5px solid var(--secondary);
        }
        .support-icon-header { margin-bottom: 1.5rem; }
        .support-desc { 
            color: var(--text-light); 
            font-size: 1.1rem; 
            margin-bottom: 2rem; 
            max-width: 500px; 
            margin-left: auto; 
            margin-right: auto; 
        }
        
        .support-actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .btn-google-form {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #007bff; /* Professional Blue */
            color: white !important;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-size: 1.15rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
        }

        .btn-google-form:hover {
            background: #0056b3;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0, 123, 255, 0.3);
        }

        .support-secondary {
            font-size: 0.95rem;
            color: var(--text-light);
        }
        .support-secondary a {
            color: var(--primary);
            font-weight: 700;
            text-decoration: underline;
        }

        @media (max-width: 992px) {
          .location-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .support-card { padding: 2rem 1.5rem; }
          .btn-google-form { width: 100%; justify-content: center; }
        }
      `}} />
    </div>
  );
};

export default Location;
