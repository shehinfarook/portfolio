import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import ProjectCard from "../components/ProjectCard";
import heroImage from "../assets/hero.png";
import { projects } from "../data/projects";
import { site } from "../data/site";

const featuredProjects = projects.slice(0, 3);

const Home = () => {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-panel__copy">
          <p className="eyebrow">Portfolio</p>
          <h1>Full-Stack Engineer</h1>
          <p className="lead-copy">{site.intro}</p>
         {/* <strong> <ul className="chip-row">
            
            {site.heroTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul></strong> */}
          <br />
          <div className="button-row">
            <Link to="/projects" className="button button--primary">
              Projects I have built
            </Link>
            <Link to="/contact" className="button button--secondary">
              {/* Book a chat */}
              Connect me
            </Link>
          </div>
        </div>
        {/* <div className="hero-panel__visual">
          <div className="hero-shot">
            <img src={heroImage} alt="Portfolio showcase preview" />
          </div>
          <div className="hero-note hero-note--top">
            <strong>Design-led build</strong>
            <span>Clean motion, stronger hierarchy, product-ready pages.</span>
          </div>
          <div className="hero-note hero-note--bottom">
            <strong>Current focus</strong>
            <span>MERN apps, portfolio systems, and recruiter-facing case studies.</span>
          </div>
        </div> */}
      </section>

      <section className="stats-strip">
        {site.stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            {/* <h2>Projects presented with more clarity and stronger product thinking.</h2> */}
          </div>
          <Link to="/projects" className="text-link">
            View all projects
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* <section className="content-section split-layout">
        <div>
          <p className="eyebrow">What I do</p>
          <h2>I build websites that feel sharper, calmer, and more intentional.</h2> <br />
          <p className="muted-copy">
            The goal is not just to make a page look modern. It is to make the content easier to understand,
            the flow easier to trust, and the experience easier to remember.
          </p>
        </div>
        <div className="feature-stack">
          {site.services.map((service) => (
            <article key={service.title} className="feature-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section> */}

      <section className="content-section split-layout">
        <div>
          <p className="eyebrow">What I Do</p>
          {/* <h2>A simple workflow that keeps structure and polish moving together.</h2> */}
        </div>
        <div className="process-list">
          {site.process.map((step, index) => (
            <article key={step.title} className="process-card"
              style={{backgroundImage: `url(${step.image})`}}>
                <div className="process-overlay"></div>
              <span>0{index + 1}</span>
              <div className="inside-process">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* <CTA
        title="Want a portfolio that looks more like a product and less like a template?"
        subtitle="I can help shape the structure, polish the interface, and present your work with more confidence."
      /> */}
    </main>
  );
};

export default Home;
