import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <span style={styles.logo}>Dennis Mechanic Shop</span>
      </div>
      <div style={styles.right}>
        <a href="tel:5551234567" style={styles.icon}>
          📞 <span style={styles.label}>Call</span>
        </a>
        <a
          href="https://goo.gl/maps/CgD3uZ5FYzbnhksg6"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          📍 <span style={styles.label}>Location</span>
        </a>
        <span style={styles.menu}>☰</span>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'black',
    color: 'yellow',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '2px solid yellow',
  },
  left: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logo: {
    color: 'yellow',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  icon: {
    color: 'yellow',
    textDecoration: 'none',
    fontSize: '1rem',
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
