import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <NavLink to="/" className="logo">
          <img src="/assets/new-logo.png" alt="Arbor Bay CarWash Logo" className="logo-img" />
        </NavLink>

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/wash-options" onClick={() => setIsOpen(false)}>Wash Options</NavLink>
          <NavLink to="/location" onClick={() => setIsOpen(false)}>Location</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
          
          <div className="mobile-cta d-mobile-only">
             <Link to="/customer-support" onClick={() => setIsOpen(false)} className="btn btn-primary">Customer Support</Link>
          </div>
        </nav>

        <div className="header-right">
           <div className="desktop-cta d-desktop-only">
             <Link to="/customer-support" className="btn btn-primary">Customer Support</Link>
           </div>
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} color="var(--white)" /> : <Menu size={28} color="var(--white)" />}
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          background-color: var(--bg-dark);
          transition: var(--transition);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .header.scrolled {
          padding: 0.75rem 0;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background-color: rgba(13, 23, 16, 0.95);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-img {
          height: auto;
          width: 220px;
          display: block;
          transition: var(--transition);
        }

        .header.scrolled .logo-img {
          width: 180px;
        }

        .nav-menu {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-menu a:not(.btn) {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          font-size: 1.05rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
        }

        .nav-menu a:not(.btn)::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background: var(--secondary);
          bottom: -4px;
          left: 0;
          transition: width 0.3s ease;
        }

        .nav-menu a:not(.btn):hover, .nav-menu a.active:not(.btn) {
          color: var(--white);
        }

        .nav-menu a.active:not(.btn)::after, .nav-menu a:not(.btn):hover::after {
          width: 100%;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .desktop-cta .btn {
          padding: 10px 20px;
          font-size: 0.9rem;
        }

        .mobile-toggle {
          display: none;
        }
        
        .d-mobile-only {
          display: none;
        }

        @media (max-width: 992px) {
          .nav-menu { gap: 1.5rem; }
          .logo-img { width: 180px; }
          .desktop-cta .btn { padding: 8px 16px; font-size: 0.85rem; }
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
          }
          .d-desktop-only { display: none; }
          .d-mobile-only { display: block; margin-top: 1rem; width: 100%; }
          .d-mobile-only .btn { width: 100%; }
          
          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: var(--bg-dark);
            padding: 2rem;
            gap: 1.5rem;
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
            border-bottom: 2px solid var(--primary);
            box-shadow: 0 20px 30px rgba(0,0,0,0.5);
          }

          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }
        `}} />
    </header>
  );
};

export default Header;
