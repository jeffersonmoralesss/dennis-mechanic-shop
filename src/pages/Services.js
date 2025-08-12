// src/pages/Services.js
function Services() {
  const sections = {
    "Diagnostics & Electrical": [
      "Computerized Diagnostics",
      "Electrical Service"
    ],
    "Engine & Transmission": [
      "Engine Service",
      "Transmission Service",
      "Exhaust Service",
      "Radiator Service"
    ],
    "Maintenance & Inspection": [
      "Lube, Oil & Filter Change",
      "Maintenance Service",
      "State Inspection Service",
      "Windshield Wipers Service"
    ],
    "Brakes & Suspension": [
      "Brake Service",
      "Front End Service",
      "Shocks & Struts Service",
      "Suspension Service"
    ],
    "Tires & Wheels": [
      "Tire Service",
      "Custom Wheels Service",
      "Wheel Alignments"
    ],
    "Glass & Body": ["Glass Repair Service"],
    Towing: ["Towing Service"]
  };

  return (
    <div>
      <h2>Our Services</h2>
      {Object.entries(sections).map(([title, list]) => (
        <section key={title}>
          <h3>{title}</h3>
          <ul>
            {list.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default Services;

