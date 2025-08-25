// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Use your i18n provider (must be a named export: I18nProvider)
import { I18nProvider } from './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
