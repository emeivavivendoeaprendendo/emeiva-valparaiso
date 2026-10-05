import Icon from "../Icon/Icon";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Enrollment.css";

export default function Enrollment() {
  return (
    <section className="section enrollment" id="matriculas">
      <div className="shell">
        <SectionTitle eyebrow="Ano letivo 2026" title="Informações de matrícula">
          Confira o corte etário e a organização das turmas de educação infantil.
        </SectionTitle>
        <div className="enrollment__grid">
          <article className="age-card age-card--yellow">
            <span className="age-card__label">Infantil</span>
            <strong>4</strong>
            <h3>Crianças de 4 anos</h3>
            <p>Nascidas entre <b>01/04/2021</b> e <b>31/03/2022</b>.</p>
            <small>Devem completar 4 anos até 31/03/2026.</small>
          </article>
          <article className="age-card age-card--blue">
            <span className="age-card__label">Infantil</span>
            <strong>5</strong>
            <h3>Crianças de 5 anos</h3>
            <p>Nascidas entre <b>01/04/2020</b> e <b>31/03/2021</b>.</p>
            <small>Devem completar 5 anos até 31/03/2026.</small>
          </article>
          <article className="schedule-card">
            <div><Icon name="clock" /><span><small>Turno matutino</small><strong>7h30 às 12h30</strong></span></div>
            <div><Icon name="clock" /><span><small>Turno vespertino</small><strong>13h30 às 17h30</strong></span></div>
            <div><Icon name="calendar" /><span><small>Secretaria</small><strong>Atendimento até as 16h</strong></span></div>
          </article>
        </div>
        <div className="classes-note">
          <div>
            <span className="kicker">Organização das turmas</span>
            <h3>Do A ao F, nos dois níveis</h3>
          </div>
          <p>
            As turmas <b>4A, 4B, 4C, 5A, 5B e 5C</b> funcionam no período matutino.
            As turmas de <b>D a F</b>, tanto no Infantil 4 quanto no Infantil 5, funcionam no vespertino.
          </p>
        </div>
      </div>
    </section>
  );
}
