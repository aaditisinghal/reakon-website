"use client";

import { useEffect, useRef, useState } from "react";

function GSTIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Phone outline */}
      <rect x="20" y="10" width="90" height="140" rx="12" fill="white" fillOpacity="0.6" stroke="white" strokeWidth="1.5"/>
      <rect x="28" y="24" width="74" height="118" rx="6" fill="white" fillOpacity="0.3"/>
      {/* WhatsApp green header */}
      <rect x="28" y="24" width="74" height="22" rx="6" fill="#25D366" fillOpacity="0.9"/>
      <circle cx="40" cy="35" r="7" fill="white" fillOpacity="0.4"/>
      <rect x="51" y="31" width="30" height="4" rx="2" fill="white" fillOpacity="0.7"/>
      <rect x="51" y="37" width="20" height="3" rx="1.5" fill="white" fillOpacity="0.5"/>
      {/* Chat bubble */}
      <rect x="32" y="52" width="56" height="36" rx="8" fill="white" fillOpacity="0.8"/>
      <rect x="36" y="58" width="20" height="3" rx="1.5" fill="#6b7280"/>
      <rect x="36" y="64" width="44" height="3" rx="1.5" fill="#9ca3af"/>
      <rect x="36" y="70" width="36" height="3" rx="1.5" fill="#9ca3af"/>
      <rect x="36" y="79" width="10" height="2.5" rx="1.25" fill="#9ca3af"/>
      {/* PDF icon in bubble */}
      <rect x="34" y="95" width="56" height="38" rx="8" fill="#f59e0b" fillOpacity="0.15"/>
      <rect x="40" y="101" width="16" height="20" rx="3" fill="#f59e0b" fillOpacity="0.6"/>
      <rect x="43" y="106" width="10" height="2" rx="1" fill="white" fillOpacity="0.8"/>
      <rect x="43" y="110" width="10" height="2" rx="1" fill="white" fillOpacity="0.8"/>
      <rect x="43" y="114" width="6" height="2" rx="1" fill="white" fillOpacity="0.8"/>
      <rect x="60" y="103" width="24" height="3" rx="1.5" fill="#374151"/>
      <rect x="60" y="109" width="18" height="2.5" rx="1.25" fill="#9ca3af"/>
      <rect x="60" y="115" width="20" height="2.5" rx="1.25" fill="#9ca3af"/>

      {/* Arrow pointing right */}
      <path d="M118 80 L140 80" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2"/>
      <path d="M136 75 L142 80 L136 85" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

      {/* GST portal screen */}
      <rect x="148" y="18" width="112" height="124" rx="10" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="1.5"/>
      <rect x="155" y="26" width="98" height="108" rx="6" fill="white" fillOpacity="0.25"/>
      <rect x="155" y="26" width="98" height="18" rx="6" fill="#1e3a5f" fillOpacity="0.7"/>
      <rect x="160" y="31" width="40" height="3" rx="1.5" fill="white" fillOpacity="0.8"/>
      <rect x="160" y="37" width="56" height="2.5" rx="1.25" fill="#f59e0b" fillOpacity="0.7"/>

      {/* Credit match tick */}
      <circle cx="204" cy="95" r="22" fill="#22c55e" fillOpacity="0.15"/>
      <circle cx="204" cy="95" r="16" fill="#22c55e" fillOpacity="0.25"/>
      <path d="M196 95 L201 101 L213 88" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

      {/* ITC recovered label */}
      <rect x="162" y="124" width="76" height="14" rx="7" fill="#f59e0b" fillOpacity="0.9"/>
      <rect x="170" y="129" width="60" height="3" rx="1.5" fill="white" fillOpacity="0.9"/>
    </svg>
  );
}

function CustomerChasingIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Invoice card */}
      <rect x="16" y="14" width="100" height="132" rx="12" fill="white" fillOpacity="0.55" stroke="white" strokeWidth="1.5"/>
      <rect x="24" y="28" width="84" height="10" rx="5" fill="#1e3a5f" fillOpacity="0.6"/>
      <rect x="24" y="44" width="84" height="3" rx="1.5" fill="#e5e7eb"/>
      <rect x="24" y="50" width="60" height="3" rx="1.5" fill="#e5e7eb"/>
      <rect x="24" y="60" width="84" height="1" rx="0.5" fill="#e5e7eb"/>
      {/* Line items */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="24" y={68 + i*16} width="44" height="3" rx="1.5" fill="#9ca3af"/>
          <rect x="84" y={68 + i*16} width="24" height="3" rx="1.5" fill="#374151"/>
        </g>
      ))}
      <rect x="24" y="120" width="84" height="1" rx="0.5" fill="#e5e7eb"/>
      <rect x="24" y="126" width="36" height="4" rx="2" fill="#374151"/>
      <rect x="84" y="126" width="24" height="4" rx="2" fill="#ef4444" fillOpacity="0.8"/>

      {/* Overdue badge */}
      <rect x="30" y="134" width="52" height="7" rx="3.5" fill="#ef4444" fillOpacity="0.15"/>
      <rect x="36" y="136.5" width="40" height="2" rx="1" fill="#ef4444" fillOpacity="0.8"/>

      {/* Animated notification dots */}
      <circle cx="152" cy="48" r="6" fill="#25D366" fillOpacity="0.9"/>
      <circle cx="152" cy="48" r="10" fill="#25D366" fillOpacity="0.2"/>
      <circle cx="152" cy="80" r="6" fill="#25D366" fillOpacity="0.7"/>
      <circle cx="152" cy="80" r="10" fill="#25D366" fillOpacity="0.15"/>
      <circle cx="152" cy="112" r="6" fill="#25D366" fillOpacity="0.4"/>
      <circle cx="152" cy="112" r="10" fill="#25D366" fillOpacity="0.08"/>

      {/* WhatsApp reminder bubbles */}
      <rect x="164" y="26" width="100" height="34" rx="10" fill="white" fillOpacity="0.7"/>
      <rect x="172" y="32" width="56" height="3" rx="1.5" fill="#374151"/>
      <rect x="172" y="38" width="80" height="2.5" rx="1.25" fill="#9ca3af"/>
      <rect x="172" y="44" width="64" height="2.5" rx="1.25" fill="#9ca3af"/>
      <rect x="172" y="50" width="28" height="2" rx="1" fill="#9ca3af"/>

      <rect x="164" y="66" width="100" height="28" rx="10" fill="white" fillOpacity="0.5"/>
      <rect x="172" y="72" width="48" height="3" rx="1.5" fill="#374151"/>
      <rect x="172" y="78" width="72" height="2.5" rx="1.25" fill="#9ca3af"/>
      <rect x="172" y="84" width="40" height="2" rx="1" fill="#9ca3af"/>

      <rect x="164" y="100" width="100" height="28" rx="10" fill="white" fillOpacity="0.3"/>
      <rect x="172" y="106" width="40" height="3" rx="1.5" fill="#374151"/>
      <rect x="172" y="112" width="60" height="2.5" rx="1.25" fill="#9ca3af"/>
      <rect x="172" y="118" width="32" height="2" rx="1" fill="#9ca3af"/>

      {/* Paid badge */}
      <rect x="180" y="134" width="44" height="14" rx="7" fill="#22c55e" fillOpacity="0.9"/>
      <rect x="188" y="139" width="28" height="3" rx="1.5" fill="white"/>
    </svg>
  );
}

function CAIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Document */}
      <rect x="20" y="20" width="70" height="90" rx="8" fill="white" fillOpacity="0.6" stroke="white" strokeWidth="1.5"/>
      <rect x="28" y="32" width="54" height="4" rx="2" fill="#374151" fillOpacity="0.7"/>
      <rect x="28" y="42" width="40" height="3" rx="1.5" fill="#9ca3af"/>
      <rect x="28" y="50" width="54" height="2.5" rx="1.25" fill="#e5e7eb"/>
      <rect x="28" y="56" width="44" height="2.5" rx="1.25" fill="#e5e7eb"/>
      {/* Mini bar chart */}
      <rect x="28" y="70" width="10" height="24" rx="2" fill="#f59e0b" fillOpacity="0.8"/>
      <rect x="42" y="78" width="10" height="16" rx="2" fill="#f59e0b" fillOpacity="0.5"/>
      <rect x="56" y="64" width="10" height="30" rx="2" fill="#f59e0b" fillOpacity="0.65"/>
      {/* CA avatar */}
      <circle cx="55" cy="125" r="16" fill="#1e3a5f" fillOpacity="0.15"/>
      <circle cx="55" cy="119" r="8" fill="#1e3a5f" fillOpacity="0.4"/>
      <path d="M39 135 Q55 128 71 135" fill="#1e3a5f" fillOpacity="0.3"/>
      {/* Arrow */}
      <path d="M100 80 L118 80" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2"/>
      <path d="M114 75 L120 80 L114 85" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Portal screen */}
      <rect x="122" y="30" width="60" height="80" rx="8" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="1.5"/>
      <rect x="128" y="38" width="48" height="8" rx="4" fill="#1e3a5f" fillOpacity="0.5"/>
      <rect x="128" y="52" width="36" height="3" rx="1.5" fill="#9ca3af"/>
      <rect x="128" y="58" width="48" height="2.5" rx="1.25" fill="#e5e7eb"/>
      <rect x="128" y="64" width="40" height="2.5" rx="1.25" fill="#e5e7eb"/>
      <circle cx="152" cy="90" r="12" fill="#22c55e" fillOpacity="0.2"/>
      <path d="M146 90 L150 95 L159 84" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function VendorIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Shield */}
      <path d="M100 18 L144 36 L144 80 Q144 118 100 138 Q56 118 56 80 L56 36 Z" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5"/>
      <path d="M100 30 L132 44 L132 80 Q132 108 100 124 Q68 108 68 80 L68 44 Z" fill="white" fillOpacity="0.2"/>
      {/* Warning icon inside */}
      <path d="M100 56 L112 82 L88 82 Z" fill="#ef4444" fillOpacity="0.7" stroke="#ef4444" strokeWidth="1" strokeLinejoin="round"/>
      <rect x="98.5" y="62" width="3" height="11" rx="1.5" fill="white"/>
      <circle cx="100" cy="77" r="1.5" fill="white"/>
      {/* Risk dots around */}
      <circle cx="56" cy="36" r="5" fill="#ef4444" fillOpacity="0.6"/>
      <circle cx="144" cy="36" r="5" fill="#ef4444" fillOpacity="0.4"/>
      <circle cx="56" cy="100" r="5" fill="#f59e0b" fillOpacity="0.6"/>
      <circle cx="144" cy="100" r="5" fill="#f59e0b" fillOpacity="0.4"/>
      {/* Vendor list */}
      <rect x="18" y="110" width="60" height="36" rx="6" fill="white" fillOpacity="0.4"/>
      <rect x="24" y="116" width="36" height="3" rx="1.5" fill="#374151"/>
      <circle cx="24" cy="127" r="3" fill="#ef4444" fillOpacity="0.8"/>
      <rect x="30" y="125" width="40" height="2.5" rx="1.25" fill="#9ca3af"/>
      <circle cx="24" cy="137" r="3" fill="#22c55e" fillOpacity="0.8"/>
      <rect x="30" y="135" width="32" height="2.5" rx="1.25" fill="#9ca3af"/>
      {/* GST label */}
      <rect x="122" y="110" width="60" height="36" rx="6" fill="white" fillOpacity="0.4"/>
      <rect x="128" y="116" width="48" height="3" rx="1.5" fill="#374151"/>
      <rect x="128" y="124" width="24" height="10" rx="3" fill="#ef4444" fillOpacity="0.2"/>
      <rect x="130" y="127" width="20" height="3" rx="1.5" fill="#ef4444" fillOpacity="0.7"/>
      <rect x="128" y="138" width="48" height="2.5" rx="1.25" fill="#9ca3af"/>
    </svg>
  );
}

function FinancialIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Dashboard card */}
      <rect x="14" y="14" width="172" height="132" rx="12" fill="white" fillOpacity="0.35" stroke="white" strokeWidth="1.5"/>
      {/* Header bar */}
      <rect x="14" y="14" width="172" height="28" rx="12" fill="#1e3a5f" fillOpacity="0.5"/>
      <rect x="14" y="30" width="172" height="12" fill="#1e3a5f" fillOpacity="0.5"/>
      <circle cx="28" cy="28" r="5" fill="white" fillOpacity="0.3"/>
      <circle cx="44" cy="28" r="5" fill="white" fillOpacity="0.3"/>
      <circle cx="60" cy="28" r="5" fill="white" fillOpacity="0.3"/>
      <rect x="80" y="24" width="80" height="7" rx="3.5" fill="white" fillOpacity="0.15"/>

      {/* Metric cards */}
      <rect x="22" y="52" width="48" height="36" rx="8" fill="white" fillOpacity="0.5"/>
      <rect x="28" y="58" width="24" height="3" rx="1.5" fill="#9ca3af"/>
      <rect x="28" y="65" width="36" height="5" rx="2.5" fill="#374151"/>
      <rect x="28" y="74" width="18" height="3" rx="1.5" fill="#22c55e" fillOpacity="0.8"/>

      <rect x="78" y="52" width="48" height="36" rx="8" fill="white" fillOpacity="0.5"/>
      <rect x="84" y="58" width="24" height="3" rx="1.5" fill="#9ca3af"/>
      <rect x="84" y="65" width="36" height="5" rx="2.5" fill="#374151"/>
      <rect x="84" y="74" width="18" height="3" rx="1.5" fill="#f59e0b" fillOpacity="0.8"/>

      <rect x="134" y="52" width="48" height="36" rx="8" fill="white" fillOpacity="0.5"/>
      <rect x="140" y="58" width="24" height="3" rx="1.5" fill="#9ca3af"/>
      <rect x="140" y="65" width="36" height="5" rx="2.5" fill="#374151"/>
      <rect x="140" y="74" width="18" height="3" rx="1.5" fill="#22c55e" fillOpacity="0.8"/>

      {/* Area chart */}
      <path d="M22 128 Q48 116 74 108 Q100 100 126 112 Q152 120 178 98 L178 136 L22 136 Z"
        fill="#f59e0b" fillOpacity="0.15"/>
      <path d="M22 128 Q48 116 74 108 Q100 100 126 112 Q152 120 178 98"
        stroke="#f59e0b" strokeWidth="2" fill="none"/>
      {/* Dot on chart */}
      <circle cx="126" cy="112" r="4" fill="#f59e0b"/>
      <circle cx="126" cy="112" r="7" fill="#f59e0b" fillOpacity="0.25"/>
    </svg>
  );
}

