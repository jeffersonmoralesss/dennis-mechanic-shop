import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <span style={styles.logo}>Dennis Mechanic Shop</span>
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
    backgroundColor: 'white',
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
    color: 'black',
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