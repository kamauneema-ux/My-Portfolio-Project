/**
 * Project cards for the home page. Each card has exactly one link (the call
 * to action), so every project offers one clear next step.
 */
import billingExample from "../assets/work/capa/billing-example.svg";
import withdrawalDecision from "../assets/work/sacco/withdrawal-decision.webp";
import stalledActivation from "../assets/work/mpesa/stalled-activation.webp";
import { routes } from "../siteMap";

export type ProjectCard = {
  id: "capa" | "sacco" | "mpesa";
  eyebrow: string;
  title: string;
  summary: string;
  cta: string;
  to: string;
  image: { src: string; width: number; height: number };
};

/** The featured project shown full width above the two supporting projects. */
export const featuredProject: ProjectCard = {
  id: "capa",
  eyebrow: "Safaricom Business · CAPA Product Owner",
  title: "Redesigning how Safaricom Business handled billing complaints",
  summary:
    "I mapped the staff journey from reporting an issue to approving a credit note and following up on the cause.",
  cta: "View CAPA case study",
  to: routes.capa,
  image: { src: billingExample, width: 1200, height: 400 },
};

export const supportingProjects: ProjectCard[] = [
  {
    id: "sacco",
    eyebrow: "Digital SACCO Solution · Product Experience and Testing",
    title: "Could a member withdraw their money?",
    summary:
      "All 25 tests we ran passed. I flagged the withdrawal journey we still needed to verify.",
    cta: "View SACCO case study",
    to: routes.sacco,
    image: { src: withdrawalDecision, width: 1752, height: 897 },
  },
  {
    id: "mpesa",
    eyebrow: "M-PESA One App · UX Research",
    title: "Why was M-PESA One App hard to activate while roaming?",
    summary:
      "I worked with teams to trace the problem and followed up with customers after they could update the app for activation without roaming data charges.",
    cta: "View M-PESA case study",
    to: routes.mpesa,
    image: { src: stalledActivation, width: 1536, height: 1024 },
  },
];

/** Order used for the "next case study" link at the foot of each case page. */
export const caseStudyOrder = [featuredProject, ...supportingProjects];
