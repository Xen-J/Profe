import { useState, useEffect } from "react";
import NixhoLanding from "./NixhoLanding.jsx";
import StudentDashboard from "./StudentDashboard.jsx";
import ExerciseDetail from "./ExerciseDetail.jsx";
import TeacherPortal from "./TeacherPortal.jsx";

/**
 * Router simple basado en hash. Soporta query strings:
 *   #/landing                        → Landing pública
 *   #/dashboard                      → Dashboard del estudiante
 *   #/exercise                       → Pantalla de ejercicio (default)
 *   #/exercise?id=%234029            → Pantalla de ejercicio con ID específico
 *   #/teacher                        → Portal del instructor
 *
 * Por defecto carga la landing.
 */
export default function App() {
  const [hash, setHash] = useState(window.location.hash || "#/landing");

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#/landing");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const [path, query] = hash.replace("#", "").split("?");
  const params = new URLSearchParams(query || "");

  if (path === "/dashboard") {
    return <StudentDashboard />;
  }
  if (path === "/exercise") {
    return <ExerciseDetail exerciseId={params.get("id")} />;
  }
  if (path === "/teacher") {
    return <TeacherPortal />;
  }
  return <NixhoLanding />;
}