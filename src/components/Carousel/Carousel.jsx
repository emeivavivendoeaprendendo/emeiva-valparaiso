import "./Carousel.css";

export default function Carousel({ slides, current, setCurrent, label }) {
  const previous = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="gallery" aria-roledescription="carrossel" aria-label={label}>
      <img src={slides[current].src} alt={slides[current].alt} />
      <div className="gallery__wash" />
      <button className="carousel-button carousel-button--previous" onClick={previous} aria-label="Imagem anterior">
        ‹
      </button>
      <button className="carousel-button carousel-button--next" onClick={next} aria-label="Próxima imagem">
        ›
      </button>
      <div className="carousel-dots">
        {slides.map((slide, index) => (
          <button
            className={current === index ? "is-active" : ""}
            key={slide.src}
            onClick={() => setCurrent(index)}
            aria-label={`Mostrar imagem ${index + 1}`}
            aria-current={current === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
