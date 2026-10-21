import { useState } from "react";

// @ts-expect-error This JavaScript data module has no TypeScript declaration.
import SectionTitle from "../SectionTitle/SectionTitle";

// @ts-expect-error This JavaScript data module has no TypeScript declaration.
import Carousel from "../Carousel/Carousel";

// @ts-expect-error This JavaScript data module has no TypeScript declaration.
import Icon from "../Icon/Icon";

// @ts-expect-error This JavaScript data module has no TypeScript declaration.
import galleryEventss from "../../data/galleryEventss";
import './Eventss.css'

export default function Eventss() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <section className="section eventss" id="eventoss">
            <div className="shell eventss__feature">
                <SectionTitle eyebrow="Projetos da nossa instituição" title="Atividades e eventos realizados em grupo para as crianças e famílias">
                    Aqui estão alguns dos eventos que realizamos ao longo do ano.
                </SectionTitle>

                {/*GRID COM CAROUSEL E STORY CARD*/}
                <div className="eventss__grid">
                    {/*ITEM DO LADO ESQUERDO DA TELA */}
                    <Carousel
                        slides={galleryEventss}
                        current={currentSlide}
                        setCurrent={setCurrentSlide}
                        label="Galeria de eventos"
                    />

                    {/*ITEM DO LADO DIREITO DA TELA */}
                    <article className="story-card-eventss">
                        <span className="story-card__number">01</span>
                        <span className="kicker">Evento 1</span>
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
                            <span>
                                <strong>Espaço preparado</strong> para inserir fotos e momentos dos alunos.
                            </span>
                        </div>
                    </article>
                </div>

            </div>
        </section>
    )
}