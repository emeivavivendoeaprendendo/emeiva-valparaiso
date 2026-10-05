import "./Intro.css";
import MiniaturaLogo from "../../public/Logo-Sem-Fundo.png"

export default function Intro() {
  return (
    <section className="intro section">
      <div className="shell intro__grid">
        <div>
          <span className="kicker">Boas-vindas</span>
          <h2>Todo dia é uma nova<br />descoberta.</h2>
        </div>
        <div className="intro__copy">
          <p>
            Na EMEI Vivendo e Aprendendo, acolhemos crianças de 4 e 5 anos em um ambiente seguro,
            alegre e pensado para a infância. Aqui, aprender acontece nas brincadeiras, nas amizades e
            nas pequenas conquistas de cada dia.
          </p>
          <div className="intro__signature">
            <span className="signature-mark">
                <img src={MiniaturaLogo} alt="Miniatura da logo" />
            </span>
            <span><strong>Equipe EMEI</strong><small>Vivendo e Aprendendo</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}
