"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillGroup {
  label: string;
  color: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    color: "text-blue-400 border-blue-500/20 bg-blue-500/[0.06]",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "AI & ML",
    color: "text-purple-400 border-purple-500/20 bg-purple-500/[0.06]",
    skills: ["LangChain", "Gemini API", "RAG", "Pinecone", "Vector DBs"],
  },
  {
    label: "Testing & QA",
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/[0.06]",
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
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/[0.06]",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    color: "text-amber-400 border-amber-500/20 bg-amber-500/[0.06]",
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
    color: "text-pink-400 border-pink-500/20 bg-pink-500/[0.06]",
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
    color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/[0.06]",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.015] to-transparent pointer-events-none" />

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
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technologies I work with.
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/15 transition-all duration-300"
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-4 ${group.color.split(" ")[0]}`}
              >
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${group.color} transition-all duration-200 hover:scale-[1.05] cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
