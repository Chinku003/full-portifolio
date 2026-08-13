import styles from '../Mainbody.module.css';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio showcasing skills, projects, and experience. Built with React and modern styling.',
    tags: ['React', 'TypeScript', 'CSS Modules'],
  },
  {
    title: 'E-commerce Platform',
    description:
      'An online store with authentication, product browsing, and a shopping cart experience.',
    tags: ['Django', 'React', 'REST APIs'],
  },
  {
    title: 'Task Management App',
    description:
      'Create, update, and delete tasks with a clean workflow for everyday productivity.',
    tags: ['React', 'Node.js', 'CRUD'],
  },
  {
    title: 'Blogging Platform',
    description:
      'A content platform that supports creating, editing, and publishing blog posts.',
    tags: ['Python', 'React', 'CMS'],
  },
  {
    title: 'Weather App',
    description:
      'Fetches weather data from a REST API and displays current conditions and forecasts.',
    tags: ['JavaScript', 'REST API', 'UI/UX'],
  },
  {
    title: 'Teaching Sourcing',
    description:
      'A platform for discovering educational resources and connecting educators with students.',
    tags: ['Web App', 'Education', 'Community'],
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className={`${styles.projects} theme-panel`}>

      <div className={styles.projectsHeader}>
        <h1 className={styles.projectsTitle}>Projects</h1>
        <p className={styles.projectsSubtitle}>
          A few things I’ve built—each one designed for clarity, performance, and real user value.
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <article key={project.title} className={`${styles.projectCard} theme-card`}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={`${styles.projectTag} theme-chip`}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

