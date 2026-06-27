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
  Lock,
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
  "30-Minute Free Trial",
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
    a: "Yes. Try unlimited credit usage for 30 minutes before choosing a plan. No payment or registration is required to start.",
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
    a: "The extension is named Lovable Extension. Install it via the ZIP file by following the setup guide.",
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
  {
    q: "Is this officially affiliated with Lovable?",
    a: "No, this is an unofficial community extension. We provide it 'as is' with no guarantees. It simply acts as a wrapper. Please use it responsibly.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/917320091112?text=" +
  encodeURIComponent("Hi! I saw your ad and want the Lovable Extension free trial 🙏");

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
        className="rounded-[2rem] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
        style={{
          background: "#f0fdf4",
          border: "2px solid #bbf7d0",
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl">💬</span>
          <div>
            <div className="font-bold text-green-900 text-base md:text-lg">{msg}</div>
            <div className="text-xs mt-0.5 font-medium text-green-700">
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
            background: "#22c55e",
            color: "#fff",
            boxShadow: "0 0 20px rgba(34,197,94,0.45)",
            animation: "wa-pulse 2s ease-in-out infinite",
          }}
        >
          💬 Start on WhatsApp Now →
        </a>
      </div>
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(34,197,94,0.45); }
          50% { box-shadow: 0 0 35px rgba(34,197,94,0.8); }
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

