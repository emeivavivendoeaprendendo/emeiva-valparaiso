import { useState } from "react";

// @ts-expect-error This JavaScript data module has no TypeScript declaration.
import SectionTitle from "../SectionTitle/SectionTitle";

// @ts-expect-error This JavaScript data module has no TypeScript declaration.
import Carousel from "../Carousel/Carousel";

// @ts-expect-error This JavaScript data module has no TypeScript declaration.
import Icon from "../Icon/Icon";

// @ts-expect-error This JavaScript data module has no TypeScript declaration.
import galleryEventssPovosIndigenas from "../../data/galleryEventssPovosIndigenas";
// @ts-expect-error This JavaScript data module has no TypeScript declaration.
import galleryEventssDiadaFruta from "../../data/galleryEventssDiadaFruta";
import './Eventss.css'

export default function Eventss() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlide2, setCurrentSlide2] = useState(0);
    const [currentSlide3, setCurrentSlide3] = useState(0);

    return (
        <section className="section eventss" id="eventoss">
            <div className="shell eventss__feature">
                <SectionTitle eyebrow="Projetos da nossa instituição" title="Atividades e eventos realizados em grupo para as crianças e famílias">
                    Aqui estão alguns dos eventos que realizamos ao longo do ano.
                </SectionTitle>

                {/*GRID COM CAROUSEL E STORY CARD*/}
                {/*Evento 1*/}
                <div className="eventss__grid">
                    {/*ITEM DO LADO ESQUERDO DA TELA */}
                    <Carousel
                        slides={galleryEventssPovosIndigenas}
                        current={currentSlide}
                        setCurrent={setCurrentSlide}
                        label="Galeria de eventos"
                    />

                    {/*ITEM DO LADO DIREITO DA TELA */}
                    <article className="story-card-eventss">
                        <span className="story-card__number">01</span>
                        <span className="kicker">Evento 1</span>
                        <span className="story-card__title">
                            <h3>Projeto <br /> Povos Indígenas</h3>
                            <br/>
                        </span>
                        <p>
                            O projeto sobre os Povos Indígenas foi desenvolvido com a participação de todas as turmas, por meio de atividades lúdicas e educativas adequadas à faixa etária das crianças. Cada turma explorou um tema específico, promovendo o conhecimento, o respeito e a valorização da cultura, dos costumes e das tradições dos povos indígenas. Ao final, os trabalhos foram organizados em uma exposição coletiva, com painéis, desenhos, pinturas, maquetes e outras produções realizadas pelas crianças, valorizando as aprendizagens, a criatividade e a troca de experiências entre as turmas e a comunidade escolar.
                        </p>
                        <p>
                            Nossa proposta valoriza a curiosidade, a autonomia e o direito de viver plenamente a infância.
                        </p>

                        <div className="story-card__note">
                            <Icon name="calendar" />
                            <span>
                                <strong>Data</strong> 
                                Evento realizado em 28/04/2026
                            </span>
                        </div>
                    </article>
                </div>

                <br/>

                {/*Evento 2*/}
                <div className="eventss__grid">
                    {/*ITEM DO LADO ESQUERDO DA TELA */}
                    <article className="story-card-eventss">
                        <span className="story-card__number">02</span>
                        <span className="kicker">Evento 2</span>
                        <span className="story-card__title">
                            <h3>Projeto <br />  Dia da Fruta: Aprender, Experimentar e Crescer com Saúde!</h3>
                            <br/>
                        </span>
                        <p>
                            O Dia da Fruta foi um momento especial de alegria, descobertas e aprendizado! As crianças tiveram a oportunidade de conhecer diferentes frutas, explorar cores, aromas, texturas e sabores, descobrindo de forma divertida a importância de uma alimentação saudável. A atividade incentivou a curiosidade, a autonomia e a criação de hábitos alimentares positivos desde a infância, tornando o aprendizado uma experiência saborosa e cheia de diversão! 
                        </p>
                        

                        <div className="story-card__note">
                            <Icon name="calendar" />
                            <span>
                                <strong>Data</strong> 
                                Evento realizado em 27/10/2026
                            </span>
                        </div>
                    </article>

                    {/*ITEM DO LADO DIREITO DA TELA */}
                    <Carousel
                        slides={galleryEventssDiadaFruta} //Troca para o array de imagens do evento.
                        current={currentSlide2}
                        setCurrent={setCurrentSlide2}
                        label="Galeria de Fotos do evento Dia da Fruta"
                    />
                </div>

                <br/>

                {/*Evento 1*/}
                <div className="eventss__grid">
                    {/*ITEM DO LADO ESQUERDO DA TELA */}
                    <Carousel
                        slides={galleryEventssPovosIndigenas}
                        current={currentSlide3}
                        setCurrent={setCurrentSlide3}
                        label="Galeria de eventos"
                    />

                    {/*ITEM DO LADO DIREITO DA TELA */}
                    <article className="story-card-eventss">
                        <span className="story-card__number">03</span>
                        <span className="kicker">Evento 3</span>
                        <span className="story-card__title">
                            <h3>Projeto <br /> Dia da Vacinação: Cuidar, Proteger e Crescer com Saúde!</h3>
                            <br/>
                        </span>
                        <p>
                            O Dia da Vacinação na escola foi um momento importante de cuidado e conscientização sobre a saúde das nossas crianças. Com o apoio dos profissionais de saúde e das famílias, reforçamos a importância das vacinas na prevenção de doenças e na proteção de todos. Afinal, vacinar é um ato de amor, responsabilidade e cuidado com o futuro dos pequenos!
                        </p>
                        <p>
                            Nossa proposta valoriza o cuidado, o carinho e a proteção desde a infância, promovendo a conscientização sobre a importância da vacinação. Afinal, cada vacina é um gesto de amor que ajuda a proteger nossas crianças, garantindo mais saúde, segurança e muitos sorrisos para crescer, brincar e descobrir o mundo!cia.
                        </p>

                        <div className="story-card__note">
                            <Icon name="calendar" />
                            <span>
                                <strong>Data</strong> 
                                Evento realizado em 29/10/2026
                            </span>
                        </div>
                    </article>
                </div>

                <br/>

            </div>
            
        </section>
    )
}