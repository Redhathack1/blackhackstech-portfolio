"use client";

import React, { useState, useRef } from "react";
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
  Store,
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
}

const projects: Project[] = [
  {
    id: 1,
    title: "Stax Store Management System",
    subtitle: "Enterprise POS & Inventory Engine",
    category: ["Full Stack"],
    status: "Live",
    description:
      "An enterprise-grade Point of Sale (POS) and inventory management engine featuring secure RBAC, dynamic supplier linking, expense tracking, real-time financial analytics, and customized thermal receipt generation.",
    problem:
      "Cashiers and store administrators need a unified, lightning-fast system to manage inventory, log operational expenses, and process transactions without expensive dedicated hardware.",
    impact: "Role-based access (RBAC) • Recharts analytics • Thermal receipts • HTML5-QRCode scanning",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Tailwind CSS", "Recharts", "Electron"],
    icon: <Store size={24} />,
    accentColor: "from-emerald-500 to-teal-400",
    githubLink: "https://github.com/Redhathack1/stax-store-management-system",
    liveLink: "https://stax-store.vercel.app",
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
  },
  {
    id: 6,
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
  },
];

const categories: ProjectCategory[] = ["All", "AI / ML", "Full Stack", "DevOps"];

const statusColors: Record<string, string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Coming Soon": "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

const statusDot: Record<string, string> = {
  Live: "bg-emerald-400",
  "In Progress": "bg-amber-400",
  "Coming Soon": "bg-sky-400",
};

function handleTilt(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -6;
  const rotateY = ((x - centerX) / centerX) * 6;
  el.style.setProperty("--rx", `${rotateX}deg`);
  el.style.setProperty("--ry", `${rotateY}deg`);
}

function resetTilt(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
}

function ProjectCard({
  project,
  isFeatured,
}: {
  project: Project;
  isFeatured: boolean;
}) {
  const iconBgMap: Record<string, string> = {
    "from-blue-500 to-cyan-400": "rgba(59,130,246,0.12)",
    "from-purple-500 to-pink-400": "rgba(168,85,247,0.12)",
    "from-emerald-500 to-teal-400": "rgba(52,211,153,0.12)",
    "from-amber-500 to-orange-400": "rgba(245,158,11,0.12)",
    "from-sky-500 to-blue-400": "rgba(14,165,233,0.12)",
  };

  const iconBg = iconBgMap[project.accentColor] ?? "rgba(124,106,239,0.12)";

  if (isFeatured) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
        className="tilt-card group relative rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-[var(--border-active)] transition-colors duration-300 mb-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row">
          {/* Icon side */}
          <div className="flex items-center justify-center md:w-56 shrink-0 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/[0.04]">
            <div
              className="p-6 rounded-2xl"
              style={{ background: iconBg }}
            >
              <div className="text-[var(--text-primary)] scale-150">
                {project.icon}
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="flex-1 p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-1">
                  {project.subtitle}
                </p>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border shrink-0 ${statusColors[project.status]}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${statusDot[project.status]}`} />
                {project.status}
              </span>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
              {project.description}
            </p>

            <p className="text-sm text-[var(--text-muted)] italic mb-4">
              {project.problem}
            </p>

            <div className="flex items-center gap-2 mb-5 text-sm text-[var(--accent-cool)]">
              <span className="font-mono text-xs">▲</span>
              <span>{project.impact}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-medium bg-white/[0.04] border border-white/[0.06] rounded-md text-[var(--text-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04]">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Github size={16} />
                Source Code
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-cool)] transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/[0.05] rounded-lg transition-all"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard card
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
      className="tilt-card group relative p-6 sm:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-[var(--border-active)] transition-colors duration-300"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            <div
              className="p-3 rounded-xl"
              style={{ background: iconBgMap[project.accentColor] ?? "rgba(124,106,239,0.12)" }}
            >
              <div className="text-[var(--text-primary)]">{project.icon}</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                {project.subtitle}
              </p>
            </div>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border shrink-0 ${statusColors[project.status]}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${statusDot[project.status]}`} />
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Impact */}
        <div className="flex items-center gap-2 mb-5 text-sm text-[var(--accent-cool)]">
          <span className="font-mono text-xs">▲</span>
          <span>{project.impact}</span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-medium bg-white/[0.04] border border-white/[0.06] rounded-md text-[var(--text-secondary)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04]">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Github size={16} />
            Source Code
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-cool)] transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/[0.05] rounded-lg transition-all"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  const [featured, ...rest] = filtered;

  return (
    <section id="projects" className="py-28 relative">
      <div className="section-container">
        {/* Section Header — hand-drawn style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="relative inline-block mb-3">
            <span
              className="text-6xl sm:text-7xl font-black tracking-tighter text-[var(--text-primary)] inline-block"
              style={{ transform: "rotate(-2deg)", fontStyle: "italic" }}
            >
              Work
            </span>
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 120 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M2 5.5C20 2 40 7 60 4C80 1 100 6 118 3"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </svg>
          </div>
          <p className="text-lg text-[var(--text-secondary)] font-light">
            Featured projects &amp; builds.
          </p>
        </motion.div>

        {/* Filter Tabs — inline text links with animated underline */}
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-6 sm:gap-8 mb-14"
          aria-label="Project category filter"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative pb-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer"
              style={{
                color:
                  activeCategory === cat
                    ? "var(--text-primary)"
                    : "var(--text-muted)",
              }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="project-filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.nav>

        {/* Editorial Layout */}
        <AnimatePresence mode="popLayout">
          {/* Featured (first) project — full-width horizontal */}
          {featured && (
            <ProjectCard
              key={`featured-${featured.id}`}
              project={featured}
              isFeatured
            />
          )}

          {/* Remaining projects — 2-column grid */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {rest.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isFeatured={false}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
