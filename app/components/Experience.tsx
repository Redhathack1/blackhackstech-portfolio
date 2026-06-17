"use client";

import React from "react";
import { motion } from "framer-motion";

interface Role {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
}

const experience: Role[] = [
  {
    title: "SDET / AI Engineer",
    company: "BlackHacksTech",
    period: "2024 — Present",
    type: "Freelance & Contract",
    description:
      "Designing and shipping production-grade testing frameworks and AI-driven automation tools for fintech and SaaS clients.",
    achievements: [
      "Architected IronGate Framework — a decoupled Java testing framework validating 50+ financial API endpoints against backend databases, ensuring 100% data consistency",
      "Built an autonomous AI Testing Agent using LangChain + Gemini API that reads requirement docs and auto-generates executable Playwright scripts, reducing manual test creation by 80%",
      "Designed and deployed RAG-powered chatbot prototypes for client document Q&A, processing custom knowledge bases with vector search",
      "Implemented CI/CD pipelines with Docker, GitHub Actions, and Jenkins for continuous test execution and deployment",
    ],
    tech: [
      "Java",
      "Python",
      "TypeScript",
      "LangChain",
      "Gemini API",
      "Playwright",
      "Docker",
      "Jenkins",
    ],
  },
  {
    title: "QA Automation Engineer",
    company: "Software Engineering Projects",
    period: "2023 — 2024",
    type: "University & Freelance",
    description:
      "Led test strategy and automation for academic and client projects, building scalable test suites and infrastructure monitoring solutions.",
    achievements: [
      "Developed Net-Sentry — an automated network monitoring solution using SQL and Power BI to predict hardware failures across high-traffic academic networks",
      "Created comprehensive API test suites using Rest Assured and TestNG covering regression, smoke, and integration scenarios",
      "Built responsive web applications with React and Node.js, implementing JWT-based authentication and role-based access control",
      "Mentored junior developers on test-driven development practices and Git workflows",
    ],
    tech: [
      "Java",
      "SQL",
      "Power BI",
      "React",
      "Node.js",
      "REST APIs",
      "Selenium",
      "Git",
    ],
  },
  {
    title: "BSc Computer Science",
    company: "University",
    period: "2021 — 2024",
    type: "Education",
    description:
      "Studied core CS fundamentals with a focus on software engineering, database systems, and network infrastructure.",
    achievements: [
      "Graduated with strong foundation in algorithms, data structures, and software architecture",
      "Completed capstone project on AI-assisted test generation, combining NLP with automated browser testing",
      "Developed networking projects including packet analysis, intrusion detection, and infrastructure monitoring",
      "Active in coding societies and hackathons, building full-stack applications under tight deadlines",
    ],
    tech: [
      "Algorithms",
      "Data Structures",
      "Databases",
      "Networking",
      "Software Engineering",
      "Cisco",
    ],
  },
];

/* ── Card style variants per index ── */
const cardStyles: Record<number, string> = {
  // Card 0: current role — left accent border, slightly larger padding
  0: "p-7 sm:p-9 rounded-2xl bg-white/[0.03] border border-white/[0.06] border-l-2 border-l-[var(--accent)] hover:border-[var(--border-active)] transition-all duration-300 group",
  // Card 1: standard clean card
  1: "p-6 sm:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-[var(--accent-warm)]/30 transition-all duration-300 group",
  // Card 2: education — subdued tint, different bg
  2: "p-6 sm:p-8 rounded-2xl bg-[var(--accent-cool)]/[0.02] border border-[var(--accent-cool)]/[0.08] hover:border-[var(--accent-cool)]/20 transition-all duration-300 group",
};

const dotColors: Record<number, string> = {
  0: "bg-[var(--accent)]",
  1: "bg-[var(--accent-warm)]",
  2: "bg-[var(--accent-cool)]",
};

const titleHoverColors: Record<number, string> = {
  0: "group-hover:text-[var(--accent)]",
  1: "group-hover:text-[var(--accent-warm)]",
  2: "group-hover:text-[var(--accent-cool)]",
};

const companyColors: Record<number, string> = {
  0: "text-[var(--accent)]",
  1: "text-[var(--accent-warm)]",
  2: "text-[var(--accent-cool)]",
};

const badgeStyles: Record<number, string> = {
  0: "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20",
  1: "bg-[var(--accent-warm)]/10 text-[var(--accent-warm)] border border-[var(--accent-warm)]/20",
  2: "bg-[var(--accent-cool)]/10 text-[var(--accent-cool)] border border-[var(--accent-cool)]/20",
};

const bulletColors: Record<number, string> = {
  0: "bg-[var(--accent)]/60",
  1: "bg-[var(--accent-warm)]/60",
  2: "bg-[var(--accent-cool)]/60",
};

/* ── Tech chip layout varies per card ── */
function TechStack({ tech, index }: { tech: string[]; index: number }) {
  if (index === 1) {
    // Card 2: horizontal scrollable row with slightly different styling
    return (
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t, k) => (
          <span
            key={k}
            className="px-2.5 py-1 text-[11px] font-mono font-medium bg-[var(--accent-warm)]/[0.06] border border-[var(--accent-warm)]/10 rounded-md text-[var(--text-secondary)]"
          >
            {t}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t, k) => (
        <span
          key={k}
          className="px-3 py-1 text-xs font-medium bg-white/[0.04] border border-white/[0.06] rounded-full text-[var(--text-secondary)]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.015] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header — inline label + extending rule */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-5 mb-20"
        >
          <span className="text-sm font-semibold text-[var(--accent)] uppercase tracking-[0.2em] whitespace-nowrap">
            Experience
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-px flex-1 bg-gradient-to-r from-[var(--accent)]/40 to-transparent origin-left"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated gradient timeline line */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, var(--accent) 0%, var(--accent-warm) 50%, var(--accent-cool) 100%)",
              backgroundSize: "100% 200%",
              animation: "timelineShift 6s ease-in-out infinite alternate",
            }}
          />

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes timelineShift {
              0% { background-position: 0% 0%; }
              100% { background-position: 0% 100%; }
            }
          `}} />

          <div className="space-y-14">
            {experience.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                className="relative pl-8 md:pl-20"
              >
                {/* Pulsing Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-3 -translate-x-1/2">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(124,106,239,0.4)",
                        "0 0 0 8px rgba(124,106,239,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className={`w-3 h-3 rounded-full ${dotColors[i] || dotColors[0]} border-[3px] border-[var(--surface-base)]`}
                  />
                </div>

                {/* Card — each with unique treatment */}
                <div className={cardStyles[i] || cardStyles[1]}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className={`text-xl font-bold text-[var(--text-primary)] ${titleHoverColors[i] || ""} transition-colors`}
                      >
                        {role.title}
                      </h3>
                      <p
                        className={`font-medium ${companyColors[i] || "text-[var(--accent)]"}`}
                      >
                        {role.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[var(--text-muted)] font-mono">
                        {role.period}
                      </span>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${badgeStyles[i] || badgeStyles[0]}`}
                      >
                        {role.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] mb-5 leading-relaxed">
                    {role.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {role.achievements.map((achievement, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                      >
                        <span
                          className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${bulletColors[i] || bulletColors[0]}`}
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack — varies by card */}
                  <TechStack tech={role.tech} index={i} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
