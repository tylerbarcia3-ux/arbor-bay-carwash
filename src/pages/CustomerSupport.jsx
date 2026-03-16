import React, { useState } from "react";
import { Mail, MessageSquare, HelpCircle, ChevronDown, ExternalLink } from "lucide-react";
import { CONFIG } from "../config";

const CustomerSupport = () => {
  const [faqs, setFaqs] = useState([
    {
      q: "How does the touchless wash work?",
      a: "Our touchless automatic bays use high-powered lasers to scan your vehicle's dimensions. It then applies specialized detergents and high-pressure water safely and effectively without any spinning brushes touching your car's paint.",
      open: false,
    },
    {
      q: "Are you really open 24 hours a day?",
      a: "Yes! Our entire facility—including touchless automatics, self-serve bays, and vacuums—is open 24/7/365. The lot is brightly lit and secure for night washing.",
      open: false,
    },
    {
      q: "Do you offer monthly unlimited memberships?",
      a: "Currently, we operate on a pay-per-wash basis to offer the best value without long-term commitments. We may introduce subscription options in the future.",
      open: false,
    },
    {
      q: "What types of payments do you accept?",
      a: "Our bays accept all major credit/debit cards, Apple Pay, Google Pay, and exact cash. Quarters are accepted at the self-serve bays and vacuums.",
      open: false,
    },
    {
       q: "My car didn't get completely clean, what should I do?",
       a: "We strive for perfection. If our equipment malfunctioned or you are unsatisfied, please use the refund/complaint form below or email us directly, and we will make it right.",
       open: false
    }
  ]);

  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false
    })));
  };

  return (
    <div className="support-page">
      <section className="section page-header fade-in">
        <div className="container">
          <div className="section-header text-center">
            <h1>Customer Support</h1>
            <p>We are here to help. Whether you need assistance, have a question, or need to request a refund, our team is ready to ensure you have a great experience.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section bg-dark fade-in delay-1">
        <div className="container contact-grid">
           <div className="contact-info">
             <h2>Get in Touch</h2>
             <p className="subtitle">Send us a direct message or file a report, and our management team will reach out as soon as possible.</p>
             
             <div className="info-cards">
                <div className="info-card glass-card">
                   <Mail size={32} color="var(--secondary)" className="mb-3" />
                   <h3>Email Us</h3>
                   <p>For general inquiries or support</p>
                   <a href={`mailto:${CONFIG.SUPPORT_EMAIL}`} className="contact-link">{CONFIG.SUPPORT_EMAIL}</a>
                </div>
                
                <div className="info-card glass-card">
                   <MessageSquare size={32} color="var(--secondary)" className="mb-3" />
                   <h3>Response Time</h3>
                   <p>We typically respond to all inquiries within <strong>24-48 business hours</strong>.</p>
                </div>
             </div>
           </div>

           <div className="contact-form-container glass-card">
              <h3>Send a Message</h3>
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Form submitted (Demo)"); }}>
                 <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                 </div>
                 
                 <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required />
                 </div>

                 <div className="form-group">
                    <label>Subject</label>
                    <select required>
                       <option value="">Select a topic...</option>
                       <option value="refund">Request a Refund</option>
                       <option value="complaint">File a Complaint</option>
                       <option value="question">General Question</option>
                       <option value="feedback">Feedback</option>
                    </select>
                 </div>
                 
                 <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" placeholder="How can we help you?" required></textarea>
                 </div>
                 
                 <button type="submit" className="btn btn-secondary w-100 mt-2">Submit Request</button>
              </form>

              <div className="mt-4 pt-4 border-top text-center">
                 <p className="text-sm mb-3 text-light">Or use our external standard form:</p>
                 <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQ0E2t8m8kQ6_YwT7V29y8s76Z1O81I/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline w-100">
                    Google Request Form <ExternalLink size={16} />
                 </a>
              </div>
           </div>
        </div>

        {/* Wave Divider to Light */}
        <div className="wave-divider"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path></svg></div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section bg-light text-dark fade-in delay-2">
         <div className="container">
            <div className="faq-header text-center">
               <HelpCircle size={48} color="var(--primary)" className="mx-auto mb-4" />
               <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq-accordion">
               {faqs.map((faq, index) => (
                  <div key={index} className={`faq-item ${faq.open ? "open" : ""}`} onClick={() => toggleFaq(index)}>
                     <div className="faq-question">
                        <span>{faq.q}</span>
                        <ChevronDown className="faq-icon" size={24} />
                     </div>
                     <div className="faq-answer">
                        <div className="faq-answer-inner">{faq.a}</div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .page-header { padding-top: 6rem; padding-bottom: 3rem; }
        .section-header { max-width: 800px; margin: 0 auto; }
        .section-header h1 { font-size: 4.5rem; margin-bottom: 1.5rem; text-transform: uppercase; }
        .section-header p { font-size: 1.25rem; color: var(--text-light); line-height: 1.8; }

        .contact-section { padding: 5rem 0 8rem; position: relative; }
        
        .contact-grid {
           display: grid;
           grid-template-columns: 1fr 1.2fr;
           gap: 4rem;
           align-items: start;
        }

        .contact-info h2 { font-size: 3.5rem; margin-bottom: 1rem; color: var(--white); }
        .contact-info .subtitle { font-size: 1.15rem; color: rgba(255,255,255,0.7); margin-bottom: 3rem; line-height: 1.6; }

        .info-cards { display: grid; gap: 1.5rem; }
        .info-card { padding: 2rem; border-radius: 12px; }
        .info-card h3 { font-size: 1.5rem; color: var(--white); margin-bottom: 0.5rem; }
        .info-card p { color: rgba(255,255,255,0.6); margin-bottom: 1rem; }
        .mb-3 { margin-bottom: 1rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-4 { margin-top: 1.5rem; }
        .pt-4 { padding-top: 1.5rem; }
        .border-top { border-top: 1px solid rgba(255,255,255,0.1); }
        .text-sm { font-size: 0.9rem; }
        .text-light { color: rgba(255,255,255,0.6); }

        .contact-link {
           color: var(--white);
           font-weight: 700;
           font-size: 1.1rem;
           border-bottom: 2px solid var(--secondary);
           display: inline-block;
        }
        .contact-link:hover { color: var(--secondary); border-color: var(--white); }

        .contact-form-container { padding: 3rem 2.5rem; border-radius: 16px; }
        .contact-form-container h3 { font-size: 2rem; color: var(--white); margin-bottom: 2rem; }

        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; color: rgba(255,255,255,0.8); margin-bottom: 8px; font-weight: 500; font-size: 0.95rem; }
        .form-group input, .form-group select, .form-group textarea {
           width: 100%;
           background: rgba(255,255,255,0.05);
           border: 1px solid rgba(255,255,255,0.1);
           border-radius: 8px;
           padding: 12px 16px;
           color: var(--white);
           font-size: 1rem;
           transition: var(--transition);
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
           outline: none;
           border-color: var(--secondary);
           background: rgba(255,255,255,0.08);
           box-shadow: 0 0 0 3px rgba(0,191,255,0.1);
        }
        .form-group option { background: var(--bg-dark); color: var(--white); }

        /* FAQ Section */
        .text-dark { color: var(--text-dark); }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .mb-4 { margin-bottom: 2rem; }
        
        .faq-section { padding: 6rem 0; }
        .faq-header h2 { font-size: 3rem; margin-bottom: 3rem; }
        
        .faq-accordion { max-width: 800px; margin: 0 auto; }
        .faq-item {
           background: var(--white);
           border: 1px solid rgba(0,0,0,0.05);
           border-radius: 12px;
           margin-bottom: 1rem;
           overflow: hidden;
           cursor: pointer;
           transition: var(--transition);
        }
        .faq-item:hover { box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-color: rgba(0,191,255,0.2); }
        
        .faq-question {
           padding: 1.5rem 2rem;
           display: flex;
           justify-content: space-between;
           align-items: center;
           font-weight: 700;
           font-family: "Plus Jakarta Sans", sans-serif;
           font-size: 1.15rem;
        }
        
        .faq-icon { transition: transform 0.3s ease; color: var(--primary); }
        .faq-item.open .faq-icon { transform: rotate(180deg); color: var(--secondary); }
        
        .faq-answer {
           max-height: 0;
           overflow: hidden;
           transition: max-height 0.4s ease-in-out;
           background: #fafafc;
        }
        .faq-item.open .faq-answer { max-height: 300px; }
        
        .faq-answer-inner {
           padding: 0 2rem 1.75rem;
           color: var(--text-light);
           line-height: 1.7;
           font-size: 1.05rem;
        }

        @media (max-width: 992px) {
           .contact-grid { grid-template-columns: 1fr; }
           .info-cards { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
           .info-cards { grid-template-columns: 1fr; }
           .contact-form-container { padding: 2rem 1.5rem; }
        }
      `}} />
    </div>
  );
};

export default CustomerSupport;
