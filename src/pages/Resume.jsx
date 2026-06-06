import { p } from "framer-motion/client";
import CTA from "../components/CTA";
import { site } from "../data/site";
import { useNavigate } from "react-router-dom";
const Resume = () => {
 const navigate = useNavigate();

  // const handleDownload = () => {
  // navigate('/images/cv.pdf');
  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/shehinfarook.pdf";
  link.download = "shehinfarook.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <main className="page-shell resume-page">
      <button onClick={handleDownload} className="resume-button">Download Resume</button>
      <section className="page-hero">
      <p className="eyebrow">Resume</p>
     <h2>Summary of my full-stack development experience.</h2>
    <p className="lead-copy">
  It covers my technical skills, project experience, and the tools I use to build responsive interfaces and scalable backend systems.
  </p>
      </section>

      <section className="content-section resume-grid">
        <article className="glass-card">
          <p className="eyebrow">Experience</p>
          <div className="stacked-list">
            {site.experience.map((item) => (
              <div key={item.role} className="resume-entry">
                <div className="resume-entry__header">
                  <h3>{item.role}</h3>
                  <span className="resume-period">{item.period}</span>
                </div>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="glass-card">
          <p className="eyebrow">Education</p>
          <div className="stacked-list">
            {site.education.map((item) => (
              <div key={item.degree} className="resume-entry">
                <div className="resume-entry__header">
                  <h3>{item.degree}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="school-text">{item.school}</p>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-section split-layout">
        <article className="glass-card">
          <p className="eyebrow">Skills</p>
          <ul className="chip-row chip-row--large">
            {site.stack.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
        <article className="glass-card">
          <p className="eyebrow">Languages</p>
          <ul className="chip-row chip-row--large">
            {site.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </article>
      </section>

       <CTA
        title="Lets build something meaningful."
        subtitle="Open to freelance work and full-stack MERN developer opportunities. 
        I’m always open to learning new technologies and adapting my stack based on project needs."
      />
    </main>
  );
};

export default Resume;
