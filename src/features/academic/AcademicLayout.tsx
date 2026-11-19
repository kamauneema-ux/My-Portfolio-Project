import { Suspense } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { academicNav, anchors, routes } from "../../siteMap";
import "./academic.css";

const crumbs: Record<string, string> = {
  [routes.groupProduction]: "01 · Group Blog",
  [routes.personalReflection]: "02 · Reflection Blog",
};

/**
 * Shell for the Academic projects section. It has its own quieter theme and
 * sub-navigation so assessed coursework reads as a
 * separate space from the professional case studies.
 */
export default function AcademicLayout() {
  const { pathname } = useLocation();
  const crumb = crumbs[pathname];

  return (
    <div className="academic">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="ac-header">
        <div className="ac-wrap ac-header__bar">
          <Link to={routes.academic} className="ac-header__brand">
            Grace<span aria-hidden="true">.</span>
            <span className="ac-header__section">Academic projects</span>
          </Link>
          <nav aria-label="Academic projects" className="ac-header__nav">
            <ul>
              {academicNav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end>
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to={routes.home} className="ac-header__exit">
                  Main portfolio <span aria-hidden="true">&#8599;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <nav aria-label="Breadcrumb" className="ac-wrap ac-breadcrumb">
          <ol>
            <li>
              <Link to={`${routes.home}#${anchors.work}`}>Work</Link>
            </li>
            <li>
              {crumb ? (
                <Link to={routes.academic}>Academic Projects</Link>
              ) : (
                <span aria-current="page">Academic Projects</span>
              )}
            </li>
            {crumb && (
              <li>
                <span aria-current="page">{crumb}</span>
              </li>
            )}
          </ol>
        </nav>

        <Suspense fallback={<p className="ac-wrap">Loading&hellip;</p>}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="ac-footer">
        <div className="ac-wrap ac-footer__inner">
          <p className="ac-footer__brand">
            Grace<span aria-hidden="true">.</span>
          </p>
          <p>Creative exploration alongside a practice in service design and experience.</p>
          <Link to={routes.home}>
            Return to the professional portfolio <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
