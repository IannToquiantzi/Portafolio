import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>

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
    </section>
  );
}