"use client";

import { useState, useRef, useEffect } from "react";
import {
  IconLayoutDashboard, IconReceiptTax, IconAdjustments,
  IconRadio, IconCoin, IconFiles, IconPlug,
  IconAlertTriangle, IconCircleCheck, IconFileInvoice,
  IconBuildingBank, IconBrandWhatsapp, IconReportAnalytics, IconMail,
} from "@tabler/icons-react";
import { Iphone } from "@/components/ui/iphone";

const spring = "cubic-bezier(0.16, 1, 0.3, 1)";

type ViewId = "overview" | "mygst" | "ims" | "twoa" | "itc" | "docs" | "conn";
type BadgeType = "g" | "a" | "r";

const NAV_ITEMS: { id: ViewId; label: string; Icon: React.ElementType }[] = [
  { id: "overview",  label: "Overview",     Icon: IconLayoutDashboard },
  { id: "mygst",     label: "My GST",       Icon: IconReceiptTax },
  { id: "ims",       label: "IMS",          Icon: IconAdjustments },
  { id: "twoa",      label: "2A Live",      Icon: IconRadio },
  { id: "itc",       label: "ITC Tracking", Icon: IconCoin },
  { id: "docs",      label: "Documents",    Icon: IconFiles },
  { id: "conn",      label: "+ Connectors", Icon: IconPlug },
];

const BAR_SALES  = [38,32,44,30,40,43,46,40,36,48,33,50];
const BAR_CREDIT = [16,18,20,14,20,22,24,20,18,26,15,28];

function Badge({ type, label }: { type: BadgeType; label: string }) {
  const cfg = {
    g: { bg:"#dcfce7", color:"#15803d" },
    a: { bg:"#fef9c3", color:"#854d0e" },
    r: { bg:"#fee2e2", color:"#991b1b" },
  }[type];
  return (
    <span style={{ fontSize:8, padding:"2px 7px", borderRadius:99, fontWeight:700, background:cfg.bg, color:cfg.color }}>
      {label}
    </span>
  );
}

function StatCard({ label, value, sub, color }: { label:string; value:string; sub:string; color?:string }) {
  return (
    <div style={{ background:"#f9f9f8", borderRadius:7, padding:"9px 10px" }}>
      <div style={{ fontSize:8, color:"#888", marginBottom:3 }}>{label}</div>
      <div style={{ fontSize:14, fontWeight:700, color: color ?? "#111" }}>{value}</div>
      <div style={{ fontSize:8, color:"#aaa", marginTop:1 }}>{sub}</div>
    </div>
  );
}

function ImsRow({ name, sub, badge, type, subRed }: { name:string; sub:string; badge:string; type:BadgeType; subRed?:boolean }) {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 0", borderBottom:"0.5px solid #f5f5f5" }}>
      <div>
        <div style={{ fontSize:10, color:"#111" }}>{name}</div>
        <div style={{ fontSize:8, color: subRed ? "#dc2626" : "#aaa" }}>{sub}</div>
      </div>
      <Badge type={type} label={badge} />
    </div>
  );
}

