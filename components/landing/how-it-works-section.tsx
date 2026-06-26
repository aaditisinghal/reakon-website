"use client";

import { useEffect, useRef, useState } from "react";

/* ── SVG Icons ─────────────────────────────────────────────────── */
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.393A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 9.5c.167.833.9 2.7 2.5 3.5s3.167.833 3.5 1c0 1-.833 2-2.5 2S8 14.667 8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17l5-5 4 4 5-6 4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconLock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3c-2.5 3-3.5 5.5-3.5 9s1 6 3.5 9M12 3c2.5 3 3.5 5.5 3.5 9s-1 6-3.5 9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 19c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 7c1.657 0 3 1.343 3 3s-1.343 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 19c0-2.209-1.343-4-3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Animated WhatsApp mini-preview ────────────────────────────── */
function WhatsAppPreview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [800, 1800, 2800, 3800, 5200];
    let current = 0;
    const tick = () => {
      current = (current + 1) % (steps.length + 1);
      setStep(current === steps.length ? 0 : current + 1);
    };
    const id = setInterval(tick, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-[260px] mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#1A1A1A] text-xs">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#075E54]">
        <div className="w-6 h-6 rounded-full bg-[oklch(0.62_0.15_160)] flex items-center justify-center text-white font-bold text-[10px]">R</div>
        <div>
          <div className="text-white text-[11px] font-semibold leading-none">Reakon</div>
          <div className="text-green-300 text-[9px]">online</div>
        </div>
      </div>
      {/* Chat */}
      <div className="p-3 min-h-[110px] bg-[#0D0D0D] space-y-2">
        {/* User sends bill */}
        <div className={`flex justify-end transition-all duration-500 ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          <div className="bg-[#1F4E3A] rounded-lg rounded-tr-none px-2.5 py-1.5 max-w-[65%]">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white/60" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="text-white/80 text-[9px]">invoice.pdf</span>
            </div>
            <div className="text-white/30 text-[8px] text-right mt-0.5">✓✓</div>
          </div>
        </div>
        {/* Typing */}
        {step === 2 && (
          <div className="flex justify-start">
            <div className="bg-[#1A1A1A] rounded-lg rounded-tl-none px-3 py-2 border border-white/5">
              <div className="flex gap-1">
                {[0, 150, 300].map((d) => (
                  <span key={d} className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Reakon replies */}
        <div className={`flex justify-start transition-all duration-500 ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          <div className="bg-[#1A1A1A] rounded-lg rounded-tl-none px-2.5 py-1.5 border border-white/5 text-[9px] text-white/70">
            Bill read. GST: ₹2,700
          </div>
        </div>
        <div className={`flex justify-start transition-all duration-500 ${step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          <div className="bg-[#1A1A1A] rounded-lg rounded-tl-none px-2.5 py-1.5 border border-white/5 text-[9px]">
            <span className="text-[oklch(0.62_0.15_160)] font-semibold">ITC saved ₹2,700</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Animated Dashboard mini-preview ───────────────────────────── */
function DashboardPreview() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const on = setTimeout(() => setRevealed(true), 600);
    const off = setTimeout(() => setRevealed(false), 3600);
    const on2 = setTimeout(() => setRevealed(true), 4200);
    const off2 = setTimeout(() => setRevealed(false), 7200);
    return () => [on, off, on2, off2].forEach(clearTimeout);
  }, []);

  const rows = [
    { label: "GST ITC", value: "₹2,45,000", color: "text-[oklch(0.62_0.15_160)]" },
    { label: "Net Profit", value: "₹8,20,000", color: "text-emerald-400" },
    { label: "Outstanding", value: "₹1,50,000", color: "text-amber-400" },
  ];

  return (
    <div className="w-full max-w-[260px] mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#1A1A1A] text-xs">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111] border-b border-white/5">
        <div className="flex gap-1">
          {["bg-red-500/60","bg-yellow-500/60","bg-green-500/60"].map((c,i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
          ))}
        </div>
        <span className="text-white/30 text-[9px] ml-1">app.reakon.in</span>
      </div>
      <div className={`p-3 space-y-1.5 transition-all duration-700 ${revealed ? "blur-none" : "blur-sm"}`}>
        <div className="text-[10px] font-semibold text-white/50 mb-2 uppercase tracking-wider">Financial Overview</div>
        {rows.map((r) => (
          <div key={r.label} className="flex justify-between items-center px-2 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
            <span className="text-white/50 text-[10px]">{r.label}</span>
            <span className={`text-[11px] font-semibold ${r.color}`}>{r.value}</span>
          </div>
        ))}
        <div className={`flex items-center gap-1.5 pt-1 transition-opacity duration-500 ${revealed ? "opacity-100" : "opacity-0"}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.15_160)] animate-pulse" />
          <span className="text-white/30 text-[9px] font-mono">Live</span>
        </div>
      </div>
    </div>
  );
}

