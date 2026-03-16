import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Mail } from "lucide-react";
import { CONFIG } from "../config";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container footer-grid">
        <div className="footer-brand fade-in">
          <img src="/assets/new-logo.png" alt="Arbor Bay CarWash Logo" className="footer-logo" />
          <p className="brand-desc">Professional touchless and self-serve car washing in the heart of Pittsburgh. Available 24/7 for a premium clean.</p>
        </div>

        <div className="footer-links fade-in delay-1">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/wash-options">Wash Options</Link></li>
            <li><Link to="/location">Location</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/customer-support">Customer Support</Link></li>
          </ul>
        </div>

        <div className="footer-contact fade-in delay-2">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <Mail size={18} color="var(--secondary)" /> 
              <a href={`mailto:${CONFIG.SUPPORT_EMAIL}`}>{CONFIG.SUPPORT_EMAIL}</a>
            </li>
            <li>
              <MapPin size={18} color="var(--secondary)" />
              <a href="https://www.google.com/maps/dir//5625+Babcock+Blvd,+Pittsburgh,+PA+15237" target="_blank" rel="noopener noreferrer">5625 Babcock Blvd, Pittsburgh, PA</a>
            </li>
            <li>
              <Clock size={18} color="var(--secondary)" /> 
              <span>Open 24 Hours / 7 Days</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Arbor Bay Car Wash. All rights reserved.</p>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          padding: 6rem 0 2rem;
          border-top: 4px solid var(--primary);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
        }

        .footer-logo { 
          width: 240px; 
          margin-bottom: 1.5rem; 
        }

        .brand-desc {
          color: rgba(255,255,255,0.7);
          font-size: 1.05rem;
          max-width: 400px;
        }

        .footer h3 {
          color: var(--white);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .footer-links ul li {
          margin-bottom: 1rem;
        }

        .footer-links a {
          color: rgba(255,255,255,0.7);
          font-weight: 500;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--secondary);
          transform: translateX(5px);
        }

        .footer-contact ul li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 1.25rem;
          color: rgba(255,255,255,0.7);
        }

        .footer-contact a {
          color: rgba(255,255,255,0.7);
        }
        
        .footer-contact a:hover {
          color: var(--white);
        }

        .footer-bottom {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          color: rgba(255,255,255,0.5);
          font-size: 0.9rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .footer { padding: 4rem 0 2rem; }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
