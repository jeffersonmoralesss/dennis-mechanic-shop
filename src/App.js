import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';

import Home from './pages/Home';
import Services from './pages/Services';
import Reservation from './pages/Reservation';
import About from './pages/About';
import Commercial from './pages/Commercial';

function App() {
  return (
    <Router>
      <Header />
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/reservation" style={styles.link}>Reservation</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/commercial" style={styles.link}>Commercial</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/commercial" element={<Commercial />} />
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
