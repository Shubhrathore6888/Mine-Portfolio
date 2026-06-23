import { skills } from "@/app/data/portfolio";

type SkillCardProps = {
  emoji: string;
  title: string;
  items: string[];
  gradient: string;
  extraClass?: string;
};

function SkillCard({ emoji, title, items, gradient, extraClass = "" }: SkillCardProps) {
  return (
    <div className={`card p-8 ${extraClass}`}>
      <div
        className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center mb-6`}
      >
        <span className="text-2xl">{emoji}</span>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="text-center mb-16">
          <span className="section-heading">Technical Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            emoji="⌨️"
            title="Languages"
            items={skills.languages}
            gradient="bg-gradient-to-br from-[#00d4ff]/20 to-[#ff00ff]/20"
          />
          <SkillCard
            emoji="🔧"
            title="Backend"
            items={skills.backend}
            gradient="bg-gradient-to-br from-[#00d4ff]/20 to-[#ff00ff]/20"
          />
          <SkillCard
            emoji="🗄️"
            title="Data"
            items={skills.data}
            gradient="bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20"
          />
          <SkillCard
            emoji="⛓️"
            title="Blockchain"
            items={skills.blockchain}
            gradient="bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20"
          />
          <SkillCard
            emoji="🛠️"
            title="Tools"
            items={skills.tools}
            gradient="bg-gradient-to-br from-[#ff00ff]/20 to-[#00ff88]/20"
            extraClass="sm:col-span-2 lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
