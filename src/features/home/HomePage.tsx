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
import useReveal from "./useReveal";
import "./home.css";

const projects = [featuredProject, ...supportingProjects];

/**
 * One full-width project row. The call to action is the row's only link; its
 * ::after stretches over the row so the image and text are clickable too.
 */
function WorkCard({ project, number }: { project: ProjectCard; number: number }) {
  const { image } = project;
  return (
    <article className="work-card">
      <p className="work-card__number" aria-hidden="true">
        {String(number).padStart(2, "0")}
      </p>
      <div className="work-card__body">
        <h3>{project.title}</h3>
        <p className="work-card__summary">{project.summary}</p>
        <ul className="work-card__tags" aria-label="Product and role">
          {project.eyebrow.split(" · ").map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <Link to={project.to} className="work-card__cta">
          {project.cta}
          <span className="work-card__arrow" aria-hidden="true">
            &rarr;
          </span>
        </Link>
      </div>
      <div className="work-card__media">
        {/* Decorative here: each case study describes its visuals in full. */}
        <img
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          loading={number === 1 ? undefined : "lazy"}
        />
      </div>
    </article>
  );
}

/**
 * Home page: oversized statement, the three case studies as full-width rows,
 * Academic and Creative Projects, then my approach. Contact is the site footer.
 */
export default function HomePage() {
  useReveal();

  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="wrap home-grid">
          <div className="home-hero__byline enter">
            <img
              className="home-hero__portrait"
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width={680}
              height={850}
            />
            <p className="home-eyebrow">{hero.disciplines}</p>
          </div>
          <h1 id="hero-title" className="home-hero__title enter enter--2">
            {hero.headline.lead} <em>{hero.headline.accent}</em>
          </h1>
          <p className="home-hero__lead enter enter--3">{hero.intro}</p>
          <a href={`#${anchors.work}`} className="home-hero__scroll enter enter--4">
            <span className="home-hero__scroll-line" aria-hidden="true" />
            Scroll<span className="visually-hidden"> to selected work</span>
          </a>
          <dl className="home-facts enter enter--4">
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
        </div>
      </section>

      <section
        className="home-work"
        id={anchors.work}
        aria-labelledby="work-title"
        tabIndex={-1}
      >
        <div className="wrap">
          <div className="home-section-head">
            <h2 id="work-title">
              Selected <em>work.</em>
            </h2>
            <p className="home-eyebrow">Case studies / Telecommunications and fintech</p>
          </div>
          <ol className="work-list">
            {projects.map((project, index) => (
              <li key={project.id} className="reveal">
                <WorkCard project={project} number={index + 1} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-academic" aria-labelledby="creative-title">
        <div className="wrap home-grid home-academic__grid reveal">
          <img
            className="home-academic__poster"
            src={cheetahPoster}
            alt="Cheetah perfume bottle on dark satin against a red background, with the tagline: for her, makes your husband go wild."
            width={1600}
            height={900}
            loading="lazy"
          />
          <div className="home-academic__text">
            <p className="home-eyebrow">Videography / MSc group project</p>
            <h2 id="creative-title">
              Academic and <em>Creative Projects.</em>
            </h2>
            <p>Cheetah Perfume, a short advertisement made with my MSc group.</p>
            <Link to={routes.academic} className="home-pill">
              View Academic and Creative Projects
              <span className="home-pill__arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="wrap home-grid home-epilogue reveal"
        aria-labelledby="approach-title"
      >
        <p className="home-eyebrow" id="approach-title">
          My approach
        </p>
        <p className="home-epilogue__text">
          Participatory, inclusive and <em>sustainable.</em>
        </p>
        <Link to={routes.about} className="home-link wipe">
          More about me <span aria-hidden="true">&rarr;</span>
        </Link>
      </section>
    </>
  );
}
