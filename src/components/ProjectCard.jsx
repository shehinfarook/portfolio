import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";
import { MdOutlineLink } from "react-icons/md";

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
        {
        
        /* <ul className="chip-row">
          {project.stack.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul> */}
        {
          <div className="flex gap-3 pb-6 px-6">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="button button--primary flex items-center"   onClick={(e) => {
    e.stopPropagation();
  }}>
            <div className="github-icon"><FaGithub size={18}/></div>   GitHub
            </a> {""}
            <a href={project.view_site || "#"}
            onClick={(e) => {
            if (!project.view_site) {
            e.preventDefault();
            alert("This project is not deployed yet.");
    }
  }}
    className="button button--secondary">
    <MdOutlineLink size={18} />
  {project.view_site ? "View Site" : "Coming Soon"}
</a>
          </div>
        } 
            </div>
        
      
    </Link>
  );
};

export default ProjectCard;
