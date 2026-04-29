import { Link } from "react-router-dom";
import { site } from "../../data/site";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        {/* <div>
          <p className="eyebrow">Portfolio</p>
          <h2>{site.name}</h2>
          <p className="muted-copy">{site.intro}</p>
        </div> */}
        <div>
          <p className="eyebrow">Navigate</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow">Connect</p>
          <div className="footer-links">
            {site.socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="site-footer__bottom">&#169; 2026. Designed and developed by {site.name}</p>
    </footer>
  );
};

export default Footer;
