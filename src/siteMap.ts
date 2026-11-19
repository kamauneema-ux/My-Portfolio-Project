/**
 * The one place that defines every page's address, browser-tab title and
 * position in the navigation. Components import from here instead of
 * hard-coding paths, so renaming a route is a one-line change.
 */

export const routes = {
  home: "/",
  capa: "/work/capa",
  sacco: "/work/digital-sacco",
  mpesa: "/work/mpesa-one-app",
  about: "/about",
  academic: "/academic-projects",
  groupProduction: "/academic-projects/group-production",
  personalReflection: "/academic-projects/personal-reflection",
} as const;

/** Anchor targets used by the main navigation. */
export const anchors = {
  work: "work",
  contact: "contact",
  film: "film",
} as const;

/** Main navigation, in reading order. "Work" and "Contact" scroll to sections. */
export const mainNav = [
  { label: "Work", to: `${routes.home}#${anchors.work}` },
  { label: "About", to: routes.about },
  { label: "Contact", to: `#${anchors.contact}` },
] as const;

/** Sub-navigation shown only inside the Academic projects section. */
export const academicNav = [
  { label: "Overview", to: routes.academic },
  { label: "Group production", to: routes.groupProduction },
  { label: "Personal reflection", to: routes.personalReflection },
] as const;

const pageTitles: Record<string, string> = {
  [routes.home]: "Service design, product design and UX research",
  [routes.capa]: "Redesigning how Safaricom Business handled billing complaints",
  [routes.sacco]: "One digital SACCO app for members of multiple cooperatives",
  [routes.mpesa]: "Why was M-PESA One App hard to activate while roaming?",
  [routes.about]: "About",
  [routes.academic]: "Academic projects",
  [routes.groupProduction]: "Cheetah Perfume: group production",
  [routes.personalReflection]: "Creating our perfume advertisement: personal reflection",
};

/** Returns the browser-tab title for a path, falling back for unknown pages. */
export function pageTitle(pathname: string): string {
  const normalised = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return pageTitles[normalised] ?? "Page not found";
}

/**
 * Addresses from the Phase 1 site. They were public, so each one now forwards
 * to its nearest replacement instead of breaking.
 */
export const legacyRedirects = [
  { from: "/projects", to: `/#${anchors.work}` },
  { from: "/projects/*", to: `/#${anchors.work}` },
  { from: "/how-i-work", to: `/#${anchors.work}` },
  { from: "/experience", to: routes.about },
  { from: "/contact", to: `/#${anchors.contact}` },
  { from: "/writing", to: routes.academic },
  { from: "/writing/creating-our-perfume-advertisement", to: routes.personalReflection },
] as const;
