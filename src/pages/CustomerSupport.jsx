import React from 'react';
import { ExternalLink, Mail, Info } from 'lucide-react';
import { CONFIG } from '../config';

const CustomerSupport = () => {
    return (
        <div className="support-page">
            <section className="section bg-water">
                <div className="container">
                    <div className="support-hero glass-card text-center">
                        <div className="section-header">
                            <h1>Customer Support / Refund Request</h1>
                            <p>If you experienced a system malfunction, were charged incorrectly, or had an issue with a wash, please submit a support request using the form below.</p>
                        </div>

                        <div className="support-cta">
                            <div className="direct-email">
                                <Mail size={20} />
                                <a href={`mailto:${CONFIG.SUPPORT_EMAIL}`}>{CONFIG.SUPPORT_EMAIL}</a>
                            </div>

                            <a
                                href="https://forms.gle/y5oAmoNDyg8jDHvr6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="google-form-btn"
                            >
                                Submit a Support Request <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="refund-policy-msg glass-card">
                        <div className="policy-icon"><Info size={24} /></div>
                        <div>
                            <h4>Need Help?</h4>
                            <p>Our team reviews every request submitted through the form or email above to ensure you have the best possible experience at Arbor Bay CarWash.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .support-hero { 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 4rem 2rem; 
        }
        
        .support-cta {
            margin-top: 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .direct-email {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.1rem;
            color: var(--text-light);
        }
        .direct-email a {
            font-weight: 700;
            color: var(--primary);
            text-decoration: underline;
        }

        .google-form-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: #007bff; /* Professional Blue */
            color: white !important;
            padding: 1.25rem 2.5rem;
            border-radius: 50px;
            font-size: 1.25rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }

        .google-form-btn:hover {
            background: #0056b3;
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
        }

        .refund-policy-msg { 
            max-width: 800px; 
            margin: 3rem auto 0; 
            padding: 2rem; 
            display: flex; 
            gap: 1.5rem; 
            align-items: center; 
            border-left: 5px solid var(--secondary); 
        }
        .policy-icon { color: var(--secondary); }
        .refund-policy-msg h4 { margin-bottom: 0.5rem; }
        .refund-policy-msg p { color: var(--text-light); }

        @media (max-width: 768px) {
            .support-hero { padding: 3rem 1.5rem; }
            .google-form-btn { width: 100%; font-size: 1.1rem; padding: 1rem; }
        }
      `}} />
        </div>
    );
};

export default CustomerSupport;
