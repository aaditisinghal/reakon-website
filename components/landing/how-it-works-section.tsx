"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    icon: "🟢",
    title: "Easy WhatsApp access",
    body: "No app, no dashboard to learn. You forward bills when you have a minute. That's the whole job.",
  },
  {
    icon: "📊",
    title: "Full transparency",
    body: "Your GST credit, P&L, and outstanding payments — your complete financial picture, in one place, whenever you want.",
  },
  {
    icon: "🤝",
    title: "Your CA, but smoother",
    body: "Your CA stays your CA. We give them clean data and give you clarity. Nobody chases anybody at the last minute.",
  },
];

const compliance = [
  "GSTN access via MasterGST — a licensed GSP",
  "Data stored in India",
  "DPDP-compliant",
  "Access only with your permission",
];

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Why you can trust us
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight leading-[1.05]">
            Simple. Transparent.
            <br />
            <span className="text-background/50">On your terms.</span>
          </h2>
        </div>

        {/* Three cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`border border-background/10 p-8 lg:p-10 transition-all duration-700 hover:border-background/25 hover:bg-background/[0.03] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-3xl mb-6">{card.icon}</div>
              <h3 className="text-xl lg:text-2xl font-display mb-4 text-background">
                {card.title}
              </h3>
              <p className="text-background/60 leading-relaxed text-base">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance band */}
        <div className={`border border-background/10 bg-background/[0.04] px-6 lg:px-10 py-5 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
            <span className="text-xs font-mono text-background/40 uppercase tracking-widest lg:mr-8 shrink-0">
              Compliance
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {compliance.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                  <span className="text-xs text-background/60 font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
