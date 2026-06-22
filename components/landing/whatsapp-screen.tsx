"use client";

/**
 * Reakon WhatsApp conversation — authentic WhatsApp iOS dark mode.
 * Colors/typography matched to real WhatsApp iOS:
 *   chat bg     #0B141A
 *   header bar  #1F2C33
 *   incoming    #1F2C33 / #202C33
 *   text        #E9EDEF (primary) · #8696A0 (secondary)
 *   tint (back) #0A84FF (iOS dark-mode system blue)
 */

const CHAT_BG = "#0b141a";
const HEADER_BG = "#1f2c33";
const BUBBLE = "#1f2c33";
const TEXT = "#e9edef";
const SUB = "#8696a0";
const BLUE = "#0a84ff";

function StatusBar() {
  return (
    <div
      style={{
        background: HEADER_BG,
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 18px 0 22px",
        flexShrink: 0,
      }}
    >
      {/* time */}
      <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600, letterSpacing: "0.2px", fontVariantNumeric: "tabular-nums" }}>
        08:37
      </span>
      {/* right cluster */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        {/* cellular — 4 bars increasing height (iOS) */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="#fff">
          <rect x="0"  y="8"   width="3" height="4"  rx="1" />
          <rect x="5"  y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3"   width="3" height="9"  rx="1" />
          <rect x="15" y="0"   width="3" height="12" rx="1" />
        </svg>
        {/* 5G */}
        <span style={{ color: "#fff", fontSize: "12px", fontWeight: 600, letterSpacing: "0.2px" }}>5G</span>
        {/* battery */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5px" }}>
          <div style={{ position: "relative", width: "23px", height: "12px", border: "1px solid rgba(255,255,255,0.45)", borderRadius: "3.5px", display: "flex", alignItems: "center", padding: "1.5px" }}>
            <div style={{ width: "40%", height: "100%", background: "#fff", borderRadius: "1.5px" }} />
          </div>
          <div style={{ width: "1.5px", height: "4px", background: "rgba(255,255,255,0.45)", borderRadius: "0 1px 1px 0" }} />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      style={{
        background: HEADER_BG,
        display: "flex",
        alignItems: "center",
        padding: "4px 10px 8px",
        gap: "8px",
        flexShrink: 0,
        boxShadow: "0 0.5px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* back chevron + unread count */}
      <div style={{ display: "flex", alignItems: "center", gap: "2px", flexShrink: 0 }}>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <path d="M10 2L3 10L10 18" stroke={BLUE} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: BLUE, fontSize: "16px", fontWeight: 400, lineHeight: 1 }}>139</span>
      </div>

      {/* avatar — white circle, black Reakon R */}
      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
        <img src="/reakon no-bg logo-black.png" alt="Reakon" style={{ width: "25px", height: "25px", objectFit: "contain" }} />
      </div>

      {/* contact number */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: TEXT, fontSize: "16px", fontWeight: 600, lineHeight: 1.15, whiteSpace: "nowrap" }}>
          +91 70119 37227
        </div>
      </div>
    </div>
  );
}

