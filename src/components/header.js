// src/components/header.js
import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <img
          src={`${process.env.PUBLIC_URL}/images/services/logo.png`}
          alt="Dennis General Mechanic Logo"
          style={styles.logoImg}
        />
      </div>
      <div style={styles.right}>
        <a href="tel:2407647004" style={styles.icon}>
          📞 <span style={styles.label}>240-764-7004</span>
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=4720+Baltimore+Ave+Hyattsville+MD+20781"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          📍 <span style={styles.label}>4720 Baltimore Ave Hyattsville, MD 20781</span>
        </a>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'yellow',
    color: 'yellow', // child elements override as needed
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '2px solid yellow',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  // (kept for backward compatibility, not used now)
  logo: {
    color: 'black',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  // New: image styling for the logo
  logoImg: {
    height: 50,      // adjust size as needed
    width: 'auto',
    objectFit: 'contain',
    display: 'block',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  icon: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
  },
  label: {
    marginLeft: '0.25rem',
  },
  menu: {
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
};

export default Header;