function TrialKeyGenerator() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/generate-license', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const text = await res.text();
      let data: any = {};
      
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        console.error("Non-JSON response received:", text);
        throw new Error('The server returned an invalid response. This often happens if the backend is not running. Are you using `vercel dev`?');
      }

      if (!res.ok) {
        throw new Error(data.error || data.message || 'Failed to generate key. Ensure you have not already claimed a trial.');
      }
      setKey(data.license?.key || data.key || data.licenseKey || data.id);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleCopy = () => {
    if (key) {
      navigator.clipboard.writeText(key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (key) {
    return (
      <div className="mt-10 rounded-2xl bg-white p-6 shadow-xl border border-green-100 w-full max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Check className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">Trial Key Generated!</h3>
        </div>
        <p className="text-sm font-medium text-gray-600 mb-4">Copy your 30-minute unlimited trial key below:</p>
        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border border-gray-200">
          <code className="text-purple-600 font-bold font-mono flex-1 text-sm break-all">{key}</code>
          <button 
            onClick={handleCopy}
            className="shrink-0 rounded-lg bg-purple-100 px-4 py-2 text-xs font-bold text-purple-700 hover:bg-purple-200 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="mt-5 text-sm font-semibold text-gray-600">
          <p>Next steps:</p>
          <ol className="list-decimal pl-4 mt-2 space-y-1 text-xs">
            <li><a href="https://dl.eklas.dev/spark.zip" className="text-purple-600 hover:underline font-bold">Download the extension</a></li>
            <li>Install it in Chrome (Developer Mode)</li>
            <li>Paste this key to activate</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 w-full max-w-md">
      <form onSubmit={handleGenerate} className="flex flex-col gap-3">
        <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-md border border-gray-200 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100 transition">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 bg-transparent px-4 py-2 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition shadow-sm hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
            style={{ background: "#8b5cf6", color: "#fff" }}
          >
            {loading ? "Generating..." : "Get Free Trial"} <Zap className="h-4 w-4" />
          </button>
        </div>
        {error && <div className="text-xs font-semibold text-red-500 px-4">{error}</div>}
        <div className="px-4 text-xs font-semibold text-gray-500 flex items-center gap-2">
          <Lock className="h-3 w-3" /> 1 trial per user. Instant activation.
        </div>
      </form>
      
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm font-bold text-gray-600 ml-2">
        <span className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Instant Setup</span>
        <span className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Works Everywhere</span>
      </div>
      
      <div className="mt-8 w-full">
        <a
          href="https://dl.eklas.dev/spark.zip"
          className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gray-900 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0 duration-300 ease-out" />
          <Download className="h-5 w-5 relative z-10" /> 
          <span className="relative z-10 tracking-wide">Download Extension (.zip)</span>
        </a>
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links: { h: string, l: string }[] = []; // Removed secondary navigation to focus attention on primary CTA
  return (
    <header className="sticky top-0 z-50 px-4 pt-5 md:px-10 md:pt-6">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3"
        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(18px)", border: "1px solid rgba(0,0,0,0.08)" }}
      >
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-gray-900 no-underline">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-base"
            style={{ background: "linear-gradient(135deg,#8b5cf6 0%,#7c3aed 100%)", color: "#fff" }}
            aria-label="Lovable Extension logo"
          >
            ⚡
          </span>
          <span>Lovable{" "}<span style={{ color: "#8b5cf6" }}>Extension</span></span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {links.map((n) => (
            <a key={n.h} href={n.h} className="transition hover:text-primary">
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
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition hover:scale-105 shadow-sm"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            Get Access
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="rounded-lg p-1.5 text-gray-900 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className="mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden shadow-lg"
          style={{ background: "rgba(255,255,255,0.98)", border: "1px solid rgba(0,0,0,0.08)" }}
        >
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-800">
            {links.map((n) => (
              <a
                key={n.h}
                href={n.h}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-gray-100"
              >
                {n.l}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-full px-5 py-2.5 text-center text-sm font-semibold shadow-sm"
              style={{ background: "var(--primary)", color: "#fff" }}
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
  { icon: "🎁", t: "30-Minute Free Trial",     d: "Test all features with unlimited credits." },
  { icon: "⚡", t: "Unlimited Prompts & Chat",  d: "No credit deductions or token restrictions." },
  { icon: "🔒", t: "Works on Current Projects", d: "No project migrations or workspace transfer." },
  { icon: "🔑", t: "Instant Key Delivery",     d: "Delivered instantly via WhatsApp 24/7." },
];

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#f1f5f9", minHeight: "85vh" }}
    >
      {/* subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 60%)" }}
      />
      
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-5 py-20 md:flex-row md:items-center md:justify-between md:gap-16 md:px-10 md:py-28">

        {/* ── LEFT COLUMN ── */}
        <div className="flex-1 max-w-2xl">
          {/* badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-sm"
            style={{ background: "#fff", color: "#6d28d9", border: "1px solid #ede9fe" }}
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Instant WhatsApp Delivery
          </div>

          {/* headline */}
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-[4rem]">
            Build Without Limits.<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)" }}>Unlimited Lovable Credits.</span>
          </h1>

          {/* sub */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 font-medium">
            Get unlimited Lovable.dev credits via our custom Chrome extension. No workspace transfer required. Works seamlessly with your existing projects.
          </p>

          {/* account safety line */}
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-gray-500">
            <span className="text-xl">🔒</span>
            Unofficial client-side wrapper. Use responsibly.
          </p>

          {/* CTAs — Single Focused CTA per Unbounce CRO guidelines */}
          <TrialKeyGenerator />
        </div>

        {/* ── RIGHT COLUMN — Feature Visualization ── */}
        <div className="w-full flex-shrink-0 md:w-[500px]">
          <div className="relative rounded-2xl bg-white p-2 shadow-2xl border border-gray-100 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Browser Header Mockup */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100 rounded-t-xl">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto flex h-6 w-2/3 items-center justify-center rounded-md bg-white text-[10px] font-medium text-gray-400 border border-gray-200">
                <span className="flex items-center gap-1">lovable.dev</span>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="p-6 md:p-8 bg-white rounded-b-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                    <InfinityIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Active Credits</h3>
                    <p className="text-sm font-medium text-green-600">Unlimited Plan Active</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status</div>
                  <div className="text-sm font-bold text-gray-900 flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span> Connected
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {heroFeatures.map((f, i) => (
                  <div
                    key={f.t}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-50 bg-gray-50/50 hover:bg-gray-50 transition"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-base shadow-sm">
                      {f.icon}
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900">{f.t}</div>
                      <div className="mt-0.5 text-xs font-medium text-gray-500">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Trust Badge */}
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex -space-x-2">
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-blue-500"></div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-green-500"></div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-purple-500"></div>
            </div>
            <div className="text-xs font-bold text-gray-600">
              <span className="text-gray-900">500+</span> Builders<br/>Trust Us
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y-2 py-4 bg-white border-gray-100">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap text-sm font-bold text-purple-600">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="text-yellow-400">◆</span>
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
        <h2 className="font-display text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
          Build Without Limits
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-gray-600 md:text-base">
          Try first with a 30-minute free trial. Upgrade only when it works for
          you.
        </p>
      </Reveal>
      <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs md:mt-10 md:gap-3 md:text-sm">
        {[
          "30-minute trial available",
          "No credit limits",
          "Instant delivery",
          "No project migration",
        ].map((t, i) => (
          <Reveal key={t} delay={i * 60}>
            <span className="inline-block rounded-full border-2 border-gray-100 bg-white px-4 py-1.5 font-bold text-gray-600 transition hover:scale-105 hover:border-purple-200 shadow-sm">
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
      style={{ background: "#fef3c7", borderColor: "#fde68a" }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((it) => (
          <span key={it.text} className="flex items-center gap-1.5 text-xs font-bold" style={{ color: "#b45309" }}>
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
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-4"
            style={{ background: "#f3e8ff", color: "#7e22ce", border: "1px solid #e9d5ff" }}>
            ⚡ Simple 3-Step Process
          </div>
          <h2 className="font-display text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            How to Get Started
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-gray-500">
            From zero to building in under 5 minutes.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 100}>
            <div
              className="relative flex h-full flex-col rounded-[2rem] p-6 md:p-7 shadow-lg transition-transform hover:-translate-y-1"
              style={{
                background: s.highlight ? "#fef3c7" : "#ffffff",
                border: s.highlight ? "2px solid #fde68a" : "2px solid #f3f4f6",
              }}
            >
              {s.highlight && (
                <span className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-black"
                  style={{ background: "#f5c518", color: "#111" }}>
                  START HERE
                </span>
              )}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{s.icon}</span>
                <span className="font-['Caveat'] text-4xl font-bold" style={{ color: s.highlight ? "#d97706" : "#8b5cf6" }}>{s.num}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm flex-1 font-medium text-gray-600">{s.desc}</p>
              {s.cta && s.href && (
                <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center justify-center rounded-[2rem] px-5 py-2.5 text-sm font-bold shadow-sm transition hover:scale-105"
                  style={s.highlight ? { background: "#8b5cf6", color: "#fff" } : { background: "#f3f4f6", color: "#374151" }}>
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
      quote: "Lovable Extension saved me over ₹8,000 in credit costs. I was able to build and launch my SaaS MVP in less than 24 hours without hitting a single limit.",
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
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24" style={{ background: "#faf5ff" }}>
      <Reveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-4"
            style={{ background: "#dcfce7", color: "#15803d", border: "1px solid #bbf7d0" }}>
            ⭐️ Loved by Builders
          </div>
          <h2 className="font-display text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            What Developers Say
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-gray-500">
            See how other indie hackers and developers are scaling their Lovable builds.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.author} delay={i * 100}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] border-2 border-purple-100 bg-white shadow-md p-6 md:p-8 hover:-translate-y-1 transition-transform">
              <div>
                <div className="text-amber-400 text-lg mb-4">★★★★★</div>
                <p className="text-sm font-medium text-gray-700">"{r.quote}"</p>
              </div>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t-2 border-gray-100">
                <span className="text-2xl bg-gray-50 rounded-full h-10 w-10 flex items-center justify-center">{r.avatar}</span>
                <div>
                  <div className="text-sm font-bold text-gray-900">{r.author}</div>
                  <div className="text-xs font-semibold text-gray-500">{r.role}</div>
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
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-4"
            style={{ background: "#fef3c7", color: "#d97706", border: "1px solid #fde68a" }}>
            💰 Transparent Hourly Pricing
          </div>
          <h2 className="font-display text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            One-Time Passes. <span className="font-['Caveat'] text-purple-500">No Subscriptions.</span>
          </h2>
          <p className="mt-4 text-sm font-medium text-gray-500 md:text-base">
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
                className={`relative flex h-full flex-col overflow-hidden rounded-[2.5rem] p-6 shadow-xl md:p-7 transition-all duration-300 hover:-translate-y-2 ${
                  isFeatured
                    ? "border-4 border-purple-500 bg-white scale-[1.03]"
                    : "border-2 border-gray-100 bg-white"
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-yellow-400" />
                )}
                {p.badge && (
                  <span className="absolute top-5 right-5 rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black">
                    {p.badge}
                  </span>
                )}
                <h3 className="font-display text-lg font-black md:text-xl text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-purple-600">{p.tag}</p>
                <div className="mt-4 font-display text-3xl font-black md:mt-5 md:text-4xl text-gray-900">{p.price}</div>
                <div className="mt-1 text-sm font-bold text-gray-400">{p.usd}</div>
                <ul className="mt-5 flex-1 space-y-3 text-sm md:mt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <Check className="h-3 w-3 font-bold" />
                      </span>
                      <span className="font-medium text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={planWhatsApp(p.name, p.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 rounded-[2rem] py-3 text-center text-sm font-bold shadow-sm transition hover:scale-105 ${
                    isFeatured
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
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
        <div className="rounded-[2.5rem] border-2 border-yellow-200 bg-yellow-50 p-6 md:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black">
              <Calculator className="h-5 w-5 font-bold" />
            </span>
            <h2 className="font-display text-2xl font-black text-gray-900 md:text-3xl">Price Calculator</h2>
          </div>
          <p className="text-sm font-medium text-gray-600 mb-8">
            Estimate your cost based on how many hours you plan to use the extension.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-gray-500 mb-2">
                Duration: <span className="text-purple-600">{hours} hour{hours !== 1 ? "s" : ""}</span>
              </label>
              <input
                type="range" min={1} max={168} value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-purple-600"
              />
              <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-1">
                <span>1 hr</span><span>1 week</span>
              </div>
              <div className="mt-3 flex gap-2">
                {[6,12,24,48,168].map(h => (
                  <button key={h} onClick={() => setHours(h)}
                    className={`rounded-[1rem] px-3 py-1.5 text-xs font-bold border-2 transition ${hours === h ? "bg-purple-600 text-white border-purple-600" : "border-gray-200 bg-white text-gray-500 hover:border-purple-300"}`}>
                    {h < 24 ? `${h}h` : h === 24 ? "1d" : h === 48 ? "2d" : "7d"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-gray-500 mb-2">Currency</label>
              <div className="flex gap-3 mb-6">
                <button onClick={() => setCurrency("inr")}
                  className={`flex-1 rounded-[1rem] py-2.5 text-sm font-bold border-2 transition ${currency === "inr" ? "bg-purple-600 text-white border-purple-600" : "border-gray-200 bg-white text-gray-500"}`}>
                  🇮🇳 INR (₹20/hr)
                </button>
                <button onClick={() => setCurrency("usd")}
                  className={`flex-1 rounded-[1rem] py-2.5 text-sm font-bold border-2 transition ${currency === "usd" ? "bg-purple-600 text-white border-purple-600" : "border-gray-200 bg-white text-gray-500"}`}>
                  🇺🇸 USD ($0.50/hr)
                </button>
              </div>
              <div className="rounded-[1.5rem] border-2 border-purple-100 bg-white p-5 text-center shadow-sm">
                <div className="text-xs font-bold text-gray-500 mb-1">Estimated cost for {hours}h</div>
                <div className="font-display text-4xl font-black text-purple-600">{symbol}{cost}</div>
                <a href={planWhatsApp(`${hours} Hours Pass`, `${symbol}${cost}`)} target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-[2rem] bg-yellow-400 px-6 py-2.5 text-sm font-black text-black transition hover:scale-105 shadow-md">
                  Order This Plan
                </a>
                <p className="text-[10px] font-medium text-gray-400 mt-3 leading-tight">
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
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24" style={{ background: "#f8fafc" }}>
      <Reveal>
        <h2 className="text-center font-display text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
          Why Creators Choose <span className="font-['Caveat'] text-purple-600">Lovable Extension</span>
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-12 md:gap-6">
        {items.map(({ i: Icon, t, d }, idx) => (
          <Reveal key={t} delay={idx * 80}>
            <div className="flex h-full flex-col rounded-[2rem] border-2 border-gray-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[1rem] bg-purple-100 text-purple-600">
                <Icon className="h-6 w-6 font-bold" />
              </div>
              <div className="font-display text-lg font-bold text-gray-900">{t}</div>
              <div className="mt-1 text-sm font-medium text-gray-500">{d}</div>
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
        <h2 className="text-center font-display text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
          Setup & Usage Guide
        </h2>
        <p className="mt-3 text-center text-sm font-medium text-gray-500 md:text-base">
          Watch this quick tutorial to install the extension and unlock unlimited credits in minutes.
        </p>
        <p className="mx-auto mt-4 max-w-2xl rounded-[1.5rem] border-2 border-yellow-200 bg-yellow-50 px-4 py-3 text-center text-xs font-bold text-yellow-800 md:text-sm">
          Note: We have updated our landing page, but the setup process remains
          exactly the same.
        </p>
      </Reveal>
      
      <div className="mt-10 mx-auto max-w-3xl">
        <Reveal delay={100}>
          <div
            className="overflow-hidden rounded-[2rem] border-4 border-gray-100 shadow-xl bg-white transition-transform hover:-translate-y-1"
          >
            <div className="aspect-video w-full bg-gray-100">
              <iframe
                className="h-full w-full"
                src={videoUrl}
                title="Lovable Extension Setup Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-5 md:p-6 text-center">
              <div className="text-xs font-black uppercase tracking-wider text-purple-600">
                Tutorial Video
              </div>
              <div className="mt-1 font-display text-lg font-bold text-gray-900 md:text-xl">
                Complete Setup & Activation Guide
              </div>
              <p className="mt-2 text-sm font-medium text-gray-500 mx-auto max-w-xl">
                Follow along step-by-step to download the ZIP file, load it in Chrome under Developer Mode, activate your pass key, and start building with unlimited credits.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mx-auto mt-12 max-w-4xl rounded-[2.5rem] border-2 border-gray-100 bg-white shadow-sm p-6 md:p-8">
          <h3 className="font-display text-xl font-black text-gray-900 md:text-2xl">
            Detailed Setup Guide
          </h3>
          <ol className="mt-5 space-y-4 text-sm font-medium text-gray-600 md:text-base">
            <li>
              <span className="font-bold text-gray-900">
                1. Download the ZIP:
              </span>{" "}
              Download the extension ZIP file. After unzipping, you&apos;ll see
              the extension folder. Do not open the folder contents directly.
            </li>
            <li>
              <span className="font-bold text-gray-900">
                2. Load in Chrome:
              </span>{" "}
              Open Chrome and go to{" "}
              <span className="text-purple-600 font-bold">chrome://extensions</span>. Enable{" "}
              <span className="text-purple-600 font-bold">Developer Mode</span> (top right),
              then click{" "}
              <span className="text-purple-600 font-bold">Load unpacked</span> on the upper
              left. <span className="font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">IMPORTANT: When selecting the extracted folder, make sure you double click on the folder and you should see four files there. Only after this the extension will work. Make sure that you double click on the extracted folder and then select folder.</span>
            </li>
            <li>
              <span className="font-bold text-gray-900">
                3. Open Your Workspace:
              </span>{" "}
              Open your AI builder workspace — we strongly recommend using only
              a{" "}
              <span className="text-purple-600 font-bold">backup (remixed) project</span>{" "}
              when making changes with this extension.
            </li>
            <li>
              <span className="font-bold text-gray-900">
                4. Activate:
              </span>{" "}
              Get your activation code from admin after payment (or your trial
              code) and enter it into the extension.
            </li>
            <li>
              <span className="font-bold text-gray-900">
                5. Reload & Turn On:
              </span>{" "}
              Press <span className="text-purple-600 font-bold">F5</span> to reload the
              page, then click the{" "}
              <span className="text-purple-600 font-bold">Turn On</span> button in the
              extension.
            </li>
            <li>
              <span className="font-bold text-gray-900">
                6. Start Building:
              </span>{" "}
              Open the <span className="text-purple-600 font-bold">Chat</span> button inside
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
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24" style={{ background: "#fef3c7" }}>
      <Reveal>
        <h2 className="text-center font-display text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
          Get Started in <span className="font-['Caveat'] text-purple-600">Minutes</span>
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s} delay={i * 60}>
            <div className="flex h-full items-center gap-4 rounded-[2rem] border-2 border-yellow-200 bg-white p-5 md:p-6 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 font-display text-xl font-black text-purple-600">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-bold text-gray-900">{s}</div>
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
        <h2 className="text-center font-display text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
      </Reveal>
      <div className="mt-10 space-y-3 md:mt-12">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 40}>
            <div className="rounded-[1.5rem] border-2 border-gray-100 bg-white transition hover:border-purple-200 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-bold text-gray-900 md:px-6 md:py-5 md:text-base"
              >
                <span>{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${open === i ? "rotate-180 text-purple-600" : ""}`}
                />
              </button>
              {open === i && (
                <div className="animate-fade-in px-5 pb-5 text-sm font-medium text-gray-600 md:px-6 md:pb-6">
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
          className="rounded-[3rem] p-8 text-center md:p-14 shadow-xl"
          style={{ background: "#fef3c7", border: "4px solid #fde68a" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-5 bg-white text-yellow-600 shadow-sm">
            🎁 30-Minute Free Trial — No Payment Needed
          </div>
          <h2 className="font-display text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Ready to Build <span className="font-['Caveat'] text-purple-600">Without Limits?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm md:text-base font-medium text-gray-600">
            Message us on WhatsApp right now. We'll send your trial code within minutes — no card, no signup.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-[2rem] px-8 py-4 text-base font-bold transition hover:scale-105 shadow-md bg-green-500 text-white"
            >
              <span className="text-xl">💬</span> Start Free Trial on WhatsApp
            </a>
            <p className="text-xs font-bold text-gray-500">
              WhatsApp: +91 73200 91112 · Replies within minutes
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-bold text-gray-600">
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
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-2">
      {/* Attention label */}
      <div
        className="rounded-[2rem] px-3 py-1.5 text-xs font-bold shadow-md"
        style={{
          background: "#fff",
          color: "#25D366",
          border: "2px solid #25D366",
        }}
      >
        👋 Need help? Chat with us!
      </div>
      {/* Main button */}
      <div className="relative">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-bold shadow-xl transition hover:scale-105"
          style={{
            background: "#25D366",
            color: "#fff",
            boxShadow: "0 10px 25px rgba(37,211,102,0.4)",
          }}
        >
          <span className="text-lg md:text-xl">💬</span>
          <span>WhatsApp Us Now</span>
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-gray-100 bg-white px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">

          {/* Brand col */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2 text-base font-black text-gray-900">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-[0.8rem] text-sm shadow-sm"
                style={{ background: "#fef3c7", color: "#d97706" }}
              >⚡</span>
              Lovable <span className="text-purple-600">Extension</span>
            </div>
            <p className="text-xs font-medium leading-relaxed text-gray-500">
              Unlimited Lovable.dev credits via Chrome extension. No workspace transfer. Instant activation.
            </p>
          </div>

          {/* Links cols */}
          <div className="flex flex-wrap gap-10 text-sm">

            <div className="flex flex-col gap-2">
              <div className="text-[11px] font-black uppercase tracking-widest text-gray-400">Quick Links</div>
              <a href="#" className="font-bold text-gray-600 hover:text-purple-600 transition">Home</a>
              <a href="#pricing" className="font-bold text-gray-600 hover:text-purple-600 transition">Pricing</a>
              <a href="#setup" className="font-bold text-gray-600 hover:text-purple-600 transition">Setup Guide</a>
              <a href="#faq" className="font-bold text-gray-600 hover:text-purple-600 transition">FAQ</a>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[11px] font-black uppercase tracking-widest text-gray-400">Contact</div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-green-600 hover:text-green-700 transition"
              >
                💬 WhatsApp Support
              </a>
              <a
                href="mailto:support@lovableextension.com"
                className="font-bold text-gray-600 hover:text-purple-600 transition"
              >
                ✉️ Email Us
              </a>
              <span className="font-bold text-gray-600">📞 {WHATSAPP_PHONE_DISPLAY}</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[11px] font-black uppercase tracking-widest text-gray-400">Legal</div>
              <a
                href="/privacy-policy"
                className="font-bold text-gray-600 hover:text-purple-600 transition"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="font-bold text-gray-600 hover:text-purple-600 transition"
              >
                Terms of Service
              </a>
              <a
                href="/refund-policy"
                className="font-bold text-gray-600 hover:text-purple-600 transition"
              >
                Refund Policy
              </a>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t-2 border-gray-100 pt-6 text-xs md:flex-row text-gray-500 font-bold"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span>© {new Date().getFullYear()} Lovable Extension. All rights reserved. Unofficial extension.</span>
          </div>
          <div className="flex gap-4">
            <span className="opacity-60">Not affiliated with lovable.dev</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
