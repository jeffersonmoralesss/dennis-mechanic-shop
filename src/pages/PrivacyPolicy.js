// src/pages/PrivacyPolicy.js
import React from "react";
import { useI18n } from "../i18n";

function PrivacyPolicy() {
  const { t } = useI18n();

  const useList = t("legal.privacy.useL", [
    "To provide and improve services and customer support",
    "To communicate with you about appointments, services, and promotions",
    "To maintain Site functionality, security, and analytics",
  ]);

  return (
    <main className="container legal-page">
      <h1>{t("legal.privacy.title", "Privacy Policy")}</h1>
      <p>
        {t("legal.privacy.updated", "Last Updated")}: {new Date().toLocaleDateString()}
      </p>

      <p>
        {t(
          "legal.privacy.intro",
          "This Privacy Policy describes how Dennis General Mechanic (“Company,” “we,” “us,” or “our”) collects, uses, discloses, and safeguards personal information obtained through our website (the “Site”)."
        )}
      </p>

      <h2>1. {t("legal.privacy.collectH", "Information We Collect")}</h2>
      <p>
        {t(
          "legal.privacy.collectP",
          "We may collect information you provide directly to us (e.g., name, email, phone number, service details) and information collected automatically (e.g., IP address, browser type, pages visited) via cookies or analytics."
        )}
      </p>

      <h2>2. {t("legal.privacy.useH", "How We Use Information")}</h2>
      <ul>
        {useList.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>

      <h2>3. {t("legal.privacy.shareH", "Sharing of Information")}</h2>
      <p>
        {t(
          "legal.privacy.shareP",
          "We may share information with service providers who perform functions on our behalf (e.g., hosting, analytics), as required by law, or with your consent. We do not sell personal information in the traditional sense."
        )}
      </p>

      <h2>4. {t("legal.privacy.cookieH", "Cookies and Tracking")}</h2>
      <p>
        {t(
          "legal.privacy.cookieP",
          "We use cookies and similar technologies to operate the Site and understand how it is used. You can adjust cookie settings in your browser; however, some features may not function properly if disabled."
        )}
      </p>

      <h2>5. {t("legal.privacy.securityH", "Data Security")}</h2>
      <p>
        {t(
          "legal.privacy.securityP",
          "We implement administrative, technical, and physical safeguards to protect personal information. No method of transmission or storage is 100% secure."
        )}
      </p>

      <h2>6. {t("legal.privacy.childH", "Children’s Privacy")}</h2>
      <p>
        {t(
          "legal.privacy.childP",
          "The Site is not directed to children under 13. We do not knowingly collect personal information from children under 13."
        )}
      </p>

      <h2>7. {t("legal.privacy.rightsH", "Your Rights")}</h2>
      <p>
        {t(
          "legal.privacy.rightsP",
          "Depending on your location, you may have rights to access, correct, or delete your personal information, or to object to certain processing. To submit a request, contact "
        )}
        <a href="mailto:privacy@dennismechanic.com">privacy@dennismechanic.com</a>.
      </p>

      <h2>8. {t("legal.privacy.changeH", "Changes to This Policy")}</h2>
      <p>
        {t(
          "legal.privacy.changeP",
          "We may update this Policy from time to time. The updated version will be indicated by an updated “Last Updated” date."
        )}
      </p>

      <h2>9. {t("legal.privacy.contactH", "Contact")}</h2>
      <p>
        {t("legal.privacy.contactP", "Questions? Contact ")}
        <a href="mailto:privacy@dennismechanic.com">privacy@dennismechanic.com</a>.
      </p>
    </main>
  );
}

export default PrivacyPolicy;
