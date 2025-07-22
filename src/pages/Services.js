function Services() {
  const services = [
    "Engine Diagnostics",
    "Brake Repair",
    "Oil Changes",
    "Tire Rotations",
    "Suspension Fixes",
  ];

  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
