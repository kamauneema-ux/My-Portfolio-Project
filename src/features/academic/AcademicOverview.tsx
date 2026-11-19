import { Link } from "react-router-dom";
import { course, film, overview } from "../../content/academic";
import { routes } from "../../siteMap";

const cardLinks = [routes.groupProduction, routes.personalReflection];

/** Academic projects landing page: the featured film and the two blogs about it. */
export default function AcademicOverview() {
  return (
    <>
      <section className="ac-wrap ac-hero" aria-labelledby="academic-title">
        <p className="ac-eyebrow">{course}</p>
        <h1 id="academic-title">
          Ideas don&rsquo;t stay <em>on paper.</em>
        </h1>
        <p className="ac-lead">{overview.intro}</p>
      </section>

      <section className="ac-wrap ac-feature" aria-labelledby="featured-title">
        <img
          src={film.poster}
          alt="Cheetah perfume bottle on dark satin against a red background, with the tagline: for her, makes your husband go wild."
          width={1600}
          height={900}
        />
        <div className="ac-feature__text">
          <p className="ac-eyebrow">Featured project / Video production</p>
          <h2 id="featured-title">
            Cheetah <em>Perfume.</em>
          </h2>
          <p>{overview.featuredQuestion}</p>
          <ul className="ac-tags" aria-label="Project themes">
            {overview.featuredTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <Link to={routes.groupProduction} className="ac-link">
            Explore the group production <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <section className="ac-wrap ac-blogs" aria-labelledby="blogs-title">
        <div className="ac-blogs__intro">
          <p className="ac-eyebrow">Two blogs / One creative journey</p>
          <h2 id="blogs-title">
            One project. <em>Two perspectives.</em>
          </h2>
          <p>{overview.twoBlogsIntro}</p>
        </div>

        <div className="ac-cards">
          {overview.cards.map((card, index) => (
            <article key={card.number} className="ac-card">
              <img src={card.image.src} alt={card.image.alt} loading="lazy" />
              <p className="ac-eyebrow">
                {card.number} / {card.kind}
              </p>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
              <Link to={cardLinks[index]} className="ac-link">
                {card.cta} <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="ac-practice" aria-label="Part of my practice">
        <div className="ac-wrap">
          <p className="ac-eyebrow">Part of my practice</p>
          <p className="ac-practice__text">{overview.practice}</p>
        </div>
      </section>
    </>
  );
}
