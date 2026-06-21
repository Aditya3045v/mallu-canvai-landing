import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Zap,
  Infinity as InfinityIcon,
  Workflow,
  Rocket,
  Play,
  Download,
  ChevronDown,
  Sparkles,
  Menu,
  X,
  Calculator,
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { HlsVideo } from "@/components/HlsVideo";

export const Route = createFileRoute("/")({
  component: Index,
});

const INR_RATE = 20;
const USD_RATE = 0.5;

const plans = [
  {
    name: "1 Month Pass",
    price: "₹2,499",
    usd: "$29.99",
    tag: "30 days of unlimited building",
    cta: "💬 Buy on WhatsApp",
    badge: "Best Value",
    features: ["No credit limits","No workspace transfer","Priority WhatsApp support","Best for full products & teams","Lowest cost per hour"],
  },
  {
    name: "7 Days Pass",
    price: "₹1,299",
    usd: "$14.99",
    tag: "Week-long unlimited access",
    cta: "💬 Buy on WhatsApp",
    badge: "Popular",
    features: ["No credit limits","No workspace transfer","Best for multi-day sprints","Great for freelancers","Instant activation"],
  },
  {
    name: "24 Hours Pass",
    price: "₹349",
    usd: "$4.99",
    tag: "Full-day build marathon",
    cta: "💬 Buy on WhatsApp",
    features: ["No credit limits","No workspace transfer","Best for hackathons & sprints","Single-day project launch","Instant activation"],
  },
  {
    name: "12 Hours Pass",
    price: "₹199",
    usd: "$2.99",
    tag: "Half-day builder session",
    cta: "💬 Buy on WhatsApp",
    features: ["No credit limits","No workspace transfer","Best for quick experiments","Try before committing longer","Instant activation"],
  },
];

