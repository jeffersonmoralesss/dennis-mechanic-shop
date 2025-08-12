// src/pages/Commercial.js
import React from "react";
import "./commercial.css";

function Commercial() {
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
          <h1>Commercial Services & Fleet Support</h1>
          <p>
            Keep your business moving with dependable, fast turnaround service
            in Hyattsville, MD.
          </p>
          <div className="c-hero__cta">
            <a className="btn btn--primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Request a Commercial Quote
            </a>
            <a className="btn btn--ghost" href="/services">
              See All Services
            </a>
          </div>
        </div>
      </section>

      {/* INTRO COPY + IMAGES (masonry-style) */}
      <section className="c-intro container">
        <div className="c-intro__grid">
          <div className="c-intro__text">
            <h2>Built for Vans, Light Trucks & Small Fleets</h2>
            <p>
              At <strong>Dennis General Mechanic</strong>, we know downtime
              costs money. Whether you run delivery vans, trades trucks, or
              service vehicles, our team focuses on fast diagnostics, clear
              communication, and reliable repairs that keep your drivers on
              schedule.
            </p>
            <p>
              From tires and brakes to electrical and engine diagnostics, we
              service most makes and models with OEM-grade parts and modern
              equipment. We’ll help you plan maintenance, reduce surprise
              breakdowns, and stretch your operating budget.
            </p>
          </div>

          <figure className="c-photo tall">
            <img
              src="/images/services/tire-service.webp"
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
              src="/images/services/wheel-alignments.jpg"
              alt="Wheel alignment for steady handling and tire life"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* CALLOUT STRIP */}
      <section className="c-strip">
        <div className="container">
          <h3>Why Businesses Choose Dennis General Mechanic</h3>
          <ul className="c-benefits">
            <li>Fast turnarounds & clear ETAs</li>
            <li>OEM-grade parts & modern diagnostics</li>
            <li>Up-front estimates—no surprises</li>
            <li>Maintenance plans that fit your routes</li>
          </ul>
        </div>
      </section>

      {/* SERVICES OFFERED (two-column list + image) */}
      <section className="c-offer container">
        <div className="c-offer__text">
          <h2>Commercial services we offer</h2>
          <ul className="c-list">
            <li>Fleet maintenance programs (oil, filters, inspections)</li>
            <li>Brake service (pads/rotors, hydraulics, ABS diagnostics)</li>
            <li>Tires: mount/balance, rotations, flats, alignments</li>
            <li>Engine & electrical diagnostics (OBD-II, sensors, charging)</li>
            <li>Suspension & steering (shocks/struts, tie-rods, ball joints)</li>
            <li>Cooling system service (radiators, thermostats, flushes)</li>
          </ul>
          <div className="c-cta-row">
            <a className="btn btn--primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Request a Commercial Quote
            </a>
            <a className="btn btn--ghost" href="/about">
              Learn About Our Shop
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
          <blockquote>
            “Dennis keeps our work vans on the road. Honest, fast and fair
            pricing—exactly what a small business needs.”
          </blockquote>
          <cite>— Local Business Owner</cite>
        </div>
      </section>
    </main>
  );
}

export default Commercial;
