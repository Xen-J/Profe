import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  Compass,
  FolderOpen,
  HelpCircle,
  LogOut,
  Bell,
  Settings,
  Search,
  Filter,
  Timer,
  Sparkles,
  ExternalLink,
  AlertTriangle,
  Brain,
} from "lucide-react";
import logoProfe from './assets/logo.png';
// Paleta extraída del tailwind.config original (variante azul oscuro del teacher portal)
const colors = {
  primary: "#1e293b",            // slate-900
  secondary: "#3b82f6",          // blue-500
  secondaryContainer: "#2563eb", // blue-600
  secondaryFixed: "#dbeafe",     // blue-100
  tertiary: "#0ea5e9",           // sky-500
  tertiaryFixed: "#bae6fd",
  surface: "#f8fafc",
  surfaceContainer: "#eff6ff",
  surfaceLowest: "#ffffff",
  outline: "#76777d",
  outlineVariant: "#cbd5e1",
  onSurface: "#0f172a",
  onSurfaceVariant: "#475569",
  primaryContainer: "#172554",   // azul muy oscuro
  onPrimaryContainer: "#60a5fa",
  error: "#ef4444",
};

const teacherAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCDZIe3SBZEB-1DODHpiiIj-1awbrSjv2k4rPYX7qkczCERfV3YISEy9uqKIoUlNqhVHMwLkKnDw3hgiH3Jr4Rd5WJoSa-OtYmIw3gVqZ4m2vSoHhEy6AR3jZQZtGjbMeB58Czfj1XybYYj4w8eqBXe1GCbie4HcWZ2OeJnNHXyu7o-mwNN1w91vfkg6T0Jc2lmPa0hmE4hUJAk5xM1Gzm2wJEtp-IVf3MM6QWgCo3i3XCY09shB6s3u0yHVLMbX61WGy-ZoTf8fVw";
const userAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCThnv0vXPOdDBIftsBsckx6JUDVyengn3T8HI0T2MQTOPlhT6CZ20iEuuJbMVHq83FiEkLGgjtVOAKPGb3uGyMohdy_38a0_Ovvaoi-yKu4uiLbqojIJQ53B1MQIedo-AFhSpshRT5Fy4rrr__xlOs0n1uCmJclH6Nx_Eg_lQIVJfhHYB1SDdwiG306Q8KXrk9pGw3vIVAkP_g4smbAlXQIyspE64-ytGCnWQ92GJg4gvgez-a51_XCGiYhebuFuZywJxt8At-JJk";

