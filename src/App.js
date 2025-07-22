import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Reservation from './pages/Reservation';
import About from './pages/About';
import Commercial from './pages/Commercial';

function App() {
  return (
    <Router>
      <nav style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'yellow' }}>
        <Link to="/" style={{ margin: '0 1rem', color: 'black' }}>Home</Link>
        <Link to="/services" style={{ margin: '0 1rem', color: 'black' }}>Services</Link>
        <Link to="/reservation" style={{ margin: '0 1rem', color: 'black' }}>Reservation</Link>
        <Link to="/about" style={{ margin: '0 1rem', color: 'black' }}>About</Link>
        <Link to="/commercial" style={{ margin: '0 1rem', color: 'black' }}>Commercial</Link>
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

export default App;

