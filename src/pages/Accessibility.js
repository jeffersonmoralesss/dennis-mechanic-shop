// src/pages/Accessibility.js
import React from "react";
import { useI18n } from "../i18n";

function Accessibility() {
  const { t } = useI18n();

  const measures = t("legal.access.measuresL", [
    "Design and development practices aimed at WCAG 2.1 AA",
    "Ongoing improvements based on user feedback",
  ]);

  return (
    <main className="container legal-page">
      <h1>{t("legal.access.title", "Accessibility Statement")}</h1>
      <p>
        {t("legal.access.updated", "Last Updated")}: {new Date().toLocaleDateString()}
      </p>

      <p>
        {t(
          "legal.access.intro",
          "Dennis General Mechanic is committed to ensuring digital accessibility for people with disabilities. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA."
        )}
      </p>

      <h2>1. {t("legal.access.measuresH", "Measures to Support Accessibility")}</h2>
      <ul>
        {measures.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>

      <h2>2. {t("legal.access.feedbackH", "Feedback")}</h2>
      <p>
        {t(
          "legal.access.feedbackP",
          "We welcome your feedback on the accessibility of our Site. Please let us know if you encounter accessibility barriers:"
        )}
        <br />
        {t("legal.access.emailLabel", "Email:")}{" "}
        <a href="mailto:accessibility@dennismechanic.com">accessibility@dennismechanic.com</a>
      </p>
    </main>
  );
}

export default Accessibility;
