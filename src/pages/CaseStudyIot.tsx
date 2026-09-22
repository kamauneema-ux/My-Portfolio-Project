import { Link } from "react-router-dom";
import Artefact from "../components/Artefact";
import CaseStudyHeader from "../components/CaseStudyHeader";
import StageExplorer from "../components/StageExplorer";
import { getCaseStudy } from "../data/caseStudies";
import * as iot from "../data/iotSim";
import personaSheet from "../assets/iot-persona.jpg";
import NotFound from "./NotFound";

export default function CaseStudyIot() {
  const study = getCaseStudy("enterprise-iot-sim-experience");
  if (!study) return <NotFound />;

  return (
    <div className="container case-study">
      <CaseStudyHeader study={study} />

      <section className="section">
        <p className="section__eyebrow">Overview</p>
        <h3>{iot.overview.title}</h3>
        {iot.overview.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}

        <h4>Problem statement</h4>
        <p className="callout">{iot.problemStatement}</p>
        <p>{iot.goal}</p>

        <h4>The challenge</h4>
        <blockquote className="pull-quote">{iot.challenge}</blockquote>
      </section>

      <section className="section">
        <h3>The LBGUPS journey framework</h3>
        <p>
          I applied the LBGUPS framework to map enterprise customer journeys,
          uncover friction points and identify opportunities. Select a stage to
          see the user goal, the touchpoints and systems involved, where the
          experience broke down, and what I proposed.
        </p>

        <ol className="flow flow--horizontal">
          {iot.stages.map((stage) => (
            <li key={stage.key}>{stage.name}</li>
          ))}
        </ol>

        <StageExplorer
          ariaLabel="LBGUPS journey stages"
          stages={iot.stages.map((stage) => ({
            id: stage.name.toLowerCase(),
            label: stage.name,
            content: (
              <>
                <p className="stage-goal">
                  <strong>User goal:</strong> {stage.goal}
                </p>

                <div className="stage-columns">
                  <div>
                    <h4>Touchpoints</h4>
                    <ul className="check-list">
                      {stage.touchpoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Systems</h4>
                    <ul className="check-list">
                      {stage.systems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Pain points</h4>
                    <ul className="pain-list">
                      {stage.painPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Opportunities</h4>
                    <ul className="check-list">
                      {stage.opportunities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ),
          }))}
        />

        <blockquote className="pull-quote">{iot.insight}</blockquote>
      </section>

      <section className="section">
        <h3>The design process</h3>
        <StageExplorer
          ariaLabel="IoT experience design process stages"
          stages={iot.designProcess.map((stage) => ({
            id: stage.name.toLowerCase().replace(/[^a-z]+/g, "-"),
            label: stage.name,
            content: (
              <>
                <p>{stage.body}</p>
                <ul className="check-list">
                  {stage.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </>
            ),
          }))}
        />

        <Artefact
          src={personaSheet}
          caption="Primary persona: Peter, an ICT Director managing enterprise IoT solutions"
          alt="Persona sheet for Peter, covering profile, goals, behaviours and pain points"
          note={iot.privacyNote}
        />

        <h4>My contribution</h4>
        <ul className="check-list check-list--columns">
          {iot.contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h3>Solution highlights</h3>
        <ul className="check-list">
          {iot.solutionHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h4>Impact and outcomes</h4>
        <ul className="check-list">
          {iot.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section section--accent">
        <h3>The framework outlived the project</h3>
        <ul className="check-list">
          {iot.adoption.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h3>Key learnings</h3>
        <ol className="learning-list">
          {iot.learnings.map((learning) => (
            <li key={learning.title}>
              <h4>{learning.title}</h4>
              <p>{learning.body}</p>
            </li>
          ))}
        </ol>

        <Link to="/projects/enterprise-capa-experience" className="text-link">
          &larr; Previous case study: Enterprise CAPA complaints experience
        </Link>
      </section>
    </div>
  );
}
