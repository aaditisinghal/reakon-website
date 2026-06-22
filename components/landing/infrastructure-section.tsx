"use client";

import { useEffect, useRef, useState } from "react";

const rows = [
  {
    feature: "Works with your WhatsApp",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "cross" },
    vyapar: { value: "cross" },
  },
  {
    feature: "Recovers ITC from missing / unfiled bills",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "partial" },
    vyapar: { value: "partial" },
  },
  {
    feature: "Flags risky vendors before deadline",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "cross" },
    vyapar: { value: "cross" },
  },
  {
    feature: "Chases your customers for payment",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "cross" },
    vyapar: { value: "cross" },
  },
  {
    feature: "Your CA posts P&L to your portal",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "cross" },
    vyapar: { value: "cross" },
  },
  {
    feature: "Built for disorganised businesses",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "cross" },
    vyapar: { value: "cross" },
  },
  {
    feature: "AI reads your bills automatically",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "partial" },
    vyapar: { value: "cross" },
  },
  {
    feature: "Works alongside your existing CA",
    reakon: { value: "check" },
    zoho: { value: "partial" },
    smartgst: { value: "cross" },
    vyapar: { value: "partial" },
  },
];

function Cell({ value }: { value: string }) {
  if (value === "check") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100">
        <svg className="w-4 h-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-500">
        Partial
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
      <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </span>
  );
}

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="infrastructure" className="relative py-24 lg:py-32 bg-white border-t border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-muted-foreground uppercase mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Why Reakon
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[1.05]">
            Built for how Indian businesses<br className="hidden lg:block" /> actually work.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Other tools start after your data is in the books — they only check what&apos;s already entered. Reakon starts where the money actually leaks: the bill sitting in your WhatsApp right now.
          </p>
        </div>

        {/* Table */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <colgroup>
                <col className="w-[38%]" />
                <col className="w-[16%]" />
                <col className="w-[16%]" />
                <col className="w-[16%]" />
                <col className="w-[14%]" />
              </colgroup>

              {/* Column headers */}
              <thead>
                <tr>
                  <th className="text-left pb-4 text-sm font-mono text-muted-foreground font-normal" />
                  {/* Reakon — highlighted */}
                  <th className="pb-0 text-center">
                    <div className="bg-amber-400 text-black rounded-t-lg px-4 py-3 mx-1">
                      <div className="text-sm font-bold tracking-wide">Reakon</div>
                    </div>
                  </th>
                  <th className="pb-4 text-center text-sm font-medium text-gray-400">Zoho Books</th>
                  <th className="pb-4 text-center text-sm font-medium text-gray-400">Smart GST Auditor</th>
                  <th className="pb-4 text-center text-sm font-medium text-gray-400">Vyapar / Suvit</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-transparent" : "bg-gray-50/50"}`}
                  >
                    {/* Feature label */}
                    <td className="py-4 pr-6 text-sm font-medium text-gray-800">
                      {row.feature}
                    </td>

                    {/* Reakon — amber tinted column */}
                    <td className="py-4 text-center bg-amber-50 mx-1 border-x border-amber-100">
                      <Cell value={row.reakon.value} />
                    </td>

                    {/* Competitors — muted */}
                    <td className="py-4 text-center">
                      <Cell value={row.zoho.value} />
                    </td>
                    <td className="py-4 text-center">
                      <Cell value={row.smartgst.value} />
                    </td>
                    <td className="py-4 text-center">
                      <Cell value={row.vyapar.value} />
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Bottom cap on Reakon column */}
              <tfoot>
                <tr>
                  <td />
                  <td className="bg-amber-50 border-x border-b border-amber-100 rounded-b-lg h-3" />
                  <td /><td /><td />
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Footer line */}
          <div className="mt-10 pt-8 border-t border-foreground/10">
            <p className="text-base text-muted-foreground italic text-center">
              &ldquo;The others give you software to manage. Reakon just gets you your money.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground/60 text-center mt-3">
              Competitive comparisons based on publicly available feature documentation. All claims are made in good faith and can be substantiated.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
