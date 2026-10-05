import Brand from "../Brand/Brand";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__main">
        <Brand compact />
        <div>
          <strong>Navegação</strong>
          <a href="#sobre">Sobre a escola</a>
          <a href="#matriculas">Matrículas</a>
          <a href="#infraestrutura">Infraestrutura</a>
        </div>
        <div>
          <strong>Horários</strong>
          <span>Manhã: 7h30 às 12h30</span>
          <span>Tarde: 13h30 às 17h30</span>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>© 2026 EMEI Vivendo e Aprendendo</span>
        <span>Educar, cuidar e acolher.</span>
      </div>
    </footer>
  );
}