/* Photographed thermal receipt matching the bill in the conversation. */
function Receipt() {
  const rows: [string, string, string, string][] = [
    ["Aloo Gobi", "1", "220.00", "220.00"],
    ["Mineral Water", "1", "20.00", "20.00"],
    ["Paneer Tikka Masala", "2", "300.00", "600.00"],
    ["(1 + 1)", "", "", ""],
    ["Dal Fry", "1", "160.00", "160.00"],
    ["Veg Hakka Noodles", "1", "180.00", "180.00"],
    ["Plain Tandoori Roti", "2", "35.00", "70.00"],
    ["Plain Fulka Roti (6 +", "9", "25.00", "225.00"],
    ["3)", "", "", ""],
    ["Bajri Rotla", "2", "50.00", "100.00"],
    ["Masala Buttermilk", "6", "40.00", "240.00"],
  ];
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1 / 1.16",
        background: "radial-gradient(120% 90% at 30% 20%, #d8d4ce 0%, #c4bfb7 35%, #b3aea6 70%, #9c978f 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "62%",
          marginTop: "9%",
          background: "#fbfaf7",
          padding: "9px 8px 14px",
          fontFamily: "'Courier New', monospace",
          color: "#1a1a1a",
          transform: "rotate(-1.2deg)",
          boxShadow: "0 6px 14px rgba(0,0,0,0.35)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3px" }}>
          <div style={{ fontSize: "7px", fontWeight: 900 }}>HAR HAR MAHADEV</div>
          <div style={{ fontSize: "7px", fontWeight: 900 }}>RESTAURANT</div>
          <div style={{ fontSize: "4.5px", color: "#333" }}>Contact: 9328836009</div>
          <div style={{ fontSize: "4.5px", color: "#333" }}>GST:- 24AASFH0599R1ZW</div>
        </div>
        <div style={{ borderTop: "0.5px solid #888", margin: "2px 0" }} />
        <div style={{ fontSize: "4.5px", color: "#222" }}>Name:</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "4.5px", color: "#222" }}>
          <span>Date: 19/06/26 10:46 PM</span><span>Dine In: 15B</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "4.5px", color: "#222" }}>
          <span>Cashier: biller</span><span>Bill No.: 8583</span>
        </div>
        <div style={{ borderTop: "0.5px solid #888", margin: "2px 0 1px" }} />
        <div style={{ display: "flex", fontSize: "4.5px", fontWeight: 700 }}>
          <span style={{ flex: 1 }}>Item</span>
          <span style={{ width: "10px", textAlign: "right" }}>Qty</span>
          <span style={{ width: "26px", textAlign: "right" }}>Price</span>
          <span style={{ width: "28px", textAlign: "right" }}>Amount</span>
        </div>
        <div style={{ borderTop: "0.5px solid #ccc", margin: "1px 0 2px" }} />
        {rows.map(([name, qty, price, amt], i) => (
          <div key={i} style={{ display: "flex", fontSize: "4.5px", lineHeight: 1.45 }}>
            <span style={{ flex: 1 }}>{name}</span>
            <span style={{ width: "10px", textAlign: "right" }}>{qty}</span>
            <span style={{ width: "26px", textAlign: "right" }}>{price}</span>
            <span style={{ width: "28px", textAlign: "right" }}>{amt}</span>
          </div>
        ))}
        <div style={{ borderTop: "0.5px solid #888", margin: "3px 0 2px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "4.5px" }}>
          <span>Total Qty: 25</span><span>Sub Total&nbsp;&nbsp;1815.00</span>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", fontSize: "4.5px", color: "#333" }}>CGST@2.5&nbsp;&nbsp;2.5%&nbsp;&nbsp;44.88</div>
        <div style={{ display: "flex", justifyContent: "flex-end", fontSize: "4.5px", color: "#333" }}>SGST@2.5&nbsp;&nbsp;2.5%&nbsp;&nbsp;44.88</div>
        <div style={{ display: "flex", justifyContent: "flex-end", fontSize: "4.5px", color: "#333" }}>Round off&nbsp;&nbsp;-10.24</div>
        <div style={{ display: "flex", justifyContent: "flex-end", fontSize: "6px", fontWeight: 900, marginTop: "1px" }}>Grand Total&nbsp;&nbsp;₹ 1905.00</div>
        <div style={{ textAlign: "center", fontSize: "4.5px", marginTop: "4px", fontWeight: 700 }}>Thank You !! Please Visit Again !!</div>
      </div>
      <div style={{ position: "absolute", top: "32%", right: "12%", width: "16px", height: "16px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.7), transparent 70%)" }} />
      <div style={{ position: "absolute", bottom: "22%", right: "16%", width: "13px", height: "13px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.55), transparent 70%)" }} />
    </div>
  );
}

