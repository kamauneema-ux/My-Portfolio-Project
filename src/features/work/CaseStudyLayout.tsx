import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { caseStudyOrder } from "../../content/projects";
import "./work.css";

type Props = {
  id: (typeof caseStudyOrder)[number]["id"];
  title: string;
  byline: string;
  children: ReactNode;
};

/**
 * Shared frame for every case study: back link, title, byline, the page's own
 * content, then a link to the next case study so a recruiter can keep going.
 */
export default function CaseStudyLayout({ id, title, byline, children }: Props) {
  const index = caseStudyOrder.findIndex((project) => project.id === id);
  const next = caseStudyOrder[(index + 1) % caseStudyOrder.length];

  return (
    <article className="case wrap wrap--narrow">
      <Link to="/#work" className="case__back">
        <span aria-hidden="true">&larr; </span>All work
      </Link>
      <header className="case__header">
        <h1>{title}</h1>
        <p className="case__byline">{byline}</p>
      </header>

      {children}

      <nav className="case__next" aria-label="Next case study">
        <p className="eyebrow">Next case study</p>
        <Link to={next.to} className="case__next-link">
          {next.title}
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </nav>
    </article>
  );
}
