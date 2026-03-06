import React from 'react';
import { Droplets, MapPin, Clock, Mail } from 'lucide-react';
import { CONFIG } from '../config';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container footer-grid">
        <div className="footer-info">
          <div className="logo">
            <img src="/assets/new-logo.png" alt="Arbor Bay CarWash" className="footer-logo" />
          </div>
          <p>Professional touchless and self-serve car washing in the heart of Pittsburgh. Available 24/7 for your convenience.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/wash-options">Wash Options</a></li>
            <li><a href="/location">Location</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/customer-support">Customer Support / Refund Help</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Customer Support</h4>
          <ul>
            <li><Mail size={18} /> <a href={`mailto:${CONFIG.SUPPORT_EMAIL}`}>{CONFIG.SUPPORT_EMAIL}</a></li>
            <li><Clock size={18} /> Open 24 Hours / 7 Days</li>
          </ul>
          <div style={{ marginTop: '1.5rem' }}>
            <a href="/customer-support" className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '10px 15px' }}>
              File a Complaint / Request a Refund
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Arbor Bay CarWash. All rights reserved.</p>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          background: var(--white);
          padding: 4rem 0 2rem;
          margin-top: 4rem;
          border-top: 1px solid var(--primary-light);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 3rem;
        }
        .footer-info p {
          margin-top: 1rem;
          color: var(--text-light);
        }
        .footer-logo { 
            height: auto; 
            width: 220px; 
            margin-bottom: 1.5rem; 
            filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.5)); /* Protect logo visibility on dark backgrounds */
        }
        .footer-links ul li {
          margin-bottom: 0.8rem;
        }
        .footer-links a {
          color: var(--text-light);
        }
        .footer-links a:hover {
          color: var(--primary);
        }
        .footer-contact ul li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1rem;
          color: var(--text-light);
        }
        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #eee;
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-light);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
