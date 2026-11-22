import { Link } from "react-router-dom";
import portrait from "../../assets/profile-hero.jpg";
import cheetahPoster from "../../assets/academic/cheetah-poster.jpg";
import {
  featuredProject,
  supportingProjects,
  type ProjectCard,
} from "../../content/projects";
import { hero, profile } from "../../content/profile";
import { anchors, routes } from "../../siteMap";
import "./home.css";

/**
 * One project card. The call to action is the card's only link; its ::after
 * stretches over the card so the image and text are clickable too.
 */
function WorkCard({
  project,
  number,
  featured = false,
}: {
  project: ProjectCard;
  number: number;
  featured?: boolean;
}) {
  const { image } = project;
  return (
    <article className={featured ? "work-card work-card--featured" : "work-card"}>
      <div className="work-card__media">
        {/* Decorative here: each case study describes its visuals in full. */}
        <img
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          loading={featured ? undefined : "lazy"}
        />
      </div>
      <div className="work-card__body">
        <p className="work-card__row">
          <span>
            {String(number).padStart(2, "0")} / {project.eyebrow}
          </span>
          <span aria-hidden="true">&#8599;</span>
        </p>
        <h3>{project.title}</h3>
        <p className="work-card__summary">{project.summary}</p>
        <Link to={project.to} className="work-card__cta">
          {project.cta}
        </Link>
      </div>
    </article>
  );
}

/**
 * Home page in the same editorial language as Academic and Creative Projects:
 * oversized headline with a serif accent, ruled eyebrows, numbered cards.
 */
export default function HomePage() {
  return (
    <>
      <section className="wrap home-hero" aria-labelledby="hero-title">
        <p className="home-eyebrow">{hero.disciplines}</p>
        <div className="home-hero__split">
          <h1 id="hero-title">
            {hero.headline.lead} <em>{hero.headline.accent}</em>
          </h1>
          <div className="home-hero__side">
            <img
              className="home-hero__portrait"
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width={680}
              height={850}
            />
            <p className="home-hero__lead">{hero.intro}</p>
          </div>
        </div>
        <dl className="home-facts">
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Studying</dt>
            <dd>MSc Interaction and Experience Design, University of Limerick</dd>
          </div>
          <div>
            <dt>Previously</dt>
            <dd>Nearly a decade at Safaricom, Kenya</dd>
          </div>
        </dl>
      </section>

      <section
        className="wrap home-work"
        id={anchors.work}
        aria-labelledby="work-title"
        tabIndex={-1}
      >
        <div className="home-section-head">
          <p className="home-eyebrow">Case studies / Telecommunications and fintech</p>
          <h2 id="work-title">
            Selected <em>work.</em>
          </h2>
        </div>

        <WorkCard project={featuredProject} number={1} featured />
        <div className="work-pair">
          {supportingProjects.map((project, index) => (
            <WorkCard key={project.id} project={project} number={index + 2} />
          ))}
        </div>
      </section>

      <section className="home-academic" aria-labelledby="creative-title">
        <div className="wrap home-academic__grid">
          <img
            src={cheetahPoster}
            alt="Cheetah perfume bottle on dark satin against a red background, with the tagline: for her, makes your husband go wild."
            width={1600}
            height={900}
            loading="lazy"
          />
          <div>
            <p className="home-eyebrow home-eyebrow--on-dark">
              Videography / MSc group project
            </p>
            <h2 id="creative-title">
              Academic and <em>Creative Projects.</em>
            </h2>
            <p>Cheetah Perfume, a short advertisement made with my MSc group.</p>
            <Link to={routes.academic} className="home-pill">
              View Academic and Creative Projects{" "}
              <span aria-hidden="true">&#8599;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap home-epilogue" aria-labelledby="approach-title">
        <p className="home-eyebrow" id="approach-title">
          My approach
        </p>
        <p className="home-epilogue__text">
          Participatory, inclusive and <em>sustainable.</em>
        </p>
        <Link to={routes.about} className="home-link">
          More about me <span aria-hidden="true">&#8599;</span>
        </Link>
      </section>
    </>
  );
}
