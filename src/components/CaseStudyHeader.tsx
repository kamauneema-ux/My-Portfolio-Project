import { Link } from "react-router-dom";
import type { CaseStudy } from "../data/caseStudies";

export default function CaseStudyHeader({ study }: { study: CaseStudy }) {
  return (
    <header className="case-header">
      <Link to="/projects" className="text-link">
        &larr; Back to selected work
      </Link>

      <p className="case-header__number">
        {study.number} &mdash; {study.strapline}
      </p>
      <h2>{study.title}</h2>
      <p className="case-header__summary">{study.summary}</p>

      <dl className="case-header__meta">
        <div>
          <dt>My role</dt>
          <dd>{study.role}</dd>
        </div>
        <div>
          <dt>Users</dt>
          <dd>{study.users.join(" · ")}</dd>
        </div>
        <div>
          <dt>Context</dt>
          <dd>
            {study.organisation} · {study.year}
          </dd>
        </div>
      </dl>

      <dl className="case-header__meta">
        <div>
          <dt>Methods</dt>
          <dd>{study.methods.join(" · ")}</dd>
        </div>
      </dl>
    </header>
  );
}
