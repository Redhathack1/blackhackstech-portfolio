"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link as a simple solution
    const mailtoLink = `mailto:pherolee.young@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-indigo-500" />
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-indigo-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s build something great.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Whether you need an AI integration, a testing framework, or a
            full-stack product — I&apos;m ready to ship. Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-5">
              <a
                href="mailto:pherolee.young@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/20 transition-all group"
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/15 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    Email
                  </p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    pherolee.young@gmail.com
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="ml-auto text-slate-600 group-hover:text-indigo-400 transition-colors"
                />
              </a>

              <a
                href="https://github.com/Redhathack1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/20 transition-all group"
              >
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/15 transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    GitHub
                  </p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    @Redhathack1
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="ml-auto text-slate-600 group-hover:text-purple-400 transition-colors"
                />
              </a>

              <a
                href="https://linkedin.com/in/oluwaferanmi-oladapo-5044901a1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/20 transition-all group"
              >
                <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/15 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    LinkedIn
                  </p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    Oluwaferanmi Oladapo
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="ml-auto text-slate-600 group-hover:text-sky-400 transition-colors"
                />
              </a>
            </div>

            {/* Quick Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <MapPin size={14} className="text-slate-600" />
                Based in the United Kingdom
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Clock size={14} className="text-slate-600" />
                Usually responds within 24 hours
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-wider font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.05] transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-wider font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.05] transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wider font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.05] transition-all text-sm"
                  placeholder="Project inquiry, contract, hiring..."
                />
              </div>

              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wider font-medium mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.05] transition-all text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] flex items-center gap-2 justify-center"
              >
                {submitted ? (
                  <>✓ Opening mail client...</>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
