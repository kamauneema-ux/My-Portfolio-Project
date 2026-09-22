import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { profile } from "../data/profile";
import heroPortrait from "../assets/profile-hero.jpg";

export default function Home() {
  return (
    <>
      <section className="hero hero--split">
        <div className="hero__inner">
          <div className="hero__text">
            <h1>{profile.name}</h1>
            <p className="hero__role">{profile.headline}</p>
            <p className="hero__tagline">{profile.tagline}</p>

            <dl className="hero__facts">
              {profile.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="hero-actions">
              <Link to="/projects" className="button button--primary">
                View my work
              </Link>
              <Link to="/about" className="button button--ghost">
                About me
              </Link>
              {profile.resumeUrl && (
                <a
                  className="button button--ghost"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              )}
              <a
                className="button button--ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <img
            className="hero__portrait"
            src={heroPortrait}
            alt={`Portrait of ${profile.name}`}
            width={720}
            height={900}
            fetchPriority="high"
          />
        </div>
      </section>

      <div className="container">
        <section className="section">
          <h2>{profile.beyondTheScreen.title}</h2>
          <p className="lead">{profile.beyondTheScreen.lead}</p>
          <p>{profile.beyondTheScreen.body}</p>
          <ul className="question-list">
            {profile.beyondTheScreen.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
          <Link to="/how-i-work" className="text-link">
            How I work &rarr;
          </Link>
        </section>

        <section className="section">
          <h2>Selected work</h2>

          <div className="work-list">
            {caseStudies.map((study) => (
              <article key={study.slug} className="work-card">
                <p className="work-card__number">{study.number}</p>
                <h3>
                  <Link to={`/projects/${study.slug}`}>{study.title}</Link>
                </h3>
                <p className="work-card__strapline">{study.strapline}</p>
                <p>{study.summary}</p>

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
    </>
  );
}
