export type ImpactStat = { value: string; label: string; detail?: string };

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  strapline: string;
  summary: string;
  organisation: string;
  year: string;
  role: string;
  users: string[];
  methods: string[];
  themes: string[];
  impact: ImpactStat[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-capa-experience",
    number: "01",
    title: "Turning complaints into a continuous improvement system",
    strapline: "CAPA | Enterprise Customer Experience | Safaricom",
    summary:
      "A human-centred CAPA system designed to turn customer complaints into actionable insights, accountability and measurable experience improvement across Safaricom\u2019s Enterprise Business Unit.",
    organisation: "Safaricom, Enterprise Business Unit",
    year: "2024 — 2026",
    role: "Product Owner & Experience Designer",
    users: [
      "Enterprise customers",
      "Internal employees managing complaints and resolutions",
    ],
    methods: [
      "User & stakeholder research",
      "VoC analysis",
      "Personas",
      "Journey mapping",
      "Root cause analysis (5 Whys)",
      "Workflow design",
      "Requirements",
      "Dashboard design",
      "Testing & iteration",
    ],
    themes: [
      "Service Design",
      "UX Research",
      "Product Ownership",
      "Experience Measurement",
    ],
    impact: [
      {
        value: "46%",
        label: "reduction in recurring complaints",
        detail:
          "Root-cause-focused corrective and preventive action reduced repeat issues.",
      },
      {
        value: "21 hrs",
        label: "saved every week",
        detail: "Streamlined workflows reduced manual tracking and follow-up.",
      },
      {
        value: "+19 pts",
        label: "customer satisfaction",
        detail:
          "Improvements to resolution journeys contributed to higher satisfaction.",
      },
    ],
  },
  {
    slug: "enterprise-iot-sim-experience",
    number: "02",
    title: "Enterprise IoT SIM customer journey redesign",
    strapline: "IoT SIM | Enterprise Journey Design | Safaricom",
    summary:
      "A human-centred redesign of the enterprise IoT SIM journey, using VOC insights, AI-assisted support and predictive tools to deliver a seamless experience across all touchpoints.",
    organisation: "Safaricom, Enterprise Business Unit",
    year: "2022 — 2024",
    role: "Customer Journey & Experience Designer",
    users: [
      "Enterprise customers managing IoT solutions",
      "Internal sales, support and billing teams",
    ],
    methods: [
      "VOC analysis (NPS, CSAT, qualitative)",
      "Persona development",
      "LBGUPS journey mapping",
      "As-Is and To-Be journeys",
      "Opportunity definition",
      "Low-fidelity wireframes",
      "Stakeholder alignment",
    ],
    themes: ["Service Design", "UX Research", "Systems Thinking"],
    impact: [
      {
        value: "6 stages",
        label: "mapped end to end",
        detail:
          "Learn, Buy, Get, Use, Pay and Support, with systems and pain points at each stage.",
      },
      {
        value: "Mandatory",
        label: "LBGUPS review before launch",
        detail:
          "Every new product now undergoes a journey review before it goes to market.",
      },
      {
        value: "VOC-led",
        label: "redesign of pain-point products",
        detail:
          "Top pain-point products are now redesigned using the LBGUPS framework.",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
