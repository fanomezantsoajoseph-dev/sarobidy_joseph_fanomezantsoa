import './App.css'
import { useState } from "react";
import HeroBanner from "./components/Herobanner";
import { Mail, MessageCircle, Menu, X } from "lucide-react";

const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'Projets', href: '#projects' },
  { label: 'À propos', href: '#experience' },
  // { label: 'Expérience', href: '#experience' },
  // { label: 'Contact', href: '#contact' },
]

// const stats = [
//   { value: '6+', label: 'ans d’expérience' },
//   { value: '22', label: 'projets livrés' },
//   { value: '99%', label: 'clients satisfaits' },
// ]

// const skills = ['React', 'TypeScript', 'Node.js','MySQL','PostgreSQL', 'Next.js', 'UI/UX', 'Figma', 'API REST','Tailwind']

const GithubIcon = ({ size = 20, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);
const projects = [
  {
    title: <a href="https://www.airandev.com/fr">AIRANDEV</a>,
    description: 'Plateforme d\'automatisation à l\'aide de l\'intelligence Artificiele pour la gestion d\'entreprise et des tâches répétitives.',
    stack: ['React + VITE','Payload(framework)','Graphql','json', 'Next.js','TailwindCss'],
    accent: 'violet',
  },
  {
    title: 'Mon portfolio',
    description: 'Portfolio en ligne de présentation de mes compétences, projets et expériences professionnelles.',
    stack: ['React + VITE'],
    accent: 'teal',
  },
  {
    title: 'e-commerce',
    description: 'Boutique en ligne pour la vente de produits avec un système de paiement sécurisé(stripe) et une interface administrateus,card, panier et gestion des commandes.',
    stack: ['React + VITE','stripe','API REST','express.js', 'Charts','TailwindCss',],
    accent: 'amber',
  },
]

const experience = [
  {
    period: '2022 — 2024',
    role: 'Lead Front-End Developer',
    company: 'RandevTeam',
    details: 'correction des bugs,conception et le développement d’interfaces SaaS complexes orientées performance et UX.',
  },
  {
    period: '2024 — aujourd\'hui',
    role: 'Senior full-stack Developer',
    company: 'RandevTeam',
    details: 'Conception de logique du site web, design UML et optimisation d’outils de croissance pour startups.\n Développement de fonctionnalités front-end et back-end, intégration d’API et gestion de bases de données jusqu\'à mise en ligne(DevOpps)',
  },
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

        {/* <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">À propos</p>
            <h2>Je transforme des idées en produits web élégant et proffesionnel.</h2>
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
        </section> */}

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projets réalisés</p>
            <h2>Quelques réalisations récentes.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-visual">
                  <span className="visual-pill">site web</span>
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
              <a
                href="https://github.com/fanomezantsoajoseph-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="contact-icon github" size={20} />
                <span>github.com/fanomezantsoajoseph-dev</span>
              </a>
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
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Joseph FANOMEZANTSOA — construit avec React+VITE </footer>
    </div>
  )
}

export default App