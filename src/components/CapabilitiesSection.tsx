const CapabilitiesSection = () => {
  return (
    <section className="capabilities-section">
      <div className="container">
        <h2>Combining Strengths</h2>
        <p>The merger created powerful synergies across industries and technologies</p>
        
        <div className="capabilities-grid">
          <div className="capability-card lti-strength">
            <div className="card-header">
              <h3>LTI Strengths</h3>
              <div className="card-icon">
                <i className="fas fa-university"></i>
              </div>
            </div>
            <ul>
              <li>Banking, Financial Services & Insurance (BFSI)</li>
              <li>Oil & Gas sector expertise</li>
              <li>Core banking technology</li>
              <li>Enterprise applications</li>
              <li>Digital engineering</li>
            </ul>
          </div>
          
          <div className="capability-card mindtree-strength">
            <div className="card-header">
              <h3>Mindtree Strengths</h3>
              <div className="card-icon">
                <i className="fas fa-broadcast-tower"></i>
              </div>
            </div>
            <ul>
              <li>Technology, Media & Telecommunications (TMT)</li>
              <li>Travel & Hospitality</li>
              <li>Consumer experience design</li>
              <li>Digital transformation</li>
              <li>Cloud-native solutions</li>
            </ul>
          </div>
          
          <div className="capability-card combined-strength">
            <div className="card-header">
              <h3>Combined Power</h3>
              <div className="card-icon">
                <i className="fas fa-rocket"></i>
              </div>
            </div>
            <ul>
              <li>Comprehensive industry coverage</li>
              <li>End-to-end digital transformation</li>
              <li>Core to experience solutions</li>
              <li>Global delivery excellence</li>
              <li>Innovation at scale</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
