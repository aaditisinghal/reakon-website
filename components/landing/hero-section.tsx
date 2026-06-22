"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
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
                className={`text-[clamp(3rem,12vw,10rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="block" style={{ fontSize: "96px" }}>Protecting </span>
           
                  <span className="relative inline-block">
                    <span
                      key={wordIndex}
                      className="inline-flex"
                      style={{ fontSize: "96px" }}
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
                    <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
                  </span>     <span className="block" style={{ fontSize: "96px" }}>
                  of Indian businesses like never before{" "}
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p 
              className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ fontSize: "20px" }}
            >
              Recovering the GST credit you're losing, chases the customers who owe you, and flags the vendors who put your money at risk — all on WhatsApp, without changing how you work.

            </p>
            
            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row items-start gap-4 mt-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-sm group"
              >
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-sm border-foreground/20 hover:bg-foreground/5"
              >
                Contact us now
              </Button>
            </div>
          </div>
          
          {/* Right Column - MacBook Image */}
          <div 
            className={`relative flex items-center justify-center transition-all duration-700 delay-300 -mr-12 lg:-mr-24 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img 
              src="modern-latest-laptop-mockup-front-view-smartphone-mockup-high-quality-isolated-white-backgrou_659151-5186-Photoroom.png"
              alt="MacBook Pro and iPhone mockup"
              className="w-full h-auto drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))",
                background: "transparent",
              }}
            />
          </div>
        </div>
        
      </div>
      
      {/* Stats marquee - full width outside container */}

      
      {/* Scroll indicator */}
      
    </section>
  );
}
