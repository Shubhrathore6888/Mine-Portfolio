import { Project } from "@/app/data/portfolio";
import {
  ExternalLinkIcon,
  GithubIcon,
  SwaggerIcon,
} from "@/app/components/icons";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const hasFooter =
    project.github || project.githubApi || project.docs || project.live;

  return (
    <div className="card p-6 group flex flex-col">
      {/* Top row: category badge + icon links */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88]">
          {project.category}
        </span>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-[#00ff88] transition-colors"
              title={project.githubApi ? "Frontend (GitHub)" : "Source code"}
            >
              <GithubIcon />
            </a>
          )}
          {project.githubApi && (
            <a
              href={project.githubApi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-[#00ff88] transition-colors"
              title="Backend API service"
            >
              <GithubIcon />
            </a>
          )}
          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-[#00d4ff] transition-colors"
              title="API Documentation"
            >
              <SwaggerIcon />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-[#00d4ff] transition-colors"
              title="View Live Demo"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      {/* Ongoing / highlight badge */}
      {(project.ongoing || project.highlight) && (
        <div className="mb-3 flex items-center gap-2">
          {project.ongoing && (
            <span className="inline-flex items-center gap-1.5 text-xs bg-[#ff9900]/15 text-[#ff9900] border border-[#ff9900]/30 px-3 py-1 rounded-full font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900] animate-pulse" />
              In Progress
            </span>
          )}
          {project.highlight && !project.ongoing && (
            <span className="text-xs bg-[#00d4ff]/15 text-[#00d4ff] px-3 py-1 rounded-full font-semibold">
              ✦ {project.highlight}
            </span>
          )}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-[#00ff88] transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#a1a1aa] mb-4">{project.description}</p>

      {/* Feature bullets (e.g. API endpoints) */}
      {project.features && project.features.length > 0 && (
        <ul className="mb-4 space-y-1">
          {project.features.map((feat, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-[var(--text-body)]"
            >
              <span className="text-[#00ff88] mt-0.5 flex-shrink-0">▸</span>
              <span className="font-mono">{feat}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded bg-[var(--chip-bg)] text-[var(--chip-text)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer links */}
      {hasFooter && (
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--card-border)] mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#71717a] hover:text-[#00ff88] transition-colors flex items-center gap-1"
            >
              <GithubIcon />
              <span>{project.githubApi ? "Frontend" : "Source"}</span>
            </a>
          )}
          {project.githubApi && (
            <a
              href={project.githubApi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#71717a] hover:text-[#00ff88] transition-colors flex items-center gap-1"
            >
              <GithubIcon />
              <span>Backend</span>
            </a>
          )}
          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#71717a] hover:text-[#00d4ff] transition-colors flex items-center gap-1"
            >
              <SwaggerIcon />
              <span>API Docs</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#71717a] hover:text-[#00d4ff] transition-colors flex items-center gap-1"
            >
              <ExternalLinkIcon />
              <span>Live</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
