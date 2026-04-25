import React from "react";
import {
  Home,
  Code2,
  BarChart3,
  Settings,
  Brain,
  HelpCircle,
  LogOut,
  Bell,
  ChevronLeft,
  History,
  Settings as SettingsIcon,
  Maximize2,
  Play,
  CheckCircle2,
  Send,
  FileText,
} from "lucide-react";

// Paleta del tailwind.config original
const colors = {
  primary: "#2563eb",
  primaryHover: "#1d4ed8",
  surface: "#f8fafc",
  onSurface: "#0f172a",
  outline: "#64748b",
  error: "#ef4444",
  editorBg: "#0d1117",
  toolbarBg: "#161b22",
};

const userAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0BbXoirk-PmumLcgTLaUqJ9Z_jAq5QSwuEoS0h_EIzKwIgDoyRo7vFIQoC_j3q34GfL9iplKsLDt4UYS4Q9UoBh-usHqBZ_aoM08AHURvIHyzDPkXZ_vt_bEgUc38TKiIutrc7v0CobvJem_AuNUZetmWYztO-_9efd8E-geiAQ_09MTHe1drUuC0qPjSwMrjwz2Y75iHSkTf4Xf0FzG65A7GWDd-01qTsduP9qZWkz8W99vCfTgc_T1f7x11HygAcIdhKeZIaN8";

// Datos de ejercicios por ID. Si querés agregar más, sumá entradas acá.
const exercisesData = {
  "#4029": {
    title: "Python Asyncio Concurrency",
    difficulty: "Medium",
    estimated: "60 mins",
    description:
      "Implement an asynchronous data fetching service using `asyncio` and `aiohttp` to handle concurrent API requests efficiently.",
    objectives: [
      "Use `asyncio` event loop properly.",
      "Handle multiple concurrent HTTP requests.",
      "Implement proper error handling.",
    ],
    examples: [
      {
        input: "urls = ['https://api.example.com/1', 'https://api.example.com/2']",
        output: "[{...}, {...}]",
        explanation: "Both requests complete concurrently.",
      },
    ],
    hint: "Use asyncio.gather() to run multiple coroutines concurrently.",
  },
  "#3911": {
    title: "Python List Comprehensions",
    difficulty: "Easy",
    estimated: "20 mins",
    description:
      "Master the syntax for creating concise lists from existing iterables using Pythonic list comprehension patterns.",
    objectives: [
      "Use list comprehension syntax correctly.",
      "Apply filtering with conditions.",
      "Nested comprehensions when needed.",
    ],
    examples: [
      {
        input: "nums = [1, 2, 3, 4, 5]",
        output: "[1, 4, 9, 16, 25]",
        explanation: "Square each number using [n**2 for n in nums].",
      },
    ],
    hint: "Remember: [expression for item in iterable if condition].",
  },
  "#5102": {
    title: "Python Memory Management",
    difficulty: "Hard",
    estimated: "90 mins",
    description:
      "Optimize a large-scale data processing script by utilizing `__slots__` and efficient garbage collection profiling.",
    objectives: [
      "Use `__slots__` to reduce memory overhead.",
      "Profile memory with `tracemalloc`.",
      "Identify and fix memory leaks.",
    ],
    examples: [
      {
        input: "class Point: __slots__ = ['x', 'y']",
        output: "Reduces memory by ~40%",
        explanation: "Avoids per-instance __dict__ allocation.",
      },
    ],
    hint: "Profile before optimizing — measure memory usage with tracemalloc first.",
  },
  // Ejercicio por defecto (el del diseño original)
  default: {
    title: "Array Median Finder",
    difficulty: "Intermediate",
    estimated: "45 mins",
    description:
      "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.",
    objectives: [
      "The overall run time complexity should be `O(log (m+n))`.",
      "Ensure handling of both even and odd total lengths.",
      "Your solution must be implemented in Python 3.",
    ],
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "merged array = [1,2,3] and median is 2.",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
        explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
      },
    ],
    hint: "Consider using a binary search approach on the smaller of the two arrays to find the correct partition point.",
  },
};

