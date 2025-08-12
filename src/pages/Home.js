// src/pages/Home.js
import React from "react";
import "../styles/home.css";

function Home() {
  // Use the image from /public/images
  const bannerImage = "/images/services/bannerimage.avif"; // update extension if it's .png/.webp

  const jobs = [
    {
      title: "Brake Repair - Honda Civic",
      image: "/images/brake.jpg",
      alt: "Mechanic replacing brake pads on a Honda Civic",
    },
    {
      title: "Oil Change - Toyota Corolla",
      image: "/images/oil.jpg",
      alt: "Fresh oil being poured into a Toyota Corolla engine",
    },
  ];

  return (
    <main>
      {/* Clean hero: image only, no overlay, no text */}
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
    </main>
  );
}

export default Home;