// Datos mock
const sidebarItems = [
  { key: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { key: "analytics", icon: BarChart3, label: "Student Analytics" },
  { key: "project", icon: Compass, label: "Proyecto" },
  { key: "exercises", icon: FolderOpen, label: "Ejercicios" },
  { key: "rubrica", icon: Brain, label: "Rubrica" },
];

const rubricCriteriaDefaults = [
  {
    key: "correctness",
    label: "Correctitud",
    description: "Qué tan correcto es el resultado frente a los tests.",
    weight: 40,
    enabled: true,
  },
  {
    key: "codeQuality",
    label: "Calidad de código",
    description: "Legibilidad, estructura y convenciones de estilo.",
    weight: 25,
    enabled: true,
  },
  {
    key: "efficiency",
    label: "Eficiencia",
    description: "Uso razonable de complejidad temporal y espacial.",
    weight: 20,
    enabled: true,
  },
  {
    key: "reasoning",
    label: "Explicación y razonamiento",
    description: "Capacidad de justificar la solución con claridad.",
    weight: 15,
    enabled: true,
  },
];

const submissionsByTask = [
  {
    student: "Carlos Méndez",
    task: "Python Asyncio Concurrency",
    score: "86%",
    tests: "8/10",
    feedback:
      "Buena estructura async, pero faltan timeouts y manejo explícito de errores de red.",
  },
  {
    student: "Ana García",
    task: "Python List Comprehensions",
    score: "92%",
    tests: "10/10",
    feedback:
      "Excelente uso de comprensión y filtros. Revisar legibilidad en expresiones anidadas.",
  },
  {
    student: "Roberto Silva",
    task: "Python Memory Management",
    score: "74%",
    tests: "7/10",
    feedback:
      "Identifica el uso de __slots__, pero no demuestra profiling con tracemalloc en el resultado.",
  },
  {
    student: "Mia Chen",
    task: "Python Asyncio Concurrency",
    score: "95%",
    tests: "10/10",
    feedback:
      "Solución sólida y eficiente. Excelente patrón con gather y separación de responsabilidades.",
  },
];

const stemIdeaPills = [
  "Robot seguidor de línea con Python",
  "Análisis de calidad del aire con sensores",
  "Predicción de consumo energético escolar",
  "Mini satélite: telemetría y visualización",
  "Visión computacional para reciclaje",
  "Simulación de epidemias en aula",
];

const classroomExercises = [
  {
    id: "#4029",
    title: "Python Asyncio Concurrency",
    level: "Medium",
    objective: "Manejar múltiples requests HTTP concurrentes con asyncio y aiohttp.",
  },
  {
    id: "#3911",
    title: "Python List Comprehensions",
    level: "Easy",
    objective: "Aplicar sintaxis de list comprehensions y filtros de forma legible.",
  },
  {
    id: "#5102",
    title: "Python Memory Management",
    level: "Hard",
    objective: "Optimizar memoria usando __slots__ y análisis con tracemalloc.",
  },
];

const errorTypes = [
  { label: "Lógica de Programación", percent: 42, color: colors.secondary },
  { label: "Sintaxis y Compilación", percent: 28, color: colors.tertiary },
  { label: "Optimización de Recursos", percent: 18, color: "#94a3b8" },
  { label: "Seguridad de Código", percent: 12, color: colors.error },
];

const studentsNeedingHelp = [
  {
    name: "Carlos Méndez",
    note: "3 días sin actividad",
    severity: "critical",
    action: "Intervenir",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATGT38iztVdmIFeNDhto3n7JM74_P0VkVBdg47_3tzRSIu1jsZLp9O3nRzqQNOB_MXdkPvAnpTqSxmAZH1Qa9a4fR2iyj2KPfiJfUr8l8hLWepyfte-S-cF0RKeglvKRXkLTAXHEZXgdPH33YkeU5CZkJDmuGzpHcusF7xQXOZp3M9THSqf4XEOGS5bCOS9PgGgJhgkPnG_w2_7TyxWTcVaK0A78qX02CR56l_fHm20ZStJuhrQtCsFaQsY6HOt_2rYMumnawUups",
  },
  {
    name: "Ana García",
    note: "Bajo rendimiento en Módulo 4",
    severity: "warning",
    action: "Ver Detalle",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAul-QwbLfeHx-aW9KEFRVcSbAt2BpJfv_Rg1VgwFLYWI2fuN0xvi3TK2Hoz7YN--qQ5KoUdTgJsZ9fUbS_Kf7MAlYc-S7mVXD_S_nhbDLgtszU5fthLEPeHIMF7KqgJpT9VYzriV60jsu7gTHnwtI5o9Ah726wroNCfIzUB0XoUV8h3X5fLO4Nx4CBffjetBHYVfjFQghX1fcSCl4MCr8WuK-dk7lyNffIRWNda548c2Ng4_wFTJ1R4c_aE5thWlZrb7E-t0wZ3U",
  },
  {
    name: "Roberto Silva",
    note: "Errores recurrentes en Bucles",
    severity: "critical",
    action: "Intervenir",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7h8KUgWXlYnBysNjCxSiXgQNh9cDwyqkpziLyscUILjt-Vt6sSwQdSVD-3QJTdFFunI2UJ3aDkTXxPVSYBoRjqneyRepmt8Ix2c8weoTqcVCXpszujn_ayiy0NsaZ6rASNmJqccD6-cDsyQwTmitZPQIQSbPMsw60hahtBp3gjDtAj5rRO4VlAW_ZOPE7mSOEfaI16OrNobv_fFxaqSRjFFDJLgQSSnMBlTEmOmyhuEwXChjUzmx4kPS_8XewNyY0qYYD6WA2F14",
  },
];

// ----- Sub-componentes -----

const TopBar = () => (
    <nav
    className="bg-white border-b z-50 flex justify-between items-center w-full px-8 h-16 fixed top-0"
    style={{ borderColor: "#e2e8f0", fontFamily: "Manrope, sans-serif" }}
  >
    <div className="flex items-center gap-2">
      {/* Aquí insertamos el logo junto al texto */}
      <img
        src={logoProfe}
        alt="Profe++ Logo"
        className="w-8 h-8 object-contain"
      />
      <span
        className="text-xl font-extrabold tracking-tighter"
        style={{ color: colors.secondary }}
      >
        Profe++
      </span>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>
      <img
        src={userAvatar}
        alt="User avatar"
        className="w-8 h-8 rounded-full border-2"
        style={{ borderColor: colors.secondary }}
      />
    </div>
  </nav>
);

const Sidebar = ({ activeSection, onNavigate }) => (
  <aside
    className="bg-white border-r text-sm font-medium h-full w-64 flex flex-col fixed left-0 top-0 pt-20 pb-8 px-4 gap-2"
    style={{
      borderColor: "#e2e8f0",
      fontFamily: "Manrope, sans-serif",
    }}
  >
    {/* Profile */}
    <div className="px-4 mb-6">
      <div className="flex items-center gap-3">
        <img
          src={teacherAvatar}
          alt="Teacher Profile"
          className="w-10 h-10 rounded-lg object-cover"
        />
        <div>
          <p className="font-bold text-slate-900">Instructor Portal</p>
          <p className="text-xs text-slate-500">Digital Academy Admin</p>
        </div>
      </div>
    </div>

    {/* Nav */}
    <nav className="flex-1 space-y-1">
      {sidebarItems.map(({ key, icon: Icon, label }) => {
        const active = activeSection === key;
        return (
        <a
          key={label}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate(key);
          }}
          className="flex items-center gap-3 px-4 py-3 transition-all duration-200 ease-in-out hover:translate-x-1"
          style={
            active
              ? {
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  color: colors.secondary,
                  borderRight: `4px solid ${colors.secondary}`,
                  borderRadius: "0 0 0 0",
                  borderTopLeftRadius: "6px",
                  borderBottomLeftRadius: "6px",
                }
              : { color: "#475569" }
          }
          onMouseEnter={(e) => {
            if (!active) e.currentTarget.style.backgroundColor = "#f8fafc";
          }}
          onMouseLeave={(e) => {
            if (!active) e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <Icon className="w-5 h-5" />
          {label}
        </a>
        );
      })}
    </nav>

    {/* CTA */}
    <button
      className="text-white mx-2 py-3 rounded-lg font-bold text-xs uppercase tracking-wider mb-8 transition-all hover:shadow-lg active:scale-95"
      style={{ backgroundColor: colors.secondary }}
      onClick={() => onNavigate("project")}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = colors.secondaryContainer)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = colors.secondary)
      }
    >
      Create New Module
    </button>

    {/* Footer links */}
    <div
      className="border-t pt-4 space-y-1"
      style={{ borderColor: "#f1f5f9" }}
    >
      <a
        href="#"
        className="text-slate-600 flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors rounded"
      >
        <HelpCircle className="w-5 h-5" />
        Help Center
      </a>
      <a
        href="#/landing"
        className="flex items-center gap-3 px-4 py-2 transition-colors rounded"
        style={{ color: colors.error }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(254, 226, 226, 0.5)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        <LogOut className="w-5 h-5" />
        Log Out
      </a>
    </div>
  </aside>
);

