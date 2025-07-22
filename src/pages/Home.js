function Home() {
    const jobs = [
      { title: "Brake Repair - Honda Civic", image: "/images/brake.jpg" },
      { title: "Oil Change - Toyota Corolla", image: "/images/oil.jpg" },
    ];
  
    return (
      <div>
        {/* 🔹 Cover Image */}
        <img
          src="/images/banner.jpg"
          alt="Cover"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
        />
  
        {/* 🔹 Reservation Section */}
        <div style={{
          backgroundColor: 'yellow',
          color: 'black',
          padding: '2rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <h2>Need a Service? Book Online!</h2>
          <a
            href="https://vipshopmanagement.com/schedule-appointment.php?SubID=RZZcwDvHbo6Kg5sA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'black',
              color: 'yellow',
              padding: '1rem 2rem',
              fontSize: '1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '1rem'
            }}
          >
            Schedule a Reservation
          </a>
        </div>
  
        {/* 🔹 Weekly Work Gallery */}
        <h2 style={{ marginTop: '3rem' }}>This Week’s Work</h2>
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
  