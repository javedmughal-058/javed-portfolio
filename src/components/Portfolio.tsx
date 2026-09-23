'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Download, ExternalLink, Github, Globe2, Linkedin, LockKeyhole, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { awards, experience, profile, projects, skills, stats } from '@/data/portfolio';
import type { Project } from '@/types';

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  // Keep this low because long sections (especially Projects) may never reach 20% visibility.
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.55 },
};

const projectReveal = {
  initial: { opacity: 0, y: 54, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.18 },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 34, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Awards', 'Contact'];
  return (
    <header className="nav-wrap">
      <nav className="nav shell">
        <a href="#top" className="brand-mark">MJ</a>
        <div className="nav-links desktop-nav">
          {links.map((label) => <a key={label} href={`#${label.toLowerCase()}`}>{label}</a>)}
        </div>
        <a href="/resume/Muhammad-Javed-Resume.pdf" className="small-btn desktop-nav" download>
          Resume <Download size={15} />
        </a>
        <button className="menu-btn mobile-nav" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
            {links.map((label) => <a onClick={() => setOpen(false)} key={label} href={`#${label.toLowerCase()}`}>{label}</a>)}
            <a href="/resume/Muhammad-Javed-Resume.pdf" download>Download Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero shell">
      <div className="hero-glow-field" />
      <div className="hero-orb orb-a" />
      <div className="hero-orb orb-b" />
      <motion.div {...reveal} className="hero-copy">
        <div className="availability"><span /> Open to new opportunities</div>
        <p className="kicker">{profile.title}</p>
        <h1>{profile.name}</h1>
        <h2>{profile.headline}</h2>
        <p className="hero-text">{profile.intro}</p>
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">View My Work <ArrowRight size={18} /></a>
          <a className="ghost-btn" href="/resume/Muhammad-Javed-Resume.pdf" download>Download Resume <Download size={17} /></a>
        </div>
        <div className="hero-socials">
          <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <a href={profile.github} target="_blank"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
          {profile.upwork && <a href={profile.upwork} target="_blank" rel="noreferrer" className="social-text-link">Upwork</a>}
        </div>
      </motion.div>
      <a href="#about" className="scroll-hint">Scroll <ArrowDown size={16} /></a>
    </section>
  );
}

