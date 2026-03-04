import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
            <style dangerouslySetInnerHTML={{
                __html: `
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
        .section {
          padding: 5rem 0;
        }
        @media (max-width: 768px) {
          .section {
            padding: 3rem 0;
          }
        }
      `}} />
        </div>
    );
};

export default Layout;
