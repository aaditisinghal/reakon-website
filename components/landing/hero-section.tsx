"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Iphone } from "@/components/ui/iphone";

const words = ["GST money",
"Input tax credit",
"Tax refunds",
"Working capital",
"Hard-earned margins"
,"Every rupee"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
           Transforming Indian Finance systems 
          </span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Tagline Content */}
          <div>
            {/* Main headline */}
            <div className="mb-12">
              <h1
                className={`text-[clamp(2.5rem,5vw,5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="block">Protecting </span>

                  <span className="relative inline-block">
                    <span
                      key={wordIndex}
                      className="inline-flex"
                    >
                      {words[wordIndex].split("").map((char, i) => (
                        <span
                          key={`${wordIndex}-${i}`}
                          className="inline-block animate-char-in"
                          style={{
                            animationDelay: `${i * 50}ms`,
                            marginRight: char === " " ? "0.25em" : "0",
                          }}
                        >
                          {char === "" ? "" : char}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="block">
                  of Indian businesses like never before{" "}
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p
              className={`text-base lg:text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Recovering the GST credit you're losing, chases the customers who owe you, and flags the vendors who put your money at risk — all on WhatsApp, without changing how you work.

            </p>
            
            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row items-start gap-4 mt-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#"
                className="inline-flex items-center justify-center text-white px-8 h-14 text-base rounded-sm group hover:opacity-90 transition-opacity"
                style={{ background: "oklch(0.62 0.15 160)" }}
              >
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://cal.com/reakon.in/45min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 text-base rounded-sm border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
              >
                Contact us now
              </a>
            </div>
          </div>
          
          {/* Right Column - iPhone portrait */}
          <div
            className={`relative flex items-center justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "380px",
                filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.18)) drop-shadow(0 8px 16px rgba(0,0,0,0.10))",
              }}
            >
              <Iphone src="/reakon-whatsapp.png" />
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Stats marquee - full width outside container */}

      
      {/* Scroll indicator */}
      
    </section>
  );
}
