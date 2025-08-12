// src/pages/PrivacyPolicy.js
import React from "react";

function PrivacyPolicy() {
  return (
    <main className="container legal-page">
      <h1>Privacy Policy</h1>
      <p>Last Updated: {new Date().toLocaleDateString()}</p>

      <p>
        This Privacy Policy describes how Dennis General Mechanic (“Company,” “we,” “us,” or “our”)
        collects, uses, discloses, and safeguards personal information obtained through our website (the “Site”).
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect information you provide directly to us (e.g., name, email, phone number, service details)
        and information collected automatically (e.g., IP address, browser type, pages visited) via cookies or analytics.
      </p>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To provide and improve services and customer support</li>
        <li>To communicate with you about appointments, services, and promotions</li>
        <li>To maintain Site functionality, security, and analytics</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>
        We may share information with service providers who perform functions on our behalf (e.g., hosting, analytics),
        as required by law, or with your consent. We do not sell personal information in the traditional sense.
      </p>

      <h2>4. Cookies and Tracking</h2>
      <p>
        We use cookies and similar technologies to operate the Site and understand how it is used.
        You can adjust cookie settings in your browser; however, some features may not function properly if disabled.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement administrative, technical, and physical safeguards to protect personal information.
        No method of transmission or storage is 100% secure.
      </p>

      <h2>6. Children’s Privacy</h2>
      <p>
        The Site is not directed to children under 13. We do not knowingly collect personal information from children under 13.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or delete your personal information, or to object to
        certain processing. To submit a request, contact <a href="mailto:privacy@dennismechanic.com">privacy@dennismechanic.com</a>.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Policy from time to time. The updated version will be indicated by an updated “Last Updated” date.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions? Contact <a href="mailto:privacy@dennismechanic.com">privacy@dennismechanic.com</a>.
      </p>
    </main>
  );
}

export default PrivacyPolicy;
