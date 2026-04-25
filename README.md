=======
# 🚀 Profe++ - Sinceramiento del Aprendizaje con IA

![Estado del Proyecto](https://img.shields.io/badge/Status-MVP-orange)
![Tecnologías](https://img.shields.io/badge/Stack-Next.js%20%7C%20Supabase%20%7C%20Gemini-blue)

**Profe++** es una plataforma diseñada para romper la barrera del "silencio del estudiante" en entornos virtuales. A través del análisis en tiempo real de la interacción con el código, detectamos el nivel real de frustración y aprendizaje, transformando datos invisibles en decisiones pedagógicas precisas.

## 💡 El Problema
En clases virtuales, el **50% de los alumnos** afirma que "todo está bien" por chat o micrófono, mientras que en realidad están estancados o frustrados. Esta falta de sinceramiento impide que el docente aplique estrategias de refuerzo efectivas, resultando en una enseñanza infructuosa.

## ✨ Nuestra Solución
Profe++ no solo evalúa el resultado final del código, sino el **proceso**:
- **Telemetría de Código:** Captura silenciosa de eventos (borrados, pausas largas, patrones de error).
- **Análisis con IA (Gemini):** Procesa el comportamiento para identificar si el alumno tiene dudas de sintaxis o lógica.
- **Dashboard Docente:** Visualización en tiempo real con recomendaciones automáticas para el profesor.

## 🛠️ Stack Tecnológico
Para este MVP de alta velocidad, utilizamos:
- **Frontend:** [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/) (Desplegado en **Vercel**).
- **Base de Datos:** [Supabase](https://supabase.com/) (PostgreSQL + Realtime) para capturar la telemetría.
- **Inteligencia Artificial:** [Gemini 1.5 Flash API](https://ai.google.dev/) para el análisis de patrones de aprendizaje.
- **Editor:** [Monaco Editor](https://microsoft.github.io/monaco-editor/) / Custom Hook para captura de eventos.

## 🚀 Instalación y Configuración

### Pre-requisitos
- Node.js v18+
- Cuenta en Supabase y Google AI Studio (para la API Key de Gemini).

### Pasos
1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/nixho-ai.git](https://github.com/tu-usuario/nixho-ai.git)
   cd nixho-ai

<<<<<<< HEAD
# Nixho - Landing Page (React)

Landing page de Nixho convertida desde HTML/CSS a React + Vite + Tailwind.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre http://localhost:5173 en el navegador.

## Build

```bash
npm run build
npm run preview
```

## Estructura

```
nixho-react/
├── index.html              # Carga las fuentes (Inter, Manrope, Space Grotesk)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx            # Entry point
    ├── App.jsx
    ├── NixhoLanding.jsx    # Componente principal con todas las secciones
    └── index.css           # Tailwind + estilos base
```

## Stack

- **React 18**
- **Vite 5** — bundler / dev server
- **Tailwind CSS 3** — estilos utilitarios
- **lucide-react** — iconos (reemplaza Material Symbols del original)

## Notas de la conversión

- Los colores personalizados del Material Design 3 original (`secondary`, `primary-container`, etc.) se aplicaron como estilos inline desde un objeto `colors` en `NixhoLanding.jsx`.
- Los iconos `material-symbols-outlined` se reemplazaron por equivalentes de `lucide-react`.
- El layout, espaciado y tipografía se mantienen fieles al diseño original.