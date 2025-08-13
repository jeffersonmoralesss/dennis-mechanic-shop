// src/components/header.js
import React from 'react';
import { useI18n } from '../i18n';

const GOLD = '#E3B11C';     // DG gold from the logo
const TEXT_DARK = '#111111';

function Header() {
  const { t, toggleLanguage, language } = useI18n();

  return (
    <header style={styles.header}>
      <div style={styles.left}>
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

        <button onClick={toggleLanguage} style={styles.langBtn}>
          {language === 'en' ? 'ES' : 'EN'}
        </button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: GOLD,
    color: GOLD,                  // children override
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: `2px solid ${GOLD}`,
    flexWrap: 'wrap',
    rowGap: '.4rem',
  },
  left: { display: 'flex', alignItems: 'center' },
  logoImg: { height: 50, width: 'auto', objectFit: 'contain', display: 'block' },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  icon: {
    color: TEXT_DARK,
    textDecoration: 'none',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 600,
  },
  label: { marginLeft: '0.25rem' },

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

  langBtn: {
    backgroundColor: TEXT_DARK,
    color: GOLD,
    border: 'none',
    padding: '0.35rem 0.7rem',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Header;
