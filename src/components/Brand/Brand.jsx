import "./Brand.css";
import Logo from "../../public/Logo.png";

export default function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#inicio" aria-label="Ir para o início">
      <span className="brand__mark" aria-hidden="true">
        <span>
          <img src={Logo} alt="Logo da EMEI Vivendo e Aprendendo" />
        </span>
        <i />
        <i />
        <i />
      </span>
      <span>
        <strong>EMEI Vivendo e Aprendendo</strong>
        {!compact && <small>Educação infantil com afeto e descobertas</small>}
      </span>
    </a>
  );
}