function OverviewScreen() {
  const rows = [
    ["May 2026","16","₹2,73,600"],["Apr 2026","14","₹2,51,100"],
    ["Mar 2026","18","₹3,09,600"],["Feb 2026","12","₹2,18,400"],
    ["Jan 2026","15","₹2,64,900"],["Dec 2025","11","₹1,98,200"],
  ];
  return (
    <div>
      <h2 style={{ fontSize:15, fontWeight:700, color:"#111", marginBottom:2 }}>Overview</h2>
      <p style={{ fontSize:9, color:"#999", marginBottom:12 }}>Input Tax Credit — last 12 months · From your GSTR-2B.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,minmax(0,1fr))", gap:7, marginBottom:12 }}>
        <StatCard label="ITC AVAILABLE"     value="₹31,29,300" sub="across 12 months"       color="#15803d" />
        <StatCard label="INVOICES"           value="176"         sub="taxable ₹1,73,85,000"              />
        <StatCard label="ITC NOT AVAILABLE" value="₹1,12,600"  sub="flagged by GSTN on 2B" color="#dc2626" />
      </div>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:9 }}>
        <thead>
          <tr>{["Period","Invoices","ITC Available"].map(h=><th key={h} style={{textAlign:"left",color:"#888",fontWeight:700,padding:"4px 5px",fontSize:8,textTransform:"uppercase",letterSpacing:"0.04em",borderBottom:"0.5px solid #eee"}}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map(([p,i,v])=>(
            <tr key={p}>
              <td style={{padding:"7px 5px",borderBottom:"0.5px solid #f5f5f5",color:"#333"}}>{p}</td>
              <td style={{padding:"7px 5px",borderBottom:"0.5px solid #f5f5f5",color:"#1d4ed8",fontWeight:700}}>{i}</td>
              <td style={{padding:"7px 5px",borderBottom:"0.5px solid #f5f5f5",textAlign:"right",fontWeight:700,color:"#111"}}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MyGSTScreen() {
  const glance = [
    { tag:"GSTR-1", tagCls:"tg", num:"₹3.24Cr", numColor:"#15803d", lbl:"What you sold",       desc:"Sales reported to the government" },
    { tag:"GSTR-1", tagCls:"tg", num:"₹58.30L", numColor:"#15803d", lbl:"Tax you collected",   desc:"GST charged on your sales" },
    { tag:"GSTR-2B",tagCls:"ta", num:"₹31.29L", numColor:"#b45309", lbl:"Credit you can claim",desc:"Tax your suppliers already paid" },
    { tag:"GSTR-3B",tagCls:"tb", num:"₹30.74L", numColor:"#1d4ed8", lbl:"Credit you claimed",  desc:"ITC taken in your GSTR-3B" },
  ];
  const tagMap = { tg:{bg:"#dcfce7",color:"#166534"}, ta:{bg:"#fef9c3",color:"#854d0e"}, tb:{bg:"#dbeafe",color:"#1e40af"} };

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 }}>
        <div>
          <h2 style={{ fontSize:15, fontWeight:700, color:"#111" }}>My GST</h2>
          <p style={{ fontSize:9, color:"#999" }}>Veridian Supply Co. · 27AAGCV1234M1Z8</p>
        </div>
        <div style={{ fontSize:9, color:"#aaa", textAlign:"right", lineHeight:1.4 }}>Last read from the GST portal<br/>22 Jun, 06:55 am</div>
      </div>

      <div style={{ background:"#fffbeb", border:"0.5px solid #f59e0b44", borderRadius:7, padding:"8px 10px", marginBottom:11, display:"flex", gap:7 }}>
        <IconAlertTriangle size={12} color="#d97706" style={{ flexShrink:0, marginTop:1 }} />
        <div>
          <div style={{ fontSize:10, fontWeight:700, color:"#92400e", marginBottom:1 }}>1 month need a closer look</div>
          <div style={{ fontSize:9, color:"#78350f", lineHeight:1.45 }}>In Feb 2026, the sales you reported in GSTR-1 don&apos;t match GSTR-3B. A gap here is a common reason GST notices get sent — worth checking with your accountant.</div>
        </div>
      </div>

      <div style={{ fontSize:8, color:"#aaa", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:6 }}>The last 12 months at a glance</div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,minmax(0,1fr))", gap:5, marginBottom:10 }}>
        {glance.map(({ tag, tagCls, num, numColor, lbl, desc })=>{
          const tc = tagMap[tagCls as keyof typeof tagMap];
          return (
            <div key={tag+num} style={{ background:"#fff", border:"0.5px solid #ebebeb", borderRadius:7, padding:"7px 8px" }}>
              <span style={{ fontSize:7, fontWeight:700, padding:"1px 5px", borderRadius:99, display:"inline-block", marginBottom:3, background:tc.bg, color:tc.color }}>{tag}</span>
              <div style={{ fontSize:13, fontWeight:700, color:numColor, marginBottom:1 }}>{num}</div>
              <div style={{ fontSize:8, fontWeight:700, color:"#333", marginBottom:1 }}>{lbl}</div>
              <div style={{ fontSize:7.5, color:"#bbb", lineHeight:1.3 }}>{desc}</div>
            </div>
          );
        })}
      </div>

      <div style={{ background:"#fffbf0", border:"0.5px solid #f59e0b33", borderRadius:7, padding:"9px 11px", marginBottom:10, display:"flex", alignItems:"center", gap:9 }}>
        <IconFileInvoice size={15} color="#d97706" style={{ flexShrink:0 }} />
        <div>
          <div style={{ fontSize:7, fontWeight:700, color:"#92400e", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:2 }}>Input Credit Still on the Table</div>
          <div style={{ fontSize:17, fontWeight:700, color:"#b45309" }}>₹55,400</div>
          <div style={{ fontSize:8, color:"#78350f", marginTop:1 }}>You had ₹51.20L available in GSTR-2B but claimed ₹90.74L. The gap is recoverable credit.</div>
        </div>
      </div>

      <div style={{ background:"#fff", border:"0.5px solid #ebebeb", borderRadius:7, padding:10 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
          <div style={{ fontSize:10, fontWeight:700, color:"#111" }}>Latest month — May 2026</div>
          <div style={{ display:"flex", gap:3 }}>
            {["GSTR-1","GSTR-3B","GSTR-2B"].map(t=><span key={t} style={{ fontSize:7, padding:"1px 5px", borderRadius:99, background:"#f0fdf4", color:"#15803d" }}>{t}</span>)}
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,minmax(0,1fr))", gap:5, marginBottom:6 }}>
          {[["Sales reported","₹28,40,000","GSTR-1"],["Tax collected","₹5,11,200","on your sales"],["Credit available","₹2,73,800","18 bds · 12 suppliers"],["Credit claimed","₹2,73,800","GSTR-3B"]].map(([l,v,s])=>(
            <div key={l}><div style={{ fontSize:8, color:"#888", marginBottom:1 }}>{l}</div><div style={{ fontSize:11, fontWeight:700, color:"#111" }}>{v}</div><div style={{ fontSize:7.5, color:"#aaa", marginTop:1 }}>{s}</div></div>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:3, fontSize:8, color:"#15803d", marginBottom:7 }}>
          <IconCircleCheck size={10} /> GSTR-1 and GSTR-3B sales agree.
        </div>
        <button style={{ width:"100%", background:"#111", color:"#fff", border:"none", borderRadius:5, padding:7, fontSize:9, cursor:"pointer" }}>
          ⇌ View every invoice for May 2026 →
        </button>
      </div>

      <div style={{ fontSize:9, fontWeight:700, color:"#555", marginTop:10, marginBottom:2 }}>Sales vs. credit, month by month</div>
      <div style={{ fontSize:8, color:"#aaa", marginBottom:6 }}>Green is what you sold; amber is the tax credit waiting on your purchases.</div>
      <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:48 }}>
        {BAR_SALES.map((h,i)=>(
          <div key={i} style={{ display:"flex", gap:1, alignItems:"flex-end" }}>
            <div style={{ width:7, height:h*0.8, background:"#15803d", borderRadius:"1px 1px 0 0" }} />
            <div style={{ width:7, height:BAR_CREDIT[i]*0.8, background:"#d97706", borderRadius:"1px 1px 0 0" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ImsScreen() {
  return (
    <div>
      <h2 style={{ fontSize:15, fontWeight:700, color:"#111", marginBottom:2 }}>IMS</h2>
      <p style={{ fontSize:9, color:"#999", marginBottom:8 }}>Invoice Management System — accept, reject, or defer before GSTR-3B locks.</p>
      <div style={{ fontSize:8, fontWeight:700, color:"#888", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:6 }}>Pending action · 4 invoices</div>
      <ImsRow name="Ratan Steel Pvt Ltd"         sub="27AAACR1234F1ZP · ₹18,400 ITC"       badge="Pending" type="a" />
      <ImsRow name="Apex Freight Services"        sub="27AAACA5678G1Z2 · ₹9,200 ITC"        badge="Pending" type="a" />
      <ImsRow name="Har Har Mahadev Restaurant"   sub="Blocked Sec 17(5) — ₹2,100 ITC"      badge="Blocked" type="r" subRed />
      <ImsRow name="Prime Office Supplies"        sub="₹4,800 ITC"                           badge="Pending" type="a" />
      <div style={{ fontSize:8, fontWeight:700, color:"#888", textTransform:"uppercase", letterSpacing:"0.05em", marginTop:14, marginBottom:6 }}>Accepted this period · 12 invoices</div>
      <ImsRow name="The Sharma Bank Pvt Ltd" sub="₹5,00,087 ITC" badge="Accepted" type="g" />
      <ImsRow name="Vertex Logistics"        sub="₹22,400 ITC"   badge="Accepted" type="g" />
      <ImsRow name="BrightTech Components"   sub="₹14,200 ITC"   badge="Accepted" type="g" />
    </div>
  );
}

function TwoAScreen() {
  return (
    <div>
      <h2 style={{ fontSize:15, fontWeight:700, color:"#111", marginBottom:2 }}>2A Live</h2>
      <p style={{ fontSize:9, color:"#999", marginBottom:10 }}>Real-time supplier filing status — refreshed from the GST portal.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,minmax(0,1fr))", gap:7, marginBottom:12 }}>
        <StatCard label="Filed on time" value="38" sub="suppliers this month" color="#15803d" />
        <StatCard label="Not yet filed" value="6"  sub="ITC at risk: ₹38,400"  color="#b45309" />
        <StatCard label="Late filers"   value="3"  sub="₹12,600 delayed"        color="#dc2626" />
      </div>
      <div style={{ fontSize:8, fontWeight:700, color:"#888", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:6 }}>At-risk suppliers</div>
      <ImsRow name="BrightTech Components" sub="₹24,000 ITC at risk" badge="Not filed" type="r" />
      <ImsRow name="Ganesh Packaging Co"   sub="₹9,800 ITC at risk"  badge="Late"     type="a" />
      <ImsRow name="Sunrise Plastics Ltd"  sub="₹4,600 ITC at risk"  badge="Not filed" type="r" />
    </div>
  );
}

function ItcScreen() {
  const rows: [string,string,string,string,string,string][] = [
    ["May 2026","16","₹2,73,600","₹2,73,600","—","#15803d"],
    ["Apr 2026","14","₹2,51,100","₹2,41,900","₹9,200","#d97706"],
    ["Mar 2026","18","₹3,09,600","₹2,63,400","₹46,200","#d97706"],
    ["Feb 2026","12","₹2,18,400","₹2,18,400","—","#15803d"],
  ];
  return (
    <div>
      <h2 style={{ fontSize:15, fontWeight:700, color:"#111", marginBottom:2 }}>ITC Tracking</h2>
      <p style={{ fontSize:9, color:"#999", marginBottom:8 }}>Full reconciliation — every invoice matched across GSTR-2B, books, and GST law.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,minmax(0,1fr))", gap:7, marginBottom:12 }}>
        <StatCard label="Total claimable"  value="₹31,29,300" sub="12 months · 176 bills" color="#15803d" />
        <StatCard label="Claimed so far"   value="₹30,73,900" sub="in GSTR-3B" />
        <StatCard label="Recoverable gap"  value="₹55,400"    sub="still on the table"   color="#b45309" />
      </div>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:9 }}>
        <thead>
          <tr>{["Period","Bills","Claimable","Claimed","Gap"].map((h,i)=><th key={h} style={{textAlign:i===4?"right":"left",color:"#888",fontWeight:700,padding:"4px 5px",fontSize:8,textTransform:"uppercase",letterSpacing:"0.04em",borderBottom:"0.5px solid #eee"}}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map(([p,b,c,cl,g,gc])=>(
            <tr key={p}>
              <td style={{padding:"7px 5px",borderBottom:"0.5px solid #f5f5f5",color:"#333"}}>{p}</td>
              <td style={{padding:"7px 5px",borderBottom:"0.5px solid #f5f5f5",color:"#1d4ed8",fontWeight:700}}>{b}</td>
              <td style={{padding:"7px 5px",borderBottom:"0.5px solid #f5f5f5",fontWeight:700,color:"#111"}}>{c}</td>
              <td style={{padding:"7px 5px",borderBottom:"0.5px solid #f5f5f5",color:"#333"}}>{cl}</td>
              <td style={{padding:"7px 5px",borderBottom:"0.5px solid #f5f5f5",textAlign:"right",fontWeight:700,color:gc}}>{g}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DocsScreen() {
  const docs = [
    { name:"BSPL/26-37/471 · Sharma Bank",    meta:"22 Jun 2026 · via WhatsApp", amt:"+₹5,00,087", color:"#15803d" },
    { name:"HHML/26-09/113 · Har Har Mahadev",meta:"Blocked Sec 17(5)",          amt:"₹0",         color:"#dc2626", metaRed:true },
    { name:"RSNL/26-04/556 · Ratan Steel",    meta:"10 Jun · via WhatsApp",      amt:"+₹18,400",   color:"#15803d" },
    { name:"AXFS/26-07/229 · Apex Freight",   meta:"5 Jun · via email",          amt:"+₹9,200",    color:"#15803d" },
  ];
  return (
    <div>
      <h2 style={{ fontSize:15, fontWeight:700, color:"#111", marginBottom:2 }}>Documents</h2>
      <p style={{ fontSize:9, color:"#999", marginBottom:10 }}>All bills parsed and stored for 7 years — via WhatsApp, email, or upload.</p>
      {docs.map(({ name, meta, amt, color, metaRed })=>(
        <div key={name} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:"#f9f9f8", borderRadius:6, padding:"7px 9px", marginBottom:5 }}>
          <div style={{ display:"flex", alignItems:"center", gap:7 }}>
            <IconFileInvoice size={13} color="#888" />
            <div>
              <div style={{ fontSize:9, fontWeight:700, color:"#111" }}>{name}</div>
              <div style={{ fontSize:8, color: metaRed ? "#dc2626" : "#aaa" }}>{meta}</div>
            </div>
          </div>
          <span style={{ fontSize:9, fontWeight:700, color }}>{amt}</span>
        </div>
      ))}
    </div>
  );
}

function ConnScreen() {
  const conns = [
    { Icon:IconBuildingBank,   name:"GST Portal",      status:"Connected",     ok:true  },
    { Icon:IconBrandWhatsapp,  name:"WhatsApp Agent",  status:"Connected",     ok:true  },
    { Icon:IconReportAnalytics,name:"Tally Prime",     status:"Not connected", ok:false },
    { Icon:IconMail,           name:"Email (Gmail)",   status:"Not connected", ok:false },
  ];
  return (
    <div>
      <h2 style={{ fontSize:15, fontWeight:700, color:"#111", marginBottom:2 }}>Connectors</h2>
      <p style={{ fontSize:9, color:"#999", marginBottom:12 }}>Link Reakon to your GST portal, accounting software, and channels.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:7 }}>
        {conns.map(({ Icon, name, status, ok })=>(
          <div key={name} style={{ background:"#f9f9f8", borderRadius:7, padding:10, display:"flex", alignItems:"center", gap:8 }}>
            <Icon size={18} color={ok ? (name==="WhatsApp Agent"?"#22c55e":"#555") : "#bbb"} />
            <div>
              <div style={{ fontSize:10, fontWeight:700, color:"#111" }}>{name}</div>
              <div style={{ fontSize:8, color: ok ? "#15803d" : "#d97706" }}>{status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const VIEWS: Record<ViewId, React.ReactNode> = {
  overview: <OverviewScreen />,
  mygst:    <MyGSTScreen />,
  ims:      <ImsScreen />,
  twoa:     <TwoAScreen />,
  itc:      <ItcScreen />,
  docs:     <DocsScreen />,
  conn:     <ConnScreen />,
};

function ReakonHero() {
  const [active, setActive] = useState<ViewId>("mygst");
  const [phoneIn, setPhoneIn] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setPhoneIn(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleNav = (id: ViewId) => {
    setActive(id);
    screenRef.current?.scrollTo({ top: 0 });
  };

  return (
    <div ref={containerRef} style={{ display:"flex", alignItems:"flex-end", justifyContent:"center", background:"#e8e6e3", borderRadius:16, padding:"28px 20px 0", minHeight:560, position:"relative", overflow:"visible" }}>

      {/* LAPTOP */}
      <div style={{ position:"relative", zIndex:1, flexShrink:0 }}>
        <div style={{ background:"#1c1c1e", borderRadius:"12px 12px 0 0", padding:"12px 12px 0", width:780 }}>
          <div style={{ width:6, height:6, background:"#333", borderRadius:"50%", margin:"0 auto 8px" }} />
          <div style={{ display:"flex", borderRadius:5, overflow:"hidden", background:"#fff", height:460 }}>

            {/* SIDEBAR */}
            <div style={{ width:200, minWidth:200, background:"#111", display:"flex", flexDirection:"column" }}>
              <div style={{ padding:"16px 13px 13px", display:"flex", alignItems:"center", gap:6, borderBottom:"0.5px solid #222" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/reakon logo.png" alt="Reakon" style={{ width:18, height:18, objectFit:"contain", filter:"invert(1)" }} />
                <span style={{ color:"#fff", fontSize:12, fontWeight:700, letterSpacing:"0.09em" }}>REAKON</span>
              </div>
              <nav style={{ flex:1, padding:"8px 0" }}>
                {NAV_ITEMS.map(({ id, label, Icon })=>(
                  <div
                    key={id}
                    onClick={()=>handleNav(id)}
                    style={{
                      display:"flex", alignItems:"center", gap:7,
                      padding:"7px 10px", cursor:"pointer",
                      fontSize:10.5, borderRadius:5, margin:"1px 5px",
                      transition:"background .1s, color .1s",
                      background: active===id ? "#1e1e1e" : "transparent",
                      color:      active===id ? "#fff"    : "#666",
                    }}
                  >
                    <Icon size={12} />
                    {label}
                  </div>
                ))}
              </nav>
              <div style={{ padding:"10px 13px", borderTop:"0.5px solid #222" }}>
                <div style={{ color:"#bbb", fontSize:10, fontWeight:600 }}>Aarav Shah</div>
                <div style={{ color:"#444", fontSize:9, marginTop:1 }}>+91 58300 08300</div>
                <div style={{ color:"#444", fontSize:9, marginTop:1 }}>Business Owner</div>
              </div>
            </div>

            {/* SCREEN */}
            <div ref={screenRef} style={{ flex:1, overflowY:"auto", background:"#fff", padding:16, scrollbarWidth:"none" }}>
              {VIEWS[active]}
            </div>

          </div>
        </div>
        <div style={{ background:"#2a2a2a", height:14, borderRadius:"0 0 3px 3px", width:780 }} />
        <div style={{ display:"flex", justifyContent:"center" }}>
          <div style={{ background:"#222", height:5, borderRadius:"0 0 5px 5px", width:320 }} />
        </div>
      </div>

      {/* PHONE — absolutely positioned over the right side of the laptop */}
      <div
        style={{
          position: "absolute",
          right: "calc(50% - 780px/2 - 60px)",
          bottom: 0,
          zIndex: 10,
          width: "200px",
          marginBottom: "12px",
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
        <div style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.22)) drop-shadow(0 6px 12px rgba(0,0,0,0.12))" }}>
          <Iphone>
            {/* WhatsApp content */}
            <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#ece5dd", fontSize:"10px" }}>
              {/* Status bar */}
              <div style={{ background:"#111", height:28, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 16px", flexShrink:0 }}>
                <span style={{ color:"#fff", fontSize:9, fontWeight:600 }}>12:00</span>
                <span style={{ color:"#fff", fontSize:9 }}>▲▲</span>
              </div>
              {/* WhatsApp header */}
              <div style={{ background:"#075e54", padding:"8px 12px", display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
                <span style={{ color:"#fff", fontSize:14 }}>‹</span>
                <div style={{ width:28, height:28, borderRadius:"50%", background:"#fff", overflow:"hidden", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/reakon logo.png" alt="Reakon" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                </div>
                <span style={{ color:"#fff", fontSize:11, fontWeight:600, flex:1 }}>Reakon</span>
                <span style={{ color:"#fff", fontSize:11 }}>📹 📞</span>
              </div>
              {/* Chat body */}
              <div style={{ flex:1, overflowY:"auto", padding:10, display:"flex", flexDirection:"column", gap:6 }}>
                <div style={{ textAlign:"center" }}><span style={{ background:"#fff", fontSize:9, color:"#777", padding:"2px 10px", borderRadius:8 }}>Today</span></div>
                <div style={{ maxWidth:"82%", padding:"7px 10px", borderRadius:"0 10px 10px 10px", fontSize:10, lineHeight:1.45, color:"#111", background:"#fff", alignSelf:"flex-start" }}>
                  Claim your ₹5,00,000 ITC by sending 8 bills from GSTIN 27AAACPOXXXXR&amp;, Vendor: The Sharma Bank
                  <div style={{ fontSize:8, color:"#aaa", marginTop:2, textAlign:"right" }}>12:00</div>
                </div>
                <div style={{ background:"#dcf8c6", borderRadius:"10px 0 10px 10px", padding:"7px 10px", display:"flex", alignItems:"center", gap:7, alignSelf:"flex-end" }}>
                  <div style={{ background:"#e74c3c", borderRadius:3, width:20, height:24, display:"flex", alignItems:"center", justifyContent:"center", fontSize:7, color:"#fff", fontWeight:700, flexShrink:0 }}>PDF</div>
                  <span style={{ fontSize:10, color:"#111", fontWeight:600 }}>Sharma bills .pdf</span>
                </div>
                <div style={{ maxWidth:"82%", padding:"7px 10px", borderRadius:"10px 0 10px 10px", fontSize:10, lineHeight:1.45, color:"#111", background:"#dcf8c6", alignSelf:"flex-end" }}>
                  All bills attached above<div style={{ fontSize:8, color:"#aaa", marginTop:2, textAlign:"right" }}>12:01</div>
                </div>
                <div style={{ maxWidth:"82%", padding:"7px 10px", borderRadius:"0 10px 10px 10px", fontSize:10, lineHeight:1.45, color:"#111", background:"#fff", alignSelf:"flex-start" }}>
                  Got it! Reading the bills now...<div style={{ fontSize:8, color:"#aaa", marginTop:2, textAlign:"right" }}>12:01</div>
                </div>
                <div style={{ maxWidth:"82%", padding:"7px 10px", borderRadius:"0 10px 10px 10px", fontSize:10, lineHeight:1.45, color:"#111", background:"#fff", alignSelf:"flex-start" }}>
                  Tax invoice from SHARMA BANK PRIVATE LIMITED #BSPL/26-37/471<br/><br/>
                  Total Amount: ₹5,00,00.87<br/>Consecutive breakdown saved.<br/><br/>
                  Saved to your Reakon register!
                  <div style={{ fontSize:8, color:"#aaa", marginTop:2, textAlign:"right" }}>12:02</div>
                </div>
                <div style={{ maxWidth:"82%", padding:"7px 10px", borderRadius:"10px 0 10px 10px", fontSize:10, lineHeight:1.45, color:"#111", background:"#dcf8c6", alignSelf:"flex-end", display:"flex", alignItems:"center", gap:4 }}>
                  Perfect !<span style={{ color:"#e74c3c", fontSize:13 }}>♥</span>
                  <div style={{ fontSize:8, color:"#aaa", marginLeft:4 }}>12:02</div>
                </div>
              </div>
            </div>
          </Iphone>
        </div>
      </div>

    </div>
  );
}

export function ReakonHeroSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ReakonHero />
      </div>
    </section>
  );
}
