import React from "react";
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { CONFIG } from "../config";

const Location = () => {
  return (
    <div className="location-page">
      <section className="section page-header fade-in">
        <div className="container">
           <div className="section-header text-center">
             <h1>Our Location</h1>
             <p>Conveniently located on Babcock Blvd, Arbor Bay CarWash proudly serves drivers from Wexford, McCandless, Ross Township, and the North Hills area.</p>
           </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="map-section fade-in delay-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.6136!2d-80.0125!3d40.5401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f3b7c8b00001%3A0x0!2zNTYyNSBCYWJjb2NrIEJsdmQsIFBpdHRzYnVyZ2gsIFBBIDE1MjM3!5e0!3m2!1sen!2sus!4v1710000000000"
            width="100%"
            height="550"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            title="Arbor Bay CarWash Location"
          ></iframe>
      </section>

      {/* Location Details Strip */}
      <section className="location-details bg-dark fade-in delay-2">
         <div className="container details-grid">
            <div className="detail-card">
               <MapPin size={40} color="var(--secondary)" className="detail-icon" />
               <h3>Address</h3>
               <p>Arbor Bay CarWash<br />5625 Babcock Blvd<br />Pittsburgh, PA 15237</p>
               <a href="https://www.google.com/maps/dir/?api=1&destination=5625+Babcock+Blvd+Pittsburgh+PA+15237" target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-3">
                 Get Directions <Navigation size={18} />
               </a>
            </div>
            
            <div className="detail-card border-x">
               <Clock size={40} color="var(--secondary)" className="detail-icon" />
               <h3>Hours of Operation</h3>
               <p className="highlight-text">Open 24 Hours / 7 Days</p>
               <p>Our facility is always open, brightly lit, and ready for you anytime.</p>
            </div>
            
            <div className="detail-card">
               <Mail size={40} color="var(--secondary)" className="detail-icon" />
               <h3>Contact Us</h3>
               <p>Have a question or need to request a refund? We are here to help.</p>
               <a href={`mailto:${CONFIG.SUPPORT_EMAIL}`} className="contact-link">
                 {CONFIG.SUPPORT_EMAIL}
               </a>
            </div>
         </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .page-header { padding-top: 6rem; padding-bottom: 3rem; }
        .section-header { max-width: 800px; margin: 0 auto; }
        .section-header h1 { font-size: 4.5rem; margin-bottom: 1.5rem; text-transform: uppercase; }
        .section-header p { font-size: 1.25rem; color: var(--text-light); line-height: 1.8; }

        .map-section {
          width: 100%;
          border-top: 4px solid var(--primary);
          border-bottom: 4px solid var(--primary);
        }
        
        .location-details {
           padding: 6rem 0;
           position: relative;
        }

        .details-grid {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           gap: 2rem;
        }

        .detail-card {
           padding: 2rem;
           text-align: center;
           display: flex;
           flex-direction: column;
           align-items: center;
        }

        .detail-icon {
           margin-bottom: 1.5rem;
        }

        .detail-card h3 {
           font-size: 2.25rem;
           margin-bottom: 1rem;
        }

        .detail-card p {
           color: rgba(255,255,255,0.7);
           font-size: 1.1rem;
           line-height: 1.6;
           margin-bottom: 1rem;
        }

        .highlight-text {
           color: var(--secondary) !important;
           font-weight: 700;
           font-size: 1.25rem !important;
           letter-spacing: 0.5px;
           text-transform: uppercase;
        }

        .mt-3 { margin-top: 1.5rem; }

        .contact-link {
           color: var(--white);
           font-weight: 700;
           font-size: 1.15rem;
           border-bottom: 2px solid var(--secondary);
           padding-bottom: 2px;
           display: inline-block;
           margin-top: 1rem;
        }
        
        .contact-link:hover {
           color: var(--secondary);
           border-color: var(--white);
        }

        .border-x {
           border-left: 1px solid rgba(255,255,255,0.1);
           border-right: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 992px) {
           .details-grid { grid-template-columns: 1fr; gap: 4rem; }
           .border-x { 
              border-left: none; border-right: none; 
              border-top: 1px solid rgba(255,255,255,0.1); 
              border-bottom: 1px solid rgba(255,255,255,0.1); 
              padding: 4rem 2rem; 
           }
        }
      `}} />
    </div>
  );
};

export default Location;
