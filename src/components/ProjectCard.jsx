import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="project-card">
      {/* <div className="project-card__visual">
      </div> */}
      <div className="project-card__content">
        {/* <span>{project.category}</span> */}
        {/* <strong>{project.year}</strong> */}
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="chip-row">
          {project.stack.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ProjectCard;
