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

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-indigo-500" />
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Where I&apos;ve made impact.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 border-4 border-[#050510] shadow-lg shadow-indigo-500/30" />

                {/* Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-indigo-500/20 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-indigo-400 font-medium">
                        {role.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-500 font-mono">
                        {role.period}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {role.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-5 leading-relaxed">
                    {role.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {role.achievements.map((achievement, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-slate-400"
                      >
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {role.tech.map((t, k) => (
                      <span
                        key={k}
                        className="px-3 py-1 text-xs font-medium bg-white/[0.04] border border-white/[0.06] rounded-full text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
