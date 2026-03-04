import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            <section className="section bg-water">
                <div className="container">
                    <div className="section-header text-center">
                        <h1>About Arbor Bay CarWash</h1>
                        <p className="placeholder-text">
                            This section will include the story of Arbor Bay CarWash and our commitment to providing high-quality, reliable car washing services to the Pittsburgh community.
                        </p>
                    </div>

                    <div className="about-visual glass-card">
                        {/* Future image placement */}
                        <div className="placeholder-image">
                            <span>Coming Soon: Our Story in Pictures</span>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .placeholder-text {
          font-size: 1.25rem;
          color: var(--text-light);
          line-height: 1.8;
          max-width: 800px;
          margin: 2rem auto;
        }
        .about-visual {
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--white) 0%, var(--primary-light) 100%);
          color: var(--primary);
          font-weight: 700;
          font-size: 1.5rem;
        }
      `}} />
        </div>
    );
};

export default About;
