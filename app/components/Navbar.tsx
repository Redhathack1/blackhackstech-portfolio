"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--surface-base)]/80 backdrop-blur-2xl border-b border-[var(--border-subtle)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[4.5rem]">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden border border-white/[0.08]"
                style={{
                  boxShadow: "0 4px 20px rgba(124, 106, 239, 0.2)",
                }}
              >
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <span className="text-[0.95rem] font-bold tracking-tight">
                <span style={{ color: "var(--text-primary)" }}>Black</span>
                <span className="gradient-text">Hacks</span>
                <span
                  style={{ color: "var(--text-muted)" }}
                  className="font-normal"
                >
                  .tech
                </span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-[0.8rem] font-medium tracking-wide uppercase transition-colors duration-200"
                  style={{
                    color:
                      hoveredLink === link.label
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                  }}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0.5 left-4 right-4 h-px origin-left"
                    style={{ background: "var(--accent)" }}
                    initial={false}
                    animate={{
                      scaleX: hoveredLink === link.label ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </a>
              ))}

              {/* Hire Me CTA */}
              <a
                href="#contact"
                className="ml-5 px-5 py-2 text-[0.8rem] font-semibold text-white rounded-full transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent-warm))",
                  boxShadow:
                    "0 0 20px rgba(124, 106, 239, 0.25), 0 0 40px rgba(124, 106, 239, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 25px rgba(124, 106, 239, 0.4), 0 0 50px rgba(124, 106, 239, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(124, 106, 239, 0.25), 0 0 40px rgba(124, 106, 239, 0.1)";
                }}
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(9, 9, 15, 0.97)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -40, rotate: -3 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-3xl font-semibold py-3 transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-primary)")
                  }
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mt-8 px-10 py-3.5 text-lg font-semibold text-white rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent-warm))",
                  boxShadow: "0 0 30px rgba(124, 106, 239, 0.3)",
                }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
