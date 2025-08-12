// src/pages/Home.js
import React, { useRef } from "react";
import "../styles/home.css";
import { useI18n } from "../i18n";

export default function Home() {
  const { t } = useI18n();

  const bannerImage = "/images/services/imagebanner.webp";
  const bookingUrl =
    "https://vipshopmanagement.com/schedule-appointment.php?SubID=RZZcwDvHbo6Kg5sA";

  const jobs = [
    {
      title: "Brake Repair - Honda Civic",
      image: "/images/services/brake-service.jpg",
      alt: "Mechanic replacing brake pads on a Honda Civic",
    },
    {
      title: "Oil Change - Toyota Corolla",
      image: "/images/services/oil-change.avif",
      alt: "Fresh oil being poured into a Toyota Corolla engine",
    },
  ];

  const QUICK = [
    { label: t("home.quick.0"), q: "oil" },
    { label: t("home.quick.1"), q: "brake" },
    { label: t("home.quick.2"), q: "diagnostic" },
    { label: t("home.quick.3"), q: "alignment" },
    { label: t("home.quick.4"), q: "tire" },
  ];

  // Testimonials (newest → oldest)
  const TESTIMONIALS = [
    {
      name: "Naty Naty",
      meta: "Local Guide · 28 reviews · 15 photos",
      when: "2 weeks ago",
      text:
        "I always come to this shop when my car has issue. Denis is a great mechanic and very honest. His pricing is always great, the people who work there are very polite and professional as well. I highly recommend it if you are looking for a good mechanic that's trustworthy.",
    },
    {
      name: "Sindy Guzman",
      meta: "4 reviews",
      when: "7 months ago",
      text:
        "Thank you Dennis and team, I felt very welcome to your shop. Customer service is amazing—keep up the good work and professionalism you have.",
    },
    {
      name: "Robert Capecchi",
      meta: "4 reviews",
      when: "2 years ago",
      text:
        "They did an overall safety inspection on a car I was registering with the state. They accepted me as a walk in and were able to get the job done in under two hours, which I thought was great. What was better was the customer service. Very nice and patient team. Very much recommend.",
    },
    {
      name: "Maame Ampomah",
      meta: "4 reviews",
      when: "5 years ago",
      text:
        "Truly fantastic service and extremely great prices! This is my second time here and I could not be happier with everything. The staff is professional and the pricing is better than other locations.",
    },
    {
      name: "Alejandro Reyes",
      meta: "2 reviews · 1 photo",
      when: "5 years ago",
      text:
        "An excellent job. Very responsible. Very humble people with very good availability. I am very satisfied with the work. I recommend it to anyone who has a problem with their car.",
    },
    {
      name: "Vassi Z",
      meta: "4 reviews",
      when: "5 years ago",
      text:
        "Dennis is an incredibly knowledgeable mechanic! He was fast and has great prices. He really knows what he is doing and won't rip you off like most other places.",
    },
  ];

  const trackRef = useRef(null);
  const scrollBy = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amt = Math.max(320, Math.floor(el.clientWidth * 0.9)) * dir;
    el.scrollBy({ left: amt, behavior: "smooth" });
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero" aria-label="Dennis General Mechanic banner">
        <img
          src={bannerImage}
          alt="Dennis General Mechanic — dependable auto service"
          className="hero__img"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__content container">
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.subtitle")}</p>
          <div className="hero__cta">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              {t("home.hero.reserve")}
            </a>
            <a className="btn btn--ghost" href="tel:2407647004">
              {t("home.hero.call")}
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container features__grid">
          <div className="feature">
            <span className="f-emoji" aria-hidden>🔧</span>
            <div>
              <h3>{t("home.features.oneH")}</h3>
              <p>{t("home.features.oneP")}</p>
            </div>
          </div>
          <div className="feature">
            <span className="f-emoji" aria-hidden>⚡</span>
            <div>
              <h3>{t("home.features.twoH")}</h3>
              <p>{t("home.features.twoP")}</p>
            </div>
          </div>
          <div className="feature">
            <span className="f-emoji" aria-hidden>💬</span>
            <div>
              <h3>{t("home.features.threeH")}</h3>
              <p>{t("home.features.threeP")}</p>
            </div>
          </div>
          <div className="feature">
            <span className="f-emoji" aria-hidden>🛡️</span>
            <div>
              <h3>{t("home.features.fourH")}</h3>
              <p>{t("home.features.fourP")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="quick">
        <div className="container">
          <ul className="quick__pills">
            {QUICK.map(({ label, q }) => (
              <li key={q}>
                <a className="pill" href={`/services?search=${encodeURIComponent(q)}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* THIS WEEK’S WORK */}
      <section className="bulletin" aria-labelledby="bulletin-heading">
        <div className="container">
          <h2 id="bulletin-heading" className="section__title">
            {t("home.weekTitle")}
          </h2>
          <ul className="grid">
            {jobs.map((job, index) => (
              <li key={index} className="card">
                <img
                  src={job.image}
                  alt={job.alt || job.title}
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__body">
                  <p className="card__title">{job.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="testimonials"
        aria-labelledby="testimonials-heading"
        style={{ background: "url('/images/services/imagebanner.webp') center/cover no-repeat" }}
      >
        <div className="testimonials__overlay" aria-hidden="true" />
        <div className="container">
          <header className="testimonials__header">
            <h2 id="testimonials-heading" className="section__title">
              {t("home.testimonials")}
            </h2>
            <div className="testimonials__actions">
              <button className="t-nav" aria-label="Scroll left" onClick={() => scrollBy(-1)}>‹</button>
              <button className="t-nav" aria-label="Scroll right" onClick={() => scrollBy(1)}>›</button>
            </div>
          </header>

          <div className="t-track" ref={trackRef} role="list" aria-label="Customer testimonials">
            {TESTIMONIALS.map((tst, i) => (
              <article className="t-card" key={i} role="listitem">
                <header className="t-head">
                  <div className="t-avatar" aria-hidden="true">{tst.name?.[0] || "U"}</div>
                  <div>
                    <strong className="t-name">{tst.name}</strong>
                    <div className="t-sub">
                      <span>{tst.meta}</span>
                      <span className="dot">•</span>
                      <time>{tst.when}</time>
                    </div>
                  </div>
                </header>
                <p className="t-text">“{tst.text}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer" role="contentinfo">
        <div className="container footer-links">
          <p>© 2007-{new Date().getFullYear()} Dennis General Mechanic. {t("footer.rights")}</p>
          <nav aria-label="Legal and informational links">
            <a href="/terms-of-use">{t("footer.terms")}</a> |{" "}
            <a href="/privacy-policy">{t("footer.privacy")}</a> |{" "}
            <a href="/your-privacy-choices">{t("footer.choices")}</a> |{" "}
            <a href="/accessibility">{t("footer.accessibility")}</a> |{" "}
            <a href="/sitemap">{t("footer.sitemap")}</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
