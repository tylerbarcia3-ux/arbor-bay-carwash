import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Droplets, Menu, X, Mail } from 'lucide-react';
import { CONFIG } from '../config';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header glass-card">
      <div className="container nav-container">
        <NavLink to="/" className="logo">
          <img src="/assets/logo.png" alt="Arbor Bay CarWash Logo" className="logo-img" />
        </NavLink>

        <div className="header-right">
          <a href={`mailto:${CONFIG.SUPPORT_EMAIL}`} className="header-email">
            <Mail size={16} />
            <span>Support: {CONFIG.SUPPORT_EMAIL}</span>
          </a>
          <button className="mobile-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/wash-options" onClick={() => setIsOpen(false)}>Wash Options</NavLink>
          <NavLink to="/location" onClick={() => setIsOpen(false)}>Location</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/customer-support" onClick={() => setIsOpen(false)} className="btn-support">Customer Support</NavLink>
        </nav>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
          margin: 1rem 1rem 0 1rem;
          border-radius: 12px;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .header-email {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-light);
          font-size: 0.9rem;
          font-weight: 500;
        }
        .header-email:hover {
          color: var(--primary);
        }
        .logo-img {
          height: 60px;
          width: auto;
          display: block;
        }
        .nav-menu {
          display: flex;
          gap: 2rem;
        }
        .nav-menu a {
          font-weight: 600;
          color: var(--text-light);
        }
        .nav-menu a:hover, .nav-menu a.active {
          color: var(--primary);
        }
        .btn-support {
          background: var(--primary);
          color: var(--white) !important;
          padding: 8px 16px !important;
          border-radius: 6px;
          transition: var(--transition);
        }
        .btn-support:hover {
          background: var(--secondary);
          transform: translateY(-2px);
        }
        .mobile-toggle {
          display: none;
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
          }
          .nav-menu {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            flex-direction: column;
            background: var(--white);
            padding: 2rem;
            gap: 1.5rem;
            transform: translateY(-20px);
            opacity: 0;
            pointer-events: none;
            transition: var(--transition);
            box-shadow: var(--shadow);
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
          }
          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }
          .header-email {
            display: none;
          }
        }
      `}} />
    </header>
  );
};

export default Header;