const marqueeItems = [
  "15-Minute Free Trial",
  "Unlimited Credit Usage",
  "No Workspace Transfer",
  "No Project Migration",
  "Instant Delivery",
  "Support Included",
  "Works with Any Workspace",
  "Fast Activation",
  "Secure Access",
  "Priority Support",
  "Creator-Friendly Plans",
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. Try unlimited credit usage for 15 minutes before choosing a plan. No payment or registration is required to start.",
  },
  {
    q: "How does the hourly pass work? Is the time continuous?",
    a: "Yes. Hourly passes count continuous elapsed time starting from activation. For example, a 24-hour pass will be active for exactly 24 consecutive hours after activation, so we recommend activating it when you plan to build.",
  },
  {
    q: "Do I need to transfer my workspace or projects?",
    a: "No. Lovable Extension works directly as a client-side wrapper. It does not touch your actual workspace account or require project migrations.",
  },
  {
    q: "How fast is activation?",
    a: "Activation is instant. Once you message us on WhatsApp with payment confirmation (or for your trial code), our system sends your activation key immediately.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing is transparently hourly: ₹20/hr for Indian users and $0.50/hr for US users. Use the calculator on the pricing page to estimate your cost.",
  },
  {
    q: "What is the Chrome extension called?",
    a: "The extension is named MalluCanvai in the Chrome browser. Install it via the ZIP file by following the setup guide.",
  },
  {
    q: "Is support available?",
    a: "Yes, support is included with every plan. Reach us on WhatsApp anytime.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI (GPay, PhonePe, Paytm), bank transfer, and other common Indian payment methods. Payment details are shared over WhatsApp after you message us.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a 15-minute free trial so you can test before purchasing. Because access keys are delivered digitally and instantly, we do not offer refunds once a pass has been activated. If you face any technical issues, message us on WhatsApp and we will resolve them immediately.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/917320091112?text=" +
  encodeURIComponent("Hi! Free trial please 🙏");

const WHATSAPP_PHONE_DISPLAY = "+91 73200 91112";

function planWhatsApp(name: string, price: string) {
  return "https://wa.me/917320091112?text=" +
    encodeURIComponent(`Hi! I want to buy the ${name} (${price}). What's the payment link?`);
}

/* ─── URGENCY TOP BANNER ─────────────────────── */
function UrgencyBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div
      className="relative z-[60] flex items-center justify-center gap-3 px-4 py-2.5 text-xs font-semibold text-center"
      style={{ background: "linear-gradient(90deg,#d4a017 0%,#f5c518 50%,#d4a017 100%)", color: "#111" }}
    >
      <span>🔥 Limited free trial slots this week — claim yours in 2 taps on WhatsApp</span>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-black/20 px-3 py-1 font-bold transition hover:bg-black/30"
      >
        Claim Now →
      </a>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50 hover:text-black"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

/* ─── WHATSAPP INLINE BANNER ─────────────────────── */
function WhatsAppBanner({ msg = "💬 Chat With Us on WhatsApp — Instant Replies!" }: { msg?: string }) {
  return (
    <div
      className="mx-4 my-2 md:mx-10"
      style={{}}
    >
      <div
        className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          background: "linear-gradient(120deg, rgba(37,211,102,0.15) 0%, rgba(37,211,102,0.05) 100%)",
          border: "1.5px solid rgba(37,211,102,0.4)",
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl" style={{ filter: "drop-shadow(0 0 8px rgba(37,211,102,0.6))" }}>💬</span>
          <div>
            <div className="font-bold text-white text-base md:text-lg">{msg}</div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
              {WHATSAPP_PHONE_DISPLAY} · We reply within minutes, every day
            </div>
          </div>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full px-6 py-3 text-sm font-bold transition hover:scale-105 hover:brightness-110"
          style={{
            background: "#25D366",
            color: "#fff",
            boxShadow: "0 0 20px rgba(37,211,102,0.45)",
            animation: "wa-pulse 2s ease-in-out infinite",
          }}
        >
          💬 Start on WhatsApp Now →
        </a>
      </div>
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(37,211,102,0.45); }
          50% { box-shadow: 0 0 35px rgba(37,211,102,0.8); }
        }
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-4px) scale(1.03); }
        }
        @keyframes wa-ping-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <UrgencyBanner />
      <Nav />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <WhatsAppBanner msg="💬 Questions? Chat with Us on WhatsApp — We Reply in Minutes!" />
      <Testimonials />
      <Pricing />
      <PriceCalculator />
      <Setup />
      <FAQ />
      <WhatsAppBanner msg="🚀 Ready to Build Without Limits? Message Us on WhatsApp Now!" />
      <CTA />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { h: "#", l: "Home" },
    { h: "#features", l: "Features" },
    { h: "#reviews", l: "Reviews" },
    { h: "#pricing", l: "Pricing" },
    { h: "#setup", l: "Setup" },
    { h: "#faq", l: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 px-4 pt-5 md:px-10 md:pt-6">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3"
        style={{ background: "rgba(30,30,30,0.92)", backdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white no-underline">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-base"
            style={{ background: "linear-gradient(135deg,#f5c518 0%,#d4a017 100%)", color: "#111" }}
            aria-label="Lovable Extension logo"
          >
            ⚡
          </span>
          <span>Lovable{" "}<span style={{ color: "#f5c518" }}>Extension</span></span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {links.map((n) => (
            <a key={n.h} href={n.h} className="transition hover:text-white">
              {n.l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 text-sm font-semibold transition hover:scale-105"
            style={{ background: "#f5c518", color: "#111" }}
          >
            Get Access
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="rounded-lg p-1.5 text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className="mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden"
          style={{ background: "rgba(30,30,30,0.95)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <nav className="flex flex-col gap-3 text-sm text-white/90">
            {links.map((n) => (
              <a
                key={n.h}
                href={n.h}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-white/10"
              >
                {n.l}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-full px-5 py-2 text-center text-sm font-semibold"
              style={{ background: "#f5c518", color: "#111" }}
            >
              Get Access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

const heroFeatures = [
  { icon: "🎁", t: "15-Minute Free Trial",     d: "Test all features with unlimited credits." },
  { icon: "⚡", t: "Unlimited Prompts & Chat",  d: "No credit deductions or token restrictions." },
  { icon: "🔒", t: "Works on Current Projects", d: "No project migrations or workspace transfer." },
  { icon: "🔑", t: "Instant Key Delivery",     d: "Delivered instantly via WhatsApp 24/7." },
];

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0f0f0f", minHeight: "88vh" }}
    >
      {/* subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(245,197,24,0.06) 0%, transparent 70%)" }}
      />
      
      {/* Animated lining/grid background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="bg-grid-animated" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-center gap-12 px-5 py-20 md:flex-row md:items-center md:gap-16 md:px-10 md:py-28">

        {/* ── LEFT COLUMN ── */}
        <div className="flex-1">
          {/* badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
            style={{ background: "rgba(245,197,24,0.15)", color: "#f5c518", border: "1px solid rgba(245,197,24,0.3)" }}
          >
            <Zap className="h-3 w-3" />
            INSTANT DELIVERY
          </div>

          {/* headline */}
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Stop Running Out<br />
            Of Lovable Credits<br />
            <span style={{ background: "linear-gradient(90deg,#f5c518,#4ade80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Mid-Build.</span>
          </h1>

          {/* sub */}
          <p className="mt-5 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Get unlimited Lovable.dev credits via a Chrome extension. No workspace transfer. Works with your existing projects from ₹349.
          </p>

          {/* account safety line */}
          <p className="mt-3 flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span style={{ color: "#4ade80" }}>🔒</span>
            Works as a client-side Chrome extension — Lovable's servers never know it's installed.
          </p>

          {/* free trial badge */}
          <div
            className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
            style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.3)" }}
          >
            <Check className="h-3 w-3" /> 15-Minute Free Trial — No Card Needed
          </div>

          {/* CTAs — WhatsApp is now primary yellow */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center gap-0.5 rounded-xl px-6 py-3 text-sm font-bold transition hover:scale-105"
              style={{ background: "#f5c518", color: "#111" }}
            >
              <span className="flex items-center gap-2">💬 Get My Free Trial Key</span>
              <span className="text-[10px] font-normal opacity-60">Instant WhatsApp · No Card Needed</span>
            </a>
            <a
              href="https://dl.eklas.dev/latest.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center gap-0.5 rounded-xl px-6 py-3 text-sm font-bold transition hover:scale-105"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
            >
              <span className="flex items-center gap-2"><Download className="h-4 w-4" /> Download Extension</span>
              <span className="text-[10px] font-normal opacity-60">Chrome ZIP · Free Trial Built-In</span>
            </a>
            <a
              href="#setup"
              className="inline-flex flex-col items-center justify-center gap-0.5 rounded-xl px-6 py-3 text-sm font-bold transition hover:scale-105"
              style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
            >
              <span className="flex items-center gap-2"><Play className="h-4 w-4" /> Watch Setup</span>
              <span className="text-[10px] font-normal opacity-60">2 Min Video</span>
            </a>
          </div>

          {/* ── Social proof stat row (Element 5) ── */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-extrabold" style={{ color: "#f5c518" }}>500+</span>
              <span className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>Builders<br/>using it</span>
            </div>
            <div className="h-8 w-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-extrabold" style={{ color: "#4ade80" }}>15 min</span>
              <span className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>Free trial<br/>no card</span>
            </div>
            <div className="h-8 w-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-extrabold text-white">₹349</span>
              <span className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>Starts<br/>from</span>
            </div>
            <div className="h-8 w-px hidden sm:block" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="hidden sm:flex items-center gap-1.5">
              <span style={{ color: "#f5c518" }}>★★★★★</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Rated by users</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — feature list card ── */}
        <div className="w-full flex-shrink-0 md:w-[380px]">
          <div
            className="rounded-2xl p-1"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {heroFeatures.map((f, i) => (
              <div
                key={f.t}
                className="flex items-center gap-4 rounded-xl px-5 py-4 transition hover:bg-white/5"
                style={{ borderBottom: i < heroFeatures.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base"
                  style={{ background: "rgba(245,197,24,0.1)", color: "#f5c518" }}>
                  {f.icon}
                </span>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white">{f.t}</div>
                  <div className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{f.d}</div>
                </div>
                <Check className="h-4 w-4 shrink-0" style={{ color: "#4ade80" }} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-border/50 bg-card/30 py-4">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap text-sm text-muted-foreground">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="text-primary">◆</span>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-24"
    >
      <Reveal>
        <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          Build Without Limits
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
          Try first with a 15-minute free trial. Upgrade only when it works for
          you.
        </p>
      </Reveal>
      <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs md:mt-10 md:gap-3 md:text-sm">
        {[
          "15-minute trial available",
          "No credit limits",
          "Instant delivery",
          "No project migration",
        ].map((t, i) => (
          <Reveal key={t} delay={i * 60}>
            <span className="inline-block rounded-full border border-border bg-card/40 px-4 py-1.5 text-muted-foreground transition hover:scale-105 hover:border-primary/50">
              {t}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── TRUST BAR ─────────────────────────────────── */
function TrustBar() {
  const items = [
    { icon: "⚡", text: "Instant Activation" },
    { icon: "✅", text: "15-Min Free Trial" },
    { icon: "🔒", text: "No Workspace Transfer" },
    { icon: "♾️", text: "No Credit Limits" },
    { icon: "💬", text: "WhatsApp Support" },
    { icon: "🚀", text: "Works Immediately" },
  ];
  return (
    <div
      className="border-y px-4 py-3"
      style={{ background: "rgba(245,197,24,0.06)", borderColor: "rgba(245,197,24,0.2)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((it) => (
          <span key={it.text} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
            <span>{it.icon}</span> {it.text}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── HOW IT WORKS ───────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: "💬",
      title: "Message Us on WhatsApp",
      desc: "Tap the button below and send us a message. We reply within minutes, every day.",
      cta: "Message Now →",
      href: WHATSAPP_URL,
      highlight: true,
    },
    {
      num: "02",
      icon: "🔑",
      title: "Receive Your Access Key",
      desc: "After payment (or for a free trial), we instantly send you a unique activation key.",
      cta: null,
      href: null,
      highlight: false,
    },
    {
      num: "03",
      icon: "🚀",
      title: "Install, Activate & Build",
      desc: "Load the extension in Chrome, enter your key, and start building with unlimited credits.",
      cta: "See Setup Guide ↓",
      href: "#setup",
      highlight: false,
    },
  ];
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(245,197,24,0.12)", color: "#f5c518", border: "1px solid rgba(245,197,24,0.25)" }}>
            ⚡ Simple 3-Step Process
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            How to Get Started
          </h2>
          <p className="mt-3 text-sm md:text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
            From zero to building in under 5 minutes.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 100}>
            <div
              className="relative flex h-full flex-col rounded-2xl p-6 md:p-7"
              style={{
                background: s.highlight ? "rgba(245,197,24,0.08)" : "rgba(255,255,255,0.03)",
                border: s.highlight ? "1px solid rgba(245,197,24,0.4)" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {s.highlight && (
                <span className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-bold"
                  style={{ background: "#f5c518", color: "#111" }}>
                  START HERE
                </span>
              )}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{s.icon}</span>
                <span className="font-display text-4xl font-black" style={{ color: "rgba(245,197,24,0.3)" }}>{s.num}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
              {s.cta && s.href && (
                <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold transition hover:scale-105"
                  style={s.highlight ? { background: "#f5c518", color: "#111" } : { background: "rgba(255,255,255,0.08)", color: "#fff" }}>
                  {s.cta}
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────────────── */
function Testimonials() {
  const reviews = [
    {
      quote: "MalluCanvai saved me over ₹8,000 in credit costs. I was able to build and launch my SaaS MVP in less than 24 hours without hitting a single limit.",
      author: "Amit S.",
      role: "Indie Hacker",
      avatar: "💻"
    },
    {
      quote: "Not needing to migrate my workspace or projects was the best part. I just enabled the extension and continued building on lovable.dev immediately.",
      author: "David K.",
      role: "React Developer",
      avatar: "🚀"
    },
    {
      quote: "The 12-hour pass was exactly what I needed for a hackathon. Activates instantly via WhatsApp and works flawlessly.",
      author: "Rajesh M.",
      role: "Startup Founder",
      avatar: "⚙️"
    },
    {
      quote: "Got my trial key in under 2 minutes. By the end of the day I had shipped a full product. The 1 Month Pass is honestly the best investment I've made this year.",
      author: "Priya N.",
      role: "Freelance Developer",
      avatar: "🌟"
    },
    {
      quote: "I was skeptical at first, but the free trial won me over immediately. Zero setup complexity — just install and build.",
      author: "Karan V.",
      role: "Product Designer",
      avatar: "🎨"
    },
  ];

  return (
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.25)" }}>
            ⭐️ Loved by Builders
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            What Developers Say
          </h2>
          <p className="mt-3 text-sm md:text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
            See how other indie hackers and developers are scaling their Lovable builds.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.author} delay={i * 100}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div>
                <div className="text-amber-400 text-lg mb-4">★★★★★</div>
                <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.75)" }}>"{r.quote}"</p>
              </div>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/5">
                <span className="text-2xl">{r.avatar}</span>
                <div>
                  <div className="text-sm font-semibold text-white">{r.author}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{r.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── PRICING ────────────────────────────────────── */

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(245,197,24,0.12)", color: "#f5c518", border: "1px solid rgba(245,197,24,0.25)" }}>
            💰 Transparent Hourly Pricing
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            One-Time Passes. No Subscriptions.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Pay only for what you build. ₹20/hr (India) · $0.50/hr (US) · No recurring charges, cancel anytime.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p, i) => {
          const isFeatured = p.badge !== undefined;
          return (
            <Reveal key={p.name} delay={i * 70}>
              <div
                className={`hover-lift relative flex h-full flex-col overflow-hidden rounded-3xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-7 transition-all duration-300 ${
                  isFeatured
                    ? "border-2 border-primary bg-primary/5 scale-[1.03]"
                    : "border border-white/15 bg-white/5"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-transparent to-primary/10" />
                {p.badge && (
                  <span className="absolute top-3 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    {p.badge}
                  </span>
                )}
                <h3 className="font-display text-lg font-bold md:text-xl">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
                <div className="mt-4 font-display text-3xl font-bold md:mt-5 md:text-4xl text-white">{p.price}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.usd}</div>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm md:mt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={planWhatsApp(p.name, p.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 rounded-full py-3 text-center text-sm font-semibold transition hover:scale-[1.02] hover:opacity-90 ${
                    isFeatured
                      ? "bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(245,197,24,0.4)]"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function PriceCalculator() {
  const [hours, setHours] = useState(24);
  const [currency, setCurrency] = useState<"inr" | "usd">("inr");
  const cost = currency === "inr" ? (hours * 20).toFixed(2) : (hours * 0.5).toFixed(2);
  const symbol = currency === "inr" ? "₹" : "$";
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <Reveal>
        <div className="rounded-3xl border border-primary/30 bg-card/40 p-6 md:p-10 backdrop-blur">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold md:text-3xl">Price Calculator</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            Estimate your cost based on how many hours you plan to use the extension.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Duration: <span className="text-primary">{hours} hour{hours !== 1 ? "s" : ""}</span>
              </label>
              <input
                type="range" min={1} max={168} value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                <span>1 hr</span><span>1 week</span>
              </div>
              <div className="mt-3 flex gap-2">
                {[6,12,24,48,168].map(h => (
                  <button key={h} onClick={() => setHours(h)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold border transition ${hours === h ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card/50 text-muted-foreground hover:border-primary/50"}`}>
                    {h < 24 ? `${h}h` : h === 24 ? "1d" : h === 48 ? "2d" : "7d"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Currency</label>
              <div className="flex gap-3 mb-6">
                <button onClick={() => setCurrency("inr")}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-semibold border transition ${currency === "inr" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card/50 text-muted-foreground"}`}>
                  🇮🇳 INR (₹20/hr)
                </button>
                <button onClick={() => setCurrency("usd")}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-semibold border transition ${currency === "usd" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card/50 text-muted-foreground"}`}>
                  🇺🇸 USD ($0.50/hr)
                </button>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5 text-center">
                <div className="text-xs text-muted-foreground mb-1">Estimated cost for {hours}h</div>
                <div className="font-display text-4xl font-bold text-primary">{symbol}{cost}</div>
                <a href={planWhatsApp(`${hours} Hours Pass`, `${symbol}${cost}`)} target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-105">
                  Order This Plan
                </a>
                <p className="text-[10px] text-muted-foreground mt-3 leading-tight">
                  * Calculated at standard hourly rate. For heavier use, choose our 1 Month Pass for ₹2,499 ($29.99) to get massive savings!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      i: Zap,
      t: "Instant Delivery",
      d: "Receive access quickly after purchase.",
    },
    {
      i: InfinityIcon,
      t: "Unlimited Access",
      d: "Create without worrying about limits.",
    },
    {
      i: Workflow,
      t: "No Migration Required",
      d: "Continue using your existing workspace.",
    },
    {
      i: Rocket,
      t: "Built For Productivity",
      d: "Focus on creating, not setup.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          Why Creators Choose Lovable Extension
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-12 md:gap-6">
        {items.map(({ i: Icon, t, d }, idx) => (
          <Reveal key={t} delay={idx * 80}>
            <div className="hover-lift h-full rounded-2xl border border-border bg-card/40 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-display text-lg font-semibold">{t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{d}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Setup() {
  const videoUrl = "https://www.youtube.com/embed/4_l5aSV8sY0";
  return (
    <section
      id="setup"
      className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24"
    >
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          Setup & Usage Guide
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground md:text-base">
          Watch this quick tutorial to install the extension and unlock unlimited credits in minutes.
        </p>
        <p className="mx-auto mt-4 max-w-2xl rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-center text-xs text-muted-foreground md:text-sm">
          Note: We have updated our landing page, but the setup process remains
          exactly the same.
        </p>
      </Reveal>
      
      <div className="mt-10 mx-auto max-w-3xl">
        <Reveal delay={100}>
          <div
            className="hover-lift overflow-hidden rounded-2xl border border-border shadow-2xl"
            style={{ background: "var(--grad-card)" }}
          >
            <div className="aspect-video w-full bg-black/40">
              <iframe
                className="h-full w-full"
                src={videoUrl}
                title="MalluCanvai Setup Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-5 md:p-6 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Tutorial Video
              </div>
              <div className="mt-1 font-display text-lg font-bold md:text-xl">
                Complete Setup & Activation Guide
              </div>
              <p className="mt-2 text-sm text-muted-foreground mx-auto max-w-xl">
                Follow along step-by-step to download the ZIP file, load it in Chrome under Developer Mode, activate your pass key, and start building with unlimited credits.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card/40 p-6 md:p-8">
          <h3 className="font-display text-xl font-bold md:text-2xl">
            Detailed Setup Guide
          </h3>
          <ol className="mt-5 space-y-4 text-sm text-muted-foreground md:text-base">
            <li>
              <span className="font-semibold text-foreground">
                1. Download the ZIP:
              </span>{" "}
              Download the extension ZIP file. After unzipping, you&apos;ll see
              the extension folder. Do not open the folder contents directly.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                2. Load in Chrome:
              </span>{" "}
              Open Chrome and go to{" "}
              <span className="text-primary">chrome://extensions</span>. Enable{" "}
              <span className="text-primary">Developer Mode</span> (top right),
              then click{" "}
              <span className="text-primary">Load unpacked</span> on the upper
              left. <span className="font-bold text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">IMPORTANT: When selecting the extracted folder, make sure you double click on the folder and you should see four files there. Only after this the extension will work. Make sure that you double click on the extracted folder and then select folder.</span>
            </li>
            <li>
              <span className="font-semibold text-foreground">
                3. Open Your Workspace:
              </span>{" "}
              Open your AI builder workspace — we strongly recommend using only
              a{" "}
              <span className="text-primary">backup (remixed) project</span>{" "}
              when making changes with this extension.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                4. Activate:
              </span>{" "}
              Get your activation code from admin after payment (or your trial
              code) and enter it into the extension.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                5. Reload & Turn On:
              </span>{" "}
              Press <span className="text-primary">F5</span> to reload the
              page, then click the{" "}
              <span className="text-primary">Turn On</span> button in the
              extension.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                6. Start Building:
              </span>{" "}
              Open the <span className="text-primary">Chat</span> button inside
              the extension and enjoy unlimited credits.
            </li>
          </ol>
        </div>
      </Reveal>
    </section>
  );
}

function Steps() {
  const steps = [
    "Purchase a plan",
    "Receive access details",
    "Activate access",
    "Start building immediately",
    "Create without interruption",
    "Launch your projects",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          Get Started in Minutes
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s} delay={i * 60}>
            <div className="hover-lift h-full rounded-2xl border border-border bg-card/40 p-5 md:p-6">
              <div className="font-display text-3xl font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 font-medium">{s}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24"
    >
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
      </Reveal>
      <div className="mt-10 space-y-3 md:mt-12">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 40}>
            <div className="rounded-2xl border border-border bg-card/40 transition hover:border-primary/40">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium md:px-6 md:py-5 md:text-base"
              >
                <span>{f.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="animate-fade-in px-5 pb-4 text-sm text-muted-foreground md:px-6 md:pb-5">
                  {f.a}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <div
          className="rounded-3xl p-8 text-center md:p-14"
          style={{ background: "rgba(245,197,24,0.06)", border: "1px solid rgba(245,197,24,0.25)" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
            style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.3)" }}>
            🎁 15-Minute Free Trial — No Payment Needed
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Ready to Build Without Limits?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm md:text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
            Message us on WhatsApp right now. We'll send your trial code within minutes — no card, no signup.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-bold transition hover:scale-105"
              style={{ background: "#f5c518", color: "#111" }}
            >
              <span className="text-xl">💬</span> Start Free Trial on WhatsApp
            </a>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              WhatsApp: +91 73200 91112 · Replies within minutes
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span>✅ No credit card required</span>
            <span>✅ Works with existing workspace</span>
            <span>✅ Instant activation</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ─── STICKY WHATSAPP BUTTON ─────────────────────── */
function StickyWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Attention label */}
      <div
        className="rounded-full px-3 py-1 text-xs font-bold"
        style={{
          background: "rgba(37,211,102,0.2)",
          color: "#25D366",
          border: "1px solid rgba(37,211,102,0.4)",
          animation: "wa-bounce 2.5s ease-in-out infinite",
        }}
      >
        💬 Get Free Trial!
      </div>
      {/* Main button with ping ring */}
      <div className="relative">
        {/* Ping ring */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(37,211,102,0.4)",
            animation: "wa-ping-ring 1.8s ease-out infinite",
          }}
        />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-2xl transition hover:scale-105 hover:brightness-110"
          style={{
            background: "#25D366",
            color: "#fff",
            boxShadow: "0 4px 30px rgba(37,211,102,0.5)",
            animation: "wa-pulse 2s ease-in-out infinite",
          }}
        >
          <span className="text-xl">💬</span>
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">

          {/* Brand col */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-md text-sm"
                style={{ background: "linear-gradient(135deg,#f5c518,#d4a017)", color: "#111" }}
              >⚡</span>
              Lovable <span style={{ color: "#f5c518" }}>Extension</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Unlimited Lovable.dev credits via Chrome extension. No workspace transfer. Instant activation.
            </p>
          </div>

          {/* Links cols */}
          <div className="flex flex-wrap gap-10 text-sm">

            <div className="flex flex-col gap-2">
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Quick Links</div>
              <a href="#" className="hover:text-white transition" style={{ color: "rgba(255,255,255,0.6)" }}>Home</a>
              <a href="#pricing" className="hover:text-white transition" style={{ color: "rgba(255,255,255,0.6)" }}>Pricing</a>
              <a href="#setup" className="hover:text-white transition" style={{ color: "rgba(255,255,255,0.6)" }}>Setup Guide</a>
              <a href="#faq" className="hover:text-white transition" style={{ color: "rgba(255,255,255,0.6)" }}>FAQ</a>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Contact</div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                💬 WhatsApp Support
              </a>
              <a
                href="mailto:support@lovableextension.com"
                className="hover:text-white transition"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                ✉️ Email Us
              </a>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>📞 {WHATSAPP_PHONE_DISPLAY}</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Legal</div>
              <a
                href="/privacy-policy"
                className="hover:text-white transition"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="hover:text-white transition"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Terms of Service
              </a>
              <a
                href="/refund-policy"
                className="hover:text-white transition"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Refund Policy
              </a>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs md:flex-row"
          style={{ borderColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)" }}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>© {new Date().getFullYear()} Lovable Extension. All rights reserved.</span>
          </div>
          <span>Made with ⚡ for builders · India 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
}
