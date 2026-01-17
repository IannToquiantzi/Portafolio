type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo: string;
};

function ProjectCard({ title, description, tech, repo, demo }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>

      <div className="project-tags">
        {tech.map((t) => (
          <span key={t} className="project-tag">
            {t}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={repo} target="_blank" className="project-link">
          GitHub Repository
        </a>

        {demo !== "#" && (
          <a href={demo} target="_blank" className="project-link">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
