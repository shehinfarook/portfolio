import { Link, useParams } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">Project not found</p>
          <h1>The case study you are looking for is not available.</h1>
          <Link to="/projects" className="button button--primary">
            Back to projects
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">{project.category}</p>
        <h2>{project.title}</h2>
        <p className="lead-copy">{project.description}</p>
        <ul className="chip-row">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <br />
          <div className="flex gap-3 pb-6 px-6">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="button button--primary">
            <div className="github-icon"><FaGithub size={18}/></div>   GitHub
            </a> {""}
            <a href={project.view_site} target="_blank" rel="noopener noreferrer" className="button button--secondary">
             <div className="external-link"><FiExternalLink size={18} /></div>   View Site
            </a>
          </div>
        </ul>
      </section>

      <section className="content-section project-detail-grid">
        {/* <article className="project-spotlight">
          <div className="project-card__visual project-card__visual--detail">
            <img src={project.image} alt={project.title} />
            <span>{project.linkLabel}</span>
            <strong>{project.year}</strong>
          </div>
        </article> */}
        <div className="glass-card">
          <p className="eyebrow">Project snapshot</p>
          <div className="detail-list">
            <div>
              <span>Category</span>
              <strong>{project.category}</strong>
            </div>
            <div>
              <span>Year</span>
              <strong>{project.year}</strong>
            </div>
          </div>
          <ul className="metric-list">
            {project.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* <section className="content-section project-story-grid">
        <article className="glass-card">
          <p className="eyebrow">Challenge</p>
          <h2>What needed to be solved</h2>
          <p>{project.challenge}</p>
        </article>
        <article className="glass-card">
          <p className="eyebrow">Approach</p>
          <h2>How the structure came together</h2>
          <p>{project.solution}</p>
        </article>
        <article className="glass-card">
          <p className="eyebrow">Outcome</p>
          <h2>What the final experience delivers</h2>
          <p>{project.outcome}</p>
        </article>
      </section> */}

      {/* <CTA
        title="Want this level of polish for your next build?"
        subtitle="Let us turn the structure, visuals, and story into a portfolio piece that feels complete."
      /> */}
    </main>
  );
};

export default ProjectDetail;
