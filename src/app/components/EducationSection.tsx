export default function EducationSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="text-center mb-16">
          <span className="section-heading">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Bachelor of Technology (BTech)
            </h3>
            <p className="text-[#00d4ff] mb-1">Computer Science Engineering</p>
            <p className="text-[#71717a]">JECRC University</p>
            <p className="text-sm text-[#71717a]">2020 - 2024</p>
          </div>

          <div className="card p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#ff00ff]/20 flex items-center justify-center mb-6">
              <span className="text-2xl">📜</span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Digital Marketing Fundamentals
            </h3>
            <p className="text-[#00d4ff] mb-1">Google Digital Garage</p>
            <p className="text-[#71717a]">Certified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
