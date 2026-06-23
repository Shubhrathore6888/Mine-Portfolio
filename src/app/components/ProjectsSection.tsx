"use client";

import { useState } from "react";
import { projects } from "@/app/data/portfolio";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsSection() {
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="text-center mb-16">
          <span className="section-heading">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-[#00ff88] text-[#0a0a0f] border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                  : "border-[var(--card-border)] text-[var(--text-muted)] hover:border-[#00ff88] hover:text-[#00ff88]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
