import roleAndAudience from "../../assets/work/sacco/role-and-audience.png";
import memberJourney from "../../assets/work/sacco/member-journey.png";
import testingAndDecision from "../../assets/work/sacco/testing-and-decision.png";
import serviceBlueprint from "../../assets/work/sacco/service-blueprint.png";
import leadershipUpdate from "../../assets/work/sacco/leadership-update.png";
import CaseStudyLayout from "./CaseStudyLayout";
import ZoomableFigure from "../../components/ui/ZoomableFigure";
import Disclosure from "../../components/ui/Disclosure";

// All five SACCO visuals share one canvas size, which keeps their display width consistent.
const size = { width: 1920, height: 1140 };

/**
 * MySacco case study. Each visual carries its own heading and explanation,
 * so the page stacks them in story order: 1, 2, 4 visible; 3, 5 on request.
 * Alt text describes what each visual shows.
 */
export default function SaccoCaseStudy() {
  return (
    <CaseStudyLayout
      id="sacco"
      title="One digital SACCO app for members of multiple savings and credit cooperatives"
      byline="Grace Muthoni Kamau · Safaricom Business · Digital SACCO Solution"
    >
      <p className="case__intro">
        I led the end to end customer journey for Safaricom Business&rsquo;s MySacco app. I mapped
        how savings and credit cooperatives (SACCOs) join the service and how their members sign
        in, switch between SACCOs and access their accounts. I tested the app with internal and
        external users on iOS and Android across several teams. I shared findings with developers
        and kept customers and leadership updated on what was working and what still needed
        attention.
      </p>

      <div className="case__visual-stack">
        <ZoomableFigure
          {...size}
          src={roleAndAudience}
          alt="Who the service was for and what I personally owned."
          eager
        />
        <ZoomableFigure
          {...size}
          src={memberJourney}
          alt="How a member signs in, selects a SACCO and accesses its services."
        />
        <ZoomableFigure
          {...size}
          src={testingAndDecision}
          alt="Why I flagged withdrawal to M-PESA for further testing even though all 25 executed tests had passed."
        />
      </div>

      <Disclosure label="Explore the full case study">
        <div className="case__visual-stack">
          <ZoomableFigure
            {...size}
            src={serviceBlueprint}
            alt="How the SACCO, the member and the delivery team fit together across the journey."
          />
          <ZoomableFigure
            {...size}
            src={leadershipUpdate}
            alt="How I communicated testing progress and what each pilot still needed."
          />
        </div>
      </Disclosure>
    </CaseStudyLayout>
  );
}
