import { Link } from "react-router-dom";
import { course, film, groupProduction } from "../../content/academic";
import { anchors, routes } from "../../siteMap";
import FilmPlayer from "../../components/ui/FilmPlayer";
import BlockList from "./BlockList";
import useActiveSection from "./useActiveSection";

const sectionIds = groupProduction.sections.map((section) => section.id);
const referencesNumber = String(sectionIds.indexOf("references") + 1).padStart(
  2,
  "0",
);
const { referenceList } = groupProduction;

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
            {groupProduction.sections
              .filter((section) => section.id !== "references")
              .map((section, index) => (
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

        {/* Full width below the report, so the download stands out. */}
        <section
          id="references"
          className="ac-refs"
          aria-labelledby="references-title"
        >
          <h3 id="references-title" className="ac-eyebrow ac-refs__label">
            <span aria-hidden="true">{referencesNumber}</span>
            References / Media credits
          </h3>
          <div className="ac-refs__card">
            <span className="ac-refs__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z" />
                <path d="M14 3v5h5M8 9h3M8 12.5h5" />
                <path d="M16 13v4.2" />
                <circle cx="14.6" cy="17.4" r="1.4" />
                <path d="M16 13l2 .8" />
              </svg>
            </span>
            <div className="ac-refs__text">
              <p className="ac-refs__eyebrow">{referenceList.eyebrow}</p>
              <p className="ac-refs__title">
                Behind the <em>Sound.</em>
              </p>
              <p>{referenceList.summary}</p>
              <p className="ac-refs__note">
                {referenceList.note} &middot; {referenceList.details}
              </p>
            </div>
            <a
              className="ac-pill ac-refs__download"
              href={referenceList.file}
              download={referenceList.fileName}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />
              </svg>
              Download references
              <span className="visually-hidden">
                {" "}
                ({referenceList.details})
              </span>
            </a>
          </div>
        </section>
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
