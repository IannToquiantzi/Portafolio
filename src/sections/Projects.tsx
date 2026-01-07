import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Projects
      </h2>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            tech={p.tech}
            repo={p.repo}
            demo={p.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
