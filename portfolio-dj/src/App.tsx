
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { LangProvider } from "./hooks/useLang";

function App() {
  const { theme } = useTheme();

  return (
    <LangProvider>
      <div className="flex flex-col min-h-screen bg-day-bg dark:bg-dj-black transition-colors duration-300">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
