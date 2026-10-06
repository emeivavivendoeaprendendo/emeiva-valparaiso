import { useEffect, useState } from "react";
import heroSlides from "../../data/heroSlides";
import LogoDoBanner from "../../public/Logo-Sem-Fundo.png";
import "./Hero.css";

export default function Hero() {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setHeroSlide((current) => (current + 1) % heroSlides.length),
      5500,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="inicio" aria-label="Apresentação da escola">
      {heroSlides.map((slide, index) => (
        <img
          className={heroSlide === index ? "hero__image is-active" : "hero__image"}
          src={slide.src}
          alt={heroSlide === index ? slide.alt : ""}
          key={slide.src}
        />
      ))}
      <div className="hero__overlay" />
      <div className="shell hero__content">
        <span className="hero__tag">Escola Municipal de Educação Infantil</span>

        <div className="hero__logo  img-banner" aria-hidden="true">
          <img src={LogoDoBanner} alt="Logo da EMEI Vivendo e Aprendendo" />
        </div>

        <h1>EMEI<br /><em>Vivendo e Aprendendo</em></h1>
        <p>Um lugar para brincar, descobrir, conviver e crescer.</p>
        <a className="button" href="#sobre">Conheça nossa escola <span>↓</span></a>
      </div>
      <div className="hero__dots" aria-label="Selecionar imagem do banner">
        {heroSlides.map((slide, index) => (
          <button
            className={heroSlide === index ? "is-active" : ""}
            key={slide.src}
            onClick={() => setHeroSlide(index)}
            aria-label={`Mostrar banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
