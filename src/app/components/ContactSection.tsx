"use client";

import { useState } from "react";
import { EmailIcon, LocationIcon, LinkedInIcon, SendIcon } from "@/app/components/icons";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus("sending");

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:shubhr457@gmail.com?subject=${subject}&body=${body}`;
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="text-center mb-16">
          <span className="section-heading">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[var(--text-muted)] mt-4 max-w-xl mx-auto">
            Interested in working together or have a project in mind? I&apos;d
            love to hear from you. Let&apos;s build something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <a
              href="mailto:shubhr457@gmail.com"
              className="card p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition-transform">
                <EmailIcon />
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">Email</p>
                <p className="font-medium group-hover:text-[#00ff88] transition-colors">
                  shubhr457@gmail.com
                </p>
              </div>
            </a>

            <div className="card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff00ff]/20 to-[#00ff88]/20 flex items-center justify-center text-[#ff00ff]">
                <LocationIcon />
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">Location</p>
                <p className="font-medium">Baran, Rajasthan, India</p>
              </div>
            </div>

            <a
              href="https://linkedin.com/in/shubh-rathore-845577214"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition-transform">
                <LinkedInIcon />
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">LinkedIn</p>
                <p className="font-medium group-hover:text-[#00ff88] transition-colors">
                  Connect with me
                </p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <div className="card p-8">
            {formStatus === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#00ff88]/20 flex items-center justify-center mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-[#00ff88] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[var(--text-muted)] mb-6">
                  Your email client opened with the message. I&apos;ll get back
                  to you soon.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="btn-outline text-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Shubh Rathore"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#00ff88] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#00ff88] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#00ff88] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <span>
                    {formStatus === "sending" ? "Opening email..." : "Send Message"}
                  </span>
                  {formStatus !== "sending" && <SendIcon />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
