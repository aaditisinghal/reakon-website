import Link from "next/link";

const JADE = "oklch(0.62 0.15 160)";

const sections = [
  {
    title: "Information We Collect",
    body: [
      "**Business information** — your GSTIN, business name, registered address, and contact details provided during onboarding.",
      "**Financial data** — invoices, purchase bills, and GST return data you forward to us via WhatsApp or our portal. This is processed solely to deliver our services.",
      "**Usage data** — pages visited, features used, and session duration, collected to improve the product.",
      "**Communication data** — messages exchanged with Reakon via WhatsApp, email, or in-app chat.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To verify and reconcile your GST credit (ITC) against government portal data.",
      "To send automated payment reminders to your customers on your behalf.",
      "To flag vendors whose GST non-compliance puts your credit at risk.",
      "To share financial summaries with your authorised CA or accountant through the Reakon portal.",
      "To improve our algorithms, fix bugs, and develop new features — always on anonymised, aggregated data.",
      "We never sell your data to third parties. Ever.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "**Government portals** — we access GSTN/GST portal data on your behalf to verify returns and ITC eligibility. This requires your explicit authorisation.",
      "**Your CA / accountant** — only if you have explicitly connected them to your Reakon account.",
      "**Infrastructure providers** — cloud hosting and storage partners bound by strict data processing agreements.",
      "**Law enforcement** — only when legally compelled by a valid court order or statutory authority under Indian law.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "All data is encrypted in transit (TLS 1.3) and at rest (AES-256).",
      "Access to your financial data is role-restricted within Reakon — only systems directly serving your account can read it.",
      "We undergo periodic security audits and penetration testing.",
      "WhatsApp communications are end-to-end encrypted by WhatsApp Business Platform.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "**Access** — request a full export of all data Reakon holds about you and your business.",
      "**Correction** — ask us to correct inaccurate business or contact information.",
      "**Deletion** — request deletion of your account and associated data. Financial records required for GST compliance may be retained for the statutory period.",
      "**Portability** — receive your data in a machine-readable format (CSV/JSON) on request.",
      "To exercise any right, email us at **privacy@reakon.in**.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Active account data is retained for the duration of your subscription plus 3 years, in line with GST audit requirements under the CGST Act 2017.",
      "After account deletion, anonymised aggregate data may be retained indefinitely for statistical purposes.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our landing pages use minimal first-party cookies for session management and analytics. We do not use advertising or cross-site tracking cookies.",
      "You can disable cookies in your browser settings; this may affect portal functionality.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We will notify registered users by email at least 14 days before any material change to this policy takes effect.",
      "Continued use of Reakon after notification constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy-related queries, write to **privacy@reakon.in** or post to: Reakon Technologies Pvt. Ltd., India.",
      "We aim to respond within 5 business days.",
    ],
  },
];

function renderLine(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-foreground font-semibold">{part}</strong> : part
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-foreground/10 px-6 lg:px-12 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/reakon no-bg logo-black.png" alt="Reakon" style={{ height: 44 }} />
        </Link>
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to home
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6">
          <span className="w-6 h-px bg-foreground/30" />
          Legal
        </div>
        <h1
          className="text-5xl lg:text-6xl font-display tracking-tight mb-6"
          style={{ letterSpacing: "-0.025em" }}
        >
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Reakon Technologies Pvt. Ltd. is committed to protecting the financial data of Indian businesses. This policy explains what we collect, why, and how we keep it safe.
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated: <span className="text-foreground font-medium">June 2026</span>
        </p>
      </div>

      {/* Accent rule */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="h-px w-full" style={{ background: `linear-gradient(to right, ${JADE}, transparent)` }} />
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 space-y-14">
        {sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-3">
              <span
                className="text-xs font-mono font-normal text-white px-2 py-0.5 shrink-0"
                style={{ background: JADE }}
              >
                0{i + 1}
              </span>
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.body.map((line, j) => (
                <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed text-[15px]">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-foreground/30" />
                  <span>{renderLine(line)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div className="border-t border-foreground/10 px-6 lg:px-12 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Reakon Technologies Pvt. Ltd. · <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link> · <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
        </p>
      </div>
    </div>
  );
}
