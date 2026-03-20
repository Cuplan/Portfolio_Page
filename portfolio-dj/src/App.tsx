import { useState, useEffect, useRef, type ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LangProvider } from "./hooks/useLang";
import { CRTProvider, useCRT } from "./hooks/useCRT";
import { TerminalIntro } from "./components/TerminalIntro";
import CRTOverlay from "./components/CRTOverlay";
import InteractiveTerminal from "./components/InteractiveTerminal";
import NavCommandBar from "./components/NavCommandBar";
import EasterEggs from "./components/EasterEggs";


const SESSION_KEY = "portfolio-intro-shown";

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.12 }}
    >
      {children}
    </motion.div>
  );
}

function AppInner() {
  const { crtEnabled } = useCRT();
  const location = useLocation();

  const [showIntro, setShowIntro] = useState(
    () => !sessionStorage.getItem(SESSION_KEY)
  );
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [dbDropped, setDbDropped] = useState(false);
  const [crashed, setCrashed] = useState(false);
  const [konamiCount, setKonamiCount] = useState(0);
  const konamiRef = useRef<string[]>([]);

  const handleEnter = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setShowIntro(false);
  };

  // Backtick toggles terminal + Konami code detection
  useEffect(() => {
    const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    const handler = (e: KeyboardEvent) => {
      if (e.key === "`" && !showIntro) {
        setTerminalOpen((prev) => !prev);
        return;
      }
      konamiRef.current = [...konamiRef.current, e.key].slice(-KONAMI.length);
      if (konamiRef.current.join(",") === KONAMI.join(",")) {
        konamiRef.current = [];
        setTerminalOpen(true);
        setKonamiCount((c) => c + 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showIntro]);

  return (
    <>
      {crtEnabled && <CRTOverlay />}
      {showIntro && <TerminalIntro onEnter={handleEnter} />}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onDropDB={() => setDbDropped(true)}
        onCrash={() => setCrashed(true)}
        konamiCount={konamiCount}
      />

      <EasterEggs dbDropped={dbDropped} crashed={crashed} />

      <div className="flex flex-col min-h-screen font-mono bg-day-bg dark:bg-dj-black transition-colors duration-300">
        <Navbar onOpenTerminal={() => setTerminalOpen((p) => !p)} />
        <NavCommandBar />

        <main className="flex-grow">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/projets"
                element={
                  <PageTransition>
                    <Projets />
                  </PageTransition>
                }
              />
              <Route
                path="/projets/:slug"
                element={
                  <PageTransition>
                    <ProjectDetail />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />
              <Route
                path="*"
                element={
                  <PageTransition>
                    <NotFound />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <CRTProvider>
      <LangProvider>
        <AppInner />
        <SpeedInsights />
        <Analytics />
      </LangProvider>
    </CRTProvider>
  );
}

export default App;