const sidebarItems = [
  { icon: Home, label: "Home", active: false },
  { icon: Code2, label: "My Exercises", active: true },
  { icon: BarChart3, label: "Leaderboard", active: false },
  { icon: Settings, label: "Settings", active: false },
  { icon: Brain, label: "AI Tutor", active: false },
];

// ----- Helpers para resaltar inline `code` dentro de texto -----
const renderInlineCode = (text) => {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="px-1.5 py-0.5 rounded text-sm"
          style={{
            backgroundColor: "#f1f5f9",
            color: "#0f172a",
            fontFamily: "'Space Grotesk', monospace",
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

// ----- Sub-componentes -----

const Sidebar = () => (
  <aside
    className="hidden md:flex flex-col h-full py-4 px-3 w-64 bg-white border-r"
    style={{ borderColor: "#e2e8f0" }}
  >
    <div className="flex items-center gap-3 mb-8 px-2">
      <div
        className="w-8 h-8 rounded flex items-center justify-center text-white font-bold shadow-lg"
        style={{
          backgroundColor: colors.primary,
          boxShadow: "0 10px 15px -3px rgba(191, 219, 254, 0.5)",
        }}
      >
        N
      </div>
      <div>
        <h1
          className="text-lg font-black leading-none"
          style={{ color: colors.onSurface, fontFamily: "Manrope, sans-serif" }}
        >
          Profe++
        </h1>
        <p
          className="text-[10px] uppercase tracking-widest font-bold"
          style={{ color: colors.primary }}
        >
          Precision Learning
        </p>
      </div>
    </div>

    <nav className="flex-1 space-y-1">
      {sidebarItems.map(({ icon: Icon, label, active }) => (
        <a
          key={label}
          href={label === "Home" ? "#/dashboard" : "#"}
          className="rounded-lg p-3 flex items-center gap-3 text-[13px] transition-all duration-200"
          style={
            active
              ? {
                  backgroundColor: "#eff6ff",
                  color: colors.primary,
                  fontWeight: 700,
                  fontFamily: "Manrope, sans-serif",
                }
              : { color: "#475569", fontFamily: "Manrope, sans-serif" }
          }
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
      ))}
    </nav>

    <div
      className="mt-auto pt-4 border-t space-y-1"
      style={{ borderColor: "#e2e8f0" }}
    >
      <a
        href="#"
        className="text-slate-600 p-3 flex items-center gap-3 text-[13px] hover:bg-slate-50 rounded-lg transition-colors"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        <HelpCircle className="w-5 h-5" />
        Support
      </a>
      <a
        href="#/landing"
        className="text-slate-600 p-3 flex items-center gap-3 text-[13px] hover:bg-slate-50 rounded-lg transition-colors"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        <LogOut className="w-5 h-5" />
        Logout
      </a>
    </div>
  </aside>
);

const TopBar = () => (
  <header
    className="flex justify-between items-center w-full px-6 h-16 bg-white border-b z-50"
    style={{ borderColor: "#e2e8f0" }}
  >
    <div className="flex items-center gap-6">
      <a
        href="#/dashboard"
        className="flex items-center gap-2 cursor-pointer group"
      >
        <ChevronLeft
          className="w-6 h-6 transition-transform group-hover:-translate-x-1"
          style={{ color: colors.primary }}
        />
        <h2
          className="text-2xl font-semibold"
          style={{ color: colors.onSurface, fontFamily: "Manrope, sans-serif" }}
        >
          Back to Home
        </h2>
      </a>
    </div>
    <div className="flex items-center gap-6">
      <div
        className="flex items-center gap-4 border-l pl-6"
        style={{ borderColor: "#e2e8f0" }}
      >
        <button className="text-slate-600 hover:bg-slate-100 p-2 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <img
          src={userAvatar}
          alt="Student Profile Avatar"
          className="w-8 h-8 rounded-full border"
          style={{ borderColor: "#e2e8f0" }}
        />
      </div>
    </div>
  </header>
);

const ProblemDescription = ({ exercise }) => (
  <section
    className="w-full md:w-[40%] flex flex-col border-r bg-white overflow-y-auto"
    style={{ borderColor: "#e2e8f0" }}
  >
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border"
          style={{
            backgroundColor: "#eff6ff",
            color: colors.primary,
            borderColor: "#dbeafe",
          }}
        >
          {exercise.difficulty}
        </span>
        <span className="text-slate-500 text-xs font-semibold tracking-wider">
          Estimated: {exercise.estimated}
        </span>
      </div>

      <h1
        className="text-3xl font-semibold mb-3"
        style={{ color: colors.onSurface, fontFamily: "Manrope, sans-serif" }}
      >
        {exercise.title}
      </h1>

      <div className="max-w-none text-slate-600">
        <p className="mb-4 leading-relaxed">
          {renderInlineCode(exercise.description)}
        </p>

        <p className="mb-4 font-semibold text-slate-900">Objective:</p>
        <ul className="list-disc pl-5 mb-6 space-y-2 leading-relaxed">
          {exercise.objectives.map((obj, i) => (
            <li key={i}>{renderInlineCode(obj)}</li>
          ))}
        </ul>

        {exercise.examples.map((ex, i) => (
          <div
            key={i}
            className="p-4 rounded border mb-6"
            style={{ backgroundColor: "#f8fafc", borderColor: "#e2e8f0" }}
          >
            <h4
              className="font-bold text-sm mb-2 uppercase tracking-tight"
              style={{ color: colors.primary }}
            >
              Example {i + 1}
            </h4>
            <div
              className="text-sm bg-white border p-3 rounded"
              style={{
                borderColor: "#e2e8f0",
                fontFamily: "'Space Grotesk', monospace",
              }}
            >
              <p>
                <strong>Input:</strong> {ex.input}
              </p>
              <p>
                <strong>Output:</strong> {ex.output}
              </p>
              <p>
                <strong>Explanation:</strong> {ex.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* AI Tutor Hint */}
      <div
        className="mt-8 p-4 rounded-lg border flex gap-3 relative overflow-hidden"
        style={{
          backgroundColor: "rgba(239, 246, 255, 0.5)",
          borderColor: "#dbeafe",
        }}
      >
        <div
          className="absolute top-0 right-0 w-16 h-16 blur-xl"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(37, 99, 235, 0.1), rgba(199, 210, 254, 0.2))",
          }}
        />
        <Brain
          className="w-6 h-6 shrink-0 relative z-10"
          style={{ color: colors.primary }}
        />
        <div className="relative z-10">
          <p className="font-bold text-sm" style={{ color: colors.primary }}>
            AI Tutor Hint
          </p>
          <p className="text-slate-600 text-xs leading-relaxed">
            {exercise.hint}
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CodeEditor = () => (
  <section
    className="flex-1 flex flex-col relative"
    style={{ backgroundColor: colors.editorBg }}
  >
    {/* Toolbar */}
    <div
      className="h-12 flex items-center justify-between px-4 border-b border-white/10"
      style={{ backgroundColor: colors.toolbarBg }}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded text-white/80 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          Python 3
        </div>
        <div className="flex items-center gap-1 text-white/40 text-xs">
          <History className="w-3.5 h-3.5" />
          <span>Last saved 2m ago</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-white/60 hover:text-white p-1 transition-colors">
          <SettingsIcon className="w-4 h-4" />
        </button>
        <button className="text-white/60 hover:text-white p-1 transition-colors">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </div>

    {/* IDE Content */}
    <div
      className="flex-1 relative overflow-hidden flex"
      style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "14px" }}
    >
      {/* Line numbers */}
      <div
        className="w-12 text-white/20 text-right pr-3 py-4 select-none border-r border-white/5"
        style={{ backgroundColor: colors.editorBg }}
      >
        {Array.from({ length: 13 }, (_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>

      {/* Code */}
      <div className="flex-1 p-4 text-slate-300 relative leading-[1.5]">
        <div className="mb-1">
          <span className="text-purple-400">class</span>{" "}
          <span className="text-yellow-200">Solution</span>:
        </div>
        <div className="ml-4 mb-1">
          <span className="text-purple-400">def</span>{" "}
          <span className="text-blue-300">findMedianSortedArrays</span>(
          <span className="text-orange-300">self</span>,{" "}
          <span className="text-slate-300">
            nums1: List[int], nums2: List[int]
          </span>
          ) -&gt; <span className="text-blue-300">float</span>:
        </div>
        <div className="ml-8 mb-1 text-slate-500"># Your implementation here</div>
        <div className="ml-8 mb-1 text-slate-500">
          # Use binary search for O(log(min(m, n)))
        </div>
        <div className="ml-8 mb-1">
          <span className="text-slate-300">m, n = </span>
          <span className="text-blue-300">len</span>
          <span className="text-slate-300">(nums1), </span>
          <span className="text-blue-300">len</span>
          <span className="text-slate-300">(nums2)</span>
        </div>
        <div
          className="mb-1 -ml-4 pl-3.5 ml-4 border-l-2"
          style={{
            backgroundColor: "rgba(37, 99, 235, 0.2)",
            borderColor: colors.primary,
          }}
        >
          <span className="text-purple-400">if</span>
          <span className="text-slate-300"> m &gt; n:</span>
        </div>
        <div className="ml-12 mb-1">
          <span className="text-purple-400">return</span>
          <span className="text-orange-300"> self</span>
          <span className="text-slate-300">
            .findMedianSortedArrays(nums2, nums1)
          </span>
        </div>
        <div className="ml-8 flex animate-pulse">
          <div className="w-2 h-5" style={{ backgroundColor: colors.primary }} />
        </div>
      </div>
    </div>

    {/* Footer */}
    <div
      className="p-6 flex items-center justify-between border-t border-white/10"
      style={{ backgroundColor: colors.toolbarBg }}
    >
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-white/80 hover:bg-white/5 transition-colors font-semibold text-sm">
          <Play className="w-4 h-4" fill="currentColor" />
          Run Code
        </button>
        <div className="h-6 w-px bg-white/10" />
        <div className="flex items-center gap-2 text-xs text-white/40">
          <CheckCircle2
            className="w-4 h-4 text-green-500"
            fill="currentColor"
            stroke="white"
          />
          <span>Passed basic tests</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-2 px-6 py-2 text-white rounded-lg transition-all font-semibold text-sm shadow-lg"
          style={{
            backgroundColor: colors.primary,
            boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.2)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
        >
          <span>Submit Solution</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>

    {/* AI Chat Trigger */}
    <div className="absolute bottom-24 right-6 group">
      <button
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-105"
        style={{
          backgroundColor: colors.primary,
          boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.4)",
        }}
      >
        <Brain className="w-6 h-6" fill="currentColor" />
      </button>
      <div className="absolute right-full mr-4 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div
          className="text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap border border-white/10"
          style={{ backgroundColor: "#0f172a" }}
        >
          Ask Profe++ AI for help
        </div>
      </div>
    </div>
  </section>
);

const MobileBottomNav = () => {
  const items = [
    { icon: FileText, label: "Details", active: true },
    { icon: Code2, label: "Editor", active: false },
    { icon: Brain, label: "AI Tutor", active: false },
  ];
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t flex items-center justify-around z-50"
      style={{ borderColor: "#e2e8f0" }}
    >
      {items.map(({ icon: Icon, label, active }) => (
        <a
          key={label}
          href="#"
          className="flex flex-col items-center gap-1"
          style={{ color: active ? colors.primary : "#94a3b8" }}
        >
          <Icon className="w-5 h-5" />
          <span className="text-[10px] font-bold">{label}</span>
        </a>
      ))}
    </div>
  );
};

// ----- Componente principal -----

/**
 * Recibe opcionalmente un exerciseId (ej: "#4029") por hash:
 *   #/exercise?id=%234029   → busca exercisesData["#4029"]
 * Si no hay id o no existe, muestra el ejercicio por defecto (Array Median Finder).
 */
export default function ExerciseDetail({ exerciseId }) {
  const exercise = exercisesData[exerciseId] || exercisesData.default;

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        backgroundColor: colors.surface,
        color: colors.onSurface,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Sidebar />
      <main
        className="flex-1 flex flex-col min-w-0"
        style={{ backgroundColor: colors.surface }}
      >
        <TopBar />
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          <ProblemDescription exercise={exercise} />
          <CodeEditor />
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
}