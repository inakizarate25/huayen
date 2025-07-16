// src/components/Hero.jsx
import "./hero.css";
import banner from "../../assets/images/banner_3.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${banner})` }}
      />
    </section>
  );
}
