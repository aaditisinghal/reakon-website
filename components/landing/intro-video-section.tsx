"use client";

import { Play } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Reakon answers your questions 24/7",
    description:
      "Ask anything about your GST, invoices, or cash flow — on WhatsApp, any time. No waiting for your CA to call back.",
  },
  {
    number: "02",
    title: "Connect unlimited banks, expense accounts, GST portal, tally",
    description:
      "One place for all your financial data. Reakon pulls everything together so you always have the full picture.",
  },
  {
    number: "03",
    title: "Keep track of cash flow and other key metrics",
    description:
      "Burn, revenue, expenses — all tracked automatically. Know exactly where your money is going, before it's gone.",
  },
];

export function IntroVideoSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Video placeholder */}
          <div className="relative group">
            <div className="relative aspect-video bg-foreground/5 border border-foreground/10 overflow-hidden">
              {/* Placeholder background */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    opacity: 0.05,
                  }}
                />
                {/* Play button */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-sm bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="w-6 h-6 text-background fill-background ml-1" />
                  </div>
                  <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
                    Launch video coming soon
                  </p>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground/30" />
            </div>
          </div>

          {/* Right — Text content */}
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Introducing Reakon
            </span>

            <h2 className="text-4xl lg:text-5xl font-display tracking-tight leading-[1.05] mb-12">
                            Introducing Reakon

            </h2>

            <div className="space-y-10">
              {features.map((f) => (
                <div key={f.number} className="flex gap-6">
                  <span className="font-mono text-xs text-muted-foreground mt-1 shrink-0 w-6">
                    {f.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
