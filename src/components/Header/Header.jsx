import { useState } from "react";
import Brand from "../Brand/Brand";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="shell header__inner">
        <Brand />
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
          <b className="sr-only">Abrir menu</b>
        </button>
        <nav id="main-navigation" className={menuOpen ? "nav is-open" : "nav"} aria-label="Navegação principal">
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#matriculas" onClick={closeMenu}>Matrículas</a>
          <a href="#infraestrutura" onClick={closeMenu}>Infraestrutura</a>
          <a href="#colaboradores" onClick={closeMenu}>Colaboradores</a>
          <a href="#localizacao" onClick={closeMenu}>Localização</a>
        </nav>
      </div>
    </header>
  );
}
