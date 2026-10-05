import staff from "../../data/staff";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Team.css";

export default function Team() {
  return (
    <section className="section team" id="colaboradores">
      <div className="shell">
        <SectionTitle eyebrow="Quem faz acontecer" title="Nossa equipe">
          Profissionais que transformam cuidado, conhecimento e dedicação em experiências para toda a vida.
        </SectionTitle>
        <div className="team__grid">
          {staff.map((person) => (
            <article className="staff-card" key={person.sector}>
              <img src={person.image} alt={`Foto provisória para ${person.role}`} />
              <div>
                <span>{person.sector}</span>
                <h3>Nome do(a) servidor(a)</h3>
                <strong>{person.role}</strong>
                <p>{person.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="team__note">Fotos e nomes demonstrativos — substitua pelos dados autorizados da equipe.</p>
      </div>
    </section>
  );
}
