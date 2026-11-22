import roleAndAudience from "../../assets/work/sacco/role-and-audience.png";
import memberJourney from "../../assets/work/sacco/member-journey.png";
import withdrawalDecision from "../../assets/work/sacco/withdrawal-decision.webp";
import serviceBlueprint from "../../assets/work/sacco/service-blueprint.png";
import testingApproach from "../../assets/work/sacco/testing-approach.webp";
import CaseStudyLayout from "./CaseStudyLayout";
import ZoomableFigure from "../../components/ui/ZoomableFigure";
import Disclosure from "../../components/ui/Disclosure";

// The three original SACCO visuals share one canvas size.
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
        I led the end to end customer journey for Safaricom Business&rsquo;s
        MySacco app. I mapped how savings and credit cooperatives (SACCOs) join
        the service and how their members sign in, switch between SACCOs and
        access their accounts. I tested the app with internal and external users
        on iOS and Android across several teams. I shared findings with
        developers and kept customers and leadership updated on what was working
        and what still needed attention.
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
          width={1752}
          height={897}
          src={withdrawalDecision}
          alt="Could a member withdraw to M-PESA? 96% of planned manual test cases were tested and passed; 4% were awaiting testing. I communicated that withdrawal to M-PESA still needed an end-to-end check, flagging the payment integration dependency, the need to retest after app changes, and unclear error messages."
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
            width={1672}
            height={941}
            src={testingApproach}
            alt="How I tested the member journey: user acceptance testing of sign-in and account switching with internal and external users on iOS and Android; withdrawal retry checks, including retesting after a service update; and weekly stakeholder updates on what was tested, what still needed checking and what the team needed before handover."
          />
        </div>
      </Disclosure>
    </CaseStudyLayout>
  );
}
