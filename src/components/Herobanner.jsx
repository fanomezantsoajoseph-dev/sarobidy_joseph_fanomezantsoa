// import "./HeroBanner.css";
import profile from "/profile.png";

/* ---------- Icônes SVG (aucune dépendance externe) ---------- */
const Icon = ({ children, size = 24, stroke = "currentColor", fill = "none", sw = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const CodeIcon = (p) => (
  <Icon {...p}>
    <polyline points="8 6 3 12 8 18" />
    <polyline points="16 6 21 12 16 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </Icon>
);

const GearIcon = (p) => (
  <Icon {...p} fill="currentColor" stroke="none">
    <path d="M19.4 13a7.5 7.5 0 0 0 0-2l2.1-1.6a.5.5 0 0 0 .1-.6l-2-3.5a.5.5 0 0 0-.6-.2l-2.5 1a7.3 7.3 0 0 0-1.7-1L14.4 2.5a.5.5 0 0 0-.5-.4h-4a.5.5 0 0 0-.5.4L9 5.1a7.3 7.3 0 0 0-1.7 1l-2.5-1a.5.5 0 0 0-.6.2l-2 3.5a.5.5 0 0 0 .1.6L4.4 11a7.5 7.5 0 0 0 0 2l-2.1 1.6a.5.5 0 0 0-.1.6l2 3.5c.1.2.4.3.6.2l2.5-1c.5.4 1.1.7 1.7 1l.4 2.6c0 .2.3.4.5.4h4c.3 0 .5-.2.5-.4l.4-2.6c.6-.3 1.2-.6 1.7-1l2.5 1c.2.1.5 0 .6-.2l2-3.5a.5.5 0 0 0-.1-.6L19.4 13zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z" />
  </Icon>
);

const FolderIcon = (p) => (
  <Icon {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    <path d="M3 11h18" />
  </Icon>
);

const CartIcon = (p) => (
  <Icon {...p}>
    <circle cx="9" cy="20" r="1.4" fill="currentColor" />
    <circle cx="18" cy="20" r="1.4" fill="currentColor" />
    <path d="M2 3h3l2.6 11.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L21 7H6" />
  </Icon>
);

const BarsIcon = (p) => (
  <Icon {...p} fill="currentColor" stroke="none">
    <rect x="4" y="13" width="4" height="7" rx="1" />
    <rect x="10" y="8" width="4" height="12" rx="1" />
    <rect x="16" y="4" width="4" height="16" rx="1" />
  </Icon>
);

const UserIcon = (p) => (
  <Icon {...p} fill="currentColor" stroke="none">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6v1H4z" />
  </Icon>
);

const GlobeIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
  </Icon>
);

const BoltIcon = (p) => (
  <Icon {...p} fill="currentColor" stroke="none">
    <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
  </Icon>
);

/* Logos des technologies (simplifiés) */
const ReactLogo = () => (
  <svg width="30" height="30" viewBox="-12 -12 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.1" aria-hidden="true">
    <circle r="2" fill="#38bdf8" stroke="none" />
    <ellipse rx="10" ry="4" />
    <ellipse rx="10" ry="4" transform="rotate(60)" />
    <ellipse rx="10" ry="4" transform="rotate(120)" />
  </svg>
);

const NextLogo = () => (
  <span className="tech-badge tech-badge--white">N</span>
);

const ExpressLogo = () => (
  <span className="tech-badge tech-badge--grey">ex</span>
);

const NodeLogo = () => (
  <svg width="28" height="30" viewBox="0 0 24 26" fill="none" stroke="#4ade80" strokeWidth="1.6" aria-hidden="true">
    <path d="M12 1.5 22 7v12l-10 5.5L2 19V7z" />
    <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="#4ade80" stroke="none">JS</text>
  </svg>
);

const LaravelLogo = ({ size = 30, color = "#FF2D20" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinejoin="round"
    strokeLinecap="round"
    aria-hidden="true"
  >
    {/* Contour du cube */}
    <path d="M12 2l9 5v10l-9 5-9-5V7z" />
    {/* Arêtes intérieures */}
    <path d="M3 7l9 5 9-5M12 12v10" />
  </svg>
);
const PostgresLogo = ({ size = 30, color = "#336791" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinejoin="round"
    strokeLinecap="round"
    aria-hidden="true"
  >
    {/* Dessus du cylindre */}
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    {/* Côtés et fond */}
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    {/* Séparation intermédiaire */}
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </svg>
);
const PythonLogo = ({ size = 30, blue = "#3776AB", yellow = "#FFD43B" }) => {
  const serpent =
    "M8 3H12A3 3 0 0 1 15 6V9A2 2 0 0 1 13 11H9A2 2 0 0 0 7 13V15H5A2 2 0 0 1 3 13V6A3 3 0 0 1 6 3Z";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* Serpent bleu (haut gauche) */}
      <g stroke={blue}>
        <path d={serpent} />
        <circle cx="11" cy="6.2" r="0.6" fill={blue} />
      </g>
      {/* Serpent jaune : le même, tourné de 180° */}
      <g stroke={yellow} transform="rotate(180 12 12)">
        <path d={serpent} />
        <circle cx="11" cy="6.2" r="0.6" fill={yellow} />
      </g>
    </svg>
  );
};
const JavaScriptLogo = ({ size = 30, color = "#F7DF1E" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinejoin="round"
    strokeLinecap="round"
    aria-hidden="true"
  >
    {/* Square */}
    <rect x="2.5" y="2.5" width="19" height="19" rx="2.5" />
    {/* J */}
    <path d="M11.5 10v5.5a1.8 1.8 0 0 1-1.8 1.8c-.7 0-1.2-.3-1.6-.9" />
    {/* S */}
    <path d="M19 10.2c-.5-.5-1.2-.8-2-.8-1.1 0-1.9.6-1.9 1.5 0 2 4 1.2 4 3.3 0 1-.9 1.8-2.1 1.8-.9 0-1.6-.3-2.1-.9" />
  </svg>
);
const BracesLogo = () => (
  <span className="tech-braces">{"{ }"}</span>
);

const MysqlLogo = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <path d="M4 20c3-1 4-4 5-8s3-7 8-8c-1 3-2 5-1 8s3 5 5 6" />
    <circle cx="16.5" cy="7.5" r=".8" fill="#22d3ee" />
  </svg>
);

const GitLogo = () => (
  <span className="tech-git" aria-hidden="true">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
      <path d="M12 1.5 1.5 12 12 22.5 22.5 12zM8 11a1.4 1.4 0 1 1 0 .01zm5.5-3.5a1.4 1.4 0 1 1 0 .01zm0 9a1.4 1.4 0 1 1 0 .01z" />
    </svg>
<svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#fff" />
      <path d="M8 9l2 2.2h4L16 9v4.5c0 2.200-1.800 3.500-4 3.500s-4-1.300-4-3.500z" fill="#0a2a5e" />
    </svg>
  </span>
);

/* ---------- Données ---------- */
const technologies = [
  { name: "React.js", logo: <ReactLogo /> },
  { name: "Next.js", logo: <NextLogo /> },
  { name: "JavaScript", logo: <JavaScriptLogo /> },
  { name: "Express.js", logo: <ExpressLogo /> },
  { name: "Python", logo: <PythonLogo /> },
  { name: "Node.js", logo: <NodeLogo /> },
  { name: "Laravel", logo: <LaravelLogo /> },
  { name: "REST API", logo: <BracesLogo /> },
  { name: "MySQL", logo: <MysqlLogo /> },
  { name: "Git/GitHub", logo: <GitLogo /> },
  { name: "PostgreSql", logo: <PostgresLogo /> },
];

const projects = [
  {
    title: "E-commerce",
    text: "catalogue, panier, commandes, paiements",
    icon: <CartIcon size={30} stroke="#fff" />,
  },
  {
    title: "ERP",
    text: "gestion, tableaux de bord, utilisateurs",
    icon: <BarsIcon size={30} />,
  },
  {
    title: "Portfolio",
    text: "présentation professionnelle et projets",
    icon: <UserIcon size={30} />,
  },
  {
    title: "Site vitrine",
    text: "présence digitale, responsive et SEO",
    icon: <GlobeIcon size={30} stroke="#fff" />,
  },
];

const highlights = [
  "UI User Interface",
  "UX User Expérience",
  "Architecture moderne",
  "API sécurisées",
  "Modélisation UML"
];

/* ---------- Composant ---------- */
export default function HeroBanner() {
  return (
    <section className="hb" id="home" aria-label="Présentation">
      {/* Décors */}
      <span className="hb-corner hb-corner--tl" aria-hidden="true" />
      <span className="hb-corner hb-corner--br" aria-hidden="true" />
      <span className="hb-dots-top" aria-hidden="true">
        <i /><i /><i /><i />
      </span>
      <span className="hb-dots-side" aria-hidden="true">
        <i /><i /><i /><i />
      </span>

      <div className="hb-inner">
        {/* ---- Haut : titre + photo ---- */}
        <div className="hb-top">
          <div className="hb-copy">
            <p className="hb-role">
              <span className="hb-role-line" />
              DÉVELOPPEUR WEB FULL-STACK
            </p>

            <h1 className="hb-title">
              <span className="hb-title--accent">FANOMEZANTSOA</span>
              <span>SAROBIDY JOSEPH</span>
            </h1>

            <p className="hb-subtitle">
              Conseption et développement des solutions web sur mésure selon vos besoins. 
            </p>

            <div className="hb-intro">
              <span className="hb-intro-icon">
                <CodeIcon size={26} stroke="#38bdf8" />
              </span>
              <span className="hb-intro-bar" />
              <p>
                UX/UI Applications web responsives,
                modernes et adaptées à tous les écrans. 
              </p>
            </div>
          </div>

          <figure className="hb-photo">
            <img
              src={profile}
              alt="Sarobidy Joseph FANOMEZANTSOA, développeur web full-stack"
            />
            <figcaption className="hb-code" aria-hidden="true">
              <span>&lt;</span>
              <code>build<br />modern<br />web<br />apps</code>
              <span>/&gt;</span>
            </figcaption>
          </figure>
        </div>

        {/* ---- Technologies ---- */}
        <div className="hb-section-title">
          <GearIcon size={34} stroke="#22b8f0" />
          <span className="hb-section-bar" />
          <h2>TECHNOLOGIES</h2>
        </div>

        <ul className="hb-tech">
          {technologies.map((t) => (
            <li className="hb-chip" key={t.name}>
              {t.logo}
              <span>{t.name}</span>
            </li>
          ))}
        </ul>

        {/* ---- Projets ---- */}
        <div className="hb-section-title">
          <FolderIcon size={36} stroke="#22b8f0" />
          <span className="hb-section-bar" />
          <h2>TYPES DE PROJETS</h2>
        </div>

        <div className="hb-projects">
          {projects.map((p) => (
            <article className="hb-card" key={p.title}>
              <span className="hb-card-icon">{p.icon}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ---- Bandeau du bas ---- */}
        <ul className="hb-footer">
          <li className="hb-footer-bolt">
            <BoltIcon size={32} />
          </li>
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
          <li className="hb-stripes" aria-hidden="true">
            <i /><i /><i />
          </li>
        </ul>
      </div>
    </section>
  );
}