function About() {
  const dna = ['Flutter', 'Dart', 'GetX', 'Provider', 'Firebase', 'Laravel', 'Google Maps', 'REST APIs'];
  return (
    <section id="about" className="section shell">
      <motion.div {...reveal}>
        <SectionHeading eyebrow="About Me" title="The Developer Behind the Code" />
        <motion.div className="about-grid" variants={staggerGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.div className="about-card feature-card" variants={cardReveal}>
            <p className="large-copy">{profile.intro}</p>
            <div className="tech-dna"><span>Tech DNA</span><div>{dna.map((item) => <b key={item}>{item}</b>)}</div></div>
          </motion.div>
          <motion.div className="stats-grid" variants={staggerGroup}>
            {stats.map((stat) => <motion.div className="stat-card" key={stat.label} variants={cardReveal}><strong>{stat.value}</strong><span>{stat.label}</span></motion.div>)}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section shell">
      <motion.div {...reveal}>
        <SectionHeading eyebrow="Expertise" title="Skills & Technologies" text="Grouped to make this section easy to update when your stack changes." />
        <motion.div className="skill-grid" variants={staggerGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }}>
          {skills.map((group) => (
            <motion.div className="skill-card" key={group.title} variants={cardReveal}>
              <h3>{group.title}</h3>
              <div className="tag-wrap">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section shell">
      <motion.div {...reveal}>
        <SectionHeading eyebrow="Career" title="Work Experience" />
        <motion.div className="timeline" variants={staggerGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
          {experience.map((item, i) => (
            <motion.article className="timeline-item" key={`${item.role}-${i}`} variants={cardReveal}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-head"><div><h3>{item.role}</h3>{item.companyUrl ? <a className="company-link" href={item.companyUrl} target="_blank" rel="noreferrer">{item.company} <ExternalLink size={14} /></a> : <p>{item.company}</p>}</div><div className="period"><span>{item.period}</span><small>{item.type}</small></div></div>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                <div className="tag-wrap">{item.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal" initial={{ opacity: 0, y: 30, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .98 }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X /></button>
        {project.image ? (
          <Image src={project.image} width={1200} height={700} alt={project.title} />
        ) : (
          <div className="project-image-fallback project-image-fallback-modal">
            <span>{project.subtitle}</span>
            <strong>{project.title}</strong>
          </div>
        )}
        <div className="modal-body">
          <span className="eyebrow">{project.subtitle}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-wrap">{project.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
          {project.links && project.links.length > 0 && (
            <div className="hero-actions" style={{ marginTop: 22 }}>
              {project.links.map((link) => (
                <a className="ghost-btn" key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  {link.label} <ExternalLink size={16} />
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="projects" className="section shell">
      <div>
        <motion.div {...reveal}>
          <SectionHeading eyebrow="Showcase" title="Featured Projects" text="Selected production, enterprise, offline-first, freelance, and independent mobile products across Android and iOS." />
        </motion.div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.button
              key={project.title}
              className={`project-card ${i === 0 ? 'project-wide' : ''}`}
              onClick={() => setActive(project)}
              {...projectReveal}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1], delay: Math.min((i % 2) * 0.08, 0.08) }}
            >
              <div className="project-image-wrap">
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 100vw, 50vw" />
                ) : (
                  <div className="project-image-fallback">
                    <span>{project.subtitle}</span>
                    <strong>{project.title}</strong>
                  </div>
                )}
                <div className="project-badge-row">
                  <span className={`project-status-badge ${project.private ? 'project-status-private' : 'project-status-public'}`}>
                    {project.private ? <LockKeyhole size={13} /> : <Globe2 size={13} />}
                    {project.private ? 'Private' : 'Public'}
                  </span>
                </div>
              </div>
              <div className="project-content">
                <p>{project.subtitle}</p><h3>{project.title}</h3><span>{project.description}</span>
                <div className="tag-wrap">{project.tech.slice(0, 4).map((t) => <em className="tag" key={t}>{t}</em>)}</div>
                <div className="project-link">View details <ArrowRight size={16} /></div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="section shell">
      <motion.div {...reveal}>
        <SectionHeading eyebrow="Recognition" title="Awards & Achievements" text="Courses and certifications from my professional development journey." />
        <motion.div className="award-grid" variants={staggerGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {awards.map((a) => <motion.div className="award-card" key={a.title} variants={cardReveal}><span>{a.icon}</span><h3>{a.title}</h3><p>{a.company}</p><small>{a.date}</small></motion.div>)}
        </motion.div>
      </motion.div>
    </section>
  );
}

function GitHubSection() {
  return (
    <section className="section shell">
      <motion.div {...reveal} className="github-card">
        <div>
          <span className="eyebrow">Open Source</span><h2>GitHub & Engineering Work</h2>
          <p>Explore my public Flutter, Dart, Firebase, Node.js, MongoDB and mobile-development repositories.</p>
        </div>
        <a className="primary-btn" href={profile.github} target="_blank">View GitHub <Github size={18} /></a>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section shell contact-section">
      <motion.div {...reveal}>
        <SectionHeading eyebrow="Get In Touch" title="Let's Connect" text="Available for professional opportunities, collaboration and mobile application projects." />
        <motion.div className="contact-grid" variants={staggerGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }}>
          <motion.a href={`mailto:${profile.email}`} className="contact-card" variants={cardReveal}><Mail /><div><small>Email</small><strong>{profile.email}</strong></div><ExternalLink size={18} /></motion.a>
          <motion.a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-card" variants={cardReveal}><Linkedin /><div><small>LinkedIn</small><strong>Professional profile</strong></div><ExternalLink size={18} /></motion.a>
          {profile.upwork && <motion.a href={profile.upwork} target="_blank" rel="noreferrer" className="contact-card" variants={cardReveal}><ExternalLink /><div><small>Upwork</small><strong>Freelance profile</strong></div><ExternalLink size={18} /></motion.a>}
          <motion.a href={profile.github} target="_blank" className="contact-card" variants={cardReveal}><Github /><div><small>GitHub</small><strong>Code & repositories</strong></div><ExternalLink size={18} /></motion.a>
          <motion.div className="contact-card" variants={cardReveal}><MapPin /><div><small>Location</small><strong>{profile.location}</strong></div></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return <footer className="footer shell"><div><span className="brand-mark">MJ</span><div><strong>{profile.name}</strong><p>{profile.title}</p></div></div><p>Built with Next.js · TypeScript · Tailwind · Framer Motion</p></footer>;
}

export default function Portfolio() {
  return <><Nav /><main><Hero /><About /><Skills /><Experience /><Projects /><Awards /><GitHubSection /><Contact /></main><Footer /></>;
}
