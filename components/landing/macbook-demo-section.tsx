"use client";

import { useEffect, useRef, useState } from "react";
import { MacbookPro } from "@/components/ui/macbook-pro";
import { Iphone } from "@/components/ui/iphone";

export function MacbookDemoSection() {
  const [laptopIn, setLaptopIn] = useState(false);
  const [phoneIn,  setPhoneIn]  = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLaptopIn(true);
          setTimeout(() => setPhoneIn(true), 700);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const spring = "cubic-bezier(0.16, 1, 0.3, 1)";

  const DEMO_URL = "https://reakon-auth-82d7cb8eea61.herokuapp.com/demo/credit";

  const screenContent = (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", background: "#0a0a0a" }}>
      {/* Scaled iframe — simulates 1200px desktop viewport inside the ~501px screen area */}
      <iframe
        src={DEMO_URL}
        style={{
          width: "1200px",
          height: "775px",
          border: "none",
          display: "block",
          transform: "scale(0.4177)",
          transformOrigin: "top left",
          pointerEvents: "none",
        }}
        title="Reakon demo"
      />
      {/* Transparent overlay so clicks open a new tab instead of interacting with the iframe */}
      <div
        style={{ position: "absolute", inset: 0, cursor: "pointer" }}
        onClick={() => window.open(DEMO_URL, "_blank")}
      />
    </div>
  );

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="mb-12 lg:mb-20 text-center">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Live demo
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            See Reakon in action
          </h2>
        </div>

        <div className="relative flex items-end justify-center gap-6">

          {/* MacBook */}
          <div
            style={{
              flex: "1 1 0",
              minWidth: 0,
              maxWidth: "1100px",
              opacity:   laptopIn ? 1 : 0,
              transform: laptopIn
                ? "perspective(1200px) rotateX(0deg) scale(1) translateY(0px)"
                : "perspective(1200px) rotateX(14deg) scale(0.62) translateY(100px)",
              filter:    laptopIn ? "blur(0px)" : "blur(16px)",
              transformOrigin: "center bottom",
              transition: laptopIn
                ? `opacity 2.4s ${spring} 1.2s, transform 3.2s ${spring} 1.2s, filter 2.2s ${spring} 1.2s`
                : "none",
              willChange: "transform, opacity, filter",
            }}
          >
            <MacbookPro width={650} height={400} className="w-full h-auto">
              {screenContent}
            </MacbookPro>
          </div>

          {/* iPhone */}
          <div
            style={{
              flexShrink: 0,
              width: "280px",
              marginBottom: "36px",
              marginLeft: "-32px",
              opacity:   phoneIn ? 1 : 0,
              transform: phoneIn
                ? "perspective(900px) rotateX(0deg) scale(1) translateY(0px)"
                : "perspective(900px) rotateX(18deg) scale(0.55) translateY(120px)",
              filter:    phoneIn ? "blur(0px)" : "blur(14px)",
              transformOrigin: "center bottom",
              transition: phoneIn
                ? `opacity 2.2s ${spring} 0.5s, transform 3.0s ${spring} 0.5s, filter 2.0s ${spring} 0.5s`
                : "none",
              willChange: "transform, opacity, filter",
            }}
          >
            <div style={{
              filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.22)) drop-shadow(0 6px 12px rgba(0,0,0,0.12))",
            }}>
              <Iphone src="/reakon-whatsapp.png" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
