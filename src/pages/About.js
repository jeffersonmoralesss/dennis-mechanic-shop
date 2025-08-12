// src/pages/About.js
import "./about.css";
import { useI18n } from "../i18n";

function About() {
  const { t } = useI18n();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{
          background: "url('/images/about/AboutUS.webp') center/cover no-repeat"
        }}
      >
        <div className="overlay">
          <h1>{t("about.heroH")}</h1>
          <p>{t("about.heroP")}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content container">
        <div className="about-text">
          <h2>{t("about.whoH")}</h2>
          <p>
            {t("about.p1")}
          </p>
          <p>
            {t("about.p2")}
          </p>
          <p>
            {t("about.p3")}
          </p>

          <div className="highlights">
            <div className="highlight">
              <span>🔧</span>
              <p>{t("about.h1")}</p>
            </div>
            <div className="highlight">
              <span>🚗</span>
              <p>{t("about.h2")}</p>
            </div>
            <div className="highlight">
              <span>❤️</span>
              <p>{t("about.h3")}</p>
            </div>
          </div>
        </div>

        {/* Image next to text */}
        <div className="about-image">
          <img
            src="/images/about/brophoto.webp"
            alt="Our team at Dennis General Mechanic Shop"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