const DashboardHeader = () => (
  <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div>
      <h1
        className="text-4xl md:text-5xl font-bold"
        style={{
          color: colors.primary,
          fontFamily: "Manrope, sans-serif",
        }}
      >
        Visión Inteligente de Clase
      </h1>
      <p
        className="mt-1"
        style={{ color: colors.onSurfaceVariant }}
      >
        Análisis en tiempo real del progreso académico y eficiencia operativa.
      </p>
    </div>
    <div className="flex gap-3">
      <div className="relative">
        <Search
          className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: colors.outline }}
        />
        <input
          type="text"
          placeholder="Buscar alumnos o temas..."
          className="pl-10 pr-4 py-2.5 bg-white border rounded-lg outline-none w-64 transition-all focus:ring-2 focus:border-transparent"
          style={{ borderColor: colors.outlineVariant }}
        />
      </div>
      <button
        className="bg-white border px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-slate-50 transition-colors"
        style={{ borderColor: colors.outlineVariant }}
      >
        <Filter className="w-5 h-5" />
        Filtros
      </button>
    </div>
  </header>
);

const MetricCard1 = () => (
  <div
    className="md:col-span-4 bg-white border p-6 rounded-xl flex flex-col justify-between"
    style={{ borderColor: colors.outlineVariant }}
  >
    <div className="flex justify-between items-start">
      <div
        className="p-3 rounded-lg"
        style={{
          backgroundColor: colors.secondaryFixed,
          color: colors.secondary,
        }}
      >
        <Timer className="w-6 h-6" />
      </div>
      <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">
        -12% vs ayer
      </span>
    </div>
    <div className="mt-6">
      <p
        className="text-xs uppercase tracking-wider font-semibold"
        style={{ color: colors.onSurfaceVariant }}
      >
        Tiempo Promedio de Respuesta
      </p>
      <h2
        className="text-3xl font-semibold mt-1"
        style={{ color: colors.primary, fontFamily: "Manrope, sans-serif" }}
      >
        5.8 min
      </h2>
      <div className="w-full bg-slate-100 h-1.5 mt-4 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: "85%", backgroundColor: colors.secondary }}
        />
      </div>
    </div>
  </div>
);

