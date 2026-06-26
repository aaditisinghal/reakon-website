"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Animated Number Component ─── */
function AnimatedNumber({ value, show }: { value: number; show: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    if (!show) { setDisplayValue(0); return; }
    setDisplayValue(0);
    const start = 0;
    const duration = 1500;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress === 1) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [show, value]);

  return (
    <span>
      ₹{displayValue.toLocaleString('en-IN')}
    </span>
  );
}

/* ─── Animation 1: WhatsApp ITC Recovery ─── */
function WhatsAppAnimation({ play }: { play: boolean }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-xl">
      <video
        className="w-full h-auto bg-black rounded-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/whatsapp-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

/* ─── Animation 2: CA Posts P&L ─── */
function PLAnimation({ play }: { play: boolean }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-xl">
      <video
        className="w-full h-auto bg-black rounded-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/pl-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

/* ─── Animation 3: Customer Payment Reminders ─── */
function RemindersAnimation({ play }: { play: boolean }) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    if (!play) return;
    setFrame(0);
    const timings = [0, 1500, 3000, 4500, 6000];
    const timers = timings.map((t, i) => setTimeout(() => setFrame(i), t));
    const loop = setTimeout(() => setFrame(0), 8000);
    return () => { timers.forEach(clearTimeout); clearTimeout(loop); };
  }, [play]);

  const invoices = [
    { name: "Sharma Traders", amount: "₹85,000", days: "62 days overdue", overdue: true },
    { name: "Patel Suppliers", amount: "₹48,000", days: "51 days overdue", overdue: true },
    { name: "Gupta & Co.", amount: "₹1,20,000", days: "Due in 5 days", overdue: false },
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xl">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <div className="text-xs font-bold text-gray-700">Outstanding Invoices</div>
      </div>
      <div className="p-4 min-h-[260px] space-y-2">
        {invoices.map((inv, i) => (
          <div key={i} className={`flex items-center justify-between p-2.5 rounded-lg border transition-all duration-500 ${
            frame >= 0 ? "opacity-100" : "opacity-0"
          } ${
            frame >= 3 && i < 2
              ? "border-green-200 bg-green-50"
              : inv.overdue
              ? "border-red-200 bg-red-50"
              : "border-gray-200 bg-white"
          }`} style={{ transitionDelay: `${i * 100}ms` }}>
            <div>
              <div className="text-xs font-semibold text-gray-700">{inv.name}</div>
              <div className={`text-[10px] ${frame >= 3 && i < 2 ? "text-green-600" : inv.overdue ? "text-red-500" : "text-gray-400"}`}>
                {frame >= 3 && i < 2 ? "Paid ✅" : inv.days}
              </div>
            </div>
            <div className={`text-xs font-bold ${frame >= 3 && i < 2 ? "text-green-600" : inv.overdue ? "text-red-600" : "text-gray-700"}`}>
              {inv.amount}
            </div>
          </div>
        ))}
        {/* WhatsApp reminder sent */}
        {frame >= 1 && frame < 3 && (
          <div className={`mt-2 bg-[#DCF8C6] border border-green-200 rounded-lg p-3 transition-all duration-500 ${frame >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="text-[10px] text-gray-600 font-medium mb-1">📲 WhatsApp reminder sent</div>
            <div className="text-[10px] text-gray-500">"Hi Sharma Traders, invoice #1234 for ₹85,000 is overdue. Pay here →"</div>
          </div>
        )}
        {frame >= 3 && (
          <div className={`mt-2 bg-green-600 rounded-lg p-3 transition-all duration-500 ${frame >= 3 ? "opacity-100" : "opacity-0"}`}>
            <div className="text-[10px] text-white font-semibold">₹1,33,000 collected this month 🎉</div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Animation 4: Vendor Risk Flagging ─── */
function VendorRiskAnimation({ play }: { play: boolean }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-xl">
      <video
        className="w-full h-auto bg-black rounded-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vendor-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

/* ─── Main Section ─── */
const capabilities = [
  {
    id: 1,
    animationSide: "left",
    headline: "Forward a bill. See your money.",
    body: "Send your purchase bills to Reakon on WhatsApp — a photo, a PDF, whatever your vendor sent. We read it, check it against the GST portal, and tell you exactly how much input credit you just protected. No app. No login. No effort.",
    Animation: WhatsAppAnimation,
  },
  {
    id: 2,
    animationSide: "right",
    headline: "See your numbers the moment they're ready.",
    body: "Your CA posts your profit and loss, your key figures, your financial position — straight to your Reakon portal, dated and clear. No more waiting weeks or calling to ask how you are doing. Your business, in numbers, whenever you want to look.",
    Animation: PLAnimation,
  },
  {
    id: 3,
    animationSide: "left",
    headline: "The customers who owe you — handled.",
    body: "Reakon tracks every outstanding invoice and shows you exactly who's been delaying. Then it sends polite, automatic WhatsApp reminders — so you get paid faster, without the awkward phone calls. You decide who to chase, who to withhold from.",
    Animation: RemindersAnimation,
  },
  {
    id: 4,
    animationSide: "right",
    headline: "Know which vendors are costing you.",
    body: "When a vendor doesn't file his GST return, your credit is blocked — your money at risk for his mistake. Reakon flags these vendors automatically and tells you to withhold the GST amount on your next payment. Stop paying for other people's carelessness.",
    Animation: VendorRiskAnimation,
  },
];

function CapabilityRow({ cap, index }: { cap: typeof capabilities[0]; index: number }) {
  const { ref, inView } = useInView(0.3);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    if (inView && !played) setPlayed(true);
  }, [inView, played]);

  const isLeft = cap.animationSide === "left";
  const Anim = cap.Animation;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Animation column */}
      <div className={isLeft ? "order-1" : "order-1 lg:order-2"}>
        <Anim play={played} />
      </div>

      {/* Text column */}
      <div className={isLeft ? "order-2" : "order-2 lg:order-1"}>
        <div className="text-xs font-mono text-muted-foreground tracking-widest mb-4">
          0{index + 1}
        </div>
        <h3 className="text-3xl lg:text-4xl font-display tracking-tight leading-[1.1] mb-5">
          {cap.headline}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
          {cap.body}
        </p>
      </div>
    </div>
  );
}

export function WhatReakonDoesSection() {
  const { ref: headerRef, inView: headerVisible } = useInView(0.2);

  return (
    <section id="what-reakon-does" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-24 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What Reakon does
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight leading-[1.05]">
            Four ways we protect your money.
          </h2>
        </div>

        {/* Capability rows */}
        <div className="space-y-28 lg:space-y-40">
          {capabilities.map((cap, i) => (
            <CapabilityRow key={cap.id} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
