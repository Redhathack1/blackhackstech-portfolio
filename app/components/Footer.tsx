"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
              B
            </div>
            <span className="text-sm text-slate-400">
              © {new Date().getFullYear()}{" "}
              <span className="text-slate-300 font-medium">BlackHacksTech</span>
              . All rights reserved.
            </span>
          </div>

          {/* Center - Built with */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            Built with <Heart size={12} className="text-pink-500" /> using
            Next.js &amp; Tailwind
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {[
              {
                icon: <Github size={16} />,
                href: "https://github.com/Redhathack1",
                label: "GitHub",
              },
              {
                icon: <Linkedin size={16} />,
                href: "https://linkedin.com/in/oluwaferanmi-oladapo-5044901a1",
                label: "LinkedIn",
              },
              {
                icon: <Mail size={16} />,
                href: "mailto:pherolee.young@gmail.com",
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={
                  social.label !== "Email"
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="p-2.5 text-slate-600 hover:text-slate-300 hover:bg-white/[0.05] rounded-lg transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
