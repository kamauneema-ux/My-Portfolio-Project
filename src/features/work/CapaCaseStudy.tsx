import billingSvg from "../../assets/work/capa/billing-example.svg";
import billingPng from "../../assets/work/capa/billing-example.png";
// The staff-journey SVG export is mis-scaled (content drawn at 2x its viewBox), so the PNG is used.
import journeyPng from "../../assets/work/capa/staff-journey.png";
import firstReview from "../../assets/work/capa/first-review.webp";
import personaSvg from "../../assets/work/capa/persona-map.svg";
import personaPng from "../../assets/work/capa/persona-map.png";
import beforeAfterSvg from "../../assets/work/capa/before-and-after.svg";
import beforeAfterPng from "../../assets/work/capa/before-and-after.png";
import CaseStudyLayout from "./CaseStudyLayout";
import ZoomableFigure from "../../components/ui/ZoomableFigure";
import Disclosure from "../../components/ui/Disclosure";

/**
 * CAPA case study, in story order:
 * title, introduction, business outcome, billing example, staff journey,
 * early results, then supporting work behind an expandable section.
 * SVGs keep diagram text crisp; the PNGs open in the full-size viewer.
 */
export default function CapaCaseStudy() {
  return (
    <CaseStudyLayout
      id="capa"
      title="Redesigning how Safaricom Business handled billing complaints"
      byline="Grace Muthoni Kamau · CAPA Product Owner"
    >
      <p className="case__intro">
        I designed the staff journey for Corrective and Preventive Action
        (CAPA), from investigating customer complaints to tracking the work
        needed to prevent them from recurring.
      </p>
      <p className="case__outcome">
        By the time I left Safaricom Business, credit notes had fallen by 33%
        across the wider CAPA programme.
      </p>

      <section className="case__section" aria-labelledby="billing-example">
        <h2 id="billing-example">One customer, two charges</h2>
        <ZoomableFigure
          src={billingSvg}
          fullSrc={billingPng}
          width={1800}
          height={675}
          alt="One account was billed for a previous product and its replacement."
          caption="One customer was billed for both their old product and its replacement. A credit note could correct the bill. What caused both charges?"
          eager
        />
      </section>

      {/* The journey is the core of the story, so it stays on the page rather than in an accordion. */}
      <section className="case__section" aria-labelledby="staff-journey">
        <h2 id="staff-journey">The staff journey I designed</h2>
        <ZoomableFigure
          src={journeyPng}
          width={1573}
          height={1217}
          alt="Staff log the issue. Quality assigns an owner, reviews the proposed fix and sends it for approval. Credit notes can then be issued where needed. Preventive actions are tracked to closure."
          caption="I moved the process from emails and calls into CAPA. Credit notes required approval, and each preventive action had an owner and a deadline."
          note="Reconstructed from my project records."
        />
      </section>

      <section className="case__section" aria-labelledby="early-results">
        <h2 id="early-results">Early results from the tool</h2>
        <ZoomableFigure
          src={firstReview}
          width={2027}
          height={776}
          alt="What the first review revealed, 13 May to 30 June 2025, Enterprise CAPA tool: 100% of requests in the reporting window were logged; corrective plans were shared for 41% and preventive plans for 11% of requests logged. A logged case, a shared plan and a completed action measure three different things."
        />
      </section>

      <Disclosure label="Explore the staff roles and previous process">
        <h3>Staff roles</h3>
        <ZoomableFigure
          src={personaSvg}
          fullSrc={personaPng}
          width={1800}
          height={800}
          alt="Responsibilities of frontline staff, quality reviewers, resolution owners, approving leads and preventive action owners."
        />
        <h3>Before and after CAPA</h3>
        <ZoomableFigure
          src={beforeAfterSvg}
          fullSrc={beforeAfterPng}
          width={1800}
          height={828}
          alt="Email and phone requests became a tracked workflow with case review, approval and follow up."
        />
      </Disclosure>
    </CaseStudyLayout>
  );
}
