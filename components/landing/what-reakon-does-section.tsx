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
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    if (!play) return;
    setFrame(0);
    const timings = [0, 1200, 2200, 3200, 5200];
    const timers = timings.map((t, i) => setTimeout(() => setFrame(i), t));
    const loop = setTimeout(() => setFrame(0), 8000);
    return () => { timers.forEach(clearTimeout); clearTimeout(loop); };
  }, [play]);

  return (
    <div className="w-full max-w-sm mx-auto bg-[#ECE5DD] rounded-lg overflow-hidden shadow-xl font-sans">
      {/* Header */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xs font-bold">R</div>
        <div>
          <div className="text-white text-sm font-semibold">Reakon</div>
          <div className="text-green-200 text-xs">online</div>
        </div>
      </div>
      {/* Chat body */}
      <div className="p-4 space-y-3 min-h-[320px] bg-[#ECE5DD] overflow-y-auto" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}>
        {/* Frame 1: User message with bill */}
        <div className={`flex justify-end transition-all duration-500 ${frame >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[75%] shadow-sm">
            <div className="w-32 h-20 bg-white border border-gray-200 rounded flex items-center justify-center mb-1">
              <div className="text-center">
                <div className="text-gray-400 text-xl">📄</div>
                <div className="text-gray-500 text-[10px] font-medium">Purchase Bill</div>
                <div className="text-gray-400 text-[9px]">invoice_nov.pdf</div>
              </div>
            </div>
            <div className="text-[10px] text-gray-500 text-right">09:42 ✓✓</div>
          </div>
        </div>

        {/* Frame 2: Typing indicator */}
        {frame >= 1 && (
          <div className={`flex justify-start transition-all duration-500 ${frame >= 1 ? "opacity-100" : "opacity-0"}`}>
            <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
              <div className="flex gap-1 items-center h-4">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        {/* Frame 3: Reading confirmation */}
        {frame >= 2 && (
          <div className={`flex justify-start transition-all duration-500 ${frame >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
              <div className="text-sm text-gray-800">Got it ✅ Reading your bill...</div>
              <div className="text-[10px] text-gray-400 text-right mt-1">09:42</div>
            </div>
          </div>
        )}

        {/* Frame 4: ITC result with animated number */}
        {frame >= 3 && (
          <div className={`flex justify-start transition-all duration-500 ${frame >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[90%] shadow-sm">
              <div className="text-sm text-gray-800 font-semibold text-green-700">
                You just saved <AnimatedNumber value={500000} show={frame >= 3} /> in ITC this month 💰
              </div>
              <div className="text-xs text-gray-500 mt-1">Your bill has been stored securely</div>
              <div className="text-[10px] text-gray-400 text-right mt-1">09:43</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Animation 2: CA Posts P&L ─── */
function PLAnimation({ play }: { play: boolean }) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    if (!play) return;
    setFrame(0);
    const timings = [0, 1000, 2200, 3600, 5500];
    const timers = timings.map((t, i) => setTimeout(() => setFrame(i), t));
    const loop = setTimeout(() => setFrame(0), 7000);
    return () => { timers.forEach(clearTimeout); clearTimeout(loop); };
  }, [play]);

  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xl">
      {/* Browser bar */}
      <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white border border-gray-300 rounded text-[10px] text-gray-500 px-2 py-0.5 text-center">app.reakon.in/portal</div>
      </div>
      <div className="p-4 min-h-[260px] relative bg-gray-50">
        {/* Notification ping */}
        {frame >= 0 && (
          <div className={`absolute top-4 right-4 transition-all duration-500 ${frame >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="bg-blue-500 text-white text-[10px] px-2 py-1 rounded-full font-medium animate-pulse">New update</div>
          </div>
        )}
        {/* P&L document slides in */}
        <div className={`bg-white border border-gray-200 rounded-lg p-4 mt-6 shadow-sm transition-all duration-700 ${frame >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-bold text-gray-700 uppercase tracking-wide">Profit & Loss</div>
            <div className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded">As of Nov 2024</div>
          </div>
          {/* Revenue */}
          <div className={`flex justify-between py-1.5 border-b border-gray-100 transition-all duration-500 ${frame >= 2 ? "opacity-100" : "opacity-0"}`}>
            <span className="text-xs text-gray-500">Revenue</span>
            <span className="text-xs font-semibold text-gray-800">₹8,40,000</span>
          </div>
          {/* Expenses */}
          <div className={`flex justify-between py-1.5 border-b border-gray-100 transition-all duration-500 delay-100 ${frame >= 2 ? "opacity-100" : "opacity-0"}`}>
            <span className="text-xs text-gray-500">Expenses</span>
            <span className="text-xs font-semibold text-gray-800">₹5,20,000</span>
          </div>
          {/* Net profit */}
          <div className={`flex justify-between py-2 mt-1 transition-all duration-500 delay-200 ${frame >= 2 ? "opacity-100" : "opacity-0"}`}>
            <span className="text-xs font-bold text-gray-700">Net Profit</span>
            <span className="text-sm font-bold text-green-600">₹3,20,000</span>
          </div>
        </div>
        {/* CA badge */}
        {frame >= 3 && (
          <div className={`mt-3 flex items-center gap-2 transition-all duration-500 ${frame >= 3 ? "opacity-100" : "opacity-0"}`}>
            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">CA</div>
            <span className="text-[11px] text-gray-500">Posted by your CA · Nov 30, 2024</span>
          </div>
        )}
      </div>
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
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    if (!play) return;
    setFrame(0);
    const timings = [0, 1200, 2500, 3800, 5500];
    const timers = timings.map((t, i) => setTimeout(() => setFrame(i), t));
    const loop = setTimeout(() => setFrame(0), 7000);
    return () => { timers.forEach(clearTimeout); clearTimeout(loop); };
  }, [play]);

  const vendors = [
    { name: "Mehta Steel Pvt Ltd", gstin: "27AABC1234Z", filed: true },
    { name: "Ravi Plastics", gstin: "29XYZW5678M", filed: false },
    { name: "Desai Chemicals", gstin: "24PQRS9012K", filed: false },
    { name: "Kumar Logistics", gstin: "33LMNO3456R", filed: true },
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xl">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="text-xs font-bold text-gray-700">Vendor GST Status</div>
        <div className="text-[10px] text-gray-400">Nov 2024</div>
      </div>
      <div className="p-4 min-h-[260px] space-y-2">
        {vendors.map((v, i) => (
          <div key={i} className={`flex items-center justify-between p-2.5 rounded-lg border transition-all duration-500 ${
            frame >= 0 ? "opacity-100" : "opacity-0"
          } ${
            !v.filed && frame >= 1
              ? "border-red-300 bg-red-50"
              : "border-gray-200 bg-white"
          }`} style={{ transitionDelay: `${i * 80}ms` }}>
            <div>
              <div className="text-xs font-semibold text-gray-700">{v.name}</div>
              <div className="text-[9px] text-gray-400 font-mono">{v.gstin}</div>
            </div>
            <div className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              !v.filed && frame >= 1
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-600"
            }`}>
              {!v.filed && frame >= 1 ? "⚠️ Not filed" : "✓ Filed"}
            </div>
          </div>
        ))}
        {frame >= 2 && (
          <div className={`bg-red-600 text-white rounded-lg p-3 transition-all duration-500 ${frame >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="text-[11px] font-bold mb-0.5">2 vendors haven't filed GSTR-1</div>
            <div className="text-[10px] text-red-100">₹14,200 of your ITC is at risk</div>
          </div>
        )}
        {frame >= 3 && (
          <div className={`bg-amber-50 border border-amber-200 rounded-lg p-3 transition-all duration-500 ${frame >= 3 ? "opacity-100" : "opacity-0"}`}>
            <div className="text-[10px] text-amber-800 font-medium">💡 Withhold GST amount on next payment to these vendors</div>
          </div>
        )}
      </div>
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
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
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
