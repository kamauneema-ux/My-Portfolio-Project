import { anchors } from "../../siteMap";
import { contact, profile } from "../../content/profile";

/** Footer on every main page. Doubles as the Contact section the nav links to. */
export default function SiteFooter() {
  return (
    <footer className="site-footer" id={anchors.contact} tabIndex={-1}>
      <div className="wrap">
        <h2>Contact</h2>
        <p className="site-footer__invite">{contact.invitation}</p>
        <ul className="site-footer__links">
          <li>
            <a href={`mailto:${profile.email}`} className="contact-link contact-link--primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Email Grace
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link contact-link--secondary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z" />
              </svg>
              Connect on LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
        <p className="site-footer__legal">
          &copy; {new Date().getFullYear()} {profile.name} &middot; {profile.location}
        </p>
      </div>
    </footer>
  );
}
