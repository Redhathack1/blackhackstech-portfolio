"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 3, suffix: "+", label: "Years Experience" },
  { target: 50, suffix: "+", label: "API Endpoints Tested" },
  { target: 80, suffix: "%", label: "Testing Time Reduced" },
  { target: 5, suffix: "+", label: "Projects Shipped" },
];

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const start = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [hasStarted, target, duration]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [start]);

  return { count, ref };
}

function AnimatedStat({ stat, index }: { stat: StatItem; index: number }) {
  const { count, ref } = useCountUp(stat.target);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: 0.15 * index }}
      className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[var(--border-active)] transition-all duration-300 text-center group"
    >
      <div className="text-3xl font-bold gradient-text mb-1 tabular-nums">
        {count}
        {stat.suffix}
      </div>
      <div className="text-[11px] text-[var(--text-muted)] font-medium uppercase tracking-wider group-hover:text-[var(--text-secondary)] transition-colors">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container">
        {/* Editorial Watermark Header */}
        <div className="relative mb-20">
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 0.03, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            aria-hidden="true"
            className="block text-[8rem] sm:text-[10rem] lg:text-[13rem] font-black leading-none select-none pointer-events-none text-white absolute -top-6 -left-3"
          >
            About
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative pt-16 sm:pt-20"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
              The person behind the code.
            </h2>
          </motion.div>
        </div>

        {/* Editorial 60/40 Layout with Overlapping Stats */}
        <div className="relative grid lg:grid-cols-12 gap-8 items-start">
          {/* Bio Text — spans 7 of 12 columns */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I&apos;m an{" "}
              <strong className="text-[var(--text-primary)] font-semibold">
                SDET &amp; AI Engineer
              </strong>{" "}
              who thrives at the intersection of quality engineering and
              artificial intelligence. I don&apos;t just write tests — I build
              systems that think, adapt, and automate.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              With a background in Computer Science and hands-on experience
              across fintech, AI, and network infrastructure, I bring a
              methodical, engineering-first approach to every project. My work
              spans from designing production-grade testing frameworks that
              validate 50+ API endpoints, to building AI agents that
              autonomously generate Playwright scripts from natural language
              requirements.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I&apos;m driven by a simple conviction:{" "}
              <em className="text-[var(--text-primary)] not-italic font-medium">
                the best software should test itself.
              </em>{" "}
              Whether it&apos;s RAG-powered chatbots, CI/CD pipelines, or
              full-stack SaaS dashboards — I build things that work reliably and
              scale gracefully.
            </p>

            {/* Quick Info Pills — distinct angular style */}
            <div className="flex flex-wrap gap-3 pt-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)]/[0.06] border border-[var(--accent)]/20 text-sm text-[var(--text-primary)]">
                <MapPin size={14} className="text-[var(--accent-cool)]" />
                United Kingdom
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-warm)]/[0.06] border border-[var(--accent-warm)]/20 text-sm text-[var(--text-primary)]">
                <Briefcase size={14} className="text-[var(--accent-warm)]" />
                Open to Remote &amp; Contract
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-gold)]/[0.06] border border-[var(--accent-gold)]/20 text-sm text-[var(--text-primary)]">
                <GraduationCap
                  size={14}
                  className="text-[var(--accent-gold)]"
                />
                BSc Computer Science
              </div>
            </div>
          </motion.div>

          {/* Stats Grid — spans 5 of 12, overlaps into the bio column */}
          <div className="lg:col-span-5 lg:-ml-10 lg:mt-12 relative z-10">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <AnimatedStat key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
