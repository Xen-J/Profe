import React from "react";
import {
  Zap,
  ArrowRight,
  Wand2,
  TrendingUp,
  GraduationCap,
  Bot,
} from "lucide-react";

// Paleta de colores (extraída del tailwind.config del HTML original)
const colors = {
  onSecondaryFixed: "#07006c",
  onSecondaryFixedVariant: "#2f2ebe",
  surfaceContainer: "#eceef0",
  surfaceContainerHigh: "#e6e8ea",
  primaryContainer: "#131b2e",
  onPrimaryContainer: "#7c839b",
  onPrimaryFixed: "#131b2e",
  onPrimaryFixedVariant: "#3f465c",
  secondary: "#4648d4",
  secondaryContainer: "#6063ee",
  secondaryFixed: "#e1e0ff",
  secondaryFixedDim: "#c0c1ff",
  tertiaryFixed: "#89f5e7",
  tertiaryFixedDim: "#6bd8cb",
  onTertiaryContainer: "#0c9488",
  onTertiaryFixed: "#00201d",
  onSurface: "#191c1e",
  onSurfaceVariant: "#45464d",
  onBackground: "#191c1e",
  background: "#f7f9fb",
  outline: "#76777d",
  outlineVariant: "#c6c6cd",
  error: "#ba1a1a",
};

// Avatares y elementos visuales del HTML original
const userAvatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA1YOM5cLl3CScl0huBYUv-933vEov28IKq6bGZ7agl7JLd5iKXZacsh9x-1HTMm5OoPvD1_U6A-19N0OFlEd95EysD00v4cKZjK0Or_Sy44f6QtJufsQ_w57LIV244FoKzK1SjIeVAT2I85IS43nnysr3dc5uRSAYswjFu18np-wmZ4rmyOuG8JmLTQ8-_ZifQinIBltKXr4BQERCCBtuoLyN9XRt4kU-ehu7xVREuOxFRoLdLcVQw-Rr3B6B9SJpgjMRfvSWYbT4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAU6E5-1tmKAA3oWGBxIWV3hsHHdgojfzk6xwbCPm2O4dJNwf_SOSVaq9qzgf8mRAg-pXz5COdnVBDI7k6NGcgek3PFrYM-dLEbaVenOfMtg0yOqrgM69g480Jl53E62yZkB-L2_uY2H3k0R9vros-1j1bvkT9Xju9i8IzsjFal6og0HaS7M0CFlmczo_fhvFQ4a4tNKSeubpehNg8_-dG3EKqMnTkSaZePdJ_wWcJLnyBjeg9ff6wctSquxQr7B7anb1BYVeyK2vE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDdcs0Ttsd5naiUDCY9a2t3oI7YGYIfOVQco_TmpQS_RcRnyZnBPOmMx7VMc2xkZ5rSrTEgbL9E02WZKJGdPIgzqhzhvGmExpCN1JuM94ysFf_LkuMfVHMoA41mycoZea46niUAs70zETxpe5payYVdI4FTcA1oTa6F2-MjgZ4sgc1rXab5t33oD1MCbXvVHJOFbbyJVLslYPwXbTRy4RHEWuL9K_JW0fQ-RDJ0RK9QyZWRtjFmm3AEILP1ojKBsOoTFjx_cJ0HlxA",
];

const codeContextImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWOPEey5rNhqjGuoOHYSJDq77FV8t84yYSLKp38ijM7zEtrCbfD2_8k-Um-KeJCZ1fvtVgzkZFwVj-zVLpoiolFfh-hOs1FH4_4lt651t2L-PQUOXy5wOnGR-Z-JWu2kEgIUG88WZhkphG6tAWnt5Tyir9wqddtFkf3zXNmUPpsMYH_BgZhc2nPVh5m6bgDbRCL2t4_AzpoycmFDHY_5tm7NoNyMtu4LbLd40qI-PjlMs3vFLA19ow89xd5m2URWEgC6BeV6kQPVs";

const aiVisualizationImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD97hrjUejjQGj2xGqZ536JMVAXgLEBR8P-eOT9NiaceQXhC2-sascabmhYrFq0mO7ehffixxBjWR1_uobrWWTcV8dj6lr7KADVNYrLO_2S-rfd5IRrBHAOqbu90Z0cOirYorg7yUHoQGDf185oroM9rIOuUn7wWJES_4jV0GZsPoIfQsWo405emvVkUN8rABLbubgMgj4tJq-5AUcvPbj3LzRMYMZt5fEi8EIOFF8ZQJCvypqJbCX6VdGQF4OVy5uZb6C1Y4v1WR4";

// ----- Componentes auxiliares -----

const Header = () => (
  <header
    className="bg-white border-b sticky top-0 z-50 w-full"
    style={{ borderColor: "#e2e8f0" }}
  >
    <div className="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold tracking-tighter text-slate-900">
          Nixho
        </span>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="font-bold text-sm tracking-tight transition-colors duration-200"
            style={{ color: colors.secondary }}
          >
            Curriculum
          </a>
          <a
            href="#"
            className="text-slate-600 font-medium text-sm tracking-tight hover:text-indigo-500 transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-slate-600 font-medium text-sm tracking-tight hover:text-indigo-500 transition-colors duration-200"
          >
            AI Assistant
          </a>
          <a
            href="#"
            className="text-slate-600 font-medium text-sm tracking-tight hover:text-indigo-500 transition-colors duration-200"
          >
            Enterprise
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-slate-600 text-sm font-semibold tracking-tight px-4 py-2 hover:text-indigo-500 transition-colors">
          Student Login
        </button>
        <button
          className="text-white px-5 py-2 rounded-lg text-sm font-semibold tracking-tight hover:opacity-90 transition-opacity"
          style={{ backgroundColor: colors.primaryContainer }}
        >
          Teacher Portal
        </button>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="max-w-7xl mx-auto px-8 py-16 md:py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Columna izquierda */}
      <div className="space-y-8">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
          style={{ backgroundColor: colors.secondaryFixed }}
        >
          <Zap
            className="w-4 h-4"
            style={{ color: colors.onSecondaryFixedVariant }}
            fill="currentColor"
          />
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: colors.onSecondaryFixedVariant }}
          >
            New: Generative Coding Paths
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold leading-tight max-w-xl"
          style={{ color: colors.onBackground, fontFamily: "Manrope, sans-serif" }}
        >
          Master the craft of{" "}
          <span style={{ color: colors.secondary }}>digital engineering</span>
        </h1>

        <p
          className="text-lg max-w-lg leading-relaxed"
          style={{ color: colors.onSurfaceVariant }}
        >
          Accelerate your technical journey with Nixho's AI-powered
          personalized learning environment. From raw syntax to architectural
          mastery, we build the engineers of tomorrow.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button
            className="text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors flex items-center gap-2"
            style={{ backgroundColor: colors.secondary }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                colors.onSecondaryFixedVariant)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = colors.secondary)
            }
          >
            Start Learning Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            className="border px-8 py-4 rounded-lg text-base font-semibold transition-colors"
            style={{
              borderColor: colors.outline,
              color: colors.onSurface,
            }}
          >
            View Syllabus
          </button>
        </div>

        <div
          className="flex items-center gap-6 pt-8 border-t"
          style={{ borderColor: "#e2e8f0" }}
        >
          <div className="flex -space-x-3">
            {userAvatars.map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
              >
                <img
                  src={src}
                  alt={`User ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p
            className="text-xs font-semibold tracking-wider italic"
            style={{ color: colors.onSurfaceVariant }}
          >
            Trusted by 2,000+ students globally
          </p>
        </div>
      </div>

      {/* Columna derecha (Hero Illustration) */}
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full blur-3xl -z-10"
          style={{ backgroundColor: "rgba(70, 72, 212, 0.05)" }}
        />
        <div
          className="bg-white rounded-xl border shadow-lg overflow-hidden p-2 transform rotate-1 lg:rotate-2"
          style={{ borderColor: colors.outlineVariant }}
        >
          <div
            className="rounded-lg p-6 aspect-square flex flex-col justify-between relative overflow-hidden"
            style={{ backgroundColor: colors.primaryContainer }}
          >
            {/* Code header */}
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex gap-1.5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors.error }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors.secondaryFixedDim }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors.tertiaryFixedDim }}
                />
              </div>
              <div
                className="text-xs"
                style={{
                  color: colors.onPrimaryContainer,
                  fontFamily: "'Space Grotesk', monospace",
                }}
              >
                main.ts — Nixho IDE
              </div>
            </div>

            {/* Visual code representation */}
            <div
              className="relative flex-1 rounded-md p-4 space-y-2 overflow-hidden"
              style={{
                backgroundColor: "rgba(0,0,0,0.2)",
                fontFamily: "'Space Grotesk', monospace",
              }}
            >
              <div
                className="w-3/4 h-2 rounded"
                style={{
                  backgroundColor: colors.onPrimaryContainer,
                  opacity: 0.3,
                }}
              />
              <div
                className="w-1/2 h-2 rounded"
                style={{
                  backgroundColor: colors.onPrimaryContainer,
                  opacity: 0.3,
                }}
              />
              <div
                className="w-2/3 h-2 rounded"
                style={{ backgroundColor: colors.secondary, opacity: 0.5 }}
              />
              <div
                className="w-full h-2 rounded"
                style={{
                  backgroundColor: colors.onPrimaryContainer,
                  opacity: 0.3,
                }}
              />

              <div className="pt-4 flex flex-col gap-2">
                <div
                  className="flex items-center gap-2 p-3 rounded-lg border"
                  style={{
                    backgroundColor: "rgba(70, 72, 212, 0.1)",
                    borderColor: "rgba(70, 72, 212, 0.2)",
                  }}
                >
                  <Bot
                    className="w-5 h-5"
                    style={{ color: colors.secondary }}
                    fill="currentColor"
                  />
                  <div className="flex-1">
                    <div
                      className="w-full h-2 rounded"
                      style={{
                        backgroundColor: "rgba(70, 72, 212, 0.3)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative gradient overlay */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 blur-2xl"
              style={{
                background:
                  "linear-gradient(to top left, rgba(70, 72, 212, 0.2), transparent)",
              }}
            />
            <img
              src={codeContextImg}
              alt="Code Context"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        </div>

        {/* Floating Badge */}
        <div
          className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border flex items-center gap-4"
          style={{ borderColor: "#f1f5f9" }}
        >
          <div
            className="w-12 h-12 flex items-center justify-center rounded-lg"
            style={{ backgroundColor: colors.tertiaryFixed }}
          >
            <GraduationCap
              className="w-6 h-6"
              style={{ color: colors.onTertiaryFixed }}
            />
          </div>
          <div>
            <p
              className="font-bold text-sm"
              style={{ color: colors.onSurface }}
            >
              AI Tutor Active
            </p>
            <p className="text-xs" style={{ color: colors.onSurfaceVariant }}>
              Real-time code reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section
    className="py-24"
    style={{ backgroundColor: colors.surfaceContainer }}
  >
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16 space-y-4">
        <h2
          className="text-3xl md:text-4xl font-semibold"
          style={{
            color: colors.onBackground,
            fontFamily: "Manrope, sans-serif",
          }}
        >
          Engineered for focus
        </h2>
        <p
          className="text-base max-w-2xl mx-auto"
          style={{ color: colors.onSurfaceVariant }}
        >
          Traditional bootcamps overwhelm. Nixho prioritizes clarity through
          modular paths and instant feedback loops.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
        style={{ gridAutoRows: "280px" }}
      >
        {/* AI Assistant Card */}
        <div
          className="md:col-span-8 bg-white border rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group"
          style={{ borderColor: colors.outlineVariant }}
        >
          <div className="relative z-10 space-y-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: colors.secondaryContainer }}
            >
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Context-Aware AI Assistant
            </h3>
            <p
              className="max-w-md"
              style={{ color: colors.onSurfaceVariant }}
            >
              Our AI doesn't just give answers. It guides you through logic,
              architectural patterns, and performance optimizations tailored to
              your code.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
            <img
              src={aiVisualizationImg}
              alt="AI visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Compact Data Card - 94% */}
        <div
          className="md:col-span-4 border rounded-xl p-8 flex flex-col justify-center text-center"
          style={{
            backgroundColor: colors.primaryContainer,
            borderColor: "#1e293b",
            color: colors.onPrimaryFixed,
          }}
        >
          <span
            className="text-5xl font-bold mb-2"
            style={{
              color: colors.secondary,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            94%
          </span>
          <p
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: colors.onPrimaryContainer }}
          >
            Placement Rate
          </p>
          <p
            className="mt-4 text-sm"
            style={{ color: colors.onPrimaryContainer }}
          >
            Graduates hired within 6 months at leading tech firms.
          </p>
        </div>

        {/* Teacher Portal Card */}
        <div
          className="md:col-span-4 bg-white border rounded-xl p-8 flex flex-col justify-between"
          style={{ borderColor: colors.outlineVariant }}
        >
          <div
            className="w-10 h-10 flex items-center justify-center rounded-lg"
            style={{ backgroundColor: colors.tertiaryFixed }}
          >
            <TrendingUp
              className="w-5 h-5"
              style={{ color: colors.onTertiaryContainer }}
            />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Analytics for Educators</h3>
            <p
              className="text-sm"
              style={{ color: colors.onSurfaceVariant }}
            >
              Real-time student progress tracking and automated grading
              dashboard.
            </p>
          </div>
        </div>

        {/* Code Editor Card */}
        <div
          className="md:col-span-8 border rounded-xl p-8 overflow-hidden relative"
          style={{
            backgroundColor: colors.surfaceContainerHigh,
            borderColor: colors.outlineVariant,
          }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center h-full">
            <div className="flex-1 space-y-4">
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Browser-Based IDE
              </h3>
              <p style={{ color: colors.onSurfaceVariant }}>
                No setup required. Start coding in a professional-grade
                environment with integrated terminal and debugger.
              </p>
            </div>
            <div
              className="flex-1 w-full rounded-lg shadow-2xl h-full border p-4"
              style={{
                backgroundColor: "#0f172a",
                borderColor: "#334155",
              }}
            >
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div
                className="space-y-2 opacity-50 text-[10px]"
                style={{
                  fontFamily: "'Space Grotesk', monospace",
                  color: "#a5b4fc",
                }}
              >
                <div className="flex gap-2">
                  <span className="text-slate-500">1</span>
                  <span>export function initApp() {"{"}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500">2</span>
                  <span className="pl-4">
                    const config = new NixhoConfig();
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500">3</span>
                  <span className="pl-4">return config.launch();</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500">4</span>
                  <span>{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="max-w-7xl mx-auto px-8 py-24">
    <div
      className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
      style={{ backgroundColor: colors.onPrimaryFixed, color: "white" }}
    >
      <div className="relative z-10 space-y-8">
        <h2
          className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto text-white"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Ready to architect your future?
        </h2>
        <p
          className="text-lg max-w-xl mx-auto"
          style={{ color: colors.onPrimaryContainer }}
        >
          Join the community of engineers building the next generation of
          software. Start your first lesson today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="text-white px-10 py-4 rounded-lg font-semibold transition-all"
            style={{ backgroundColor: colors.secondary }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                colors.secondaryContainer)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = colors.secondary)
            }
          >
            Create Free Account
          </button>
          <button
            className="bg-transparent border px-10 py-4 rounded-lg font-semibold text-white transition-all hover:bg-white/10"
            style={{ borderColor: colors.outline }}
          >
            Talk to Admissions
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 blur-[120px] -translate-y-1/2 translate-x-1/2"
        style={{ backgroundColor: "rgba(70, 72, 212, 0.2)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 blur-[120px] translate-y-1/2 -translate-x-1/2"
        style={{ backgroundColor: "rgba(107, 216, 203, 0.1)" }}
      />
    </div>
  </section>
);

const Footer = () => (
  <footer
    className="border-t"
    style={{ backgroundColor: "#f8fafc", borderColor: "#e2e8f0" }}
  >
    <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 w-full max-w-7xl mx-auto">
      <div className="mb-8 md:mb-0">
        <span className="text-lg font-black text-slate-900">Nixho</span>
        <p className="mt-2 text-xs font-medium text-slate-500 uppercase tracking-wide">
          © 2024 CodeAcademy AI. Precision in Education.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {[
          "Terms of Service",
          "Privacy Policy",
          "Contact Support",
          "Documentation",
        ].map((label) => (
          <a
            key={label}
            href="#"
            className="text-xs tracking-wide uppercase font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

// ----- Componente principal -----

export default function NixhoLanding() {
  return (
    <div
      className="antialiased overflow-x-hidden min-h-screen"
      style={{
        backgroundColor: colors.background,
        color: colors.onSurface,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
