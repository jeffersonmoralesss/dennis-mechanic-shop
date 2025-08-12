// src/pages/Sitemap.js
import React from "react";

function Sitemap() {
  return (
    <main className="container legal-page">
      <h1>Website Sitemap</h1>
      <ul>
        <li><a href="/">Home</a></li>
        {/* Add real routes you have in your app: */}
        <li><a href="/services">Services</a></li>
        <li><a href="/reservation">Book a Reservation</a></li>
        <li><a href="/about">About Us</a></li>
        {/* Legal pages */}
        <li><a href="/terms-of-use">Terms of Use</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/your-privacy-choices">Your Privacy Choices</a></li>
        <li><a href="/accessibility">Accessibility</a></li>
      </ul>
    </main>
  );
}

export default Sitemap;
