// src/pages/Home.js
import React from "react";
import "../styles/home.css";

function Home() {
  // Ensure this file exists in public/images as the correct name/extension
  const bannerImage = "/images/services/imagebanner.webp"; // or .png/.webp

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

  return (
    <main>
      {/* Hero (banner image only) */}
      <section className="hero" aria-label="Dennis General Mechanic banner">
        <img
          src={bannerImage}
          alt="Dennis General Mechanic — dependable auto service"
          className="hero__img"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </section>

      {/* Book Online */}
      <section className="cta" aria-label="Book online">
        <div className="container cta__wrap">
          <h2 className="cta__title">Need a Service? Book Online!</h2>
          <a
            href="https://vipshopmanagement.com/schedule-appointment.php?SubID=RZZcwDvHbo6Kg5sA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Schedule a Reservation
          </a>
        </div>
      </section>

      {/* Weekly bulletin */}
      <section className="bulletin" aria-labelledby="bulletin-heading">
        <div className="container">
          <h2 id="bulletin-heading" className="section__title">
            This Week’s Work
          </h2>
        </div>
        <div className="container">
          <ul className="grid" role="list">
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

      {/* Site Footer */}
      <footer className="site-footer" role="contentinfo">
        <div className="container footer-links">
          <p>© 2007-{new Date().getFullYear()} Dennis General Mechanic. All Rights Reserved.</p>
          <nav aria-label="Legal and informational links">
            <a href="/terms-of-use">Terms of Use</a> |{" "}
            <a href="/privacy-policy">Privacy Policy</a> |{" "}
            <a href="/your-privacy-choices">Your Privacy Choices</a> |{" "}
            <a href="/accessibility">Accessibility</a> |{" "}
            <a href="/sitemap">Sitemap</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

export default Home;
