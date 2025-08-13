// src/pages/Services.js
import { useMemo, useState } from "react";
import "./services.css";
import { useI18n } from "../i18n";

const DEFAULT_IMG = "/mechanicshopcoverimage.webp";

/** Keep only ids + images here.
 *  All text (title/category/desc/duration) comes from i18n: t(`svc.${id}`)
 */
const BASE = [
  // Diagnostics & Electrical
  { id: "computerized-diagnostics", img: "/images/services/computerized-diagnostics.jpg" },
  { id: "electrical-service",       img: "/images/services/electrical-service.jpeg" },

  // Engine & Transmission
  { id: "engine-service",           img: "/images/services/engine-service.jpg" },
  { id: "transmission-service",     img: "/images/services/transmission-service.jpeg" },
  { id: "exhaust-service",          img: "/images/services/exhaust-service.jpg" },
  { id: "radiator-service",         img: "/images/services/radiator-service.jpg" },

  // Maintenance & Inspection
  { id: "oil-change",               img: "/images/services/oil-change.avif" },
  { id: "maintenance-service",      img: "/images/services/maintenance-service.jpg" },
  { id: "state-inspection",         img: "/images/services/state-inspection.webp" },
  { id: "wipers",                   img: "/images/services/wipers.jpg" },

  // Brakes & Suspension
  { id: "brake-service",            img: "/images/services/brake-service.jpg" },
  { id: "front-end-service",        img: "/images/services/front-end-service.jpg" },
  { id: "shocks-struts",            img: "/images/services/shocks-struts.jpg" },
  { id: "suspension-service",       img: "/images/services/suspension-service.jpg" },

  // Tires & Wheels
  { id: "tire-service",             img: "/images/services/tire-service.webp" },
  { id: "custom-wheels",            img: "/images/services/custom-wheels.avif" },
  { id: "wheel-alignments",         img: "/images/services/wheel-alignments.jpg" },

  // Glass & Towing
  { id: "glass-repair",             img: "/images/services/glass-repair.jpg" },
  { id: "towing-service",           img: "/images/services/towing-service.jpg" },

  // ===== Commercial (new) =====
  { id: "dot-inspection",           img: "/images/services/state-inspection.webp" },
  { id: "trailer-inspection",       img: "/images/services/trailer-inspection.jpeg" },
  { id: "fleet-service",            img: "/images/services/fleet-service.jpeg" },
];

// Function to safely build the booking URL
function buildBookingUrl() {
  const url = new URL("https://vipshopmanagement.com/appointment.php");
  url.search = new URLSearchParams({
    SubID: "RZZcwDvHbo6Kg5sA",
    company: "DENNIS GENERAL MECHANIC",
    address: "4720 BALTIMORE AVE HYATTSVILLE, MD 20781",
    "shop-phone": "(240) 764-7004",
    "shop-email": "none",
    web: "https://dennismechanicshop.com",
    location: "United States",
  }).toString();
  return url.toString();
}

function Services() {
  const { t } = useI18n();

  // Build localized services list from i18n dictionary
  const SERVICES = useMemo(() => {
    return BASE.map(item => {
      const d = t(`svc.${item.id}`, {});
      return {
        id: item.id,
        img: item.img,
        title: d.title || item.id,
        category: d.category || "",
        duration: d.duration || "",
        desc: d.desc || "",
      };
    });
  }, [t]);

  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState(t("services.all"));

  // Localized categories (unique) + "All"
  const categories = useMemo(() => {
    const set = new Set(SERVICES.map(s => s.category).filter(Boolean));
    return [t("services.all"), ...Array.from(set)];
  }, [SERVICES, t]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter(s => {
      const matchesCat = activeCat === t("services.all") || s.category === activeCat;
      const title = (s.title || "").toLowerCase();
      const desc  = (s.desc  || "").toLowerCase();
      const matchesQuery = !q || title.includes(q) || desc.includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCat, SERVICES, t]);

  return (
    <div className="services-page">
      <header className="services-hero">
        <h1>{t("services.heroH")}</h1>
        <p>{t("services.heroP")}</p>
        <div className="search-wrap">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("services.searchPH")}
            aria-label={t("services.searchPH")}
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
              src={svc.img || DEFAULT_IMG}
              alt={`${svc.title} – ${svc.category}`}
            />
            <div className="card-body">
              <h3>{svc.title}</h3>
              <p className="desc">{svc.desc}</p>
              <div className="meta">
                {svc.category && <span className="chip">{svc.category}</span>}
                {svc.duration && <span className="chip">{svc.duration}</span>}
              </div>
              <a
                href={buildBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="reserve-btn"
              >
                {t("services.reserve")}
              </a>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="empty">{t("services.empty")}</div>
        )}
      </section>
    </div>
  );
}

export default Services;
