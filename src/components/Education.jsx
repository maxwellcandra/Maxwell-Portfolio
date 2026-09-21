function Education() {
  return (
    <section id="education" className="education section">
      <div className="section-container">
        <p className="section-label">EDUCATION</p>

        <div className="education-content">
            <div className="education-school">
                <img
                  src="/images/logobinus.png"
                 alt="BINUS University logo"
                 className="binus-logo"
                 />

                <div>
                    <h2>BINUS University</h2>  
                    <p className="education-major">
                        Undergraduate Student of Computer Science | Interactive Multimedia
                    </p>
                </div>
            </div>

            <div className="education-details">
             <p>2024 - Present</p>
              <p>Jakarta, Indonesia</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education