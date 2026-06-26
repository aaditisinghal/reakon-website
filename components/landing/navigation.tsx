"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#what-reakon-does" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Why Us", href: "#infrastructure" },
  { name: "Reviews", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

function IndianFlag() {
  return (
    <svg width="22" height="16" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" className="rounded-sm overflow-hidden shrink-0">
      <rect width="28" height="6.67" y="0" fill="#FF9933" />
      <rect width="28" height="6.67" y="6.67" fill="#FFFFFF" />
      <rect width="28" height="6.67" y="13.33" fill="#138808" />
      <circle cx="14" cy="10" r="2.8" fill="none" stroke="#000080" strokeWidth="0.5" />
      <circle cx="14" cy="10" r="0.4" fill="#000080" />
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={14 + 0.4 * Math.cos(angle)}
            y1={10 + 0.4 * Math.sin(angle)}
            x2={14 + 2.4 * Math.cos(angle)}
            y2={10 + 2.4 * Math.sin(angle)}
            stroke="#000080"
            strokeWidth="0.4"
          />
        );
      })}
    </svg>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: isScrolled ? "10px" : "0px",
          left: isScrolled ? "44px" : "0px",
          right: isScrolled ? "44px" : "0px",
          zIndex: 50,
          transition: "top 600ms cubic-bezier(0.4,0,0.2,1), left 600ms cubic-bezier(0.4,0,0.2,1), right 600ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <nav
          style={{
            width: "100%",
            borderRadius: isScrolled ? "18px" : "0px",
            background: isScrolled ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.72)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: isScrolled ? "1px solid rgba(0,0,0,0.09)" : "none",
            borderBottom: isScrolled ? undefined : "1px solid rgba(0,0,0,0.07)",
            boxShadow: isScrolled ? "0 8px 40px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.6) inset" : "none",
            transition: "border-radius 600ms cubic-bezier(0.4,0,0.2,1), background 400ms ease, box-shadow 400ms ease",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: isScrolled ? "62px" : "76px",
              padding: isScrolled ? "0 20px" : "0 40px",
              transition: "height 600ms cubic-bezier(0.4,0,0.2,1), padding 600ms cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {/* Logo */}
            <a href="#" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <img
                src="/reakon no-bg logo-black.png"
                alt="Reakon"
                style={{
                  height: "56px",
                  display: "block",
                }}
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center" style={{ gap: "2px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const id = link.href.replace("#", "");
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="whitespace-nowrap rounded-lg hover:bg-black/[0.06] transition-colors duration-150 cursor-pointer"
                  style={{
                    padding: "6px 12px",
                    fontSize: "13.5px",
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.55)",
                    background: "none",
                    border: "none",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(0,0,0,0.9)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.55)")}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right: flag + sign in + CTA */}
            <div className="hidden md:flex items-center" style={{ gap: "8px" }}>
              <IndianFlag />

              <a
                href="#"
                className="whitespace-nowrap rounded-lg hover:bg-black/[0.06] transition-colors duration-150"
                style={{
                  padding: "6px 12px",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  color: "rgba(0,0,0,0.55)",
                  textDecoration: "none",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(0,0,0,0.9)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.55)")}
              >
                Sign in
              </a>

              <a
                href="https://cal.com/reakon.in/45min"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap flex-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 18px",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "#fff",
                  background: "oklch(0.62 0.15 160)",
                  borderRadius: "0px",
                  textDecoration: "none",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                  transition: "opacity 150ms ease, transform 150ms ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.82"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
                onMouseDown={e => { e.currentTarget.style.transform = "scale(0.97)"; }}
                onMouseUp={e => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                Contact Us Now
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-10">
          <div className="flex-1 flex flex-col justify-center gap-6">
            {navLinks.map((link, i) => (
              <button
                key={link.name}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const id = link.href.replace("#", "");
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 300);
                }}
                className={`text-4xl font-display font-semibold text-foreground hover:text-foreground/50 transition-all duration-300 cursor-pointer text-left ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : "0ms", background: "none", border: "none" }}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div
            className={`flex gap-3 pt-8 border-t border-black/10 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "280ms" : "0ms" }}
          >
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center h-14 rounded-2xl border border-black/15 text-base font-medium hover:bg-black/5 transition-colors"
            >
              Sign in
            </a>
            <a
              href="https://cal.com/reakon.in/45min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center h-14 rounded-2xl text-white text-base font-semibold hover:opacity-80 transition-colors"
              style={{ background: "oklch(0.62 0.15 160)" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
