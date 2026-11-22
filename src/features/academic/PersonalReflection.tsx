import { Link } from "react-router-dom";
import { personalReflection as blog } from "../../content/academic";
import { anchors, routes } from "../../siteMap";
import BlockList from "./BlockList";

/** Blog 2: my first-person reflection, with its original photos. */
export default function PersonalReflection() {
  return (
    <>
      <section
        className="ac-wrap ac-reflection-hero"
        aria-labelledby="reflection-title"
      >
        <div>
          <p className="ac-eyebrow">
            Blog 02 / Individual reflection / Academic project
          </p>
          <h1 id="reflection-title">
            Creating Our Perfume <em>Advertisement.</em>
          </h1>
          <p className="ac-subtitle">{blog.subtitle}</p>
          <ul className="ac-author" aria-label="Author and course">
            {blog.meta.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <figure className="ac-reflection-hero__photo">
          <img
            src={blog.hero.src}
            alt={blog.hero.alt}
            width={blog.hero.width}
            height={blog.hero.height}
          />
          <figcaption>{blog.hero.caption}</figcaption>
        </figure>
      </section>

      <section className="ac-quote" aria-label="Pull quote">
        <div className="ac-wrap">
          <p className="ac-eyebrow ac-eyebrow--on-dark">
            An idea / An experience
          </p>
          <blockquote>
            <p>&ldquo;{blog.pullQuote}&rdquo;</p>
          </blockquote>
        </div>
      </section>

      <div className="ac-wrap ac-story">
        <aside className="ac-account" aria-label="About this reflection">
          <p className="ac-eyebrow">My account</p>
          <p>{blog.account}</p>
          <Link
            to={`${routes.groupProduction}#${anchors.film}`}
            className="ac-link"
          >
            Watch our film <span aria-hidden="true">&#8599;</span>
          </Link>
        </aside>
        <div className="ac-prose">
          <BlockList blocks={blog.blocks} numbered />
        </div>
      </div>

      <section className="ac-wrap ac-next ac-next--ruled" aria-labelledby="pair-title">
        <div>
          <p className="ac-eyebrow">Two sides of one project</p>
          <h2 id="pair-title">
            The film shows what we made.
            <br />
            <em>The reflection tells my story.</em>
          </h2>
        </div>
        <Link to={routes.groupProduction} className="ac-pill ac-pill--dark">
          See the group production <span aria-hidden="true">&#8599;</span>
        </Link>
      </section>
    </>
  );
}
