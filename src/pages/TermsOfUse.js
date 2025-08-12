// src/pages/TermsOfUse.js
import React from "react";

function TermsOfUse() {
  return (
    <main className="container legal-page">
      <h1>Terms of Use</h1>
      <p>Last Updated: {new Date().toLocaleDateString()}</p>

      <p>
        Welcome to the website of Dennis General Mechanic (“Company,” “we,” “us,” or “our”).
        By accessing or using this website (the “Site”), you agree to be bound by these Terms of Use (the “Terms”).
        If you do not agree to these Terms, please do not use the Site.
      </p>

      <h2>1. Eligibility and Use of the Site</h2>
      <p>
        You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use
        the Site in any manner that could disable, overburden, damage, or impair the Site or interfere with any
        other party’s use of the Site.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        The Site and its entire contents, features, and functionality (including but not limited to text, graphics,
        logos, images, and design) are owned by Dennis General Mechanic or its licensors and are protected by
        copyright, trademark, and other intellectual property laws.
      </p>

      <h2>3. No Warranties</h2>
      <p>
        The Site is provided on an “AS IS” and “AS AVAILABLE” basis. We make no warranties of any kind, express or implied,
        regarding the operation of the Site or the information, content, or materials included on the Site.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Dennis General Mechanic and its officers, employees, and agents
        shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from
        or related to your use of the Site.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        The Site may contain links to third-party websites for your convenience. We have no control over the contents
        of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
      </p>

      <h2>6. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the state and country in which our principal place of business is located,
        without regard to its conflict of law principles.
      </p>

      <h2>7. Changes to These Terms</h2>
      <p>
        We may revise and update these Terms from time to time. All changes are effective immediately when posted.
        Your continued use of the Site following the posting of revised Terms means you accept and agree to the changes.
      </p>

      <h2>8. Contact</h2>
      <p>
        For questions about these Terms, contact us at <a href="mailto:legal@dennismechanic.com">legal@dennismechanic.com</a>.
      </p>
    </main>
  );
}

export default TermsOfUse;
