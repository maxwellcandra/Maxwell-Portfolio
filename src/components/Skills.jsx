const skillCategories = [
  {
    title: 'Programming & Development',
    skills: ['HTML', 'Cascading Style Sheets (CSS)', 'JavaScript', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Java'],
  },
  {
    title: 'Design & Multimedia',
    skills: ['Figma', 'Canva', 'UI/UX Design', 'Interactive Multimedia'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Android Studio', 'Visual Studio Code', 'Unity'],
  },
  {
    title: 'Communication & Leadership',
    skills: ['Communication', 'Interpersonal Communication', 'Team Management', 'Event Planning', 'Leadership', 'Project Management', 'Event Management'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-container">
        <p className="section-label">SKILLS</p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills