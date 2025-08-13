// src/pages/Commercial.js
import React from "react";
import "./commercial.css";
import { useI18n } from "../i18n";

function Commercial() {
  const { t } = useI18n();

  const bookingUrl =
    "https://vipshopmanagement.com/schedule-appointment.php?SubID=RZZcwDvHbo6Kg5sA";

  return (
    <main className="commercial">
      {/* HERO */}
      <section
        className="c-hero"
        aria-label="Commercial fleet and business services"
        style={{
          background:
            "url('/images/services/imagebanner.webp') center/cover no-repeat",
        }}
      >
        <div className="c-hero__overlay">
          <h1>{t("commercial.heroH")}</h1>
          <p>{t("commercial.heroP")}</p>
          <div className="c-hero__cta">
            <a
              className="btn btn--primary"
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("commercial.quote")}
            </a>
            <a className="btn btn--ghost" href="/services">
              {t("commercial.seeAll")}
            </a>
          </div>
        </div>
      </section>

      {/* INTRO COPY + IMAGES (masonry-style) */}
      <section className="c-intro container">
        <div className="c-intro__grid">
          <div className="c-intro__text">
            <h2>{t("commercial.introH")}</h2>
            <p>{t("commercial.introP1")}</p>
            <p>{t("commercial.introP2")}</p>
          </div>

          <figure className="c-photo tall">
            <img
              src="/images/services/fleet-service.webp"
              alt="Commercial tire service and mounting"
              loading="lazy"
            />
          </figure>

          <figure className="c-photo">
            <img
              src="/images/services/engine-service.jpg"
              alt="Engine diagnostics on a work truck"
              loading="lazy"
            />
          </figure>

          <figure className="c-photo">
            <img
              src="/images/services/truck.jpeg"
              alt="Wheel alignment for steady handling and tire life"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* CALLOUT STRIP */}
      <section className="c-strip">
        <div className="container">
          <h3>{t("commercial.stripH")}</h3>
          <ul className="c-benefits">
            <li>{t("commercial.b1")}</li>
            <li>{t("commercial.b2")}</li>
            <li>{t("commercial.b3")}</li>
            <li>{t("commercial.b4")}</li>
          </ul>
        </div>
      </section>

      {/* SERVICES OFFERED (two-column list + image) */}
      <section className="c-offer container">
        <div className="c-offer__text">
          <h2>{t("commercial.offerH")}</h2>
          <ul className="c-list">
            {t("commercial.list", []).map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          <div className="c-cta-row">
            <a
              className="btn btn--primary"
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("commercial.quote")}
            </a>
            <a className="btn btn--ghost" href="/about">
              {t("commercial.learn")}
            </a>
          </div>
        </div>

        <figure className="c-offer__img">
          <img
            src="/images/services/maintenance-service.jpg"
            alt="Shop bay ready for commercial service"
            loading="lazy"
          />
        </figure>
      </section>

      {/* OPTIONAL: CLIENT QUOTE (no contact form) */}
      <section className="c-quote">
        <div className="container">
          <blockquote>{t("commercial.quoteBlock")}</blockquote>
          <cite>{t("commercial.quoteBy")}</cite>
        </div>
      </section>
    </main>
  );
}

export default Commercial;