/* ── Animated CA Handoff mini-preview ──────────────────────────── */
function CAPreview() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3200),
      setTimeout(() => setPhase(0), 5000),
    ];
    const loop = setInterval(() => {
      setPhase(0);
      setTimeout(() => setPhase(1), 800);
      setTimeout(() => setPhase(2), 2000);
      setTimeout(() => setPhase(3), 3200);
    }, 5600);
    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  return (
    <div className="w-full max-w-[260px] mx-auto rounded-xl border border-white/10 bg-[#1A1A1A] p-4 text-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="text-center">
          <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[11px] font-bold text-white/70 mx-auto mb-1">You</div>
        </div>
        {/* connector line */}
        <div className="flex-1 mx-3 h-px bg-white/10 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 h-full transition-all duration-700"
            style={{
              width: phase >= 2 ? "100%" : "0%",
              background: "oklch(0.62 0.15 160)",
            }}
          />
          {phase === 1 && (
            <div className="absolute inset-0 flex items-center gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-amber-400/60 animate-pulse" style={{ animationDelay: `${i * 60}ms` }} />
              ))}
            </div>
          )}
        </div>
        <div className="text-center">
          <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[11px] font-bold text-white/70 mx-auto mb-1">CA</div>
        </div>
      </div>
      <div className="text-center text-[11px] h-5">
        {phase === 0 && <span className="text-white/30">Waiting for update…</span>}
        {phase === 1 && <span className="text-amber-400">Syncing data…</span>}
        {phase === 2 && <span className="text-white/50">Handoff complete</span>}
        {phase === 3 && <span className="text-[oklch(0.62_0.15_160)] font-semibold">Clean & clear</span>}
      </div>
    </div>
  );
}

/* ── Trust cards data ───────────────────────────────────────────── */
const cards = [
  {
    number: "01",
    Icon: IconWhatsApp,
    headline: "Easy WhatsApp access.",
    body: "Forward a bill on WhatsApp when you get a minute. That's the entire job.",
    chip: "Works on the WhatsApp you already use.",
    Preview: WhatsAppPreview,
  },
  {
    number: "02",
    Icon: IconChart,
    headline: "See everything the moment it's ready.",
    body: "Your GST credit, your P&L, your outstanding payments — one clear picture, no waiting, no asking.",
    chip: "Updated live as your CA posts.",
    Preview: DashboardPreview,
  },
  {
    number: "03",
    Icon: IconUsers,
    headline: "Your CA stays your CA.",
    body: "We hand them clean data and hand you clarity. No more last-minute document chase — from either side.",
    chip: "Works alongside your existing CA.",
    Preview: CAPreview,
  },
];

