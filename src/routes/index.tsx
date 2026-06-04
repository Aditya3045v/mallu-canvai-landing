import { createFileRoute } from "@tanstack/react-router";
import { Check, Zap, Infinity as InfinityIcon, Workflow, Rocket, Play, Download, ChevronDown, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { HlsVideo } from "@/components/HlsVideo";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "" },
      { name: "robots", content: "noindex, nofollow, noarchive, nosnippet, noimageindex" },
    ],
  }),
  component: Index,
});

const plans = [
  { name: "12 Hours Pass", price: "₹299", tag: "Quick sprint for short tasks", cta: "Get Instant Access", features: ["No credit limits", "Existing workspace supported", "No workspace transfer", "Instant activation"] },
  { name: "24 Hours Pass", price: "₹399", tag: "Perfect for quick builds & testing", cta: "Get Instant Access", badge: "Most Popular", features: ["No credit limits", "Existing workspace supported", "No workspace transfer", "Instant activation"] },
];

const marqueeItems = ["30-Minute Free Trial", "Unlimited Credit Usage", "No Workspace Transfer", "No Project Migration", "Instant Delivery", "Support Included", "Works with Any Workspace", "Fast Activation", "Secure Access", "Priority Support", "Creator-Friendly Plans"];

const faqs = [
  { q: "Is there a free trial?", a: "Yes. Try unlimited credit usage for 30 minutes before choosing a plan." },
  { q: "Do I need to transfer my workspace?", a: "No. MalluAI works directly with your existing workspace — no transfer needed." },
  { q: "Do I need to move my projects?", a: "Not at all. Continue working on your existing projects without any migration." },
  { q: "How fast is activation?", a: "Activation is instant once your purchase is complete." },
  { q: "Are there any credit limits?", a: "No. During your active plan you build freely with no credit caps." },
  { q: "Is support available?", a: "Yes, support is included with every plan and scales up with higher tiers." },
];

