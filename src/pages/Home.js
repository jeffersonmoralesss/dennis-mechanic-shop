function Home() {
  const jobs = [
    { title: "Brake Repair - Honda Civic", image: "/images/brake.jpg" },
    { title: "Oil Change - Toyota Corolla", image: "/images/oil.jpg" },
  ];

  return (
    <div>
      <h2>This Week's Work</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {jobs.map((job, index) => (
          <div key={index}>
            <img src={job.image} alt={job.title} width="200" />
            <p>{job.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

