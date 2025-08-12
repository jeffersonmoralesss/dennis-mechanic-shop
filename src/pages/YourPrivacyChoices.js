// src/pages/YourPrivacyChoices.js
import React from "react";
import { useI18n } from "../i18n";

function YourPrivacyChoices() {
  const { t } = useI18n();

  return (
    <main className="container legal-page">
      <h1>{t("legal.choices.title", "Your Privacy Choices")}</h1>
      <p>
        {t("legal.choices.updated", "Last Updated")}: {new Date().toLocaleDateString()}
      </p>

      <p>
        {t(
          "legal.choices.intro",
          "Certain privacy laws (such as the California Consumer Privacy Act, “CCPA”) provide you with specific rights regarding your personal information. This page explains how to exercise those rights."
        )}
      </p>

      <h2>1. {t("legal.choices.outH", "Right to Opt-Out of Sale/Sharing")}</h2>
      <p>
        {t(
          "legal.choices.outP",
          "You may request that we do not sell or share your personal information by emailing privacy@dennismechanic.com with the subject “Do Not Sell or Share.”"
        )}{" "}
        <a href="mailto:privacy@dennismechanic.com">privacy@dennismechanic.com</a>.
      </p>

      <h2>2. {t("legal.choices.knowH", "Right to Know and Access")}</h2>
      <p>
        {t(
          "legal.choices.knowP",
          "You may request a report of the categories and specific pieces of personal information we have collected about you."
        )}
      </p>

      <h2>3. {t("legal.choices.delH", "Right to Delete")}</h2>
      <p>
        {t(
          "legal.choices.delP",
          "You may request deletion of your personal information, subject to certain exceptions under applicable law."
        )}
      </p>

      <h2>4. {t("legal.choices.corrH", "Right to Correct")}</h2>
      <p>
        {t(
          "legal.choices.corrP",
          "You may request correction of inaccurate personal information we maintain about you."
        )}
      </p>

      <h2>5. {t("legal.choices.howH", "How to Submit a Request")}</h2>
      <p>
        {t(
          "legal.choices.howP",
          "Submit requests by emailing privacy@dennismechanic.com. We may need to verify your identity before processing your request."
        )}{" "}
        <a href="mailto:privacy@dennismechanic.com">privacy@dennismechanic.com</a>.
      </p>
    </main>
  );
}

export default YourPrivacyChoices;
