import { Link } from "react-router-dom";
import { routes } from "../siteMap";

/** Shown for any address that does not match a page. */
export default function NotFoundPage() {
  return (
    <article className="wrap wrap--narrow page">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you were looking for has moved or never existed.</p>
      <Link to={routes.home} className="cta">
        Back to the home page<span aria-hidden="true"> &rarr;</span>
      </Link>
    </article>
  );
}
