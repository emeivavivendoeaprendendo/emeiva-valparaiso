import Icon from "../Icon/Icon";
import { BsChatLeftHeart } from "react-icons/bs";
import "./Location.css";

export default function Location() {
  return (
    <section className="section location" id="localizacao">
      <div className="shell location__grid">
        <div className="location__content">
          <span className="kicker">Venha nos conhecer</span>
          <h2>A escola está de<br />
            <span className="door_desciption">
              <strong>portas abertas.</strong>
            </span>
          </h2>
          <p>
            Entre em contato, tire suas dúvidas e agende uma visita para conhecer a EMEI Vivendo e Aprendendo. Estamos ansiosos para recebê-lo!
          </p>
          <div className="contact-line">
            <Icon name="map" />
              <span>
                <small>Endereço</small>
                <strong>
                  Quadra 88 Lote 6/7 2ª Etapa do Céu Azul, Valparaíso de Goiás - GO, 72871-066
                </strong>
              </span>
          </div>

          <div className="contact-line">
            <BsChatLeftHeart />
            <span>
              <small>Contato</small>
              <span className="contact-phone">
                <abbr title="Este contato também é o WhatsApp oficial da EMEI.">
                  <a href="https://wa.me/5561995826547" target="_blank" rel="noreferrer">
                    <strong>(61) 9 9582-6547</strong>
                  </a>
                </abbr>
              </span>

            </span>
          </div>
          
          <div className="contact-line">
            <Icon name="clock" />
              <span>
                <small>Atendimento da secretaria</small>
                <strong>7h30 às 16h</strong>
              </span>
            </div>
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
          <span>Localização real — clique aqui para abrir no seu navegador.</span>
        </div>
      </div>
    </section>
  );
}
