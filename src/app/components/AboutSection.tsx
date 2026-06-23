import Image from "next/image";

type Props = {
  repoCount: number | null;
};

export default function AboutSection({ repoCount }: Props) {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text & stats */}
          <div>
            <span className="section-heading">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Shipping{" "}
              <span className="gradient-text">production backends</span>
            </h2>

            <div className="space-y-4 text-[var(--text-body)]">
              <p>
                I&apos;m a backend developer with about two years of experience
                building scalable APIs, data layers, and real-time features in
                Node.js and TypeScript — from PostgreSQL and Prisma to MongoDB,
                Mongoose, and Socket.io.
              </p>
              <p>
                At SoluLab (remote), I was the sole backend engineer on Terrava,
                a live carbon credit marketplace: 30+ REST endpoints, modular
                services, soft-delete–friendly schemas, cron jobs, and
                integrations like BanQu for supply-chain traceability.
              </p>
              <p>
                I&apos;ve also delivered client backends end to end (e.g. wallet
                marketplace flows, payment logic, third-party connectors) and
                keep hands-on with blockchain tooling — Solidity, EVM, and
                Rust/Anchor on Solana — when products need it.
              </p>
            </div>

            {/* Stat cards */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="card p-6 flex-1 min-w-[140px]">
                <div className="text-3xl font-bold gradient-text mb-2">30+</div>
                <div className="text-sm text-[var(--text-muted)]">
                  Production REST APIs (Terrava)
                </div>
              </div>
              <div className="card p-6 flex-1 min-w-[140px]">
                <div className="text-3xl font-bold gradient-text-alt mb-2">2+</div>
                <div className="text-sm text-[var(--text-muted)]">
                  Years Experience
                </div>
              </div>
              <div className="card p-6 flex-1 min-w-[140px]">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {repoCount !== null ? `${repoCount}+` : "…"}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  GitHub Repositories
                </div>
              </div>
            </div>
          </div>

          {/* Right — profile photo + code block */}
          <div className="relative flex flex-col gap-6">
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="w-48 h-48 rounded-full p-[3px]"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/profile.jpeg"
                      alt="Shubh       Rathore"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Available badge */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full px-3 py-1 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                  Available
                </div>
              </div>
            </div>

            {/* Inline code card */}
            <div className="gradient-border p-8" style={{ background: "#12121a" }}>
              <div className="font-mono text-sm">
                <div className="text-[#71717a] mb-2">{"// shubh.config.ts"}</div>
                <div>
                  <span className="text-[#ff79c6]">const</span>{" "}
                  <span className="text-[#00ff88]">developer</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-[#00d4ff]">name</span>:{" "}
                  <span className="text-[#f1fa8c]">&quot;Shubh Rathore&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#00d4ff]">location</span>:{" "}
                  <span className="text-[#f1fa8c]">&quot;Rajasthan, India&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#00d4ff]">role</span>:{" "}
                  <span className="text-[#f1fa8c]">&quot;Backend Developer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#00d4ff]">stack</span>: [
                  <span className="text-[#f1fa8c]">&quot;Node&quot;</span>,{" "}
                  <span className="text-[#f1fa8c]">&quot;TypeScript&quot;</span>,{" "}
                  <span className="text-[#f1fa8c]">&quot;MongoDB&quot;</span>,{" "}
                  <span className="text-[#f1fa8c]">&quot;PostgreSQL&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-[#00d4ff]">languages</span>: [
                  <span className="text-[#f1fa8c]">&quot;TypeScript&quot;</span>,{" "}
                  <span className="text-[#f1fa8c]">&quot;JavaScript&quot;</span>,{" "}
                  <span className="text-[#f1fa8c]">&quot;Rust&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-[#00d4ff]">also</span>:{" "}
                  <span className="text-[#f1fa8c]">&quot;Solidity · Solana/Anchor&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#00d4ff]">available</span>:{" "}
                  <span className="text-[#50fa7b]">true</span>,
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
