// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ExpChinook from "./pages/espChinook/ExpChinook";
import ExpEsquina from "./pages/expEsquina/ExpEsquina";
import Navbar from "./components/navbar/Navbar";
import ScrollToTopButton from "./components/scrolltotop/ScrollToTopButton";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/experiencia-chinook" element={<ExpChinook />} />
        <Route path="/experiencia-esquina" element={<ExpEsquina />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
