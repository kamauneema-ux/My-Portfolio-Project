import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { pageTitle } from "../../siteMap";
import { profile } from "../../content/profile";

/** Waits a few frames for a lazily loaded page to render the target element. */
function scrollToId(id: string, attemptsLeft = 30) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView();
    return;
  }
  if (attemptsLeft > 0)
    requestAnimationFrame(() => scrollToId(id, attemptsLeft - 1));
}

/**
 * Client-side navigation does not do what a full page load does, so this
 * restores it on every route change: sets the tab title, scrolls to the top
 * or to the #anchor, and moves focus to the main content so screen-reader
 * users hear the new page rather than staying on the link they pressed.
 */
export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    document.title = `${pageTitle(pathname)} \u2014 ${profile.name}`;

    if (hash) {
      scrollToId(decodeURIComponent(hash.slice(1)));
    } else {
      window.scrollTo(0, 0);
    }

    // On first load the browser already starts at the top of the document.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!hash)
      document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return null;
}
