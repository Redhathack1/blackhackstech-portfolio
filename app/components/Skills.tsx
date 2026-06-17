"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SkillGroup {
  label: string;
  dotColor: string;
  borderColor: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    dotColor: "bg-blue-400",
    borderColor: "border-l-blue-400",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "AI & ML",
    dotColor: "bg-purple-400",
    borderColor: "border-l-purple-400",
    skills: ["LangChain", "Gemini API", "RAG", "Pinecone", "Vector DBs"],
  },
  {
    label: "Testing & QA",
    dotColor: "bg-emerald-400",
    borderColor: "border-l-emerald-400",
    skills: [
      "Playwright",
      "Selenium",
      "Rest Assured",
      "TestNG",
      "JUnit",
      "Postman",
    ],
  },
  {
    label: "Frontend",
    dotColor: "bg-cyan-400",
    borderColor: "border-l-cyan-400",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    dotColor: "bg-amber-400",
    borderColor: "border-l-amber-400",
    skills: [
      "Node.js",
      "Express",
      "Spring Boot",
      "REST APIs",
      "JWT",
      "GraphQL",
    ],
  },
  {
    label: "DevOps & Tools",
    dotColor: "bg-pink-400",
    borderColor: "border-l-pink-400",
    skills: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Jenkins",
      "Git",
      "Linux",
    ],
  },
  {
    label: "Databases",
    dotColor: "bg-indigo-400",
    borderColor: "border-l-indigo-400",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase"],
  },
];

// Build flat list of all skills with their category info for marquee
const allSkillsTagged = skillGroups.flatMap((group) =>
  group.skills.map((skill) => ({
    name: skill,
    dotColor: group.dotColor,
    category: group.label,
  }))
);

// Split into two rows for visual variety
const midpoint = Math.ceil(allSkillsTagged.length / 2);
const row1Skills = allSkillsTagged.slice(0, midpoint);
const row2Skills = allSkillsTagged.slice(midpoint);

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof allSkillsTagged;
  reverse?: boolean;
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[var(--surface-base)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[var(--surface-base)] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-3 animate-marquee w-max"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-200 shrink-0 select-none"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${skill.dotColor}`}
            />
            <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="section-container">
        {/* Section Header — clean and minimal */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)] mb-12"
        >
          Skills &amp; Tools
        </motion.h2>

        {/* Infinite Marquee Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="space-y-3 mb-16"
        >
          <MarqueeRow items={row1Skills} />
          <MarqueeRow items={row2Skills} reverse />
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {skillGroups.map((group, i) => {
            const isExpanded = expandedCategory === group.label;

            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onMouseEnter={() => setExpandedCategory(group.label)}
                onMouseLeave={() => setExpandedCategory(null)}
                className={`relative p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] border-l-2 ${group.borderColor} cursor-default transition-all duration-300 ${
                  isExpanded
                    ? "scale-[1.03] border-white/[0.12] bg-white/[0.04] shadow-lg shadow-black/20"
                    : "hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {group.label}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)] tabular-nums">
                    {group.skills.length}
                  </span>
                </div>

                {/* Collapsed: just the count dash */}
                {!isExpanded && (
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    {group.skills.length} skill{group.skills.length !== 1 ? "s" : ""}
                  </p>
                )}

                {/* Expanded: show skill names */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 flex flex-wrap gap-1.5"
                  >
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs text-[var(--text-secondary)] bg-white/[0.04] border border-white/[0.06] rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
