import { useNavigate } from "react-router-dom";

const CTA = ({
  title,
  subtitle,
  primaryLabel = "Start a conversation with me",
  secondaryLabel = "See projects",
}) => {
  const navigate = useNavigate();

  return (
    <section className="cta-panel">
      <p className="eyebrow">Next move</p>
      <h2>{title}</h2>
      <p className="muted-copy">{subtitle}</p>
      <div className="button-row">
        <button className="button button--primary" onClick={() => navigate("/contact")}>
          {primaryLabel}
        </button>
        <button className="button button--secondary" onClick={() => navigate("/projects")}>
          {secondaryLabel}
        </button>
      </div>
    </section>
  );
};

export default CTA;
