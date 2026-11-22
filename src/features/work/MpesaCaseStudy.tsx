import stalledActivation from "../../assets/work/mpesa/stalled-activation.webp";
import CaseStudyLayout from "./CaseStudyLayout";
import Disclosure from "../../components/ui/Disclosure";
import ZoomableFigure from "../../components/ui/ZoomableFigure";

/** The two routes customers took, shown side by side to make the research method visible. */
const researchPaths = [
  {
    who: "Customers using the app",
    steps: [
      "Downloaded the app",
      "Used it three times",
      "Received the Journey NPS survey",
    ],
  },
  {
    who: "Roaming customers who got stuck",
    steps: [
      "Reported trouble activating the app",
      "I worked with teams to investigate contact centre feedback and backend records",
      "We followed up with affected customers after the change",
    ],
  },
];

/**
 * M-PESA One App case study. The two-path research map is built in
 * HTML: ordered lists that read correctly to a
 * screen reader and reflow into a vertical timeline on small screens.
 */
export default function MpesaCaseStudy() {
  return (
    <CaseStudyLayout
      id="mpesa"
      title="Why was M-PESA One App hard to activate while roaming?"
      byline="Grace Muthoni Kamau · Safaricom · UX Research"
    >
      <p className="case__intro">
        When M-PESA and MySafaricom services came together, I studied the
        journey from download to early use. The app used mobile data to
        recognise a customer&rsquo;s number. Abroad, that step could mean paying
        for roaming.
      </p>

      <section className="case__section" aria-labelledby="research-map">
        <h2 id="research-map">
          How I heard from customers who couldn&rsquo;t reach the survey
        </h2>
        <div className="path-map">
          {researchPaths.map((path) => (
            <div key={path.who} className="path-map__row">
              <h3>{path.who}</h3>
              <ol className="path-map__steps">
                {path.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className="case__outcome">
          <span className="case__outcome-label">What changed</span>
          Roaming customers could update the app for activation without roaming
          data charges for that step. Those we reached confirmed they could get
          the app running.
        </p>
      </section>

      <section className="case__section" aria-labelledby="results">
        <h2 id="results">Wider journey results</h2>
        <dl className="stat-row">
          <div>
            <dt>Journey Net Promoter Score against a target of 55</dt>
            <dd>70</dd>
          </div>
          <div>
            <dt>Growth in the number of diaspora users</dt>
            <dd>About 50%</dd>
          </div>
        </dl>
        <p>Customer satisfaction also increased.</p>
      </section>

      <Disclosure label="Staff testing and what I would test next">
        <p>
          I led testing across teams. More than 500 staff tested before launch
          on phones and computers. External customer feedback prompted a second
          round with 234 staff, mainly on phones. I also wrote customer FAQs.
        </p>
        <p>
          In the next pilot, I would recruit roaming customers to try activation
          on their own line abroad and give them a way to report a failed
          attempt as it happens.
        </p>
      </Disclosure>

      <section className="case__section" aria-labelledby="stalled-activation">
        <h2 id="stalled-activation">Investigating stalled app activation abroad</h2>
        <ZoomableFigure
          src={stalledActivation}
          width={1536}
          height={1024}
          alt="Why did app activation stall abroad? Who the survey missed: the survey appeared only after people had used the app, so anyone who got stuck during activation never saw it. How I traced the problem: I worked with the team to compare customer support feedback with activation records, and we traced the difficulty to a step that could incur roaming data charges. How we checked the change: after the update, we followed up with customers who had reported the issue; those we reached confirmed they could activate the app."
        />
      </section>
    </CaseStudyLayout>
  );
}
