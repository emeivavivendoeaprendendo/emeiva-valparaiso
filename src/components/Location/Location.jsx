import Icon from "../Icon/Icon";
import "./Location.css";

export default function Location() {
  return (
    <section className="section location" id="localizacao">
      <div className="shell location__grid">
        <div className="location__content">
          <span className="kicker">Venha nos conhecer</span>
          <h2>A escola está de<br /><em>portas abertas.</em></h2>
          <p>
            Use o mapa para localizar a EMEI. O endereço oficial e os canais de contato podem ser
            inseridos aqui assim que forem confirmados.
          </p>
          <div className="contact-line"><Icon name="map" /><span><small>Endereço</small><strong>Endereço completo da escola</strong></span></div>
          <div className="contact-line"><Icon name="clock" /><span><small>Atendimento da secretaria</small><strong>7h30 às 16h</strong></span></div>
          <a
            className="button button--dark"
            href="https://www.google.com/maps/search/?api=1&query=EMEI+Vivendo+e+Aprendendo"
            target="_blank"
            rel="noreferrer"
          >
            Abrir no Google Maps ↗
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Mapa da EMEI Vivendo e Aprendendo"
            src="https://www.google.com/maps?q=EMEI%20Vivendo%20e%20Aprendendo&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <span>Localização provisória — confirme o endereço antes da publicação</span>
        </div>
      </div>
    </section>
  );
}
