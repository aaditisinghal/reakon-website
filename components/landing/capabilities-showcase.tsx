"use client";

import { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    title: "GST Recovery",
    subtitle: "that handles itself",
    description: "Forward a bill on WhatsApp and automatically recover your input tax credit. Reakon reads it, checks it against the GST portal, and tells you exactly how much you just saved.",
    span: "lg:col-span-2",
    icon: "📄",
  },
  {
    title: "Customer Chasing",
    subtitle: "without the awkward calls",
    description: "Automatic WhatsApp reminders to customers who owe you money. Track every invoice, send polite reminders, get paid faster.",
    span: "lg:col-span-2",
    icon: "📲",
  },
  {
    title: "CA Collaboration",
    subtitle: "that eliminates delays",
    description: "Your CA posts P&L to your portal. Clean data, zero chasing.",
    span: "lg:col-span-1",
    icon: "🤝",
  },
  {
    title: "Vendor Tracking",
    subtitle: "that protects your credit",
    description: "Know which vendors haven't filed GST before your credit is blocked.",
    span: "lg:col-span-1",
    icon: "🚨",
  },
  {
    title: "Financial Clarity",
    subtitle: "updated live as you work",
    description: "Real-time GST, P&L, and cash flow metrics in one place.",
    span: "lg:col-span-1",
    icon: "📊",
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
      className={`group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white transition-all duration-500 hover:shadow-xl hover:-translate-y-2 p-8 lg:p-10 ${capability.span} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Arrow in top right */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          className={`w-6 h-6 text-gray-600 transition-transform duration-500 ${
            isHovered ? "translate-x-1" : "translate-x-0"
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

      {/* Icon */}
      <div
        className={`text-5xl mb-6 transition-all duration-500 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      >
        {capability.icon}
      </div>

      {/* Title with bold and light text */}
      <div className="mb-4">
        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">
          {capability.title}
        </h3>
        <p className="text-lg text-gray-500 font-normal">
          {capability.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-base text-gray-600 leading-relaxed">
        {capability.description}
      </p>
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
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-t border-foreground/10 bg-gray-50"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[1.05]">
            One platform for your entire GST lifecycle.
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
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
            Make the switch
          </button>
        </div>

        {/* Cards Grid - 2 columns on top, 3 on bottom */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              capability={capability}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