const MetricCard2 = () => (
  <div
    className="md:col-span-4 bg-white border p-6 rounded-xl"
    style={{
      borderColor: colors.outlineVariant,
      boxShadow:
        "inset 0 0 15px rgba(59, 130, 246, 0.1), 0 0 20px rgba(59, 130, 246, 0.05)",
    }}
  >
    <div className="flex justify-between items-start">
      <div
        className="p-3 rounded-lg"
        style={{
          backgroundColor: colors.tertiaryFixed,
          color: colors.tertiary,
        }}
      >
        <Sparkles className="w-6 h-6" />
      </div>
      <span
        className="font-bold text-xs uppercase"
        style={{ color: colors.secondary }}
      >
        Premium AI Engine
      </span>
    </div>
    <div className="mt-6">
      <p
        className="text-xs uppercase tracking-wider font-semibold"
        style={{ color: colors.onSurfaceVariant }}
      >
        Tasa de Corrección de IA
      </p>
      <div className="flex items-baseline gap-2">
        <h2
          className="text-3xl font-semibold mt-1"
          style={{ color: colors.primary, fontFamily: "Manrope, sans-serif" }}
        >
          85%
        </h2>
        <span
          className="text-xs font-bold"
          style={{ color: colors.secondary }}
        >
          +2.4%
        </span>
      </div>
      <div className="flex gap-1 mt-4">
        {[1, 0.8, 0.6, 0.4].map((opacity, i) => (
          <div
            key={i}
            className="h-8 flex-1 rounded-sm"
            style={{ backgroundColor: colors.secondary, opacity }}
          />
        ))}
        <div className="h-8 flex-1 rounded-sm bg-slate-100" />
      </div>
    </div>
  </div>
);

const CircularProgressCard = () => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = 75;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="md:col-span-4 bg-white border p-6 rounded-xl flex flex-col items-center justify-center text-center"
      style={{ borderColor: colors.outlineVariant }}
    >
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={colors.secondary}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-2xl font-semibold"
            style={{ color: colors.primary, fontFamily: "Manrope, sans-serif" }}
          >
            {progress}%
          </span>
          <span
            className="text-[10px] font-bold"
            style={{ color: colors.outline }}
          >
            PROGRESO
          </span>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-slate-900">Curriculum Completado</h4>
        <p className="text-xs" style={{ color: colors.onSurfaceVariant }}>
          24/32 Módulos activos
        </p>
      </div>
    </div>
  );
};

