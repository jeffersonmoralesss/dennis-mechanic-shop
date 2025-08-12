// src/pages/About.js
import "./about.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About Us</h1>
          <p>Your trusted partner in automotive care</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content container">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At <strong>Dennis General Mechanic Shop</strong>, we believe every
            driver deserves a safe, reliable, and well-maintained vehicle.
            Proudly serving our community, we combine years of hands-on
            experience with modern diagnostic tools to deliver trusted
            automotive care.
          </p>
          <p>
            From brake repairs and oil changes to complete engine diagnostics,
            our certified team is dedicated to getting the job done right the
            first time. We value honesty, transparency, and quality service —
            because we're not just fixing cars, we're building lasting
            relationships.
          </p>
          <p>
            Whether you're here for routine maintenance or urgent repairs, you
            can count on us for fast, friendly, and dependable service that
            keeps you safely on the road. Your car's health is our mission.
          </p>

          <div className="highlights">
            <div className="highlight">
              <span>🔧</span>
              <p>Certified & Experienced Technicians</p>
            </div>
            <div className="highlight">
              <span>🚗</span>
              <p>Comprehensive Auto Services</p>
            </div>
            <div className="highlight">
              <span>❤️</span>
              <p>Honest & Transparent Service</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src="/images/about/garage-team.jpg"
            alt="Dennis General Mechanic Shop Team"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
