// src/pages/About.js
import React, { useState, useEffect } from "react";
import "./about.css";
import { useI18n } from "../i18n";

function About() {
  const { t } = useI18n();

  // Lightbox state
  const [lightbox, setLightbox] = useState({ open: false, src: null, alt: "" });

  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => e.key === "Escape" && setLightbox({ open: false, src: null, alt: "" });
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox.open]);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{
          background: "url('/images/about/AboutUS.webp') center/cover no-repeat",
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
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>

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

      {/* Bottom Gallery (no captions) */}
      <section className="about-gallery container" aria-label="Team photo gallery">
        {[
          { src: "/images/about/LookingAtEngine.png", alt: "Technician inspecting an engine bay" },
          { src: "/images/about/TriplePeople.png", alt: "Three team members smiling in the shop" },
          { src: "/images/about/DoublePeople.png", alt: "Two specialists discussing a project" },
        ].map((item, i) => (
          <div key={i} className="gallery-card">
            <button
              className="gallery-card__button"
              onClick={() => setLightbox({ open: true, src: item.src, alt: item.alt })}
            >
              <img className="gallery-card__img" src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-card__overlay" />
            </button>
          </div>
        ))}
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox({ open: false, src: null, alt: "" })}
        >
          <button
            className="lightbox__close"
            aria-label="Close"
            onClick={() => setLightbox({ open: false, src: null, alt: "" })}
          >
            ×
          </button>
          <img
            className="lightbox__img"
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default About;
