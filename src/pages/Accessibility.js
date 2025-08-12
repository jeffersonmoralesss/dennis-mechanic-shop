// src/pages/Accessibility.js
import React from "react";

function Accessibility() {
  return (
    <main className="container legal-page">
      <h1>Accessibility Statement</h1>
      <p>Last Updated: {new Date().toLocaleDateString()}</p>

      <p>
        Dennis General Mechanic is committed to ensuring digital accessibility for people with disabilities.
        We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
      </p>

      <h2>1. Measures to Support Accessibility</h2>
      <ul>
        <li>Design and development practices aimed at WCAG 2.1 AA</li>
        <li>Ongoing improvements based on user feedback</li>
      </ul>

      <h2>2. Feedback</h2>
      <p>
        We welcome your feedback on the accessibility of our Site. Please let us know if you encounter accessibility barriers:
        <br />
        Email: <a href="mailto:accessibility@dennismechanic.com">accessibility@dennismechanic.com</a>
      </p>
    </main>
  );
}

export default Accessibility;
