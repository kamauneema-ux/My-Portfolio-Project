import { Link } from "react-router-dom";
import { course, film, groupProduction } from "../../content/academic";
import { anchors, routes } from "../../siteMap";
import FilmPlayer from "../../components/ui/FilmPlayer";
import BlockList from "./BlockList";
import useActiveSection from "./useActiveSection";

const sectionIds = groupProduction.sections.map((section) => section.id);

/**
 * Blog 1: the film first, then the group report reproduced section by section,
 * with a sticky contents list that highlights the section being read.
 */
export default function GroupProduction() {
  const active = useActiveSection(sectionIds);

  return (
    <>
      <section className="ac-wrap ac-hero" aria-labelledby="group-title">
        <p className="ac-eyebrow">
          Blog 01 / Group production / Academic project
        </p>
        <h1 id="group-title">
          Cheetah Perfume
          <br />
          Bringing a scent <em>to life.</em>
        </h1>
        <div className="ac-split">
          <p className="ac-question">{groupProduction.question}</p>
          <div>
            {groupProduction.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ul className="ac-tags" aria-label="Project themes">
          {groupProduction.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>

      <section
        className="ac-film"
        id={anchors.film}
        aria-labelledby="film-title"
        tabIndex={-1}
      >
        <div className="ac-wrap">
          <div className="ac-film__head">
            <div>
              <p className="ac-eyebrow ac-eyebrow--on-dark">
                01 / The final film
              </p>
              <h2 id="film-title">
                Let the story <em>unfold.</em>
              </h2>
            </div>
            <p className="ac-film__meta">
              {film.duration} &middot; Watch with sound
            </p>
          </div>
          <FilmPlayer />
          <p className="ac-film__caption">
            Cheetah Perfume / Group advertisement <span>{course}</span>
          </p>
        </div>
      </section>

      <section className="ac-wrap" aria-labelledby="report-title">
        <div className="ac-report-intro">
          <p className="ac-eyebrow">The group blog / Reproduced</p>
          <h2 id="report-title">
            How we brought the idea <em>to screen.</em>
          </h2>
          <p>{groupProduction.reportNote}</p>
        </div>

        <div className="ac-story">
          <nav className="ac-toc" aria-label="In this story">
            <p className="ac-eyebrow">In this story</p>
            <ol>
              {groupProduction.sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={
                      active === section.id ? "location" : undefined
                    }
                  >
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="ac-prose">
            {groupProduction.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="ac-report-section"
                aria-labelledby={`${section.id}-title`}
              >
                <div className="ac-rail" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="ac-rail__rule" />
                </div>
                <div>
                  <h3 id={`${section.id}-title`}>{section.title}</h3>
                  <BlockList blocks={section.blocks} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="ac-wrap ac-next" aria-labelledby="next-title">
        <div>
          <p className="ac-eyebrow">Continue the story</p>
          <h2 id="next-title">
            What did I learn
            <br />
            <em>behind the scenes?</em>
          </h2>
        </div>
        <Link to={routes.personalReflection} className="ac-pill">
          Read Blog 2 <span aria-hidden="true">&#8599;</span>
        </Link>
      </section>
    </>
  );
}
