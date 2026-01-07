type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo: string;
};

function ProjectCard({ title, description, tech, repo, demo }: ProjectCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "20px"
      }}
    >
      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</h3>

      <p style={{ margin: "10px 0", fontSize: "1rem" }}>{description}</p>

      <div style={{ marginBottom: "10px" }}>
        {tech.map((t) => (
          <span
            key={t}
            style={{
              display: "inline-block",
              padding: "5px 10px",
              background: "#eee",
              borderRadius: "6px",
              marginRight: "8px",
              marginTop: "5px"
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ marginTop: "10px" }}>
        <a href={repo} target="_blank" style={{ marginRight: "15px" }}>
          GitHub Repository
        </a>

        {demo !== "#" && (
          <a href={demo} target="_blank">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
