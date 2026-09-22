import { Link } from "react-router-dom";
import { processSteps } from "../data/process";
import { profile } from "../data/profile";

export default function HowIWork() {
  return (
    <div className="container">
      <section className="section">
        <h2>How I work</h2>
        <p className="lead">{profile.beyondTheScreen.lead}</p>

        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step.number} className="process-step">
              <span className="process-step__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--accent">
        <h2>Where this came from</h2>
        <p>
          This way of working grew out of a decade of enterprise experience
          problems where the answer was rarely a new screen, and it is being
          sharpened now through my MSc in Interaction &amp; Experience Design.
        </p>
        <Link to="/projects" className="text-link">
          See it applied in my case studies &rarr;
        </Link>
      </section>
    </div>
  );
}
