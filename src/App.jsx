// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ExperienciaDetalle from "./pages/expDetalle/ExperienciaDetalle";
import Navbar from "./components/navbar/Navbar";
import ScrollToTopButton from "./components/scrolltotop/ScrollToTopButton";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/experiencia" element={<ExperienciaDetalle />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
