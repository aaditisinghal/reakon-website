"use client";

const logos = [
  {
    name: "Apple",
    svg: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
  },
  {
    name: "Meta",
    svg: (
      <svg viewBox="0 0 48 48" className="w-14 h-14 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2.5 28.5h-4v-13h4v13zm-2-14.8c-1.3 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.3 0 2.2 1 2.2 2.2.1 1.2-.9 2.2-2.2 2.2zm16.5 14.8h-4v-6.3c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.3-.1.6-.1 1v6.4h-4V22.2c0-1.6 0-2.9-.1-4h3.5l.2 1.7h.1c.5-.8 1.8-2 4-2 2.6 0 4.6 1.7 4.6 5.5v7.1h-.4z"/>
      </svg>
    ),
  },
  {
    name: "Tally",
    svg: (
      <svg viewBox="0 0 120 40" className="w-28 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="Georgia, serif" fontSize="32" fontWeight="700" letterSpacing="-1">Tally</text>
      </svg>
    ),
  },
  {
    name: "Ambuja",
    svg: (
      <svg viewBox="0 0 160 40" className="w-32 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" letterSpacing="0.5">AMBUJA</text>
      </svg>
    ),
  },
  {
    name: "Bajaj",
    svg: (
      <svg viewBox="0 0 120 40" className="w-28 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" letterSpacing="-0.5">BAJAJ</text>
      </svg>
    ),
  },
  {
    name: "Infosys",
    svg: (
      <svg viewBox="0 0 160 40" className="w-32 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="600" letterSpacing="1">infosys</text>
      </svg>
    ),
  },
  {
    name: "Wipro",
    svg: (
      <svg viewBox="0 0 120 40" className="w-28 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" letterSpacing="0.5">wipro</text>
      </svg>
    ),
  },
  {
    name: "HDFC",
    svg: (
      <svg viewBox="0 0 120 40" className="w-28 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" letterSpacing="1">HDFC</text>
      </svg>
    ),
  },
];

export function TrustedBySection() {
  const doubled = [...logos, ...logos];

  return (
    <section className="relative py-20 border-t border-foreground/10 overflow-hidden">
      {/* Centered Text */}
      <div className="text-center mb-14 px-6">
        <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-3">
          Trusted by
        </p>
        <h2 className="text-2xl lg:text-3xl font-display text-foreground">
          Trusted by leading businesses
        </h2>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

        {/* Scrolling track */}
        <div className="flex overflow-hidden">
          <div
            className="flex gap-16 items-center"
            style={{
              animation: "trusted-scroll 30s linear infinite",
              width: "max-content",
            }}
          >
            {doubled.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="shrink-0 flex items-center justify-center opacity-65 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                style={{ minWidth: "120px" }}
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes trusted-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