const ErrorDistributionCard = () => (
  <div
    className="md:col-span-7 bg-white border rounded-xl overflow-hidden"
    style={{ borderColor: colors.outlineVariant }}
  >
    <div
      className="p-6 border-b flex justify-between items-center"
      style={{ borderColor: colors.outlineVariant }}
    >
      <h3
        className="text-2xl font-semibold"
        style={{ color: colors.primary, fontFamily: "Manrope, sans-serif" }}
      >
        Distribución de Tipos de Error
      </h3>
      <button
        className="text-sm font-bold flex items-center gap-1 hover:underline"
        style={{ color: colors.secondary }}
      >
        Ver reporte
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
    <div className="p-8">
      <div className="space-y-6">
        {errorTypes.map((err) => (
          <div key={err.label}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{err.label}</span>
              <span className="text-sm font-bold">{err.percent}%</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${err.percent}%`,
                  backgroundColor: err.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AttentionRequiredCard = () => (
  <div
    className="md:col-span-5 bg-white border rounded-xl overflow-hidden"
    style={{ borderColor: colors.outlineVariant }}
  >
    <div
      className="p-6 border-b flex justify-between items-center"
      style={{
        borderColor: colors.outlineVariant,
        backgroundColor: "rgba(254, 242, 242, 0.5)",
      }}
    >
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-6 h-6" style={{ color: colors.error }} />
        <h3
          className="text-2xl font-semibold"
          style={{ color: colors.primary, fontFamily: "Manrope, sans-serif" }}
        >
          Atención Requerida
        </h3>
      </div>
      <span
        className="text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase"
        style={{ backgroundColor: colors.error }}
      >
        4 CRÍTICOS
      </span>
    </div>
    <div className="divide-y" style={{ borderColor: colors.outlineVariant }}>
      {studentsNeedingHelp.map((student) => (
        <div
          key={student.name}
          className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-10 h-10 rounded-full border object-cover"
                style={{ borderColor: colors.outlineVariant }}
              />
              <div
                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                style={{
                  backgroundColor:
                    student.severity === "critical"
                      ? colors.error
                      : "#f59e0b",
                }}
              />
            </div>
            <div>
              <p
                className="font-bold text-slate-900 transition-colors group-hover:text-blue-500"
              >
                {student.name}
              </p>
              <p
                className="text-xs"
                style={{ color: colors.onSurfaceVariant }}
              >
                {student.note}
              </p>
            </div>
          </div>
          <button
            className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded text-xs font-bold transition-all"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.secondary;
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f1f5f9";
              e.currentTarget.style.color = "#334155";
            }}
          >
            {student.action}
          </button>
        </div>
      ))}
    </div>
    <div className="p-4 bg-slate-50 text-center">
      <a
        href="#"
        className="text-sm font-bold hover:underline"
        style={{ color: colors.secondary }}
      >
        Ver todos los alumnos (12)
      </a>
    </div>
  </div>
);

const AiInsightsFooter = () => (
  <div
    className="mt-10 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 border"
    style={{
      backgroundColor: colors.primaryContainer,
      color: colors.onPrimaryContainer,
      borderColor: "rgba(30, 58, 138, 0.3)",
      boxShadow:
        "inset 0 0 15px rgba(59, 130, 246, 0.1), 0 0 20px rgba(59, 130, 246, 0.05)",
    }}
  >
    <div className="p-4 bg-white/10 rounded-full">
      <Brain
        className="w-8 h-8"
        style={{ color: colors.secondary }}
        fill="currentColor"
      />
    </div>
    <div className="flex-1 text-center md:text-left">
      <h4
        className="text-2xl font-semibold text-white mb-1"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        Análisis Predictivo de Profe++ AI
      </h4>
      <p className="text-blue-100">
        Se detectó una tendencia de confusión colectiva en el tema{" "}
        <span className="font-bold" style={{ color: colors.secondary }}>
          "Recursividad Avanzada"
        </span>
        . Se recomienda programar una sesión en vivo de refuerzo para mañana.
      </p>
    </div>
    <div className="flex gap-4 shrink-0">
      <button
        className="text-white px-6 py-3 rounded-lg font-bold text-sm shadow-xl active:scale-95 transition-all"
        style={{ backgroundColor: colors.secondary }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = colors.secondaryContainer)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = colors.secondary)
        }
      >
        Programar Sesión
      </button>
      <button className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-bold text-sm hover:bg-white/20 transition-all">
        Ignorar
      </button>
    </div>
  </div>
);

const StudentAnalyticsView = () => {
  const avgScore = Math.round(
    submissionsByTask
      .map((row) => Number(row.score.replace("%", "")))
      .reduce((a, b) => a + b, 0) / submissionsByTask.length
  );

  return (
    <div className="space-y-6">
      <header>
        <h1
          className="text-4xl font-bold"
          style={{ color: colors.primary, fontFamily: "Manrope, sans-serif" }}
        >
          Student Analytics
        </h1>
        <p className="mt-1" style={{ color: colors.onSurfaceVariant }}>
          Estadísticas y feedback del código enviado por estudiante y por tarea.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-xl p-5" style={{ borderColor: colors.outlineVariant }}>
          <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: colors.onSurfaceVariant }}>
            Entregas revisadas
          </p>
          <p className="text-3xl font-bold mt-1" style={{ color: colors.primary }}>
            {submissionsByTask.length}
          </p>
        </div>
        <div className="bg-white border rounded-xl p-5" style={{ borderColor: colors.outlineVariant }}>
          <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: colors.onSurfaceVariant }}>
            Promedio de nota
          </p>
          <p className="text-3xl font-bold mt-1" style={{ color: colors.secondary }}>
            {avgScore}%
          </p>
        </div>
        <div className="bg-white border rounded-xl p-5" style={{ borderColor: colors.outlineVariant }}>
          <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: colors.onSurfaceVariant }}>
            Feedback crítico
          </p>
          <p className="text-3xl font-bold mt-1" style={{ color: colors.error }}>
            2
          </p>
        </div>
      </div>

      <div className="bg-white border rounded-xl overflow-hidden" style={{ borderColor: colors.outlineVariant }}>
        <div className="grid grid-cols-12 px-6 py-4 border-b text-xs font-bold uppercase tracking-wider" style={{ borderColor: colors.outlineVariant, color: colors.onSurfaceVariant }}>
          <div className="col-span-2">Estudiante</div>
          <div className="col-span-3">Tarea</div>
          <div className="col-span-1">Nota</div>
          <div className="col-span-1">Tests</div>
          <div className="col-span-5">Feedback</div>
        </div>
        {submissionsByTask.map((row) => (
          <div key={`${row.student}-${row.task}`} className="grid grid-cols-12 px-6 py-4 border-b last:border-b-0 items-start gap-3" style={{ borderColor: "#eef2f7" }}>
            <div className="col-span-2 font-semibold text-slate-900">{row.student}</div>
            <div className="col-span-3 text-slate-700">{row.task}</div>
            <div className="col-span-1 font-bold" style={{ color: colors.secondary }}>{row.score}</div>
            <div className="col-span-1 text-slate-600">{row.tests}</div>
            <div className="col-span-5 text-sm text-slate-600 leading-relaxed">{row.feedback}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectView = () => (
  <div className="space-y-6">
    <header>
      <h1
        className="text-4xl font-bold"
        style={{ color: colors.primary, fontFamily: "Manrope, sans-serif" }}
      >
        Crear Proyecto STEM con Python
      </h1>
      <p className="mt-1" style={{ color: colors.onSurfaceVariant }}>
        Diseña una actividad guiada para la clase y usa ideas STEM como punto de partida.
      </p>
    </header>

    <div className="bg-white border rounded-xl p-6 space-y-5" style={{ borderColor: colors.outlineVariant }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Título del proyecto"
          className="border rounded-lg px-4 py-3 outline-none"
          style={{ borderColor: colors.outlineVariant }}
        />
        <input
          type="text"
          placeholder="Curso / nivel"
          className="border rounded-lg px-4 py-3 outline-none"
          style={{ borderColor: colors.outlineVariant }}
        />
      </div>
      <textarea
        rows={4}
        placeholder="Describe objetivo, entregables y criterios de evaluación"
        className="w-full border rounded-lg px-4 py-3 outline-none"
        style={{ borderColor: colors.outlineVariant }}
      />

      <div>
        <p className="text-sm font-semibold mb-2" style={{ color: colors.primary }}>
          Ideas STEM sugeridas
        </p>
        <div className="flex flex-wrap gap-2">
          {stemIdeaPills.map((idea) => (
            <button
              key={idea}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border hover:bg-blue-50"
              style={{ borderColor: colors.outlineVariant, color: colors.primary }}
            >
              {idea}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          className="text-white px-5 py-2.5 rounded-lg font-bold text-sm"
          style={{ backgroundColor: colors.secondary }}
        >
          Guardar borrador
        </button>
        <button
          className="px-5 py-2.5 rounded-lg font-bold text-sm border"
          style={{ borderColor: colors.outlineVariant, color: colors.primary }}
        >
          Publicar proyecto
        </button>
      </div>
    </div>
  </div>
);

const ExercisesView = () => (
  <div className="space-y-6">
    <header>
      <h1
        className="text-4xl font-bold"
        style={{ color: colors.primary, fontFamily: "Manrope, sans-serif" }}
      >
        Biblioteca de Ejercicios
      </h1>
      <p className="mt-1" style={{ color: colors.onSurfaceVariant }}>
        Aquí se listan las tareas del estudiante y puedes editar cada problema.
      </p>
    </header>

    <div className="space-y-4">
      {classroomExercises.map((exercise) => (
        <div
          key={exercise.id}
          className="bg-white border rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
          style={{ borderColor: colors.outlineVariant }}
        >
          <div className="min-w-[86px] text-center rounded-lg border px-3 py-2" style={{ borderColor: "#e2e8f0", backgroundColor: "#f8fafc" }}>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">ID</p>
            <p className="font-bold text-slate-700">{exercise.id}</p>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-slate-900">{exercise.title}</h3>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border" style={{ borderColor: "#dbeafe", backgroundColor: "#eff6ff", color: colors.secondary }}>
                {exercise.level}
              </span>
            </div>
            <p className="text-sm text-slate-600">{exercise.objective}</p>
          </div>

          <button
            className="px-4 py-2 rounded-lg text-sm font-bold border hover:bg-slate-50"
            style={{ borderColor: colors.outlineVariant, color: colors.primary }}
          >
            Editar problema
          </button>
        </div>
      ))}
    </div>
  </div>
);

const RubricaView = () => {
  const [criteria, setCriteria] = React.useState(rubricCriteriaDefaults);
  const [strictness, setStrictness] = React.useState("balanced");
  const [plagiarismCheck, setPlagiarismCheck] = React.useState(true);
  const [explanationRequired, setExplanationRequired] = React.useState(true);

  const enabledWeight = criteria
    .filter((item) => item.enabled)
    .reduce((acc, item) => acc + item.weight, 0);

  const updateWeight = (key, value) => {
    setCriteria((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, weight: Number(value) } : item
      )
    );
  };

  const toggleCriterion = (key) => {
    setCriteria((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <div className="space-y-6">
      <header>
        <h1
          className="text-4xl font-bold"
          style={{ color: colors.primary, fontFamily: "Manrope, sans-serif" }}
        >
          Rubrica de Evaluación IA
        </h1>
        <p className="mt-1" style={{ color: colors.onSurfaceVariant }}>
          Configura cómo la IA evalúa cada entrega según criterios y pesos.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-xl p-5" style={{ borderColor: colors.outlineVariant }}>
          <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: colors.onSurfaceVariant }}>
            Peso total activo
          </p>
          <p className="text-3xl font-bold mt-1" style={{ color: enabledWeight === 100 ? colors.secondary : colors.error }}>
            {enabledWeight}%
          </p>
          <p className="text-xs mt-1" style={{ color: colors.onSurfaceVariant }}>
            Recomendado: 100%
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5" style={{ borderColor: colors.outlineVariant }}>
          <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: colors.onSurfaceVariant }}>
            Severidad de evaluación
          </p>
          <select
            className="mt-2 w-full border rounded-lg px-3 py-2 text-sm"
            style={{ borderColor: colors.outlineVariant }}
            value={strictness}
            onChange={(e) => setStrictness(e.target.value)}
          >
            <option value="lenient">Flexible</option>
            <option value="balanced">Balanceada</option>
            <option value="strict">Estricta</option>
          </select>
        </div>

        <div className="bg-white border rounded-xl p-5" style={{ borderColor: colors.outlineVariant }}>
          <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: colors.onSurfaceVariant }}>
            Reglas adicionales
          </p>
          <label className="mt-2 flex items-center justify-between text-sm text-slate-700">
            <span>Detección de similitud</span>
            <input
              type="checkbox"
              checked={plagiarismCheck}
              onChange={(e) => setPlagiarismCheck(e.target.checked)}
              className="accent-blue-600"
            />
          </label>
          <label className="mt-2 flex items-center justify-between text-sm text-slate-700">
            <span>Explicación obligatoria</span>
            <input
              type="checkbox"
              checked={explanationRequired}
              onChange={(e) => setExplanationRequired(e.target.checked)}
              className="accent-blue-600"
            />
          </label>
        </div>
      </div>

      <div className="bg-white border rounded-xl p-6 space-y-4" style={{ borderColor: colors.outlineVariant }}>
        {criteria.map((item) => (
          <div key={item.key} className="border rounded-lg p-4" style={{ borderColor: "#e2e8f0" }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <span>Activo</span>
                <input
                  type="checkbox"
                  checked={item.enabled}
                  onChange={() => toggleCriterion(item.key)}
                  className="accent-blue-600"
                />
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="100"
                value={item.weight}
                onChange={(e) => updateWeight(item.key, e.target.value)}
                disabled={!item.enabled}
                className="w-full"
              />
              <span className="text-sm font-bold min-w-[44px] text-right" style={{ color: colors.primary }}>
                {item.weight}%
              </span>
            </div>
          </div>
        ))}

        <div className="flex gap-3 pt-2">
          <button
            className="text-white px-5 py-2.5 rounded-lg font-bold text-sm"
            style={{ backgroundColor: colors.secondary }}
          >
            Guardar rubrica
          </button>
          <button
            className="px-5 py-2.5 rounded-lg font-bold text-sm border"
            style={{ borderColor: colors.outlineVariant, color: colors.primary }}
            onClick={() => {
              setCriteria(rubricCriteriaDefaults);
              setStrictness("balanced");
              setPlagiarismCheck(true);
              setExplanationRequired(true);
            }}
          >
            Restablecer valores
          </button>
        </div>
      </div>
    </div>
  );
};

// ----- Componente principal -----

export default function TeacherPortal() {
  const [activeSection, setActiveSection] = React.useState("dashboard");

  const renderSection = () => {
    if (activeSection === "analytics") return <StudentAnalyticsView />;
    if (activeSection === "project") return <ProjectView />;
    if (activeSection === "exercises") return <ExercisesView />;
    if (activeSection === "rubrica") return <RubricaView />;

    return (
      <>
        <DashboardHeader />

        {/* Bento Grid Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
          <MetricCard1 />
          <MetricCard2 />
          <CircularProgressCard />
        </div>

        {/* Distribución de errores + Alumnos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <ErrorDistributionCard />
          <AttentionRequiredCard />
        </div>

        {/* Footer AI */}
        <AiInsightsFooter />
      </>
    );
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: colors.surface,
        color: colors.onSurface,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <TopBar />
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="ml-64 pt-16 min-h-screen">
        <div className="max-w-[1400px] mx-auto p-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}