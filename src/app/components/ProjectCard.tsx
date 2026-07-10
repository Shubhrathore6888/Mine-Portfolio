import { Project } from "@/app/data/portfolio";
import { ExternalLinkIcon, GithubIcon } from "@/app/components/icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="work-card">
      <div className="work-card-top">
        <span>{project.category}</span>
        <div className="work-links">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`}><GithubIcon /></a>}
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}><ExternalLinkIcon /></a>}
        </div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>{project.tech.slice(0, 5).map((tech) => <li key={tech}>{tech}</li>)}</ul>
    </article>
  );
}
