"use client";

import { navLinks, RESUME_URL } from "@/app/data/portfolio";
import {
  CloseIcon,
  DownloadIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "@/app/components/icons";

type Props = {
  isScrolled: boolean;
  isDark: boolean;
  toggleTheme: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
};

export default function Navbar({
  isScrolled,
  isDark,
  toggleTheme,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
}: Props) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-lg border-b border-[var(--card-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold gradient-text">
            SR
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-sm font-medium ${
                  activeSection === link.href.slice(1) ? "active" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-sm font-medium flex items-center gap-1"
            >
              <DownloadIcon />
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[#00ff88] hover:border-[#00ff88] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="#contact" className="btn-primary text-sm">
              <span>Let&apos;s Talk</span>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[#00ff88] hover:border-[#00ff88] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="text-[var(--text-muted)] hover:text-[#00ff88] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--card-border)] pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link text-sm font-medium ${
                    activeSection === link.href.slice(1) ? "active" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm font-medium flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <DownloadIcon />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
