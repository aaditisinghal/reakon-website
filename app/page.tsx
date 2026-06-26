import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { TestimonialMarqueeSection } from "@/components/landing/testimonials-marquee-section";
import { BuiltForSection } from "@/components/landing/built-for-section";
import { LogoMarqueeSection } from "@/components/landing/logo-marquee-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TrustedBySection } from "@/components/landing/trusted-by-section";
import { MacbookDemoSection } from "@/components/landing/macbook-demo-section";
import { ReakonHeroSection } from "@/components/landing/reakon-hero";
import { IntroVideoSection } from "@/components/landing/intro-video-section";
import { WhatReakonDoesSection } from "@/components/landing/what-reakon-does-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <TrustedBySection />
      <MacbookDemoSection />
      <ReakonHeroSection />
      <IntroVideoSection />
      <WhatReakonDoesSection />
      <HowItWorksSection />
      <InfrastructureSection />
      <TestimonialMarqueeSection />
      <BuiltForSection />
      <LogoMarqueeSection />
      <SecuritySection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
