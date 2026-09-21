function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>
          Maxwell <span>Candra</span>
        </h1>

        <h2>Computer Science Student / Interactive Multimedia</h2>

        <p className="hero-description">
          I create digital experiences by combining technology,
          design, and interactive multimedia.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>

          {/* <a
            href="/cv/Maxwell-Candra-CV.pdf"
            className="btn btn-secondary"
          >
            Download CV
          </a> */}
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/maxwellcandra"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-circle">
          <img src="/images/profile.jpeg" alt="Maxwell Candra" />
        </div>
      </div>
    </section>
  )
}

export default Hero