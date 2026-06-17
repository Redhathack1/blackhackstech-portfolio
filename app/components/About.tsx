"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "API Endpoints Tested" },
  { value: "80%", label: "Testing Time Reduced" },
  { value: "5+", label: "Projects Shipped" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
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
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            The person behind the code.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I&apos;m an <strong className="text-white">SDET &amp; AI Engineer</strong> who
              thrives at the intersection of quality engineering and artificial
              intelligence. I don&apos;t just write tests — I build systems that
              think, adapt, and automate.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With a background in Computer Science and hands-on experience
              across fintech, AI, and network infrastructure, I bring a
              methodical, engineering-first approach to every project. My work
              spans from designing production-grade testing frameworks that
              validate 50+ API endpoints, to building AI agents that
              autonomously generate Playwright scripts from natural language
              requirements.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m driven by a simple conviction: <em className="text-slate-300">the best software
              should test itself.</em> Whether it&apos;s RAG-powered chatbots,
              CI/CD pipelines, or full-stack SaaS dashboards — I build things
              that work reliably and scale gracefully.
            </p>

            {/* Quick Info Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-slate-300">
                <MapPin size={14} className="text-indigo-400" />
                United Kingdom
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-slate-300">
                <Briefcase size={14} className="text-purple-400" />
                Open to Remote & Contract
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-slate-300">
                <GraduationCap size={14} className="text-pink-400" />
                BSc Computer Science
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/20 transition-colors text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