/* ── Compliance badges ──────────────────────────────────────────── */
const badges = [
  { Icon: IconLock,   label: "We never see your GST password",          sub: "Access via a licensed channel's secure token." },
  { Icon: IconShield, label: "Government-licensed channel (MasterGST)", sub: "GST data via an officially licensed GSP." },
  { Icon: IconGlobe,  label: "Your data never leaves India",            sub: "Stored in India. Shared with no one." },
  { Icon: IconCheck,  label: "DPDP Act 2023 compliant",                 sub: "Built to India's data-protection law." },
  { Icon: IconCheck,  label: "Only with your permission",               sub: "We access nothing until you say yes." },
];

/* ── Section ────────────────────────────────────────────────────── */
export function HowItWorksSection() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-32 lg:py-40 bg-[#0A0A0A] text-white overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "oklch(0.62 0.15 160)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div className={`mb-20 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-flex items-center gap-3 text-[11px] font-mono text-white/40 uppercase tracking-widest mb-6">
            <span className="w-6 h-px bg-white/20" />
            Why you can trust us
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight leading-[1.05] max-w-3xl mb-5">
            Your money, your data, your CA — all protected.
          </h2>
          <p className="text-white/45 text-lg max-w-xl leading-relaxed">
            Nothing here is risky to try. Here's exactly why.
          </p>
        </div>

        {/* ── Three cards ── */}
        <div className="grid lg:grid-cols-3 gap-5 mb-12">
          {cards.map(({ number, Icon, headline, body, chip, Preview }, i) => (
            <div
              key={number}
              className={`group relative flex flex-col border border-white/[0.07] bg-white/[0.02] rounded-2xl overflow-hidden transition-all duration-700 hover:border-white/[0.14] hover:bg-white/[0.04] ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Top accent line */}
              <div className="h-px w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-transparent via-[oklch(0.62_0.15_160)] to-transparent" />

              <div className="p-7 flex-1 flex flex-col">
                {/* Icon row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/70 group-hover:text-[oklch(0.62_0.15_160)] transition-colors duration-300">
                    <Icon />
                  </div>
                  <span className="font-mono text-[11px] text-white/20">{number}</span>
                </div>

                {/* Text */}
                <h3 className="text-xl font-display mb-3 text-white leading-snug">{headline}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{body}</p>

                {/* Chip */}
                <div className="flex items-center gap-2 text-[11px] text-white/30 font-mono mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.15_160)]" />
                  {chip}
                </div>

                {/* Mini preview */}
                <Preview />
              </div>
            </div>
          ))}
        </div>

        {/* ── Compliance rail ── */}
        <div
          className={`rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 mb-14 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {badges.map(({ Icon, label, sub }, i) => (
              <div
                key={i}
                className={`group flex flex-col items-center text-center px-3 py-4 rounded-xl border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300 cursor-default ${vis ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${420 + i * 70}ms` }}
              >
                <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[oklch(0.62_0.15_160)] group-hover:border-[oklch(0.62_0.15_160)]/30 transition-colors duration-300 mb-3">
                  <Icon />
                </div>
                <span className="text-[11px] text-white/50 group-hover:text-white/80 transition-colors duration-300 leading-snug">{label}</span>
                <span className="text-[10px] text-white/25 mt-1.5 leading-snug hidden group-hover:block">{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className={`text-center transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-white/60 text-lg mb-8">
            You just saw how we protect it. Now see what you're owed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <button
              className="px-8 py-3 text-white font-semibold text-sm transition-all duration-200 hover:opacity-85 active:scale-[0.98]"
              style={{ background: "oklch(0.62 0.15 160)" }}
            >
              See My GST Number — Free
            </button>
            <button className="px-8 py-3 border border-white/20 text-white/70 font-semibold text-sm hover:border-white/40 hover:text-white transition-all duration-200">
              Book a Call
            </button>
          </div>
          <p className="text-white/25 text-xs font-mono tracking-wide">
            On Reakon · No card for initial trial · No app · Your data stays in India
          </p>
        </div>

      </div>
    </section>
  );
}
