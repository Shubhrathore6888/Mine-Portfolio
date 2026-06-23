import { RESUME_URL } from "@/app/data/portfolio";
import {
  DownloadIcon,
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
} from "@/app/components/icons";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />
      <div className="hero-orb-3" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="stagger-children">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Hi, I&apos;m{" "}
            <span className="gradient-text glow-text">Shubh Rathore</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-4 font-mono">
            <span className="text-[var(--accent-primary)]">&lt;</span>
            Backend Developer · Node.js · TypeScript · Blockchain
            <span className="text-[var(--accent-primary)]">/&gt;</span>
          </p>

          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-8">
            I build scalable APIs, production backends, and real-time systems
            with{" "}
            <span className="text-[var(--accent-secondary)]">Node.js</span>,{" "}
            <span className="text-[var(--accent-secondary)]">TypeScript</span>,{" "}
            <span className="text-[var(--accent-secondary)]">PostgreSQL</span>,
            and{" "}
            <span className="text-[var(--accent-secondary)]">MongoDB</span> —
            plus smart-contract work on{" "}
            <span className="text-[var(--accent-secondary)]">EVM</span> and{" "}
            <span className="text-[var(--accent-secondary)]">Solana</span> when
            the problem calls for it.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://linkedin.com/in/shubh-rathore-845577214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Shubhr457"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href="mailto:shubhr457@gmail.com"
              className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float">
        <div className="w-6 h-10 border-2 border-[var(--accent-primary)] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--accent-primary)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
