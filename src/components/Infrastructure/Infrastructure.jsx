import Icon from "../Icon/Icon";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Infrastructure.css";

export default function Infrastructure() {
  return (
    <section className="section infrastructure" id="infraestrutura">
      <div className="shell">
        <SectionTitle eyebrow="Nossos espaços" title="Feita para explorar com segurança">
          Ambientes preparados para acolher, movimentar, criar e estimular novas descobertas.
        </SectionTitle>
        <div className="infrastructure__feature">
          <img
            src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?auto=format&fit=crop&w=1400&q=85"
            alt="Sala infantil clara e organizada"
          />
          <div>
            <span className="kicker">Ambientes acolhedores</span>
            <h3>Espaços na medida da infância</h3>
            <p>
              Salas arejadas, mobiliário adequado e recursos pedagógicos que convidam à participação,
              à imaginação e à autonomia.
            </p>
          </div>
        </div>
        <div className="facility-grid">
          <article><Icon name="blocks" /><h3>Salas de referência</h3><p>Organizadas para atividades, rodas de conversa e brincadeiras.</p></article>
          <article><Icon name="heart" /><h3>Alimentação escolar</h3><p>Refeições preparadas para uma rotina saudável e acolhedora.</p></article>
          <article><Icon name="accessibility" /><h3>Acessibilidade</h3><p>Circulação e espaços pensados para receber todas as crianças.</p></article>
          <article><Icon name="users" /><h3>Áreas de convivência</h3><p>Locais para movimento, encontros e experiências coletivas.</p></article>
        </div>
      </div>
    </section>
  );
}
