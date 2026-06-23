import { experiences } from "@/app/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="text-center mb-16">
          <span className="section-heading">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#00ff88] via-[#00d4ff] to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 items-start">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 w-10 flex justify-center pt-1">
                  <div className="w-4 h-4 rounded-full bg-[#00ff88] pulse-glow" />
                </div>

                {/* Card */}
                <div className="card p-6 flex-1">
                  {exp.highlight && (
                    <div className="mb-3">
                      <span className="text-sm bg-[#00ff88]/20 text-[#00ff88] px-3 py-1 rounded-full">
                        {exp.highlight}
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-[#00ff88] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-[#00d4ff] mb-1">
                    {exp.company}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    {exp.period} · {exp.duration}
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--text-body)]">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00ff88] mt-1 flex-shrink-0">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
