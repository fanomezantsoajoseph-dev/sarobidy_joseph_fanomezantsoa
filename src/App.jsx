import './App.css'
import { useState } from "react";
import HeroBanner from "./components/Herobanner";
import { Mail, MessageCircle, Menu, X } from "lucide-react";

const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  // { label: 'Expérience', href: '#experience' },
  // { label: 'Contact', href: '#contact' },
]

const stats = [
  { value: '6+', label: 'ans d’expérience' },
  { value: '22', label: 'projets livrés' },
  { value: '99%', label: 'clients satisfaits' },
]

const skills = ['React', 'TypeScript', 'Node.js','MySQL','PostgreSQL', 'Next.js', 'UI/UX', 'Figma', 'API REST','Tailwind']

const projects = [
  {
    title: 'AIRANDEV',
    description: 'Plateforme d\'automatisation à l\'aide de l\'intelligence Artificiele pour la gestion d\'entreprise et des tâches répétitives.',
    stack: ['React + VITE','Payload(framework)','json', 'Next.js','TailwindCss'],
    accent: '#000',
  },
  {
    title: 'Pulse Studio',
    description: 'Plateforme de gestion de contenus pour des studios créatifs avec workflows visuels et publication multi-support.',
    stack: ['Next.js', 'PostgreSQL', 'Auth'],
    accent: 'teal',
  },
  {
    title: 'Luma Health',
    description: 'Application de suivi de santé avec tableaux de bord patients, rappels et parcours de soins personnalisés.',
    stack: ['React', 'Firebase', 'Charts'],
    accent: 'amber',
  },
]

const experience = [
  {
    period: '2022 — Aujourd’hui',
    role: 'Lead Front-End Developer',
    company: 'Northstar Labs',
    details: 'Dirige la conception et le développement d’interfaces SaaS complexes orientées performance et UX.',
  },
  {
    period: '2020 — 2022',
    role: 'Senior Product Designer',
    company: 'Aster Studio',
    details: 'Conception de produits digitaux, design systems et optimisation d’outils de croissance pour startups.',
  },
  {
    period: '2018 — 2020',
    role: 'Front-End Developer',
    company: 'Miroir Digital',
    details: 'Développement de sites vitrines, landing pages et applications internes pour différents secteurs.',
  },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/fanomezantsoajoseph14-dev', title: 'github.com/fanomezantsoajoseph-dev' },
  // { label: 'LinkedIn', href: 'https://linkedin.com', title: 'linkedin.com/in/alex' },
  // { label: 'Dribbble', href: 'https://dribbble.com', title: 'dribbble.com/alex' },
]

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Accueil">
          <span className="brand-mark">JF</span>
          <span className="brand-name">Joseph FANOMEZANTSOA</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isNavOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isNavOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsNavOpen((open) => !open)}
        >
          {isNavOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav
          className={`nav${isNavOpen ? ' nav-open' : ''}`}
          id="primary-navigation"
          aria-label="Navigation principale"
        >

          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsNavOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button-primary nav-contact" href="#contact" onClick={() => setIsNavOpen(false)}>
            Me contacter
          </a>
        </nav>

      </header>

      <main id="main">
        <section id="home">
          <HeroBanner />
        </section>

        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Développeur full-stack</p>
            <h1>FANOMEZANTSOA Sarobidy Joseph</h1>
            <p className="lead">
              Je conçois et développe des site web modernes pour les marques qui veulent faire une impression durable.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Voir mes projets
              </a>
              <a className="button button-secondary" href="#about">
                En savoir plus
              </a>
            </div>

            <div className="stats-grid" aria-label="Quelques statistiques">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel" aria-label="Résumé professionnel">
            <div className="profile-card">
              <div>
                <p className="small-label">Disponible pour missions</p>
                {/* <h2>Joseph FANOMEZANTSOA</h2> */}
              </div>
            </div>

            <div className="info-box">
              <span className="dot"></span>
              <div>
                <small>Disponibilité</small>
                <strong>Ouvert à de nouveaux projets</strong>
              </div>
            </div>

            <div className="mini-grid">
              <div>
                <small>Spécialité</small>
                <strong>UX / UI</strong>
              </div>
              <div>
                <small>Localisation</small>
                <strong>Antananarivo, Madagascar</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">À propos</p>
            <h2>Je transforme des idées en produits web élégants et utiles.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Anciennement designer produit puis développeur front-end, je mène des projets du concept au lancement avec une
                vraie attention à la productivité, à la qualité de l’expérience et à la cohérence visuelle.
              </p>
              <p>
                Mon approche combine stratégie, interface, motion et développement pour créer des systèmes faciles à utiliser et
                agréables à regarder.
              </p>
            </div>

            <div className="skills-panel">
              {skills.map((skill) => (
                <span className="skill-badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Portfolio</p>
            <h2>Quelques réalisations récentes.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-visual">
                  <span className="visual-pill">Case study</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Expérience</p>
            <h2>Mon parcours.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.role}`}>
                <span className="timeline-period">{item.period}</span>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Discutons de votre prochain projet.</h2>
            </div>

            <div className="contact-links">
              <a href="mailto:fanomezantsoajoseph14@gmail.com">
                <Mail className="contact-icon" size={20} />
                <span>fanomezantsoajoseph14@gmail.com</span>
              </a>
              <a
                href="https://wa.me/261332197016"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="contact-icon whatsapp" size={20} />
                <span>033 21 970 16</span>
              </a>
            </div>

            <div className="social-links">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">© 2026 Joseph FANOMEZANTSOA — construit avec React</footer>
    </div>
  )
}

export default App