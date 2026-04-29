import CTA from "../components/CTA";
import { site } from "../data/site";

const About = () => {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">About</p>
        <h2>Building scalable web applications with clean interfaces and strong backend systems.</h2>
        <p className="lead-copy">
          I’m a full-stack MERN developer focused on turning real-world problems into reliable digital solutions. I work across both frontend and 
          backend—designing responsive user interfaces, building APIs,
           and structuring systems that are efficient, maintainable, and ready for production.
        </p>
      </section>

      <section className="content-section split-layout">
        <article className="glass-card">
          <p className="eyebrow">Profile</p>
          <h2>{site.name}</h2>
          <p className="muted-copy">{site.availability}</p>
          <div className="detail-list">
            <div>
              <span>Location</span>
              <strong>{site.location}</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>{site.email}</strong>
            </div>
          </div>
        </article>
        <article className="glass-card">
          <p className="eyebrow">Principles</p>
          <div className="stacked-list">
            {site.principles.map((principle) => (
              <p key={principle}>{principle}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="content-section split-layout">
        <div>
          <p className="eyebrow">Timeline</p>
          <h2>Progression from core concepts to production-ready MERN applications.</h2>
        </div>
        <div className="timeline-list">
          {site.timeline.map((item) => (
            <article key={item.year} className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Core stack</p>
            <h2>Technologies I use to build scalable, full-stack web applications.</h2>
          </div>
        </div>
        <ul className="chip-row chip-row--large">
          {site.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* <CTA
        title="Lets build something meaningful."
        subtitle="Open to freelance work and full-stack MERN developer opportunities. 
  I’m always open to learning new technologies and adapting my stack based on project needs."
      /> */}
    </main>
  );
};

export default About;
