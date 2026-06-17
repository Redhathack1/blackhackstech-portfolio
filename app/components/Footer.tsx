"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/Redhathack1",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/oluwaferanmi-oladapo-5044901a1",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:pherolee.young@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)]">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          {/* ── Left: Brand ── */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[var(--accent)] to-[var(--accent-warm)] text-white text-xs font-bold">
              B
            </span>
            <span className="text-[var(--text-muted)]">
              © {new Date().getFullYear()} BlackHacksTech
            </span>
          </div>

          {/* ── Center: Tagline ── */}
          <p className="text-[var(--text-muted)] text-xs tracking-wide">
            Crafted with care in the UK 🇬🇧
          </p>

          {/* ── Right: Social icons ── */}
          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-md text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)] hover:bg-[var(--surface-card)]"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
