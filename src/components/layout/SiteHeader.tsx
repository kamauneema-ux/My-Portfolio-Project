import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { mainNav, routes } from "../../siteMap";
import { profile } from "../../content/profile";

/**
 * Navy site header. One navigation bar for the whole site; on narrow screens
 * the links collapse behind a Menu button.
 */
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

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

        <ul id="site-nav-links" className="site-nav__links" data-open={menuOpen}>
          {mainNav.map((item) => (
            <li key={item.label}>
              {item.to.startsWith("#") ? (
                // Contact lives in the footer of every page, so it is an in-page link.
                <a href={item.to}>{item.label}</a>
              ) : (
                <NavLink to={item.to} end>
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