const WHATSAPP_URL = "https://wa.me/917320091112?text=" + encodeURIComponent("Hi, I'm interested...");

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <Pricing />
      <WhyUs />
      <Setup />
      <Steps />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { h: "#pricing", l: "Pricing" },
    { h: "#features", l: "Features" },
    { h: "#setup", l: "Setup" },
    { h: "#faq", l: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-12 md:pt-6 lg:px-16">
      <div className="liquid-glass mx-auto flex max-w-7xl items-center justify-between rounded-xl px-3 py-2 md:px-4">
        <span className="text-xl font-semibold tracking-tight text-white md:text-2xl">MalluAI</span>
        <nav className="hidden gap-8 text-sm text-white/80 md:flex">
          {links.map((n) => (
            <a key={n.h} href={n.h} className="transition hover:text-gray-300">{n.l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="rounded-lg p-1.5 text-white md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="liquid-glass mx-auto mt-2 max-w-7xl rounded-xl p-4 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-3 text-sm text-white/90">
            {links.map((n) => (
              <a key={n.h} href={n.h} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/10">{n.l}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}


function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--grad-hero)" }}>
      <HlsVideo
        src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 text-center md:px-6 md:pt-20 md:pb-24">
        <div className="animate-hero-in mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
          Instant Delivery · 30-Min Free Trial
        </div>
        <h1 className="animate-hero-in font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl" style={{ animationDelay: "0.1s" }}>
          Build Faster. <br />
          <span className="bg-gradient-to-r from-primary to-emerald-300 bg-clip-text text-transparent">Create More.</span><br />
          Launch Without Limits.
        </h1>
        <p className="animate-hero-in mx-auto mt-6 max-w-2xl text-sm text-muted-foreground md:text-lg" style={{ animationDelay: "0.2s" }}>
          No credit limits. No workspace transfer. MalluAI works seamlessly with your existing workspace.
        </p>
        <div className="animate-hero-in mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-10" style={{ animationDelay: "0.3s" }}>
          <a href="https://drive.google.com/file/d/1Od9RvcRrrgfwkBlqGvv_3Hec5hCGrwAJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="animate-glow inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-105">
            <Download className="h-4 w-4" /> Download Guide
          </a>
          <a href="#setup" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:scale-105 hover:bg-card">
            <Play className="h-4 w-4" /> Watch Setup Video
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Scroll down to view plans, trial details, and setup steps.</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-4">
          {[
            { t: "30-Minute Free Trial", d: "Unlimited credit usage before you buy." },
            { t: "No Credit Limits", d: "Build freely during your active plan." },
            { t: "No Workspace Transfer", d: "Continue with your existing workspace." },
            { t: "Instant Activation", d: "Start quickly after purchase." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 80}>
              <div className="hover-lift rounded-2xl border border-border bg-card/40 p-5 text-left backdrop-blur">
                <div className="font-display text-base font-semibold">{f.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.d}</div>
              </div>
            </Reveal>
          ))}
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
            <span className="text-primary">◆</span>{m}
          </span>
        ))}
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">Build Without Limits</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">Try first with a 30-minute free trial. Upgrade only when it works for you.</p>
      </Reveal>
      <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs md:mt-10 md:gap-3 md:text-sm">
        {["30-minute trial available", "No credit limits", "Instant delivery", "No project migration"].map((t, i) => (
          <Reveal key={t} delay={i * 60}>
            <span className="inline-block rounded-full border border-border bg-card/40 px-4 py-1.5 text-muted-foreground transition hover:scale-105 hover:border-primary/50">{t}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 70}>
            <div className="hover-lift relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-7">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-transparent to-primary/10" />
              {p.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground md:left-7">{p.badge}</span>
              )}
              <h3 className="font-display text-lg font-bold md:text-xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
              <div className="mt-4 font-display text-3xl font-bold md:mt-5 md:text-4xl">{p.price}</div>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm md:mt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl border border-primary/30 bg-primary/10 px-3 py-2 text-xs text-muted-foreground">
                Note: Remix your project and copy it to a new lovable account before using this extension to play safe.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition hover:scale-[1.02] hover:opacity-90">{p.cta}</a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { i: Zap, t: "Instant Delivery", d: "Receive access quickly after purchase." },
    { i: InfinityIcon, t: "Unlimited Access", d: "Create without worrying about limits." },
    { i: Workflow, t: "No Migration Required", d: "Continue using your existing workspace." },
    { i: Rocket, t: "Built For Productivity", d: "Focus on creating, not setup." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl">Why Creators Choose MalluAI</h2>
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
  const steps = [
    { n: "Step 1", t: "Install & Activate Extension", d: "Download the ZIP file, unzip it, enable Developer Mode, load the extension, and activate your license key.", video: "https://www.youtube.com/embed/u3WiFdr-SqY" },
    { n: "Step 2", t: "How to Use the Extension", d: "Open your workspace, connect the extension, use your credits, and start building without moving your projects.", video: "https://www.youtube.com/embed/uk2feULb5NI" },
  ];
  return (
    <section id="setup" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl">Setup & Usage Guide</h2>
        <p className="mt-3 text-center text-sm text-muted-foreground md:text-base">Two short videos to get you started in minutes.</p>
        <p className="mx-auto mt-4 max-w-2xl rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-center text-xs text-muted-foreground md:text-sm">
          Note: We have updated our landing page, but the setup process remains exactly the same.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div className="hover-lift overflow-hidden rounded-2xl border border-border" style={{ background: "var(--grad-card)" }}>
              <div className="aspect-video w-full bg-black/40">
                <iframe
                  className="h-full w-full"
                  src={s.video}
                  title={s.t}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">{s.n}</div>
                <div className="mt-1 font-display text-lg font-bold md:text-xl">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card/40 p-6 md:p-8">
          <h3 className="font-display text-xl font-bold md:text-2xl">Detailed Setup Guide</h3>
          <ol className="mt-5 space-y-4 text-sm text-muted-foreground md:text-base">
            <li>
              <span className="font-semibold text-foreground">1. Download the ZIP:</span> Download the file named <span className="text-primary">lovable extension.zip</span>. After unzipping, you'll see a folder named <span className="text-primary">lovable extension</span>. Do not open it.
            </li>
            <li>
              <span className="font-semibold text-foreground">2. Load in Chrome:</span> Open Chrome and go to <span className="text-primary">chrome://extensions</span>. Enable <span className="text-primary">Developer Mode</span> (top right), then click <span className="text-primary">Load unpacked</span> on the upper left and select the unzipped folder.
            </li>
            <li>
              <span className="font-semibold text-foreground">3. Open Lovable:</span> Open Lovable — we strongly recommend using only a <span className="text-primary">backup (remixed) project</span> when making changes with this extension.
            </li>
            <li>
              <span className="font-semibold text-foreground">4. Activate:</span> Get your activation code from admin after payment (or your trial code) and enter it into the extension.
            </li>
            <li>
              <span className="font-semibold text-foreground">5. Reload & Turn On:</span> Press <span className="text-primary">F5</span> to reload Lovable, then click the <span className="text-primary">Turn On</span> button in the extension.
            </li>
            <li>
              <span className="font-semibold text-foreground">6. Start Building:</span> Open the <span className="text-primary">Chat</span> button inside the extension and enjoy unlimited credits.
            </li>
          </ol>
        </div>
      </Reveal>
    </section>
  );
}

function Steps() {
  const steps = ["Purchase a plan", "Receive access details", "Activate access", "Start building immediately", "Create without interruption", "Launch your projects"];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl">Get Started in Minutes</h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s} delay={i * 60}>
            <div className="hover-lift h-full rounded-2xl border border-border bg-card/40 p-5 md:p-6">
              <div className="font-display text-3xl font-bold text-primary">{String(i + 1).padStart(2, "0")}</div>
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
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
      </Reveal>
      <div className="mt-10 space-y-3 md:mt-12">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 40}>
            <div className="rounded-2xl border border-border bg-card/40 transition hover:border-primary/40">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium md:px-6 md:py-5 md:text-base">
                <span>{f.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="animate-fade-in px-5 pb-4 text-sm text-muted-foreground md:px-6 md:pb-5">{f.a}</div>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <div className="rounded-3xl border border-border p-6 text-center sm:p-10 md:p-12" style={{ background: "var(--grad-hero), var(--grad-card)" }}>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">Try Unlimited Credits Before You Buy</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">Start with a 30-minute free trial, use your existing workspace, and upgrade only when you are ready.</p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap md:mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="animate-glow rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-105">Start Free Trial</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold transition hover:scale-105 hover:bg-card">View Plans</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-8 md:px-6 md:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs text-muted-foreground md:flex-row md:text-sm">

        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>© {new Date().getFullYear()} MalluAI</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          <span>Need Help?</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
