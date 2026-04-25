import React from "react";
import {
  GraduationCap,
  Home,
  Code2,
  BarChart3,
  Settings,
  Brain,
  HelpCircle,
  LogOut,
  Bell,
  HelpCircle as Help,
  Play,
  CheckCircle2,
  Eye,
} from "lucide-react";
import logoProfe from './assets/logo.png';
// Paleta extraída del tailwind.config original (variante azul del dashboard)
const colors = {
  primary: "#2563eb",          // blue-600
  primaryHover: "#1d4ed8",     // blue-700
  primaryFixed: "#dbeafe",     // blue-100
  onPrimaryContainer: "#475569",
  secondaryContainer: "#dbeafe",
  onSecondaryContainer: "#1e40af",
  surface: "#f8fafc",          // slate-50
  surfaceContainer: "#f1f5f9", // slate-100
  outline: "#64748b",
  outlineVariant: "#cbd5e1",
  onSurface: "#0f172a",        // slate-900
  onSurfaceVariant: "#475569", // slate-600
  error: "#ef4444",
};

const userAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8XuENPKlqSOmBX11W27l27wm7SukPWG4mX439Mi7aH9IeIV5MBcKgd5cr3K6KsS8wrtyy_0Csx4B-sGX-J7Y4t8Hopfi3VOo9PBe0L4yHiwdaYuuagRUVTmtchLK77VF4Ec6D3yR8TZM_OjRQ6SfqK0BSnurYWbqVh3DqDCYT27qdV1ZvgCRR_C0kZ6OUCwykOBaxO0-m1T3TR624HlNOselYl_qr--xUp2IYkKFlyK6orgv9SYPmF3HELoPOiShnErILtC6-oLk";

// ----- Datos mock -----
const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Code2, label: "My Exercises", active: false },
  { icon: BarChart3, label: "Leaderboard", active: false },
  { icon: Settings, label: "Settings", active: false },
  { icon: Brain, label: "AI Tutor", active: false },
];

const pendingExercises = [
  {
    id: "#4029",
    title: "Python Asyncio Concurrency",
    difficulty: "Medium",
    description:
      "Implement an asynchronous data fetching service using `asyncio` and `aiohttp` to handle concurrent API requests efficiently.",
  },
  {
    id: "#3911",
    title: "Python List Comprehensions",
    difficulty: "Easy",
    description:
      "Master the syntax for creating concise lists from existing iterables using Pythonic list comprehension patterns.",
  },
  {
    id: "#5102",
    title: "Python Memory Management",
    difficulty: "Hard",
    description:
      "Optimize a large-scale data processing script by utilizing `__slots__` and efficient garbage collection profiling.",
  },
];

const solvedExercises = [
  {
    title: "Python Custom Context Managers",
    description:
      "Created robust resource handlers using the `contextlib` module and the `with` statement for database connections.",
    score: "100 / 100 XP",
  },
  {
    title: "Python Decorators & Wrappers",
    description:
      "Built advanced function wrappers for logging and timing using `functools.wraps` to preserve metadata.",
    score: "95 / 100 XP",
  },
];

// ----- Helper para chips de dificultad -----
const difficultyStyles = {
  Easy: {
    bg: "#ecfdf5",
    text: "#047857",
    border: "#d1fae5",
  },
  Medium: {
    bg: "#fffbeb",
    text: "#b45309",
    border: "#fef3c7",
  },
  Hard: {
    bg: "#fff1f2",
    text: "#be123c",
    border: "#ffe4e6",
  },
};

const navigationItems = [
  { key: "home", icon: Home, label: "Home" },
  { key: "exercises", icon: Code2, label: "My Exercises" },
  { key: "leaderboard", icon: BarChart3, label: "Leaderboard" },
  { key: "settings", icon: Settings, label: "Settings" },
  { key: "ai", icon: Brain, label: "AI Tutor" },
];

const topTabs = [
  { key: "home", label: "Dashboard" },
  { key: "resources", label: "Resources" },
];

