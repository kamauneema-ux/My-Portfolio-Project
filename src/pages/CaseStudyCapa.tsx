import { Link } from "react-router-dom";
import Artefact from "../components/Artefact";
import CaseStudyHeader from "../components/CaseStudyHeader";
import StageExplorer from "../components/StageExplorer";
import { getCaseStudy } from "../data/caseStudies";
import * as capa from "../data/capa";
import processDiagram from "../assets/capa-design-process.jpg";
import capaExplained from "../assets/capa-explained.jpg";
import fiveWhysDiagram from "../assets/capa-5-whys.jpg";
import personaSheet from "../assets/capa-persona.jpg";
import ticketForm from "../assets/capa-ticket-form.jpg";
import dashboard from "../assets/capa-dashboard.jpg";
import atAGlance from "../assets/capa-at-a-glance.jpg";
import NotFound from "./NotFound";

export default function CaseStudyCapa() {
  const study = getCaseStudy("enterprise-capa-experience");
  if (!study) return <NotFound />;

  return (
    <div className="container case-study">
      <CaseStudyHeader study={study} />

      <ul className="impact-strip impact-strip--hero">
        {study.impact.map((stat) => (
          <li key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>

      <section className="section">
        <p className="section__eyebrow">Overview</p>
        <h3>{capa.overview.title}</h3>
        {capa.overview.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}

        <h4>Problem statement</h4>
        <p className="callout">{capa.problemStatement}</p>

        <h4>The challenge</h4>
        <blockquote className="pull-quote">{capa.challenge}</blockquote>
      </section>

      <section className="section">
        <h3>The experience problem</h3>
        <p>
          Complaint management was heavily dependent on email and manual
          follow-ups. That created problems with:
        </p>
        <ul className="tag-list tag-list--large">
          {capa.problemAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>

        <h4>Before</h4>
        <ol className="flow">
          {capa.beforeFlow.map((step, index) => (
            <li
              key={step}
              className={
                index === capa.beforeFlow.length - 1 ? "flow__end" : ""
              }
            >
              {step}
            </li>
          ))}
        </ol>

        <blockquote className="pull-quote">{capa.keyInsight}</blockquote>
      </section>

      <section className="section">
        <h3>Demystifying CAPA</h3>
        <p>{capa.capaExplainer.definition}</p>

        <dl className="definition-grid">
          {capa.capaExplainer.distinctions.map((item) => (
            <div key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.body}</dd>
            </div>
          ))}
        </dl>

        <Artefact
          src={capaExplained}
          caption="Correction, corrective action and preventive action, explained"
          alt="Diagram contrasting correction, corrective action and preventive action using a fire metaphor"
        />

        <div className="two-column">
          <div>
            <h4>Corrective action</h4>
            <ol className="numbered-list">
              {capa.capaExplainer.corrective.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h4>Preventive action</h4>
            <ol className="numbered-list">
              {capa.capaExplainer.preventive.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>Uncovering root causes: the power of 5 Whys</h3>
        <p>{capa.fiveWhys.definition}</p>
        <p className="callout">
          <strong>Case study:</strong> {capa.fiveWhys.caseStudy}
        </p>

        <StageExplorer
          ariaLabel="Five Whys root cause analysis"
          stages={capa.fiveWhys.chain.map((link, index) => ({
            id: `why-${index + 1}`,
            label: `Why ${index + 1}`,
            content: (
              <>
                <p className="stage-label">{link.label}</p>
                <p className="stage-goal">
                  <strong>{link.question}</strong>
                </p>
                <p>{link.answer}</p>
              </>
            ),
          }))}
        />

        <div className="two-column">
          <div>
            <h4>Root cause</h4>
            <p>{capa.fiveWhys.rootCause}</p>
          </div>
          <div>
            <h4>Solution</h4>
            <p>{capa.fiveWhys.solution}</p>
          </div>
        </div>

        <Artefact
          src={fiveWhysDiagram}
          caption="The 5 Whys analysis I ran on a recurring billing complaint"
          alt="Five Whys diagram tracing an incorrect bill back to a missing automated validation process"
        />
      </section>

      <section className="section">
        <p className="section__eyebrow">01 — Discover</p>
        <h3>I started with the people closest to the problem</h3>
        <p>
          I looked for patterns rather than treating each complaint as an
          isolated incident.
        </p>
        <ul className="tag-list tag-list--large">
          {capa.researchInputs.map((input) => (
            <li key={input}>{input}</li>
          ))}
        </ul>

        <Artefact
          src={processDiagram}
          caption="The CAPA experience design process"
          alt="Six-stage diagram: discover, persona mapping, journey mapping, ideation, testing, implementation"
        />
      </section>

      <section className="section">
        <h3>The design process</h3>
        <p>Select a stage to see what happened at each step.</p>
        <StageExplorer
          ariaLabel="CAPA design process stages"
          stages={capa.designProcess.map((stage) => ({
            id: stage.name.toLowerCase().replace(/\s+/g, "-"),
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
      </section>

      <section className="section">
        <h3>Two sides of the experience</h3>
        <div className="persona-grid">
          {capa.personas.map((persona) => (
            <div key={persona.name} className="persona-card">
              <h4>{persona.name}</h4>
              <p className="persona-card__label">Needs</p>
              <ul className="check-list">
                {persona.needs.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
              <p className="persona-card__label">Pain points</p>
              <ul className="pain-list">
                {persona.pains.map((pain) => (
                  <li key={pain}>{pain}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Artefact
          src={personaSheet}
          caption="Enterprise customer persona"
          alt="Persona sheet covering profile, motivations, behaviours, needs and pain points"
          note={capa.privacyNote}
        />

        <blockquote className="pull-quote">{capa.personaInsight}</blockquote>
      </section>

      <section className="section">
        <p className="section__eyebrow">02 — Define</p>
        <h3>From complaint management to continuous improvement</h3>
        <p>The opportunity was to create a system that could:</p>

        <ol className="flow flow--horizontal">
          {capa.solutionFlow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <Artefact
          src={ticketForm}
          caption="Structured issue capture, with an explicit route into root cause analysis"
          alt="CAPA ticket form showing issue description and a proceed-to-RCA option"
          note={capa.privacyNote}
        />

        <Artefact
          src={dashboard}
          caption="The CAPA tool dashboard"
          alt="Dashboard showing complaint volumes, trends and resolution progress"
          note={capa.privacyNote}
        />

        <div className="two-column two-column--narrow">
          <Artefact
            src={atAGlance}
            caption="Daily resolution tracking"
            alt="Donut chart showing resolved and unresolved CAPA cases"
          />
          <p className="callout">{capa.resolutionNote}</p>
        </div>

        <h4>What I contributed</h4>
        <ul className="check-list check-list--columns">
          {capa.contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section section--accent">
        <h3>The impact</h3>
        <div className="impact-grid">
          {study.impact.map((stat) => (
            <div key={stat.label} className="impact-card">
              <p className="impact-card__value">{stat.value}</p>
              <p className="impact-card__label">{stat.label}</p>
              {stat.detail && (
                <p className="impact-card__detail">{stat.detail}</p>
              )}
            </div>
          ))}
        </div>

        <div className="outcome-grid">
          {capa.outcomeGroups.map((group) => (
            <div key={group.title}>
              <h4>{group.title}</h4>
              <ul className="check-list">
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h4>Beyond the numbers</h4>
        <ul className="check-list check-list--columns">
          {capa.beyondTheNumbers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h3>Learnings and reflections</h3>
        <ol className="learning-list">
          {capa.learnings.map((learning) => (
            <li key={learning.title}>
              <h4>{learning.title}</h4>
              <p>{learning.body}</p>
            </li>
          ))}
        </ol>

        <Link
          to="/projects/enterprise-iot-sim-experience"
          className="text-link"
        >
          Next case study: Enterprise IoT SIM customer journey redesign &rarr;
        </Link>
      </section>
    </div>
  );
}
