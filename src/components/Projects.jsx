const projects = [
  {
    title: 'FaunaDex',
    type: 'Extended Reality Project',
    description:
      'An interactive animal discovery application designed to help users explore wildlife information through an engaging visual interface.',
    role: 'Asset & Content Contributor',
    tools: ['C#', 'ShaderLab', 'HLSL', 'Unity'],
    image: '/images/Faunadex.png',
    github: 'https://github.com/maxwellcandra/FaunaDex',
    application: 'https://drive.google.com/file/d/1i40Y8AfxXGidTSX1V1rcSTnu54WhgIJr/view?usp=sharing',
    card: 'https://drive.google.com/file/d/1jUbmRtBrVuU3EpqzoZjOokQ0umR0QkUD/view?usp=sharing',
    demo: 'https://drive.google.com/file/d/1Ci-Af7DATFXQDxymFJ4nH_ows1hfjzp5/view?usp=sharing',
  },
  {
  title: 'ChiMatcha',
  type: 'User Experience Project',
  description:
    'A UI/UX design project created in Figma for a matcha-focused digital product, exploring branding, mobile interface design, and user experience.',
  role: 'UI/UX Designer, Full-Stack Developer',
  tools: ['Java', 'Android Studio','Figma'],
  image: '/images/Chimatcha.jpeg',
  github: 'https://github.com/maxwellcandra/ChiMatcha.git',
  prototype: 'https://www.figma.com/proto/boi6IkdpU9m9l3SVoI0QnX/Project-UX?node-id=1-2&p=f&viewport=766%2C762%2C0.41&t=f0vxx9jEZw9JIEwA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&page-id=0%3A1',
  },
  {
    title: 'Spojedy',
    type: 'Multimedia System and Programming Foundation Project',
    description:
      'A software project focused on translating an application concept into a practical, organized, and usable digital experience.',
    role: 'Front End Developer',
    tools: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    image: '/images/spojedyy.png',
    github: 'https://github.com/maxwellcandra/Spojedy',
  },
  {
    title: 'Healty Diet',
    type: 'Artificial Intelligence Project',
    description:
      'An AI-powered web application that helps users manage their daily diet through personalized recommendations and an interactive AI chatbot.',
    role: 'Full-Stack Developer',
    tools: ['HTML', 'Cascading Style Sheets (CSS)', 'JavaScript', 'TypeScript'],
    image: '/images/HealtyDiet.png',
    github: 'https://github.com/maxwellcandra/Healthy-Diet.git',
  },
  {
  title: 'MR.COFFEE',
  type: 'HCI / UI/UX Project',
  description:
    'A responsive coffee shop website designed to showcase products and provide users with a simple and engaging online ordering experience.',
  role: 'UI/UX Designer, Front-End Developer',
  tools: ['HTML', 'Cascading Style Sheets (CSS)', 'JavaScript','Figma'],
  image: '/images/mr.coffee.png',
  github: 'https://github.com/maxwellcandra/MR.COFFEE.git',
  prototype: 'https://www.figma.com/proto/t1TOLEpO5IFBdOrrEy4MP7/MR.COFFEE?node-id=140-2&p=f&viewport=919%2C202%2C0.09&t=02Er6VaKl2pzkRiz-1&scaling=contain&content-scaling=fixed&starting-point-node-id=140%3A2&page-id=0%3A1',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section-container">

        <div className="projects-heading">
          <div>
            <p className="section-label">PROJECTS</p>
          </div>

          <p>
            A selection of projects spanning software development, UI/UX, and interactive multimedia.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              className={`project-item ${
                index % 2 !== 0 ? 'project-item-reverse' : ''
              }`}
              key={project.title}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <p className="project-type">{project.type}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-info">
                  <div>
                    <span>Role</span>
                    <strong>{project.role}</strong>
                  </div>

                  <div>
                    <span>Tools</span>

                    <div className="project-tools">
                      {project.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View on GitHub
                    </a>
                  )}

                  {project.prototype && (
                    <a
                      href={project.prototype}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View Prototype
                    </a>
                  )}

                   {project.application && (
                        <a
                        href={project.application}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        >
                        Download App
                        </a>
                    )}

                    {project.card && (
                        <a
                        href={project.card}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        >
                        View Animal Cards
                        </a>
                    )}

                    {project.demo && (
                        <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        >
                        View XR Demo
                        </a>
                    )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects