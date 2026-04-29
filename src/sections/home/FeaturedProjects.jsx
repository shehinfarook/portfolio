import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

const FeaturedProjects = () => {
  return (
    <section>
      <h2>Featured Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;