const capabilities = [
  {
    title: "GST Recovery",
    subtitle: "that handles itself",
    description: "Forward a bill on WhatsApp and automatically recover your input tax credit. Reakon reads it, checks it against the GST portal, and tells you exactly how much you just saved.",
    illustration: <GSTIllustration />,
    gradient: "from-blue-400/10 via-cyan-300/10 to-white/20",
    border: "border-blue-200/40",
    accent: "text-blue-600",
    row: "top",
  },
  {
    title: "Customer Chasing",
    subtitle: "without the awkward calls",
    description: "Automatic WhatsApp reminders to customers who owe you money. Track every invoice, send polite reminders, get paid faster.",
    illustration: <CustomerChasingIllustration />,
    gradient: "from-green-400/10 via-emerald-300/10 to-white/20",
    border: "border-green-200/40",
    accent: "text-green-600",
    row: "top",
  },
  {
    title: "CA Collaboration",
    subtitle: "that eliminates delays",
    description: "Your CA posts P&L to your portal. Clean data, zero chasing.",
    illustration: <CAIllustration />,
    gradient: "from-amber-400/10 via-yellow-300/10 to-white/20",
    border: "border-amber-200/40",
    accent: "text-amber-600",
    row: "bottom",
  },
  {
    title: "Vendor Tracking",
    subtitle: "that protects your credit",
    description: "Know which vendors haven't filed GST before your credit is blocked.",
    illustration: <VendorIllustration />,
    gradient: "from-red-400/10 via-rose-300/10 to-white/20",
    border: "border-red-200/40",
    accent: "text-red-600",
    row: "bottom",
  },
  {
    title: "Financial Clarity",
    subtitle: "updated live as you work",
    description: "Real-time GST, P&L, and cash flow metrics in one place.",
    illustration: <FinancialIllustration />,
    gradient: "from-purple-400/10 via-violet-300/10 to-white/20",
    border: "border-purple-200/40",
    accent: "text-purple-600",
    row: "bottom",
  },
];

function CapabilityCard({
  capability,
  index,
  isVisible,
  isWide,
}: {
  capability: (typeof capabilities)[0];
  index: number;
  isVisible: boolean;
  isWide: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isWide ? "flex flex-col lg:flex-row" : "flex flex-col"}`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.3)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top edge highlight — the key glassmorphism detail */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

      {/* Hover sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Arrow in top right */}
      <div className={`absolute top-5 right-5 z-10 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isHovered ? "translate-x-0.5 -translate-y-0.5" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </div>

      {/* Text content */}
      <div className={`relative z-10 p-8 lg:p-10 ${isWide ? "lg:w-1/2 flex flex-col justify-center" : ""}`}>
        <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-1 leading-tight">
          {capability.title}
        </h3>
        <p className="text-base font-normal mb-4 text-white/60">
          {capability.subtitle}
        </p>
        <p className="text-sm text-white/50 leading-relaxed">
          {capability.description}
        </p>
      </div>

      {/* Illustration */}
      <div
        className={`relative z-10 ${
          isWide
            ? "lg:w-1/2 h-48 lg:h-auto p-4"
            : "h-44 px-6 pb-6 mt-auto"
        } transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
      >
        {capability.illustration}
      </div>
    </div>
  );
}

export function CapabilitiesShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const topCards = capabilities.filter(c => c.row === "top");
  const bottomCards = capabilities.filter(c => c.row === "bottom");

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-t border-foreground/10 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Subtle dark blobs so glass still has depth */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #1e1e2e, transparent)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, #1a1a2e, transparent)" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`max-w-3xl mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[1.05] text-white">
            One platform for your entire GST lifecycle.
          </h2>
          <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
            Reakon handles the complexity so you can focus on growing your business.
          </p>
        </div>

        {/* CTA Button */}
        <div className={`mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
            Make the switch
          </button>
        </div>

        {/* Top row — 2 wide cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {topCards.map((capability, i) => (
            <CapabilityCard key={i} capability={capability} index={i} isVisible={isVisible} isWide={true} />
          ))}
        </div>

        {/* Bottom row — 3 equal cards full width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bottomCards.map((capability, i) => (
            <CapabilityCard key={i} capability={capability} index={i + 2} isVisible={isVisible} isWide={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
