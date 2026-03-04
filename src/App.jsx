import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WashOptions from './pages/WashOptions';
import Location from './pages/Location';
import About from './pages/About';
import CustomerSupport from './pages/CustomerSupport';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wash-options" element={<WashOptions />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
