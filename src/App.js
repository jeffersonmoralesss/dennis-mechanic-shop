import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Commercial from './pages/Commercial';

// NEW legal pages
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import YourPrivacyChoices from './pages/YourPrivacyChoices';
import Accessibility from './pages/Accessibility';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <Router>
      <Header />
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/commercial" style={styles.link}>Commercial</Link>
      </nav>

      <Routes>
        {/* Existing routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/commercial" element={<Commercial />} />

        {/* New legal/info routes */}
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/your-privacy-choices" element={<YourPrivacyChoices />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
    </Router>
  );
}

const styles = {
  nav: {
    backgroundColor: '#222',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    borderBottom: '2px solid yellow',
  },
  link: {
    color: 'yellow',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default App;
