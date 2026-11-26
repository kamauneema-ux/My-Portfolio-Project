import { Link } from "react-router-dom";
import { course, film, overview } from "../../content/academic";
import { routes } from "../../siteMap";

const cardLinks = [routes.groupProduction, routes.personalReflection];

/** Academic and Creative Projects landing page: the featured film and the two blogs about it. */
export default function AcademicOverview() {
  return (
    <>
      <section className="ac-wrap ac-hero" aria-labelledby="academic-title">
        <p className="ac-eyebrow">{course}</p>
        <div className="ac-hero__split">
          <h1 id="academic-title">
            Ideas don&rsquo;t
            <br />
            stay <em>on paper.</em>
          </h1>
          <div className="ac-hero__side">
            <p className="ac-edition">01 / Academic and Creative Projects</p>
            <p className="ac-lead">{overview.intro}</p>
          </div>
        </div>
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
            Explore the group production <span aria-hidden="true">&#8599;</span>
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
            // The whole card is one link, so the image and text are all clickable.
            <Link key={card.number} to={cardLinks[index]} className="ac-card">
              <span className="ac-card__image">
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  width={card.image.width}
                  height={card.image.height}
                  loading="lazy"
                />
              </span>
              <span className="ac-card__row">
                <span>
                  {card.number} / {card.kind}
                </span>
                <span aria-hidden="true">&#8599;</span>
              </span>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
              <span className="ac-card__cta">{card.cta}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="ac-wrap ac-epilogue" aria-labelledby="practice-title">
        <p className="ac-eyebrow" id="practice-title">
          Part of my practice
        </p>
        <p className="ac-epilogue__text">
          {overview.practice.lead} <em>{overview.practice.focus}</em>
        </p>
        <Link to={routes.home} className="ac-link">
          Return to the professional portfolio{" "}
          <span aria-hidden="true">&#8599;</span>
        </Link>
      </section>
    </>
  );
}
