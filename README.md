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
