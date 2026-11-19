import { anchors } from "../../siteMap";
import { contact, profile } from "../../content/profile";

/** Footer on every main page. Doubles as the Contact section the nav links to. */
export default function SiteFooter() {
  return (
    <footer className="site-footer" id={anchors.contact} tabIndex={-1}>
      <div className="wrap">
        <h2>Contact</h2>
        <p>{contact.invitation}</p>
        <ul className="site-footer__links">
          <li>
            <a href={`mailto:${profile.email}`}>Email Grace</a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
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
