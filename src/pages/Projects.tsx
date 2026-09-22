import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export default function Projects() {
  return (
    <div className="container">
      <section className="section">
        <h2>Selected work</h2>
        <p className="lead">
          Two case studies from my time in Safaricom&rsquo;s Enterprise Business
          Unit, where the experience problems were rarely caused by a single
          interface.
        </p>

        <div className="work-list">
          {caseStudies.map((study) => (
            <article key={study.slug} className="work-card">
              <p className="work-card__number">{study.number}</p>
              <h3>
                <Link to={`/projects/${study.slug}`}>{study.title}</Link>
              </h3>
              <p className="work-card__strapline">{study.strapline}</p>
              <p>{study.summary}</p>

              <dl className="work-card__meta">
                <div>
                  <dt>My role</dt>
                  <dd>{study.role}</dd>
                </div>
                <div>
                  <dt>Users</dt>
                  <dd>{study.users.join(" \u00b7 ")}</dd>
                </div>
              </dl>

              <ul className="tag-list">
                {study.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>

              {study.impact.length > 0 && (
                <ul className="impact-strip">
                  {study.impact.map((stat) => (
                    <li key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Link to={`/projects/${study.slug}`} className="text-link">
                View case study &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
