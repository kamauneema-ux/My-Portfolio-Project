import { Link } from "react-router-dom";
import portrait from "../../assets/profile-hero.jpg";
import { featuredProject, supportingProjects, type ProjectCard } from "../../content/projects";
import { hero, profile } from "../../content/profile";
import { anchors, routes } from "../../siteMap";
import "./home.css";

/** One project: eyebrow (product · discipline), problem as headline, one link. */
function ProjectSummary({ project }: { project: ProjectCard }) {
  return (
    <div className="project__text">
      <p className="eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <Link to={project.to} className="cta">
        {project.cta}
        <span aria-hidden="true"> &rarr;</span>
      </Link>
    </div>
  );
}

/**
 * Home page: one introduction anchored in Safaricom, then the three projects.
 * The featured project runs full width so it is in the opening view.
 */
export default function HomePage() {
  const thumbnail = featuredProject.thumbnail;

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <div>
            <p className="eyebrow eyebrow--on-dark">{hero.disciplines}</p>
            <h1 id="hero-title">{hero.headline}</h1>
            <p className="hero__intro">{hero.intro}</p>
            <p className="hero__location">{profile.location}</p>
          </div>
          <img
            className="hero__portrait"
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            width={680}
            height={850}
          />
        </div>
      </section>

      <section className="wrap work" id={anchors.work} aria-labelledby="work-title" tabIndex={-1}>
        <h2 id="work-title">Selected work</h2>

        <article className="project project--featured">
          <ProjectSummary project={featuredProject} />
          {thumbnail && (
            <img
              className="project__thumbnail"
              src={thumbnail.src}
              alt={thumbnail.alt}
              width={1200}
              height={450}
            />
          )}
        </article>

        <div className="project-pair">
          {supportingProjects.map((project) => (
            <article key={project.id} className="project">
              <ProjectSummary project={project} />
            </article>
          ))}
        </div>
      </section>

      <section className="wrap creative" aria-labelledby="creative-title">
        <h2 id="creative-title">Creative work</h2>
        <p>
          <span className="eyebrow">Videography</span>
          <br />
          Cheetah Perfume, a short advertisement made with my MSc group.
        </p>
        <Link to={routes.academic} className="cta">
          View academic projects<span aria-hidden="true"> &rarr;</span>
        </Link>
      </section>
    </>
  );
}
