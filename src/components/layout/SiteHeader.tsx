import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { anchors, mainNav, routes } from "../../siteMap";
import { profile } from "../../content/profile";
import useTheme from "./useTheme";

/**
 * Site header: name on the left; navigation, Work as the call to action and
 * the theme toggle on the right. Below 860px the links collapse behind Menu.
 */
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const { theme, toggle } = useTheme();

  // Close the mobile menu whenever the visitor navigates somewhere.
  useEffect(() => setMenuOpen(false), [pathname, hash]);

  // Let Escape close the mobile menu, as it would any other popup.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="site-nav wrap" aria-label="Main">
        <Link to={routes.home} className="site-nav__name">
          {profile.name}
        </Link>

        <div className="site-nav__end">
          {/* Hidden on wide screens by CSS; the links are always visible there. */}
          <button
            type="button"
            className="site-nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <ul
          id="site-nav-links"
          className="site-nav__links"
          data-open={menuOpen}
        >
          {mainNav.map((item) => (
            <li key={item.label}>
              {item.to.startsWith("#") ? (
                // Contact lives in the footer of every page, so it is an in-page link.
                <a href={item.to} className="wipe">
                  {item.label}
                </a>
              ) : item.to.endsWith(`#${anchors.work}`) ? (
                <Link to={item.to} className="site-nav__cta">
                  {item.label}
                </Link>
              ) : (
                <NavLink to={item.to} end className="wipe">
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
          <li>
            <button
              type="button"
              className="theme-toggle"
              aria-pressed={theme === "dark"}
              onClick={toggle}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                {theme === "dark" ? (
                  <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
                ) : (
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                  </>
                )}
              </svg>
              <span className="theme-toggle__label">Dark theme</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
