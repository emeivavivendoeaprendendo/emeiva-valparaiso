import { useState } from "react";
import gallerySlides from "../../data/gallerySlides";
import Carousel from "../Carousel/Carousel";
import Icon from "../Icon/Icon";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./About.css";

export default function About() {
  const [gallerySlide, setGallerySlide] = useState(0);

  return (
    <section className="section about" id="sobre">
      <div className="shell">
        <SectionTitle eyebrow="Nossa escola" title="Uma história construída em comunidade">
          Um espaço onde cuidado e educação caminham juntos, respeitando o tempo e a singularidade de cada criança.
        </SectionTitle>
        <div className="about__grid">
          <Carousel
            slides={gallerySlides}
            current={gallerySlide}
            setCurrent={setGallerySlide}
            label="Galeria da escola"
          />
          <article className="story-card">
            <span className="story-card__number">01</span>
            <span className="kicker">Nossa história</span>
            <h3>Raízes que ensinam,<br />laços que acolhem.</h3>
            <p>
              A EMEI Vivendo e Aprendendo faz parte da história de muitas famílias. Este espaço está
              pronto para receber o ano de criação, os principais marcos e as memórias da comunidade escolar.
            </p>
            <p>
              Nossa proposta valoriza a curiosidade, a autonomia e o direito de viver plenamente a infância.
            </p>
            <div className="story-card__note">
              <Icon name="heart" />
              <span><strong>Espaço preparado</strong> para inserir fotos e momentos dos alunos.</span>
            </div>
          </article>
        </div>
        <div className="values">
          <article><Icon name="book" /><h3>Aprender brincando</h3><p>Experiências lúdicas e significativas.</p></article>
          <article><Icon name="users" /><h3>Comunidade presente</h3><p>Família e escola crescendo juntas.</p></article>
          <article><Icon name="heart" /><h3>Cuidado integral</h3><p>Acolhimento em cada fase da infância.</p></article>
        </div>
      </div>
    </section>
  );
}
