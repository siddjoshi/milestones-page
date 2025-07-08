const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="logo-container">
            <h1 className="company-logo">LTIMindtree</h1>
            <div className="tagline">Powering Progress Together</div>
          </div>
          <h2 className="hero-title">Journey of Innovation & Growth</h2>
          <p className="hero-subtitle">
            Explore the major milestones in the evolution of LTIMindtree - from two pioneering companies to India's leading digital transformation partner
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">$4B+</div>
              <div className="stat-label">Revenue</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">700+</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">84,000+</div>
              <div className="stat-label">Employees</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40+</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
