function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-container">
        <p className="section-label">CONTACT</p>

        <div className="contact-content">
          <div className="contact-heading">
            <h2>Let's Connect.</h2>

            <p>
              I'm always open to new opportunities, collaborations, and
              interesting projects.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:maxwellcandra@gmail.com" className="contact-link">
              <span>Email</span>
              <strong>maxwellcandra@gmail.com</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/maxwell-candra-51739a325/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>LinkedIn</span>
              <strong>Connect with me</strong>
            </a>

            <a
              href="https://github.com/maxwellcandra"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
              <strong>View my GitHub</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact