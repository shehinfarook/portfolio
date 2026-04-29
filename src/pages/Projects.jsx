import { useState } from "react";
import CTA from "../components/CTA";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const filters = ["All", "Full Stack", "Frontend", "UI System"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Projects</p>
        <h2>Projects built with a focus on structure, performance, and real world use cases.</h2>
        <p className="lead-copy">
         These case studies showcase how I design and develop full-stack MERN applications, combining responsive interfaces with scalable backend systems and clean architecture.
        </p>
      </section>

      <section className="content-section">
        <div className="filter-row">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "filter-pill active" : "filter-pill"}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="content-section split-layout">
        <article className="glass-card">
          <p className="eyebrow">What these projects highlight</p>
          <h3>Structured thinking, efficient systems, and production-ready solutions.</h3>
        </article>
        <article className="glass-card">
          <p className="muted-copy">
            Each project reflects my approach to full-stack development, combining frontend clarity with backend performance, API design, and scalable data handling.
          </p>
        </article>
      </section>

      {/* <CTA
        title="Have a project idea or need a full-stack solution?"
        subtitle="I build responsive interfaces and scalable backend systems using the MERN stack—focused on real-world performance and clean architecture."
      /> */}
    </main>
  );
};

export default Projects;
