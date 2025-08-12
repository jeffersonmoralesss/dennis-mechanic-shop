import { useMemo, useState, useEffect } from "react";
import "./services.css";

// === Services data (moved outside so it's stable) ===
const SERVICES = [
  // Diagnostics & Electrical
  {
    id: "computerized-diagnostics",
    title: "Computerized Diagnostics",
    category: "Diagnostics & Electrical",
    price: 119,
    duration: "60–90 min",
    desc: "OBD-II scan, fault code analysis, and live data checks to pinpoint issues fast.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "electrical-service",
    title: "Electrical Service",
    category: "Diagnostics & Electrical",
    price: 149,
    duration: "1–2 hrs",
    desc: "Battery, alternator, starter testing, wiring/relay diagnostics, and repairs.",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1600&auto=format&fit=crop"
  },

  // Engine, Transmission, Cooling & Exhaust
  {
    id: "engine-service",
    title: "Engine Service",
    category: "Engine & Transmission",
    price: 189,
    duration: "2–3 hrs",
    desc: "Tune-ups, misfire diagnosis, sensors, belts/hoses, and performance checks.",
    img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "transmission-service",
    title: "Transmission Service",
    category: "Engine & Transmission",
    price: 229,
    duration: "2–3 hrs",
    desc: "Fluid exchange, filter, pan gasket (as applicable), and shifting diagnostics.",
    img: "https://images.unsplash.com/photo-1604145559206-e3bce0040e3d?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "exhaust-service",
    title: "Exhaust Service",
    category: "Engine & Transmission",
    price: 159,
    duration: "1–2 hrs",
    desc: "Mufflers, catalytic converters, O2 sensors, leak checks, and hangers.",
    img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "radiator-service",
    title: "Radiator Service",
    category: "Engine & Transmission",
    price: 169,
    duration: "1–2 hrs",
    desc: "Cooling system flush, leak test, pressure test, and thermostat checks.",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1600&auto=format&fit=crop"
  },

  // Maintenance & Inspection
  {
    id: "oil-change",
    title: "Lube, Oil & Filter Change",
    category: "Maintenance & Inspection",
    price: 89,
    duration: "45–60 min",
    desc: "Premium oil, OEM filter, multi-point inspection, and fluid top-off.",
    img: "https://images.unsplash.com/photo-1619784698895-3153b7c0ac08?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "maintenance-service",
    title: "Maintenance Service",
    category: "Maintenance & Inspection",
    price: 129,
    duration: "60–90 min",
    desc: "Factory-scheduled service: filters, fluids, belts, and general health checks.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "state-inspection",
    title: "State Inspection Service",
    category: "Maintenance & Inspection",
    price: 79,
    duration: "30–60 min",
    desc: "Complete safety/emissions inspection to keep you legal and safe.",
    img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "wipers",
    title: "Windshield Wipers Service",
    category: "Maintenance & Inspection",
    price: 29,
    duration: "15–30 min",
    desc: "Blade replacement and streak-free operation check for clear visibility.",
    img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1600&auto=format&fit=crop"
  },

  // Brakes & Suspension
  {
    id: "brake-service",
    title: "Brake Service",
    category: "Brakes & Suspension",
    price: 279,
    duration: "2–3 hrs",
    desc: "Pads/rotors as needed, brake fluid test, hardware, and road test.",
    img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b3?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "front-end-service",
    title: "Front End Service",
    category: "Brakes & Suspension",
    price: 149,
    duration: "1–2 hrs",
    desc: "Steering components, tie-rods, ball joints, and alignment readiness check.",
    img: "https://images.unsplash.com/photo-1620217494811-22d82b55b6fe?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "shocks-struts",
    title: "Shocks & Struts Service",
    category: "Brakes & Suspension",
    price: 329,
    duration: "2–4 hrs",
    desc: "Ride control evaluation and replacement for stable handling and comfort.",
    img: "https://images.unsplash.com/photo-1616440462410-86bf9f2b2f1d?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "suspension-service",
    title: "Suspension Service",
    category: "Brakes & Suspension",
    price: 199,
    duration: "1–3 hrs",
    desc: "Bushings, control arms, links, and noise/vibration diagnostics.",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop"
  },

  // Tires & Wheels
  {
    id: "tire-service",
    title: "Tire Service",
    category: "Tires & Wheels",
    price: 79,
    duration: "45–75 min",
    desc: "Rotation, balance, flat repair, tread check, and proper torque.",
    img: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "custom-wheels",
    title: "Custom Wheels Service",
    category: "Tires & Wheels",
    price: 129,
    duration: "1–2 hrs",
    desc: "Aftermarket wheel fitment, mount/balance, and hub/offset verification.",
    img: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac6?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "wheel-alignments",
    title: "Wheel Alignments",
    category: "Tires & Wheels",
    price: 139,
    duration: "60–90 min",
    desc: "Four-wheel alignment with printout and steering wheel centering.",
    img: "https://images.unsplash.com/photo-1587145820567-88ccead9480d?q=80&w=1600&auto=format&fit=crop"
  },

  // Glass & Towing
  {
    id: "glass-repair",
    title: "Glass Repair Service",
    category: "Glass & Body",
    price: 119,
    duration: "45–90 min",
    desc: "Chip/crack repair or replacement coordination for safe, clear glass.",
    img: "https://images.unsplash.com/photo-1544794570-6f5a1b290a5e?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "towing-service",
    title: "Towing Service",
    category: "Towing",
    price: 95,
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

  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: ""
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const onKey = e => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openReserve = (svc) => {
    setChosen(svc);
    setOpen(true);
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.time || !chosen?.id) {
      setStatus("error");
      return;
    }
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, serviceId: chosen.id })
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("ok");
      setTimeout(() => {
        setOpen(false);
        setForm({ name: "", email: "", phone: "", date: "", time: "", notes: "" });
      }, 800);
    } catch (err) {
      setStatus("error");
    }
  };

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
              <div className="card-top">
                <h3>{svc.title}</h3>
                <span className="price">${svc.price}</span>
              </div>
              <p className="desc">{svc.desc}</p>
              <div className="meta">
                <span className="chip">{svc.category}</span>
                <span className="chip">{svc.duration}</span>
              </div>
              <button className="reserve-btn" onClick={() => openReserve(svc)}>
                Reserve
              </button>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="empty">No services match your search.</div>
        )}
      </section>

      {open && chosen && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <h2>Reserve: {chosen.title}</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="row">
                <label>
                  Name*
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Email*
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </label>
              </div>
              <div className="row">
                <label>
                  Phone
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>
                <label>
                  Date*
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Time*
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    required
                  />
                </label>
              </div>
              <label>
                Notes
                <textarea
                  rows="3"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Anything we should know before you arrive?"
                />
              </label>

              <button type="submit" className="reserve-btn wide">Confirm Reservation</button>
              {status === "ok" && <p className="ok">Reservation received! We’ll confirm by email.</p>}
              {status === "error" && <p className="error">Please fill required fields or try again.</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
