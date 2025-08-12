// src/pages/YourPrivacyChoices.js
import React from "react";

function YourPrivacyChoices() {
  return (
    <main className="container legal-page">
      <h1>Your Privacy Choices</h1>
      <p>Last Updated: {new Date().toLocaleDateString()}</p>

      <p>
        Certain privacy laws (such as the California Consumer Privacy Act, “CCPA”) provide you with specific rights regarding your personal information.
        This page explains how to exercise those rights.
      </p>

      <h2>1. Right to Opt-Out of Sale/Sharing</h2>
      <p>
        You may request that we do not sell or share your personal information by emailing
        <a href="mailto:privacy@dennismechanic.com"> privacy@dennismechanic.com</a> with the subject “Do Not Sell or Share.”
      </p>

      <h2>2. Right to Know and Access</h2>
      <p>
        You may request a report of the categories and specific pieces of personal information we have collected about you.
      </p>

      <h2>3. Right to Delete</h2>
      <p>
        You may request deletion of your personal information, subject to certain exceptions under applicable law.
      </p>

      <h2>4. Right to Correct</h2>
      <p>
        You may request correction of inaccurate personal information we maintain about you.
      </p>

      <h2>5. How to Submit a Request</h2>
      <p>
        Submit requests by emailing <a href="mailto:privacy@dennismechanic.com">privacy@dennismechanic.com</a>.
        We may need to verify your identity before processing your request.
      </p>
    </main>
  );
}

export default YourPrivacyChoices;
