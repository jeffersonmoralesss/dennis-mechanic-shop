// src/pages/Services.js
import { useMemo, useState } from "react";
import "./services.css";

// 1) Good, reliable photos per CATEGORY (all services in the category will use it)
const CATEGORY_IMAGES = {
  "Diagnostics & Electrical":
    "https://images.unsplash.com/photo-1583224964200-8a05384db921?q=80&w=1600&auto=format&fit=crop", // mechanic using diagnostic tablet
  "Engine & Transmission":
    "https://images.unsplash.com/photo-1542367597-8849ebc37a50?q=80&w=1600&auto=format&fit=crop", // detailed engine bay
  "Maintenance & Inspection":
    "https://images.unsplash.com/photo-1618090561644-9d6b8c36ec89?q=80&w=1600&auto=format&fit=crop", // oil change / checklist vibe
  "Brakes & Suspension":
    "https://images.unsplash.com/photo-1600712243866-3fe0b3f1f5e0?q=80&w=1600&auto=format&fit=crop", // brake rotor/caliper close-up
  "Tires & Wheels":
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop", // tire/wheel
  "Glass & Body":
    "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1600&auto=format&fit=crop", // windshield/glass repair
  "Towing":
    "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=1600&auto=format&fit=crop"  // tow truck
};

// 2) Your services (no prices)
const SERVICES = [
  // Diagnostics & Electrical
  { id: "computerized-diagnostics", title: "Computerized Diagnostics", category: "Diagnostics & Electrical", duration: "60–90 min", desc: "OBD-II scan, fault code analysis, and live data checks to pinpoint issues fast." },
  { id: "electrical-service",       title: "Electrical Service",       category: "Diagnostics & Electrical", duration: "1–2 hrs",   desc: "Battery, alternator, starter testing, wiring/relay diagnostics, and repairs." },

  // Engine, Transmission, Cooling & Exhaust
  { id: "engine-service",       title: "Engine Service",       category: "Engine & Transmission", duration: "2–3 hrs", desc: "Tune-ups, misfire diagnosis, sensors, belts/hoses, and performance checks." },
  { id: "transmission-service", title: "Transmission Service", category: "Engine & Transmission", duration: "2–3 hrs", desc: "Fluid exchange, filter, pan gasket (as applicable), and shifting diagnostics." },
  { id: "exhaust-service",      title: "Exhaust Service",      category: "Engine & Transmission", duration: "1–2 hrs", desc: "Mufflers, catalytic converters, O2 sensors, leak checks, and hangers." },
  { id: "radiator-service",     title: "Radiator Service",     category: "Engine & Transmission", duration: "1–2 hrs", desc: "Cooling system flush, leak test, pressure test, and thermostat checks." },

  // Maintenance & Inspection
  { id: "oil-change",          title: "Lube, Oil & Filter Change", category: "Maintenance & Inspection", duration: "45–60 min", desc: "Premium oil, OEM filter, multi-point inspection, and fluid top-off." },
  { id: "maintenance-service", title: "Maintenance Service",        category: "Maintenance & Inspection", duration: "60–90 min", desc: "Factory-scheduled service: filters, fluids, belts, and general health checks." },
  { id: "state-inspection",    title: "State Inspection Service",   category: "Maintenance & Inspection", duration: "30–60 min", desc: "Complete safety/emissions inspection to keep you legal and safe." },
  { id: "wipers",              title: "Windshield Wipers Service",  category: "Maintenance & Inspection", duration: "15–30 min", desc: "Blade replacement and streak-free operation check for clear visibility." },

  // Brakes & Suspension
  { id: "brake-service",       title: "Brake Service",          category: "Brakes & Suspension", duration: "2–3 hrs", desc: "Pads/rotors as needed, brake fluid test, hardware, and road test." },
  { id: "front-end-service",   title: "Front End Service",      category: "Brakes & Suspension", duration: "1–2 hrs", desc: "Steering components, tie-rods, ball joints, and alignment readiness check." },
  { id: "shocks-struts",       title: "Shocks & Struts Service",category: "Brakes & Suspension", duration: "2–4 hrs", desc: "Ride control evaluation and replacement for stable handling and comfort." },
  { id: "suspension-service",  title: "Suspension Service",     category: "Brakes & Suspension", duration: "1–3 hrs", desc: "Bushings, control arms, links, and noise/vibration diagnostics." },

  // Tires & Wheels
  { id: "tire-service",        title: "Tire Service",           category: "Tires & Wheels", duration: "45–75 min", desc: "Rotation, balance, flat repair, tread check, and proper torque." },
  { id: "custom-wheels",       title: "Custom Wheels Service",  category: "Tires & Wheels", duration: "1–2 hrs",   desc: "Aftermarket wheel fitment, mount/balance, and hub/offset verification." },
  { id: "wheel-alignments",    title: "Wheel Alignments",       category: "Tires & Wheels", duration: "60–90 min", desc: "Four-wheel alignment with printout and steering wheel centering." },

  // Glass & Towing
  { id: "glass-repair",        title: "Glass Repair Service",   category: "Glass & Body", duration: "45–90 min", desc: "Chip/crack repair or replacement coordination for safe, clear glass." },
  { id: "towing-service",      title: "Towing Service",         category: "Towing",       duration: "ETA varies", desc: "Local towing and roadside assistance—call for availability and rates." }
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

  const bookingUrl =
    "https://vipshopmanagement.com/appointment.php?SubID=RZZcwDvHbo6Kg5sA&company=DENNIS%20GENERAL%20MECHANIC&address=4720%20BALTIMORE%20AVE%20%20%20HYATTSVILLE%20,%20MD%20%2020781&shop-phone=(240)%20764-7004&shop-email=none&web=https://&location=United%20States";

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
            <img
              className="card-img"
              src={CATEGORY_IMAGES[svc.category]}
              alt={`${svc.title} – ${svc.category}`}
            />
            <div className="card-body">
              <h3>{svc.title}</h3>
              <p className="desc">{svc.desc}</p>
              <div className="meta">
                <span className="chip">{svc.category}</span>
                <span className="chip">{svc.duration}</span>
              </div>
              <a
                href={bookingUrl}
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