const classStudents = [
  { name: "Alex Johnson", score: 96, completed: 12, streak: 18 },
  { name: "Mia Chen", score: 93, completed: 11, streak: 14 },
  { name: "Carlos Méndez", score: 89, completed: 10, streak: 9 },
  { name: "Sofia Patel", score: 84, completed: 9, streak: 7 },
  { name: "Diego Ramírez", score: 78, completed: 8, streak: 5 },
  { name: "Ana García", score: 72, completed: 7, streak: 4 },
];

const demoResources = [
  {
    title: "Python for Beginners",
    type: "Video",
    duration: "18 min",
    description:
      "Syntax, variables and control flow explained with short examples.",
  },
  {
    title: "Asyncio in Practice",
    type: "Video",
    duration: "24 min",
    description: "Concurrent tasks, event loops and when to use asyncio.",
  },
  {
    title: "List Comprehensions Cheat Sheet",
    type: "Guide",
    duration: "5 min read",
    description:
      "Patterns, filters and nested comprehensions with examples.",
  },
  {
    title: "Debugging Python Code",
    type: "Video",
    duration: "14 min",
    description: "Reading tracebacks and isolating logic errors step by step.",
  },
];

const settingsSections = [
  {
    title: "Account",
    items: ["Profile details", "Password", "Email alerts"],
  },
  {
    title: "Learning",
    items: ["Daily goals", "Difficulty level", "Reminder schedule"],
  },
  {
    title: "Privacy",
    items: ["Telemetry sharing", "Data export", "Activity visibility"],
  },
];

// ----- Sub-componentes -----

const Sidebar = ({ activeView, onNavigate }) => (
  <aside
    className="hidden md:flex flex-col h-screen w-64 border-r bg-white fixed left-0 top-0 z-50 py-4 px-3"
    style={{ borderColor: "#e2e8f0" }}
  >
    {/* Logo */}
        <div className="flex items-center gap-3 mb-10 px-2">
      {/* Nuevo ícono usando tu logo */}
      <div className="w-10 h-10 flex items-center justify-center shrink-0">
        <img
          src={logoProfe}
          alt="Profe++ Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <h1
          className="text-lg font-black leading-none"
          style={{
            color: colors.onSurface,
            fontFamily: "Manrope, sans-serif",
          }}
        >
          Profe++
        </h1>
        <p
          className="text-[11px] font-bold uppercase tracking-widest"
          style={{ color: colors.primary }}
        >
          Precision Learning
        </p>
      </div>
    </div>

    {/* Navegación */}
    <nav className="flex-1 space-y-1">
      {navigationItems.map(({ icon: Icon, label, key }) => {
        const active = activeView === key;
        return (
        <a
          key={label}
          href="#"
          className="rounded-lg p-3 flex items-center gap-3 text-[13px] transition-all duration-200"
          style={
            active
              ? {
                  backgroundColor: "#eff6ff",
                  color: colors.primary,
                  fontWeight: 700,
                  fontFamily: "Manrope, sans-serif",
                }
              : {
                  color: "#475569",
                  fontFamily: "Manrope, sans-serif",
                }
          }
          onClick={(e) => {
            e.preventDefault();
            onNavigate(key);
          }}
          onMouseEnter={(e) => {
            if (!active) {
              e.currentTarget.style.backgroundColor = "#f8fafc";
              e.currentTarget.style.color = colors.primary;
            }
          }}
          onMouseLeave={(e) => {
            if (!active) {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#475569";
            }
          }}
        >
          <Icon className="w-5 h-5" />
          {label}
        </a>
        );
      })}
    </nav>

    {/* Footer del sidebar */}
    <div className="mt-auto space-y-4">
      <div
        className="p-4 rounded-xl shadow-lg"
        style={{
          backgroundColor: colors.primary,
          boxShadow: "0 10px 15px -3px rgba(191, 219, 254, 0.5)",
        }}
      >
        <p className="text-xs font-bold text-white mb-2">Upgrade to Pro</p>
        <p className="text-[11px] text-blue-50 leading-relaxed">
          Get unlimited AI mentoring and advanced cloud IDE features.
        </p>
      </div>
      <div className="space-y-1">
        <a
          href="#"
          className="text-slate-500 p-2 flex items-center gap-3 text-[13px] hover:text-blue-600 transition-colors"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          <HelpCircle className="w-5 h-5" />
          Support
        </a>
        <a
          href="#"
          className="text-slate-500 p-2 flex items-center gap-3 text-[13px] transition-colors"
          style={{ fontFamily: "Manrope, sans-serif" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = colors.error)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
        >
          <LogOut className="w-5 h-5" />
          Logout
        </a>
      </div>
    </div>
  </aside>
);

const TopBar = ({ activeTab, onNavigate }) => (
  <header
    className="bg-white border-b h-16 flex justify-between items-center w-full px-6 sticky top-0 z-40"
    style={{ borderColor: "#e2e8f0" }}
  >
    <div className="flex items-center gap-8">
      <span
        className="text-xl font-bold tracking-tighter md:hidden"
        style={{
          color: colors.primary,
          fontFamily: "Manrope, sans-serif",
        }}
      >
        Profe++
      </span>
      <div className="hidden lg:flex items-center gap-6">
        {topTabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <a
              key={tab.key}
              href="#"
              className={`font-semibold text-sm tracking-tight transition-colors ${
                active ? "border-b-2 pb-1" : "text-slate-500 hover:text-blue-600"
              }`}
              style={{
                color: active ? colors.primary : undefined,
                borderColor: active ? colors.primary : undefined,
                fontFamily: "Manrope, sans-serif",
              }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(tab.key);
              }}
            >
              {tab.label}
            </a>
          );
        })}
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="relative">
        <button className="text-slate-500 p-2 hover:bg-slate-100 rounded-full">
          <Bell className="w-5 h-5" />
        </button>
        <span
          className="absolute top-2 right-2 w-2 h-2 rounded-full border-2 border-white"
          style={{ backgroundColor: colors.error }}
        />
      </div>
      <button className="text-slate-500 p-2 hover:bg-slate-100 rounded-full">
        <Help className="w-5 h-5" />
      </button>
      <div
        className="h-8 w-8 rounded-full overflow-hidden border"
        style={{ borderColor: "#e2e8f0" }}
      >
        <img
          src={userAvatar}
          alt="Student Profile Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </header>
);

