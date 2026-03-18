import { useState, useEffect, type ReactNode } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
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

  const handleEnter = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setShowIntro(false);
  };

  // ` backtick toggles the floating terminal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "`" && !showIntro) {
        setTerminalOpen((prev) => !prev);
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
      />

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
      </LangProvider>
    </CRTProvider>
  );
}

export default App;
