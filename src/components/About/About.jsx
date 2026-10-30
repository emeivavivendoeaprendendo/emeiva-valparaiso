import { useState } from "react";
import gallerySlides from "../../data/gallerySlides";
import gallerySlides2 from "../../data/gallerySlides2";
import gallerySlides3 from "../../data/gallerySlides3";
import Carousel from "../Carousel/Carousel";
import Icon from "../Icon/Icon";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./About.css";

export default function About() {
  const [gallerySlide, setGallerySlide] = useState(0);
  const [gallerySlide2, setGallerySlide2] = useState(0); 
  const [gallerySlide3, setGallerySlide3] = useState(0);

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
              <span><strong>Espaço preparado</strong> para o aprendizado dos alunos.</span>
            </div>
          </article>
        </div>

        <div className="about__grid">
          <Carousel
            slides={gallerySlides2}
            current={gallerySlide2}
            setCurrent={setGallerySlide2}
            label="Galeria da escola"
          />
          <article className="story-card2">
            <span className="story-card__number">02</span>
            <span className="kicker">Nossa essência</span>
            <h3>Aprender, descobrir<br />e crescer juntos.</h3>
            <p>
             Acreditamos que cada criança tem seu próprio jeito de aprender e descobrir o mundo. Por isso, nossa escola oferece um ambiente acolhedor,
             onde a curiosidade é incentivada, as diferenças são respeitadas e cada conquista é valorizada.
            </p>
            <p>
              Por meio de experiências, brincadeiras e atividades educativas, estimulamos o desenvolvimento da autonomia, da criatividade
              e do pensamento crítico, preparando nossos alunos para os desafios de cada nova etapa.
            </p>
            <div className="story-card__note">
              <Icon name="book"/>
              <span><strong>Aprendizado com propósito</strong>Para desenvolver habilidades e formar cidadãos conscientes.</span>
            </div>
          </article>
        </div>

        <div className="about__grid">
          <Carousel
            slides={gallerySlides3}
            current={gallerySlide3}
            setCurrent={setGallerySlide3}
            label="Galeria da escola"
          />
          <article className="story-card3">
            <span className="story-card__number">03</span>
            <span className="kicker">Nosso compromisso</span>
            <h3>Educação que transforma,<br />cuidado que faz a diferença.</h3>
            <p>
             Mais do que ensinar conteúdos, queremos construir uma trajetória de aprendizado marcada por descobertas, amizades e novas possibilidades.
             Nossa proposta pedagógica valoriza o desenvolvimento integral dos alunos, unindo conhecimento, respeito e responsabilidade.
            </p>
            <p>
              Com a parceria entre escola e família, cultivamos valores essenciais para a vida em sociedade e incentivamos cada estudante a acreditar em seu potencial,
             explorar suas habilidades e construir seu próprio caminho.
            </p>
            <div className="story-card__note">
              <Icon name="blocks" />
              <span><strong>Crescer com confiança</strong>Para aprender, compartilhar e construir o futuro.</span>
            </div>
          </article>
        </div>

        <div className="values">
          <article className="values1"><Icon name="book" /><h3>Aprender brincando</h3><p>Experiências lúdicas e significativas.</p></article>
          <article className="values2"><Icon name="users" /><h3>Comunidade presente</h3><p>Família e escola crescendo juntas.</p></article>
          <article className="values3"><Icon name="heart" /><h3>Cuidado integral</h3><p>Acolhimento em cada fase da infância.</p></article>
        </div>
      </div>
    </section>
  );
}
