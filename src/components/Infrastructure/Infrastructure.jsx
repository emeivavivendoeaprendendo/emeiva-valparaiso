import Icon from "../Icon/Icon";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Infrastructure.css";

export default function Infrastructure() {
  return (
    <section className="section infrastructure" id="infraestrutura">
      <div className="shell">
        <SectionTitle eyebrow="O dia a dia" title="Vivências que transformam a infância">
          Um olhar atento e carinhoso sobre tudo o que acontece em nossos dias de aprendizado.
        </SectionTitle>

        {/*SESSÃO DE VIDEO DO SITE (UMA DIV PARA CADA VIDEO*/}
        {/*VIDEO 1*/}
        <div className="infrastructure__feature video1">
            <div className="video-container1">
              <video controls autoPlay muted className="video1-video">
                <source src="src/assets/video/1.mp4" type="video/mp4" />
                Seu navegador não suporta tags de vídeo.
              </video>
            </div>

            <div className="video-texto1">
              <span className="kicker">Ambientes acolhedores</span>
              <h3>Espaços na medida da infância</h3>
              <p>
                Salas arejadas, mobiliário infantil adequado e recursos pedagógicos que convidam à participação, à imaginação e à autonomia.
              </p>
            </div>
        </div>

        {/*VIDEO 2*/}
        <div className="infrastructure__feature video2">
            <div className="video-texto2">
              <span className="kicker">Cidadania que começa na infância</span>
              <h3>Vivências cívicas e formação de valores</h3>
              <p>
                <span style={{ color: "var(--color-yellow-400) !important" }}>
                  <strong>Momentos Cívicos</strong>
                </span> fortalecem o sentimento de pertencimento, o respeito à <br/>
                história local e a construção da cidadania desde os primeiros anos de vida.            
              </p>
            </div>

            <div className="video-container2">
              <video controls autoPlay className="video2-video">
                <source src="src/assets/video/3.mp4" type="video/mp4" />
                Seu navegador não suporta tags de vídeo.
              </video>
            </div>

        </div>

        {/*VIDEO 3*/}
        <div className="infrastructure__feature video3">
            <div className="video-container3">
              <video controls autoPlay className="video3-video">
                <source src="src/assets/video/2.mp4" type="video/mp4" />
                Seu navegador não suporta tags de vídeo.
              </video>
            </div>

            <div className="video-texto3">
              <span className="kicker">Juntos por uma boa causa</span>
              <h3>Educação e conscientização para transformar vidas</h3>
              <p>
                O <span style={{ color: "var(--color-pink-600) !important" }}>
                  <strong>Outubro Rosa</strong>
                  </span> inspira diálogo, informação e cuidado, fortalecendo a importância da prevenção e da atenção à saúde.
              </p>
            </div>



        </div>

        
        <div className="facility-grid">
          {/* <article><Icon name="blocks" /><h3>Salas de referência</h3><p>Organizadas para atividades, rodas de conversa e brincadeiras.</p></article> */}
          <article className="values1"><Icon name="heart" /><h3>Alimentação escolar</h3><p>Refeições preparadas para uma rotina saudável e acolhedora.</p></article>
          <article className="values2"><Icon name="accessibility" /><h3>Acessibilidade</h3><p>Circulação e espaços pensados para receber todas as crianças.</p></article>
          <article className="values3"><Icon name="users" /><h3>Áreas de convivência</h3><p>Locais para movimento, encontros e experiências coletivas.</p></article>
        </div>
      </div>
    </section>
  );
}
