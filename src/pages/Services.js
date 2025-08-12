// src/pages/Services.js
import { useState, useMemo } from "react";
import "./services.css";

function Services() {
  const services = [
    {
      id: "computerized-diagnostics",
      title: "Computerized Diagnostics",
      category: "Diagnostics & Electrical",
      duration: "60–90 min",
      desc: "OBD-II scan, fault code analysis, and live data checks to pinpoint issues fast.",
      img: "/images/services/computerized-diagnostics.jpg"
    },
    {
      id: "electrical-service",
      title: "Electrical Service",
      category: "Diagnostics & Electrical",
      duration: "1–2 hrs",
      desc: "Battery, alternator, starter testing, wiring/relay diagnostics, and repairs.",
      img: "/images/services/electrical-service.jpg"
    },
    {
      id: "engine-service",
      title: "Engine Service",
      category: "Engine & Transmission",
      duration: "2–3 hrs",
      desc: "Tune-ups, misfire diagnosis, sensors, belts/hoses, and performance checks.",
      img: "/images/services/engine-service.jpg"
    },
    {
      id: "transmission-service",
      title: "Transmission Service",
      category: "Engine & Transmission",
      duration: "2–3 hrs",
      desc: "Fluid exchange, filter, pan gasket (as applicable), and shifting diagnostics.",
      img: "/images/services/transmission-service.jpg"
    }
    // ... Add other services later
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(services.map(s => s.category))];
  }, [services]);

  const filteredServices = useMemo(() => {
    return selectedCategory === "All"
      ? services
      : services.filter(s => s.category === selectedCategory);
  }, [selectedCategory, services]);

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="services-grid">
        {filteredServices.map(service => (
          <div className="service-card" key={service.id}>
            <img src={service.img} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <div className="service-meta">
              <span>{service.category}</span>
              <span>{service.duration}</span>
            </div>
            <a
              href="https://vipshopmanagement.com/appointment.php?SubID=RZZcwDvHbo6Kg5sA&company=DENNIS%20GENERAL%20MECHANIC&address=4720%20BALTIMORE%20AVE%20%20%20HYATTSVILLE%20,%20MD%20%2020781&shop-phone=(240)%20764-7004&shop-email=none&web=https://&location=United%20States"
              target="_blank"
              rel="noopener noreferrer"
              className="reserve-btn"
            >
              Reserve
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
