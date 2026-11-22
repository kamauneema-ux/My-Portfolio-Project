import { about } from "../../content/profile";
import { anchors } from "../../siteMap";

/** About me: who I am, how I work, my background and life beyond work. */
export default function AboutPage() {
  const [lead, approach] = about.intro;

  return (
    <article className="wrap wrap--narrow page about">
      <p className="eyebrow about__eyebrow">About me</p>
      <h1 className="about__title">
        Designing with <strong>people.</strong>
        <br />
        Building services <strong>that last.</strong>
      </h1>
      <p className="page__lead">{lead}</p>
      <p>{approach}</p>

      <h2>Background</h2>
      {about.background.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}

      <hr className="about__rule" />
      <p>{about.beyondWork}</p>

      <p>
        <a href={`#${anchors.contact}`} className="cta">
          Get in touch<span aria-hidden="true"> &darr;</span>
        </a>
      </p>
    </article>
  );
}
