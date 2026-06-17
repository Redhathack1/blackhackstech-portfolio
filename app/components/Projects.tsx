"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  Cpu,
  BarChart3,
  MessageSquareText,
  Container,
  Github,
  ExternalLink,
} from "lucide-react";

type ProjectCategory = "All" | "AI / ML" | "Full Stack" | "DevOps";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  status: "Live" | "In Progress" | "Coming Soon";
  description: string;
  problem: string;
  impact: string;
  tech: string[];
  icon: React.ReactNode;
  accentColor: string;
  githubLink: string;
  liveLink?: string;
  targets: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "IronGate Framework",
    subtitle: "Fintech API Testing",
    category: ["Full Stack"],
    status: "Live",
    description:
      "A decoupled Java testing framework ensuring 100% data consistency for financial microservices — validating 50+ API endpoints against backend databases with zero flaky tests.",
    problem:
      "Financial APIs require absolute data consistency. Manual testing couldn't scale across 50+ endpoints without missing edge cases.",
    impact: "50+ endpoints validated • 100% data consistency • Zero false positives",
    tech: ["Java 17", "Rest Assured", "TestNG", "MongoDB", "JWT", "REST API"],
    icon: <Database size={24} />,
    accentColor: "from-blue-500 to-cyan-400",
    githubLink: "https://github.com/Redhathack1/IronGate-Framework",
    targets: ["Fintech startups", "MERN dev roles", "Backend contracts"],
  },
  {
    id: 2,
    title: "AI Testing Agent",
    subtitle: "Autonomous Test Generation",
    category: ["AI / ML"],
    status: "Live",
    description:
      "An autonomous agent that reads requirements documents and auto-generates executable Playwright test scripts using RAG architecture and Gemini API — reducing manual test creation by 80%.",
    problem:
      "Writing Playwright tests from requirements docs is tedious, error-prone, and doesn't scale. Most SDET teams spend 60% of time on manual script creation.",
    impact: "80% time reduction • RAG-powered accuracy • Auto-generates production-ready scripts",
    tech: ["Python", "LangChain", "Gemini API", "RAG", "Playwright", "MongoDB"],
    icon: <Cpu size={24} />,
    accentColor: "from-purple-500 to-pink-400",
    githubLink: "https://github.com/Redhathack1",
    targets: ["AI startups", "SDET roles", "QA automation contracts"],
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    subtitle: "Multi-Tenant Platform",
    category: ["Full Stack"],
    status: "In Progress",
    description:
      "A multi-tenant React + Node.js dashboard with authentication, interactive charts, user roles, and a REST API. The exact product 80% of freelance clients need — built as a live reference.",
    problem:
      "Freelance clients need dashboards yesterday. Having a production-ready template with auth, roles, and charts dramatically shortens delivery.",
    impact: "Multi-tenant auth • Real-time charts • Role-based access • Docker-ready",
    tech: ["React", "Node.js", "Chart.js", "PostgreSQL", "JWT", "Docker"],
    icon: <BarChart3 size={24} />,
    accentColor: "from-emerald-500 to-teal-400",
    githubLink: "https://github.com/Redhathack1",
    targets: ["Freelance clients", "Startup SaaS roles", "Remote contracts"],
  },
  {
    id: 4,
    title: "AI Chatbot Assistant",
    subtitle: "RAG Document Q&A",
    category: ["AI / ML", "Full Stack"],
    status: "In Progress",
    description:
      "A RAG-powered chatbot that answers questions from custom documents — company FAQs, product manuals, internal knowledge bases. The #1 thing businesses are currently paying for.",
    problem:
      "Businesses waste hours answering the same questions. A chatbot trained on their own documents solves this instantly — and they'll pay $500–$3000 per deployment.",
    impact: "Custom document ingestion • Vector search • Production-deployable",
    tech: ["LangChain", "Gemini API", "Pinecone", "React", "Node.js"],
    icon: <MessageSquareText size={24} />,
    accentColor: "from-amber-500 to-orange-400",
    githubLink: "https://github.com/Redhathack1",
    targets: ["Business owners", "Agencies", "AI integration gigs"],
  },
  {
    id: 5,
    title: "DevOps CI/CD Pipeline",
    subtitle: "Infrastructure as Code",
    category: ["DevOps"],
    status: "Coming Soon",
    description:
      "A fully documented CI/CD pipeline demo: Docker containerisation, GitHub Actions workflows, Kubernetes deployments. Most devs talk DevOps — this repo shows it working.",
    problem:
      "Senior dev interviews always ask about CI/CD. Having a documented, working pipeline repo proves you don't just talk about it — you build it.",
    impact: "Full pipeline documented • Docker + K8s • GitHub Actions workflows",
    tech: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform"],
    icon: <Container size={24} />,
    accentColor: "from-sky-500 to-blue-400",
    githubLink: "https://github.com/Redhathack1",
    targets: ["Senior dev roles", "DevOps contracts", "Platform engineering"],
  },
];

const categories: ProjectCategory[] = [
  "All",
  "AI / ML",
  "Full Stack",
  "DevOps",
];

const statusColors: Record<string, string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Coming Soon": "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-28 relative">
      <div className="section-container">
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
              Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Featured work &amp; builds.
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Each project solves a real-world problem. Click through to see
            architecture, live demos, and the thinking behind every decision.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30"
                  : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:bg-white/[0.06] hover:text-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-indigo-500/25 transition-all duration-300"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${project.accentColor} bg-opacity-10`}
                        style={{
                          background: `linear-gradient(135deg, ${project.accentColor.includes("blue") ? "rgba(59,130,246,0.1)" : project.accentColor.includes("purple") ? "rgba(168,85,247,0.1)" : project.accentColor.includes("emerald") ? "rgba(52,211,153,0.1)" : project.accentColor.includes("amber") ? "rgba(245,158,11,0.1)" : "rgba(14,165,233,0.1)"}, transparent)`,
                        }}
                      >
                        <div className="text-slate-300">{project.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="flex items-center gap-2 mb-5 text-sm text-indigo-400/80">
                    <span className="font-mono">↗</span>
                    <span>{project.impact}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium bg-white/[0.04] border border-white/[0.06] rounded-md text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Target Roles */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.targets.map((target, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium bg-indigo-500/[0.06] border border-indigo-500/[0.1] rounded-md text-indigo-400/70"
                      >
                        {target}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04]">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto p-2 text-slate-500 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
