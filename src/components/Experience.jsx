const experiences = [
  {
    organization: 'Antiokhia MBK',
    role: 'Coordinator of Liturgy Division',
    period: '2024 – 2026',
    descriptions: [
      'Led the Liturgical Division across two periods, coordinating teams of 8 and 4 members while managing job assignments, event rundowns, room layouts, and coordination with the priest and event team.',
      'During Week End Antiokh, managed liturgical activities across multiple sessions and handled unexpected situations to keep the event running according to the planned rundown.',
    ],
  },
  {
    organization: 'AIM ASEAN x KUMPUL Impact',
    role: 'Event Volunteer — Liaison Officer',
    period: 'July 2026',
    descriptions: [
      'Supported a guest during The National Policy Convening Indonesia by assisting with event logistics, guiding the guest to the waiting room, and coordinating their timing to enter the event room and go on stage.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="section-container">
        <p className="section-label">EXPERIENCE</p>

        <h2>Where I've contributed.</h2>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-item"
              key={`${experience.organization}-${experience.role}`}
            >
              <div className="experience-period">
                {experience.period}
              </div>

              <div className="experience-content">
                <h3>{experience.role}</h3>

                <p className="experience-organization">
                  {experience.organization}
                </p>

                {experience.descriptions.map((description, index) => (
                  <p
                    className="experience-description"
                    key={index}
                  >
                    {description}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience