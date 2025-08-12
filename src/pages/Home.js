// src/pages/Home.js
import React from 'react';
import '../styles/home.css'; // make sure this file exists (from earlier step)

function Home() {
  const jobs = [
    {
      title: 'Brake Repair - Honda Civic',
      image: '/images/brake.jpg',
      alt: 'Mechanic replacing brake pads on a Honda Civic',
    },
    {
      title: 'Oil Change - Toyota Corolla',
      image: '/images/oil.jpg',
      alt: 'Fresh oil being poured into a Toyota Corolla engine',
    },
    // add more jobs here as needed
  ];

  return (
    <main>
      {/* Hero banner (full-width, under your header) */}
      <section className="hero" aria-label="Dennis General Mechanic banner">
        <picture>
          <source srcSet="/images/mechanicshopcoverimage.webp" type="image/webp" />
          {/* If you add a jpg/png fallback later, uncomment the line below and update the filename */}
          {/* <source srcSet="/images/mechanicshopcoverimage.jpg" type="image/jpeg" /> */}
          <img
            src="/images/mechanicshopcoverimage.webp"
            alt="Dennis General Mechanic — dependable auto service"
            className="hero__img"
            loading="eager"
            fetchpriority="high"
          />
        </picture>

        {/* Overlay text (optional: remove this block if you want only the image) */}
        <div className="hero__overlay">
          <h1 className="hero__title">Dennis General Mechanic</h1>
          <p className="hero__subtitle">Honest work. Reliable results.</p>
        </div>
      </section>

      {/* Book Online (your existing third-party link) */}
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

      {/* Weekly bulletin (this week’s jobs with images) */}
      <section className="bulletin" aria-labelledby="bulletin-heading">
        <div className="container">
          <h2 id="bulletin-heading" className="section__title">This Week’s Work</h2>
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
