import { navLinks, RESUME_URL } from "@/app/data/portfolio";
import { DownloadIcon } from "@/app/components/icons";

export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="shell nav-inner">
        <div className="flex items-center justify-between">
          <a href="#top" className="brand" aria-label="Shubh Rathore home">
            shubh<span>.</span>
          </a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="nav-resume">
            Resume <DownloadIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
