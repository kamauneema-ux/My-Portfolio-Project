import { useEffect, useState } from "react";

/**
 * Tracks which section is currently being read, so the "In this story"
 * contents list can highlight it. Uses IntersectionObserver rather than
 * scroll events, so the browser does the work off the main thread.
 */
export default function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    // Not available in very old browsers or the test environment; the list still works unhighlighted.
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // A section counts as "current" once it reaches the top third of the screen.
      { rootMargin: "0px 0px -66% 0px" },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
