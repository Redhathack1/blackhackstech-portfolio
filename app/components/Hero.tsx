"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const headlineWords = [
  { text: "I build", className: "" },
  { text: "intelligent", className: "gradient-text" },
  { text: "automation systems.", className: "" },
];

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

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 20% 60%, rgba(124, 106, 239, 0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 30%, rgba(232, 115, 90, 0.04) 0%, transparent 50%), var(--surface-base)",
      }}
    >
      <div className="section-container relative z-10 pt-32 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT — Main Content */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10"
              style={{
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.15)",
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-emerald-400">
                Available for new projects
              </span>
            </motion.div>

            {/* Headline — staggered from left with rotation */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight mb-8">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -50, rotateZ: -3 }}
                  animate={{ opacity: 1, x: 0, rotateZ: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`block ${word.className}`}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              Hi, I&apos;m{" "}
              <strong
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Oluwaferanmi Samuel Oladapo
              </strong>
              . SDET &amp; AI Engineer bridging the gap between rigorous backend
              testing and Generative AI — turning complex requirements into
              reliable, automated systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 text-[0.9rem] font-semibold text-white rounded-full transition-shadow duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent-warm))",
                  boxShadow: "0 8px 30px rgba(124, 106, 239, 0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(124, 106, 239, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(124, 106, 239, 0.25)";
                }}
              >
                View My Work
              </motion.a>
              <a
                href="#contact"
                className="px-7 py-3.5 text-[0.9rem] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-default)",
                  background: "var(--surface-card)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-active)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.background =
                    "var(--surface-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-default)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "var(--surface-card)";
                }}
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex items-center gap-3"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
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
                    className="p-2.5 rounded-lg transition-all duration-200"
                    style={{
                      color: "var(--text-muted)",
                      border: "1px solid var(--border-subtle)",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.borderColor =
                        "var(--border-active)";
                      e.currentTarget.style.background =
                        "var(--surface-card-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.borderColor =
                        "var(--border-subtle)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT — Decorative Element */}
          <div className="lg:col-span-5 xl:col-span-5 hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Outer rotating dotted ring */}
              <div
                className="animate-spin-slow w-64 h-64 xl:w-72 xl:h-72 rounded-full absolute"
                style={{
                  border: "2px dashed var(--border-default)",
                }}
              />
              {/* Inner static ring */}
              <div
                className="w-44 h-44 xl:w-52 xl:h-52 rounded-full absolute overflow-hidden flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--surface-card)]"
              >
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {/* Accent dot markers */}
              <div
                className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full animate-spin-slow"
                style={{ background: "var(--accent)" }}
              />
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full animate-spin-slow"
                style={{
                  background: "var(--accent-warm)",
                  animationDirection: "reverse",
                }}
              />
              {/* Initials */}
              <span
                className="relative text-6xl xl:text-7xl font-extrabold tracking-tighter select-none"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent-cool))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.2,
                }}
              >
                SO
              </span>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
