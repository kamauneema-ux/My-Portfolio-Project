import { earlierRoles, roles } from "../data/experience";

export default function Experience() {
  return (
    <div className="container">
      <section className="section">
        <h2>Experience</h2>
        <p>
          Over ten years across telecommunications and financial services,
          working in customer experience, service quality, product ownership and
          governance.
        </p>

        <ol className="timeline">
          {roles.map((role) => (
            <li
              key={`${role.company}-${role.period}`}
              className="timeline__item"
            >
              <span className="timeline__marker" aria-hidden="true" />
              <p className="timeline__period">{role.period}</p>
              <h3 className="timeline__role">{role.title}</h3>
              <p className="timeline__company">
                {role.company} &middot; {role.location}
              </p>
              <p className="timeline__summary">{role.summary}</p>
              <ul className="timeline__highlights">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2>Earlier Roles</h2>
        <ul className="plain-list earlier-roles">
          {earlierRoles.map((role) => (
            <li key={`${role.company}-${role.period}`}>
              <strong>{role.title}</strong>
              <span>
                {role.company} &middot; {role.period}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
