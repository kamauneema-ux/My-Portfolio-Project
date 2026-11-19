import { about } from "../../content/profile";
import { anchors } from "../../siteMap";

/** About: where the design work came from and where it is going. */
export default function AboutPage() {
  return (
    <article className="wrap wrap--narrow page">
      <h1>About</h1>
      <p className="page__lead">{about.intro}</p>

      <h2>Background</h2>
      <p>{about.background}</p>

      <p>
        <a href={`#${anchors.contact}`} className="cta">
          Get in touch<span aria-hidden="true"> &darr;</span>
        </a>
      </p>
    </article>
  );
}