const WelcomeSection = () => (
  <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
    <div>
      <h2
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{
          color: colors.onSurface,
          fontFamily: "Manrope, sans-serif",
        }}
      >
        Welcome back, Alex.
      </h2>
      <p className="text-lg text-slate-600 max-w-xl">
        You have 4 exercises pending for this week. Your current streak is 12
        days. Keep it up!
      </p>
    </div>
  </section>
);

const SectionHeader = ({ title, accent, link }) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <div
        className="w-1 h-8 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <h3
        className="text-2xl font-semibold"
        style={{
          color: colors.onSurface,
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {title}
      </h3>
    </div>
    <a
      href="#"
      className={`text-sm font-semibold ${
        link.primary ? "" : "text-slate-500"
      }`}
      style={link.primary ? { color: colors.primary } : {}}
    >
      {link.label}
    </a>
  </div>
);

const PendingExerciseCard = ({ exercise }) => {
  const style = difficultyStyles[exercise.difficulty];
  return (
    <div
      className="bg-white border p-5 rounded-xl transition-colors group flex items-center gap-6"
      style={{ borderColor: "#e2e8f0" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#93c5fd")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
    >
      {/* ID */}
      <div
        className="flex flex-col items-center justify-center px-4 py-2 rounded-lg border min-w-[80px]"
        style={{ backgroundColor: "#f8fafc", borderColor: "#f1f5f9" }}
      >
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
          ID
        </span>
        <span
          className="text-sm font-bold text-slate-600"
          style={{ fontFamily: "'Space Grotesk', monospace" }}
        >
          {exercise.id}
        </span>
      </div>

      {/* Contenido */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h4
            className="text-lg text-slate-900 transition-colors"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
          >
            {exercise.title}
          </h4>
          <span
            className="px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider border"
            style={{
              backgroundColor: style.bg,
              color: style.text,
              borderColor: style.border,
            }}
          >
            {exercise.difficulty}
          </span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">
          {exercise.description}
        </p>
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          <div
            className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold"
            style={{ backgroundColor: "#eff6ff", color: colors.primary }}
          >
            PY
          </div>
        </div>
        <button
          onClick={() =>
            (window.location.hash = `#/exercise?id=${encodeURIComponent(
              exercise.id
            )}`)
          }
          className="text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md"
          style={{
            backgroundColor: colors.primary,
            boxShadow: "0 4px 6px -1px rgba(191, 219, 254, 0.5)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = colors.primaryHover)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = colors.primary)
          }
        >
          Start
          <Play className="w-4 h-4" fill="currentColor" />
        </button>
      </div>
    </div>
  );
};

const SolvedExerciseCard = ({ exercise }) => (
  <div
    className="bg-white border p-5 rounded-xl flex items-center gap-6"
    style={{ borderColor: "#e2e8f0" }}
  >
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center"
      style={{ backgroundColor: "#ecfdf5", color: "#059669" }}
    >
      <CheckCircle2 className="w-6 h-6" fill="currentColor" stroke="white" />
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-1">
        <h4
          className="text-lg text-slate-900"
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
        >
          {exercise.title}
        </h4>
        <span
          className="px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider"
          style={{
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            color: "#059669",
          }}
        >
          Solved
        </span>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed">
        {exercise.description}
      </p>
    </div>
    <div className="flex items-center gap-6 text-right">
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
          Score
        </p>
        <p className="font-bold" style={{ color: "#059669" }}>
          {exercise.score}
        </p>
      </div>
      <button className="text-slate-400 hover:text-blue-600 transition-colors">
        <Eye className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const AiInsightCard = () => (
  <div
    className="rounded-xl p-5 text-white flex items-center gap-6 shadow-lg"
    style={{
      backgroundColor: colors.primary,
      boxShadow: "0 10px 15px -3px rgba(191, 219, 254, 0.5)",
    }}
  >
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
      <Brain className="w-6 h-6" />
    </div>
    <div className="flex-1">
      <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">
        AI Tutor Insight
      </h4>
      <p className="text-white/90 text-sm italic">
        "You're making great progress in Python backend architecture. Consider
        trying the 'FastAPI Dependency Injection' challenge next."
      </p>
    </div>
    <div className="text-right">
      <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
        Total Progress
      </p>
      <div className="text-xl font-black">84%</div>
    </div>
  </div>
);

const HomeView = () => (
  <div className="space-y-12">
    <WelcomeSection />

    <section>
      <SectionHeader
        title="Pending Exercises"
        accent={colors.primary}
        link={{ label: "View all", primary: true }}
      />
      <div className="flex flex-col gap-4">
        {pendingExercises.map((exercise) => (
          <PendingExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </section>

    <section>
      <SectionHeader
        title="Recently Solved"
        accent="#10b981"
        link={{ label: "Explore history", primary: false }}
      />
      <div className="flex flex-col gap-4">
        {solvedExercises.map((exercise) => (
          <SolvedExerciseCard key={exercise.title} exercise={exercise} />
        ))}
        <AiInsightCard />
      </div>
    </section>
  </div>
);

const ExercisesView = () => (
  <div className="space-y-12">
    <section>
      <SectionHeader
        title="All Tasks"
        accent={colors.primary}
        link={{ label: "Pending + recent", primary: false }}
      />
      <div className="flex flex-col gap-4">
        {pendingExercises.map((exercise) => (
          <PendingExerciseCard key={exercise.id} exercise={exercise} />
        ))}
        {solvedExercises.map((exercise) => (
          <SolvedExerciseCard key={exercise.title} exercise={exercise} />
        ))}
      </div>
    </section>
  </div>
);

const LeaderboardView = () => (
  <div className="space-y-12">
    <section>
      <SectionHeader
        title="Class Leaderboard"
        accent="#8b5cf6"
        link={{ label: "Sorted by total performance", primary: false }}
      />
      <div
        className="bg-white border rounded-xl overflow-hidden"
        style={{ borderColor: "#e2e8f0" }}
      >
        {classStudents
          .slice()
          .sort((a, b) => b.score - a.score)
          .map((student, index) => (
            <div
              key={student.name}
              className="flex items-center justify-between px-6 py-4 border-b last:border-b-0"
              style={{ borderColor: "#f1f5f9" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: index < 3 ? colors.primary : "#94a3b8" }}
                >
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{student.name}</p>
                  <p className="text-sm text-slate-500">
                    {student.completed} exercises completed · {student.streak} day streak
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-black" style={{ color: colors.primary }}>
                  {student.score}%
                </p>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Total performance
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  </div>
);

const SettingsView = () => (
  <div className="space-y-12">
    <section>
      <SectionHeader
        title="Settings"
        accent="#f59e0b"
        link={{ label: "Student preferences", primary: false }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {settingsSections.map((section) => (
          <div
            key={section.title}
            className="bg-white border rounded-xl p-5"
            style={{ borderColor: "#e2e8f0" }}
          >
            <h4 className="font-semibold text-slate-900 mb-3">{section.title}</h4>
            <div className="space-y-2">
              {section.items.map((item) => (
                <label key={item} className="flex items-center justify-between gap-3 text-sm text-slate-600">
                  <span>{item}</span>
                  <input type="checkbox" defaultChecked className="accent-blue-600" />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const ResourcesView = () => (
  <div className="space-y-12">
    <section>
      <SectionHeader
        title="Demo Resources"
        accent="#14b8a6"
        link={{ label: "Videos, guides and references", primary: false }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {demoResources.map((resource) => (
          <div
            key={resource.title}
            className="bg-white border rounded-xl p-5"
            style={{ borderColor: "#e2e8f0" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                style={{ backgroundColor: "#ecfeff", color: "#0f766e" }}
              >
                {resource.type}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                {resource.duration}
              </span>
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">
              {resource.title}
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              {resource.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const AiTutorView = () => (
  <div className="space-y-12">
    <WelcomeSection />
    <AiInsightCard />
  </div>
);

const BottomNav = ({ activeView, onNavigate }) => {
  const items = [
    { key: "home", icon: Home, label: "Home" },
    { key: "exercises", icon: Code2, label: "Exercises" },
    { key: "leaderboard", icon: BarChart3, label: "Rank" },
    { key: "ai", icon: Brain, label: "AI" },
    { key: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-3 flex justify-between items-center z-50"
      style={{ borderColor: "#e2e8f0" }}
    >
      {items.map(({ icon: Icon, label, key }) => {
        const active = activeView === key;
        return (
        <a
          key={label}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate(key);
          }}
          className="flex flex-col items-center gap-1"
          style={{ color: active ? colors.primary : "#94a3b8" }}
        >
          <Icon className="w-5 h-5" />
          <span
            className="text-[10px]"
            style={{ fontWeight: active ? 700 : 500 }}
          >
            {label}
          </span>
        </a>
        );
      })}
    </nav>
  );
};

// ----- Componente principal -----

export default function StudentDashboard() {
  const [view, setView] = React.useState("home");

  const content = (() => {
    switch (view) {
      case "exercises":
        return <ExercisesView />;
      case "leaderboard":
        return <LeaderboardView />;
      case "settings":
        return <SettingsView />;
      case "resources":
        return <ResourcesView />;
      case "ai":
        return <AiTutorView />;
      default:
        return <HomeView />;
    }
  })();

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: colors.surface,
        color: colors.onSurface,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Sidebar activeView={view} onNavigate={setView} />
      <main className="flex-1 md:ml-64">
        <TopBar
          activeTab={view === "resources" ? "resources" : "home"}
          onNavigate={setView}
        />
        <div className="p-8 max-w-7xl mx-auto space-y-12">
          {content}
        </div>
      </main>
      <BottomNav activeView={view} onNavigate={setView} />
    </div>
  );
}