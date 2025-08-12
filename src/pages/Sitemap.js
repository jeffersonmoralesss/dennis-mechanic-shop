// src/pages/Sitemap.js
import React from "react";
import { useI18n } from "../i18n";

function Sitemap() {
  const { t } = useI18n();

  return (
    <main className="container legal-page">
      <h1>{t("sitemap.title", "Website Sitemap")}</h1>
      <ul>
        <li>
          <a href="/">{t("nav.home", "Home")}</a>
        </li>
        <li>
          <a href="/services">{t("nav.services", "Services")}</a>
        </li>
        <li>
          <a href="/reservation">{t("nav.reservation", "Book a Reservation")}</a>
        </li>
        <li>
          <a href="/about">{t("nav.about", "About Us")}</a>
        </li>
        <li>
          <a href="/terms-of-use">{t("nav.terms", "Terms of Use")}</a>
        </li>
        <li>
          <a href="/privacy-policy">{t("nav.privacy", "Privacy Policy")}</a>
        </li>
        <li>
          <a href="/your-privacy-choices">{t("nav.privacyChoices", "Your Privacy Choices")}</a>
        </li>
        <li>
          <a href="/accessibility">{t("nav.accessibility", "Accessibility")}</a>
        </li>
      </ul>
    </main>
  );
}

export default Sitemap;
