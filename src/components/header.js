// src/components/header.js
import React from 'react';
import { useI18n } from '../i18n';

function Header() {
  const { t, toggleLanguage, language } = useI18n();

  return (
    <header style={styles.header}>
      <div style={styles.left}>
        {/* Make sure the image exists at: public/images/services/logo.png */}
        <img
          src={`${process.env.PUBLIC_URL}/images/services/logo.png`}
          alt={t('header.logoAlt')}
          style={styles.logoImg}
        />
      </div>

      <div style={styles.right}>
        <a href="tel:2407647004" style={styles.icon}>
          📞 <span style={styles.label}>{t('header.phone')}</span>
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=4720+Baltimore+Ave+Hyattsville+MD+20781"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          📍 <span style={styles.label}>{t('header.address')}</span>
        </a>

        {/* Facebook button */}
        <a
          href="https://www.facebook.com/share/1G8PzHNPue/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={styles.fbBtn}
        >
          <span style={styles.fbIcon}>f</span>
          <span style={styles.fbText}>Facebook</span>
        </a>

        {/* Language toggle */}
        <button onClick={toggleLanguage} style={styles.langBtn}>
          {language === 'en' ? 'ES' : 'EN'}
        </button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'yellow',
    color: 'yellow', // children override
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '2px solid yellow',
    flexWrap: 'wrap',          // allow neat wrapping on small screens
    rowGap: '.4rem',           // space between rows when it wraps
  },
  left: { display: 'flex', alignItems: 'center' },
  logoImg: {
    height: 50,
    width: 'auto',
    objectFit: 'contain',
    display: 'block',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',               // tighter gap so it fits on phones
    flexWrap: 'wrap',          // prevents overlap on narrow devices
    justifyContent: 'flex-end',
  },
  icon: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
  },
  label: { marginLeft: '0.25rem' },

  // Facebook button
  fbBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '.35rem',
    backgroundColor: '#1877F2',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 800,
    padding: '.38rem .6rem',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0,0,0,.15)',
    lineHeight: 1,
  },
  fbIcon: {
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
    fontWeight: 900,
    fontSize: '1rem',
    transform: 'translateY(-1px)',
  },
  fbText: { fontSize: '.92rem' },

  // Language toggle
  langBtn: {
    backgroundColor: 'black',
    color: 'yellow',
    border: 'none',
    padding: '0.35rem 0.7rem',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Header;
