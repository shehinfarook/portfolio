import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h2>Shehin</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;