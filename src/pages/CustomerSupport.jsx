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
        <div className="container">
           <div className="support-cards-grid">
              {/* Card 1: Email Support */}
              <div className="support-card glass-card text-center">
                 <Mail size={40} color="var(--secondary)" className="mx-auto mb-3" />
                 <h3>Email Us</h3>
                 <a href={`mailto:${CONFIG.SUPPORT_EMAIL}`} className="contact-link mb-3">{CONFIG.SUPPORT_EMAIL}</a>
                 <p className="text-light">For general inquiries or support, email us directly.</p>
              </div>
              
              {/* Card 2: Google Form */}
              <div className="support-card glass-card text-center">
                 <MessageSquare size={40} color="var(--secondary)" className="mx-auto mb-3" />
                 <h3>File a Complaint / Request a Refund</h3>
                 <a 
                   href="https://docs.google.com/forms/d/e/1FAIpQLSe8R4brvq_9-vMC8WMN1ZxJqaTpHXQVQtgsS4q9_R1wB-xeGg/viewform" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn btn-secondary w-100 mb-3"
                 >
                    Open Support Form <ExternalLink size={16} className="ml-2 inline-icon" />
                 </a>
                 <p className="text-light text-sm">All wash issues, refunds, or system problems should be submitted through this form.</p>
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
        
        .support-cards-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 2rem;
           max-width: 900px;
           margin: 0 auto;
        }

        .support-card { 
           padding: 3rem 2rem; 
           border-radius: 16px; 
           display: flex;
           flex-direction: column;
           justify-content: center;
        }
        .support-card h3 { font-size: 1.75rem; color: var(--white); margin-bottom: 1rem; }
        
        .mb-3 { margin-bottom: 1rem; }
        .text-sm { font-size: 0.9rem; }
        .text-light { color: rgba(255,255,255,0.7); line-height: 1.6; }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .w-100 { width: 100%; }
        .inline-icon { display: inline-block; vertical-align: middle; margin-left: 8px; margin-top: -2px; }

        .contact-link {
           color: var(--white);
           font-weight: 700;
           font-size: 1.2rem;
           border-bottom: 2px solid var(--secondary);
           display: inline-block;
           align-self: center;
        }
        .contact-link:hover { color: var(--secondary); border-color: var(--white); }

        /* FAQ Section */
        .text-dark { color: var(--text-dark); }
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

        @media (max-width: 768px) {
           .support-cards-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default CustomerSupport;
