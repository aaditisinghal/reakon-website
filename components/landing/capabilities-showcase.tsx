"use client";

import { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    title: "GST Recovery",
    subtitle: "that handles itself",
    description: "Forward a bill on WhatsApp and automatically recover your input tax credit.",
    icon: "📄",
    gradient: "from-blue-50 to-blue-100",
  },
  {
    title: "Customer Chasing",
    subtitle: "without the awkward calls",
    description: "Automatic WhatsApp reminders to customers who owe you money.",
    icon: "📲",
    gradient: "from-purple-50 to-purple-100",
  },
  {
    title: "CA Collaboration",
    subtitle: "that eliminates delays",
    description: "Your CA posts P&L to your portal. Clean data, zero chasing.",
    icon: "🤝",
    gradient: "from-pink-50 to-pink-100",
  },
  {
    title: "Vendor Tracking",
    subtitle: "that protects your credit",
    description: "Know which vendors haven't filed GST before your credit is blocked.",
    icon: "🚨",
    gradient: "from-red-50 to-red-100",
  },
  {
    title: "Financial Clarity",
    subtitle: "updated live as you work",
    description: "Real-time GST, P&L, and cash flow metrics in one place.",
    icon: "📊",
    gradient: "from-green-50 to-green-100",
  },
  {
    title: "WhatsApp Native",
    subtitle: "no app required",
    description: "Everything happens on WhatsApp. No new software to learn.",
    icon: "💬",
    gradient: "from-amber-50 to-amber-100",
  },
];

function CapabilityCard({
  capability,
  index,
  isVisible,
}: {
  capability: (typeof capabilities)[0];
  index: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative z-10 p-8 lg:p-10">
        {/* Icon */}
        <div
          className={`text-5xl mb-6 transition-all duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        >
          {capability.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-display tracking-tight mb-2 text-foreground">
          {capability.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm font-mono text-amber-600 font-semibold mb-4">
          {capability.subtitle}
        </p>

        {/* Description */}
        <p className="text-base text-gray-600 leading-relaxed">
          {capability.description}
        </p>

        {/* Arrow */}
        <div
          className={`mt-6 flex items-center gap-2 text-amber-600 font-semibold transition-all duration-500 ${
            isHovered ? "gap-4" : "gap-2"
          }`}
        >
          <span>Learn more</span>
          <svg
            className={`w-5 h-5 transition-transform duration-500 ${
              isHovered ? "translate-x-2" : "translate-x-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function CapabilitiesShowcase() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`max-w-3xl mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[1.05]">
            One platform for your entire GST lifecycle.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Reakon handles the complexity so you can focus on growing your business.
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
            Start your free trial
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              capability={capability}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom text */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything integrates with WhatsApp. No new app to learn. No complex setup. Just forward a bill and let Reakon handle the rest.
          </p>
        </div>
      </div>
    </section>
  );
}
