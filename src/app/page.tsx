"use client";

import { useState, useEffect } from "react";

import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import SkillsSection from "@/app/components/SkillsSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import EducationSection from "@/app/components/EducationSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import { ChevronUpIcon } from "@/app/components/icons";

export default function Home() {
  // ── Global UI state ──────────────────────────────────────────────────────
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return stored ? stored === "dark" : prefersDark;
  });
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // ── Live GitHub repo count ─────────────────────────────────────────────
  const [repoCount, setRepoCount] = useState<number | null>(null);
  useEffect(() => {
    fetch("https://api.github.com/users/Shubhr457")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.public_repos === "number") setRepoCount(d.public_repos);
      })
      .catch(() => {});
  }, []);

  // ── Theme ─────────────────────────────────────────────────────────────
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // ── Navbar scroll shadow ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Scroll-spy: highlight active nav link ─────────────────────────────
  useEffect(() => {
    const ids = ["about", "skills", "experience", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Back-to-top button visibility ─────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Scroll-triggered reveal animation ────────────────────────────────
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen grid-bg">
      <Navbar
        isScrolled={isScrolled}
        isDark={isDark}
        toggleTheme={toggleTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
      />

      <HeroSection />
      <AboutSection repoCount={repoCount} />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />

      {/* Back-to-top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#00ff88] text-[#0a0a0f] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <ChevronUpIcon />
        </button>
      )}
    </div>
  );
}
