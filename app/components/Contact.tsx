"use client";

import { useState, FormEvent, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight, MapPin, Clock } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "pherolee.young@gmail.com",
    href: "mailto:pherolee.young@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Redhathack1",
    href: "https://github.com/Redhathack1",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "BlackHacksTech",
    href: "https://linkedin.com/in/BlackHacksTech",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [magnetOffset, setMagnetOffset] = useState({ x: 0, y: 0 });

  const handleMagnetMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = ((e.clientX - centerX) / (rect.width / 2)) * 4;
    const offsetY = ((e.clientY - centerY) / (rect.height / 2)) * 4;
    setMagnetOffset({ x: offsetX, y: offsetY });
  };

  const handleMagnetLeave = () => {
    setMagnetOffset({ x: 0, y: 0 });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:pherolee.young@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;

    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-28">
      <div className="section-container">
        {/* ── Header — pattern break: no label, no decorative line ── */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            Let&apos;s build something great.
          </h2>
          <p className="mt-5 text-[var(--text-secondary)] text-lg leading-relaxed">
            Have a project in mind, a question, or just want to connect? I&apos;d
            love to hear from you.
          </p>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* ── LEFT: Contact info ── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {contactLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-start gap-4 p-5 cursor-pointer"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                  <item.icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    {item.label}
                  </p>
                  <p className="text-[var(--text-primary)] text-sm font-medium truncate">
                    {item.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="mt-1 shrink-0 text-[var(--text-muted)] opacity-0 -translate-y-1 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
                />
              </motion.a>
            ))}

            {/* ── Meta badges ── */}
            <div className="mt-3 flex flex-col gap-3 pl-1">
              <span className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
                <MapPin size={14} className="text-[var(--accent-warm)]" />
                Based in Nigeria
              </span>
              <span className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
                <Clock size={14} className="text-[var(--accent-cool)]" />
                Available 24/7
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT: Contact form ── */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 card p-7 sm:p-9 space-y-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] mb-2 font-medium">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="input-field w-full"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] mb-2 font-medium">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="input-field w-full"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                required
                placeholder="What's this about?"
                className="input-field w-full"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="input-field w-full resize-none"
              />
            </div>

            {/* Submit with magnetic effect */}
            <div className="pt-2">
              {submitted ? (
                <div className="flex items-center gap-2 text-[var(--accent-cool)] text-sm font-medium py-3">
                  <span>✓</span> Opening mail client...
                </div>
              ) : (
                <div
                  onMouseMove={handleMagnetMove}
                  onMouseLeave={handleMagnetLeave}
                  className="magnetic-wrap inline-block"
                >
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold transition-colors duration-200 hover:bg-[var(--accent)]/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                    style={{
                      transform: `translate(${magnetOffset.x}px, ${magnetOffset.y}px)`,
                      transition: "transform 0.2s ease-out",
                    }}
                  >
                    Send Message
                    <Send size={15} />
                  </button>
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
