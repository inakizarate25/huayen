// src/components/ScrollToTopButton.jsx
import { useEffect, useState } from "react";
import "./scrolltotop.css";
import arrow from "../../assets/arrow-up.svg";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <img src={arrow} alt="arrow top" />
      </button>
    )
  );
}
