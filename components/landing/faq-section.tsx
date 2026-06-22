"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes — 3 days, free, no card needed to start. Forward your bills and see your real GST number before you pay anything.",
  },
  {
    question: "Do I need to install an app or learn new software?",
    answer:
      "No. Everything happens on WhatsApp. If you can forward a message, you're ready.",
  },
  {
    question: "Will my CA still be involved?",
    answer:
      "Yes, fully. Reakon makes your CA's work easier and your data cleaner — your CA reviews and files, and posts your P&L to your portal. We don't replace them, and they don't have to chase you every month anymore.",
  },
  {
    question: "How do I see my profit and loss and financial position?",
    answer:
      "Your CA posts it to your Reakon portal, dated and clear. You get full transparency into your financial outlook whenever you want to look — no waiting, no phone calls.",
  },
  {
    question: "What about my data and privacy?",
    answer:
      "Your data is stored securely on servers in India and shared with no one. We access the GST portal only through a government-licensed channel (MasterGST), and only with your permission.",
  },
  {
    question: "How does Reakon handle late-paying customers?",
    answer:
      "We track every outstanding invoice, show you who's delaying, and send polite WhatsApp reminders automatically. You stay in control of who to chase and who to withhold from.",
  },
  {
    question: "What about vendors who don't file their GST?",
    answer:
      "We flag them automatically and tell you to withhold the GST amount on your next payment — so their mistake stops costing you your credit.",
  },
  {
    question: "What does it cost after the trial?",
    answer:
      "A small monthly fee — a fraction of the money we recover and collect for you. We'll show you your savings first, so you decide with a real number in front of you.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-40 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
            Questions?
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-foreground/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-foreground/20"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between hover:bg-foreground/2 transition-colors duration-200"
              >
                <span className="text-left font-medium text-foreground text-base lg:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 lg:px-8 py-4 lg:py-6 border-t border-foreground/10 bg-foreground/2">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
