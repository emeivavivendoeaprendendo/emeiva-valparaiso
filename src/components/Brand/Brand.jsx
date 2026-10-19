import "./Brand.css";
import logo from "../../assets/emei-logo.png";

export default function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#inicio" aria-label="Ir para o início">
      <img className="brand__mark" src={logo} alt="" aria-hidden="true" />
      <span>
        <strong>EMEI Vivendo e Aprendendo</strong>
        {!compact && <small>Educação infantil com afeto e descobertas</small>}
      </span>
    </a>
  );
}
