import { NavLink } from "react-router-dom";
import { site } from "../../data/site";

const getLinkClassName = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

const Navbar = () => {
  return (
    <header className="site-header glass-nav ">
      <nav className="nav-shell">
        <NavLink to="/" className="brand-mark">
          <span className="brand-mark__badge"><img src="/images/icon.png" alt="logo" /></span>
          <span>
            <strong>{site.name}</strong>
            <small>{site.role}</small>
          </span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={getLinkClassName}>
            Home
          </NavLink>
          <NavLink to="/projects" className={getLinkClassName}>
            Projects
          </NavLink>
          <NavLink to="/about" className={getLinkClassName}>
            About
          </NavLink>
          <NavLink to="/resume" className={getLinkClassName}>
            Resume
          </NavLink>
          <NavLink to="/contact" className={getLinkClassName}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
