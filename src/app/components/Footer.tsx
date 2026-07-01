import { EmailIcon, GithubIcon, LinkedInIcon } from "@/app/components/icons";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-6">
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
    </footer>
  );
}
