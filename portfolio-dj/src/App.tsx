
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme"; //  on importe le hook

function App() {
  //  On fait monter le hook ici : dès que App est exécuté, il gère <html class="dark">
  const { theme } = useTheme();

  return (
    //  On ajoute bg-light/dark + text-light/dark pour tout le site
    <div className="flex flex-col min-h-screen bg-yellow-50 dark:bg-gray-800 transition-colors duration-300">
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
  );
}

export default App;