/* WhatsApp iOS read receipt — two ticks, blue when read */
function Ticks({ onMedia = false }: { onMedia?: boolean }) {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" style={{ display: "inline-block", verticalAlign: "middle" }}>
      <path d="M1 5.6L4 8.6L9.6 1.4" stroke={onMedia ? "#fff" : "#53bdeb"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 5.6L9 8.6L14.6 1.4" stroke={onMedia ? "#fff" : "#53bdeb"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppScreen() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: CHAT_BG, fontFamily: "-apple-system, 'SF Pro Text', Helvetica, Arial, sans-serif", overflow: "hidden" }}>
      <StatusBar />
      <Header />

      {/* messages */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "8px 8px 4px",
          background: CHAT_BG,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='92' height='92' viewBox='0 0 92 92' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%238696a0' stroke-opacity='0.05' stroke-width='1.1'%3E%3Cpath d='M12 16c0-3 5-3 5 0s-5 3-5 6'/%3E%3Cpath d='M40 10l4 7h-8z'/%3E%3Crect x='66' y='12' width='9' height='9' rx='2'/%3E%3Cpath d='M10 46q6-7 12 0'/%3E%3Ccircle cx='46' cy='48' r='4.5'/%3E%3Cpath d='M68 44l5 5-5 5-5-5z'/%3E%3Cpath d='M12 74h11M17.5 68.5v11'/%3E%3Cpath d='M42 72q4 6 9 0'/%3E%3Ccircle cx='72' cy='74' r='4.5'/%3E%3C/g%3E%3C/svg%3E")`,
          gap: "6px",
        }}
      >
        {/* bill photo */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "flex-start" }}>
          <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: BUBBLE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill={SUB}>
              <path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z" />
            </svg>
          </div>
          <div style={{ background: BUBBLE, borderRadius: "8px", padding: "3px", maxWidth: "68%", position: "relative" }}>
            <div style={{ borderRadius: "6px", overflow: "hidden" }}>
              <Receipt />
            </div>
            <div style={{ position: "absolute", right: "8px", bottom: "8px", display: "flex", alignItems: "center", gap: "3px", background: "rgba(0,0,0,0.4)", padding: "1px 6px", borderRadius: "9px" }}>
              <span style={{ color: "#fff", fontSize: "10px" }}>23:04</span>
              <Ticks onMedia />
            </div>
          </div>
        </div>

        {/* got it */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ background: BUBBLE, borderRadius: "8px", padding: "5px 8px 4px", maxWidth: "80%" }}>
            <span style={{ color: TEXT, fontSize: "13px", lineHeight: 1.35 }}>✅ Got it. Reading your bill now...</span>
            <span style={{ color: SUB, fontSize: "10px", marginLeft: "8px", float: "right", marginTop: "4px" }}>23:04</span>
          </div>
        </div>

        {/* result */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ background: BUBBLE, borderRadius: "8px", padding: "6px 9px 5px", maxWidth: "88%" }}>
            <div style={{ color: TEXT, fontSize: "13px", fontWeight: 700, lineHeight: 1.3 }}>📄 HAR HAR MAHADEV RESTAURANT</div>
            <div style={{ color: SUB, fontSize: "12px", marginTop: "2px" }}>#8583 · 2026-06-19</div>
            <div style={{ color: TEXT, fontSize: "13px", fontWeight: 700, marginTop: "1px" }}>₹1,905 · GST ₹89.76</div>
            <div style={{ color: TEXT, fontSize: "13px", lineHeight: 1.4, marginTop: "8px" }}>
              <span style={{ fontWeight: 600 }}>❌ ITC not claimable.</span><br />
              Restaurant bills are blocked under GST law.<br />
              Saved as expense record for your CA.
            </div>
            <div style={{ textAlign: "right", marginTop: "2px" }}>
              <span style={{ color: SUB, fontSize: "10px" }}>23:04</span>
            </div>
          </div>
        </div>
      </div>

      {/* input bar */}
      <div style={{ background: HEADER_BG, padding: "6px 8px 8px", display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="10.5" stroke={SUB} strokeWidth="1.6" />
          <path d="M12 7.5v9M7.5 12h9" stroke={SUB} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <div style={{ flex: 1, height: "33px", background: "#2a3942", borderRadius: "17px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 11px" }}>
          <span style={{ color: SUB, fontSize: "13px" }}>Message</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke={SUB} strokeWidth="1.5" />
            <circle cx="9" cy="10" r="1" fill={SUB} /><circle cx="15" cy="10" r="1" fill={SUB} />
            <path d="M8.5 14q3.5 2.5 7 0" stroke={SUB} strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M3 8.5a2 2 0 012-2h1.6l1-1.6a1 1 0 01.84-.46h5.12a1 1 0 01.84.46l1 1.6H21a0 0 0 010 0 2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2V8.5z" stroke={SUB} strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="12" cy="13" r="3.6" stroke={SUB} strokeWidth="1.5" />
        </svg>
        <svg width="22" height="22" viewBox="0 0 24 24" fill={SUB} style={{ flexShrink: 0 }}>
          <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z" />
          <path d="M17 11a5 5 0 01-10 0H5a7 7 0 006 6.92V21h2v-3.08A7 7 0 0019 11h-2z" />
        </svg>
      </div>
    </div>
  );
}
