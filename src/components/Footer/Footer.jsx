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
        <span>
          <b>©  {new Date().getFullYear()} EMEI Vivendo e Aprendendo</b>
        </span>


       <span><b>Desenvolvido por:</b> <br/>
          <a href="https://r-douglas.vercel.app" target="_blank" rel="noopener noreferrer">Robert Douglas</a>, <br/>
          <a href="https://github.com/Gabriel20px" target="_blank" rel="noopener noreferrer">Gabriel Soares</a>, <br/>
          <a href="https://github.com/SantosWN" target="_blank" rel="noopener noreferrer">Washington Santos</a>
       </span>

        <b><span>Educar, cuidar e acolher.</span></b>
      </div>

    </footer>
  );
}
