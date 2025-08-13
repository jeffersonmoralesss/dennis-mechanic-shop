// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/header';
import { LanguageProvider, useI18n } from './i18n';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Commercial from './pages/Commercial';

// Legal/info pages
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import YourPrivacyChoices from './pages/YourPrivacyChoices';
import Accessibility from './pages/Accessibility';
import Sitemap from './pages/Sitemap';

function AppNav() {
  const { t } = useI18n();
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>{t('nav.home')}</Link>
      <Link to="/services" style={styles.link}>{t('nav.services')}</Link>
      <Link to="/about" style={styles.link}>{t('nav.about')}</Link>
      <Link to="/commercial" style={styles.link}>{t('nav.commercial')}</Link>
    </nav>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <AppNav />

        <Routes>
          {/* Existing routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/commercial" element={<Commercial />} />

          {/* Legal/info routes */}
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/your-privacy-choices" element={<YourPrivacyChoices />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

const GOLD = '#E3B11C';
const styles = {
  nav: {
    backgroundColor: GOLD,         // match header
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    borderBottom: `2px solid ${GOLD}`,  // keep a clean edge
  },
  link: {
    color: '#111',                 // dark text on gold for contrast
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};


export default App;
