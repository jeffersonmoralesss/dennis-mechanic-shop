// src/pages/Services.js
import { useMemo, useState } from "react";
import "./services.css";

// === Services data (no prices) ===
const SERVICES = [
  // Diagnostics & Electrical
  {
    id: "computerized-diagnostics",
    title: "Computerized Diagnostics",
    category: "Diagnostics & Electrical",
    duration: "60–90 min",
    desc: "OBD-II scan, fault code analysis, and live data checks to pinpoint issues fast.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "electrical-service",
    title: "Electrical Service",
    category: "Diagnostics & Electrical",
    duration: "1–2 hrs",
    desc: "Battery, alternator, starter testing, wiring/relay diagnostics, and repairs.",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1600&auto=format&fit=crop"
  },

  // Engine, Transmission, Cooling & Exhaust
  {
    id: "engine-service",
    title: "Engine Service",
    category: "Engine & Transmission",
    duration: "2–3 hrs",
    desc: "Tune-ups, misfire diagnosis, sensors, belts/hoses, and performance checks.",
    img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "transmission-service",
    title: "Transmission Service",
    category: "Engine & Transmission",
    duration: "2–3 hrs",
    desc: "Fluid exchange, filter, pan gasket (as applicable), and shifting diagnostics.",
    img: "https://images.unsplash.com/photo-1604145559206-e3bce0040e3d?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "exhaust-service",
    title: "Exhaust Service",
    category: "Engine & Transmission",
    duration: "1–2 hrs",
    desc: "Mufflers, catalytic converters, O2 sensors, leak checks, and hangers.",
    img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "radiator-service",
    title: "Radiator Service",
    category: "Engine & Transmission",
    duration: "1–2 hrs",
    desc: "Cooling system flush, leak test, pressure test, and thermostat checks.",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1600&auto=format&fit=crop"
  },

  // Maintenance & Inspection
  {
    id: "oil-change",
    title: "Lube, Oil & Filter Change",
    category: "Maintenance & Inspection",
    duration: "45–60 min",
    desc: "Premium oil, OEM filter, multi-point inspection, and fluid top-off.",
    img: "https://images.unsplash.com/photo-1619784698895-3153b7c0ac08?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "maintenance-service",
    title: "Maintenance Service",
    category: "Maintenance & Inspection",
    duration: "60–90 min",
    desc: "Factory-scheduled service: filters, fluids, belts, and general health checks.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "state-inspection",
    title: "State Inspection Service",
    category: "Maintenance & Inspection",
    duration: "30–60 min",
    desc: "Complete safety/emissions inspection to keep you legal and safe.",
    img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "wipers",
    title: "Windshield Wipers Service",
    category: "Maintenance & Inspection",
    duration: "15–30 min",
    desc: "Blade replacement and streak-free operation check for clear visibility.",
    img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1600&auto=format&fit=crop"
  },

  // Brakes & Suspension
  {
    id: "brake-service",
    title: "Brake Service",
    category: "Brakes & Suspension",
    duration: "2–3 hrs",
    desc: "Pads/rotors as needed, brake fluid test, hardware, and road test.",
    img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b3?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "front-end-service",
    title: "Front End Service",
    category: "Brakes & Suspension",
    duration: "1–2 hrs",
    desc: "Steering components, tie-rods, ball joints, and alignment readiness check.",
    img: "https://images.unsplash.com/photo-1620217494811-22d82b55b6fe?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "shocks-struts",
    title: "Shocks & Struts Service",
    category: "Brakes & Suspension",
    duration: "2–4 hrs",
    desc: "Ride control evaluation and replacement for stable handling and comfort.",
    img: "https://images.unsplash.com/photo-1616440462410-86bf9f2b2f1d?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "suspension-service",
    title: "Suspension Service",
    category: "Brakes & Suspension",
    duration: "1–3 hrs",
    desc: "Bushings, control arms, links, and noise/vibration diagnostics.",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop"
  },

  // Tires & Wheels
  {
    id: "tire-service",
    title: "Tire Service",
    category: "Tires & Wheels",
    duration: "45–75 min",
    desc: "Rotation, balance, flat repair, tread check, and proper torque.",
    img: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "custom-wheels",
    title: "Custom Wheels Service",
    category: "Tires & Wheels",
    duration: "1–2 hrs",
    desc: "Aftermarket wheel fitment, mount/balance, and hub/offset verification.",
    img: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac6?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "wheel-alignments",
    title: "Wheel Alignments",
    category: "Tires & Wheels",
    duration: "60–90 min",
    desc: "Four-wheel alignment with printout and steering wheel centering.",
    img: "https://images.unsplash.com/photo-1587145820567-88ccead9480d?q=80&w=1600&auto=format&fit=crop"
  },

  // Glass & Towing
  {
    id: "glass-repair",
    title: "Glass Repair Service",
    category: "Glass & Body",
    duration: "45–90 min",
    desc: "Chip/crack repair or replacement coordination for safe, clear glass.",
    img: "https://images.unsplash.com/photo-1544794570-6f5a1b290a5e?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "towing-service",
    title: "Towing Service",
    category: "Towing",
    duration: "ETA varies",
    desc: "Local towing and roadside assistance—call for availability and rates.",
    img: "https://images.unsplash.com/photo-1589261431593-4b3b1a4f3f0a?q=80&w=1600&auto=format&fit=crop"
  }
];

function Services() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(SERVICES.map(s => s.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter(s => {
      const matchesCat = activeCat === "All" || s.category === activeCat;
      const matchesQuery =
        !q || s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCat]);

  return (
    <div className="services-page">
      <header className="services-hero">
        <h1>Our Services</h1>
        <p>Quality auto care you can trust—book online in minutes.</p>
        <div className="search-wrap">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services (e.g., brakes, oil, alignment)"
            aria-label="Search services"
          />
        </div>
      </header>

      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`pill ${activeCat === cat ? "active" : ""}`}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="grid">
        {filtered.map(svc => (
          <article className="card" key={svc.id}>
            <div className="card-img" style={{ backgroundImage: `url(${svc.img})` }} />
            <div className="card-body">
              <h3>{svc.title}</h3>
              <p className="desc">{svc.desc}</p>
              <div className="meta">
                <span className="chip">{svc.category}</span>
                <span className="chip">{svc.duration}</span>
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
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="empty">No services match your search.</div>
        )}
      </section>
    </div>
  );
}

export default Services;

