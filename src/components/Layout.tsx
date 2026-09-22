import { Suspense, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import profilePhoto from '../assets/profile-avatar.jpg';
import { profile } from '../data/profile';
import { getCaseStudy } from '../data/caseStudies';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Work' },
  { to: '/how-i-work', label: 'How I Work' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

const routeTitles: Record<string, string> = {
  '/': 'Experience Designer, UX Researcher and Service Designer',
  '/projects': 'Selected work',
  '/how-i-work': 'How I work',
  '/about': 'About',
  '/experience': 'Experience',
  '/contact': 'Contact',
};

function pageTitle(pathname: string) {
  if (pathname.startsWith('/projects/')) {
    return getCaseStudy(pathname.slice('/projects/'.length))?.title ?? 'Page not found';
  }
  return routeTitles[pathname] ?? 'Page not found';
}

// Client-side navigation neither resets scroll nor updates the document title, so do both here.
function RouteChangeEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${pageTitle(pathname)} \u2014 ${profile.name}`;
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <>
      <RouteChangeEffects />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="header">
        <nav className="navbar" aria-label="Main">
          <NavLink to="/" className="logo-container">
            <img src={profilePhoto} alt={profile.name} className="logo" />
          </NavLink>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <Suspense fallback={<p className="container route-loading">Loading&hellip;</p>}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
