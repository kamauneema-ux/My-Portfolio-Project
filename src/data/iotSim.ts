export const privacyNote =
  "Some persona and journey details have been modified to comply with data privacy requirements, while maintaining the original insights.";

export const overview = {
  title: "Customers did not experience a product. They experienced a journey.",
  body: [
    "Enterprise customers did not experience \u201Can IoT SIM.\u201D They experienced six connected stages \u2014 Learn, Buy, Get, Use, Pay and Support \u2014 each involving different teams, systems and touchpoints.",
    "That became the basis for the LBGUPS journey framework I used to map the end-to-end experience.",
  ],
};

export const problemStatement =
  "Enterprise clients buying and managing IoT SIM cards faced several challenges that made the experience difficult. Onboarding and deployment processes were disjointed, leaving users unsure about the steps to take. Multiple support channels caused confusion and delays, as customers were often passed between different teams without clear guidance. There were also billing issues, with unexpected charges forcing the company to request credit notes for overbilled amounts.";

export const goal =
  "The goal was to create a user-focused, simple and proactive experience that reduces friction, improves satisfaction, and encourages adoption across the enterprise IoT SIM journey.";

export const challenge =
  "How might we design an IoT SIM journey using the LBGUPS framework that allows enterprise clients to learn about solutions, buy the right products, get devices onboarded smoothly, use them efficiently, pay seamlessly and access support proactively, while providing Safaricom with predictive insights to reduce friction, improve satisfaction and deliver a consistent, user-centered experience?";

export type LbgupsStage = {
  key: string;
  name: string;
  goal: string;
  touchpoints: string[];
  systems: string[];
  painPoints: string[];
  opportunities: string[];
};

export const stages: LbgupsStage[] = [
  {
    key: "L",
    name: "Learn",
    goal: "Understand whether the IoT solution fits my organisation and what it will involve.",
    touchpoints: [
      "Safaricom website and Digital Business Hub",
      "Knowledge hub and Enterprise Academy",
      "Webinars, forums and market storms",
      "Solution briefs, marketing collateral and ATL/BTL adverts",
    ],
    systems: ["Digital Business Hub", "SharePoint", "ESAKA"],
    painPoints: [
      "Product information spread across many channels",
      "Unclear which source is authoritative for technical detail",
    ],
    opportunities: [
      "AI-assisted FAQs (Kazuri) for instant, consistent answers",
      "Virtual product demos",
    ],
  },
  {
    key: "B",
    name: "Buy",
    goal: "Buy the right product, with a clear view of cost and what happens next.",
    touchpoints: [
      "Presales survey and solution design",
      "Negotiation and discounting",
      "Contracting and KYC capture",
      "Purchase via digital, shop or dealer network",
    ],
    systems: [
      "FALCON (order raising)",
      "CRM (KYC and customer creation)",
      "SYMFACT (contracting)",
    ],
    painPoints: [
      "Buying spans several disconnected systems",
      "Handoffs between presales, commercial and contracting teams",
    ],
    opportunities: [
      "Self-service ordering with visible status",
      "A single view of the order across systems",
    ],
  },
  {
    key: "G",
    name: "Get",
    goal: "Get devices onboarded and activated without having to chase anyone.",
    touchpoints: [
      "Installation and deployment",
      "Activation of service via USSD",
      "SLAs for activation",
      "Project management of installers and activation",
    ],
    systems: ["CBS", "API gateways", "Downstream provisioning systems"],
    painPoints: [
      "Onboarding and deployment processes were disjointed",
      "Users were unsure what steps to take next",
    ],
    opportunities: [
      "Self-service onboarding with guided steps",
      "Proactive activation notifications against SLA milestones",
    ],
  },
  {
    key: "U",
    name: "Use",
    goal: "Run and administer my fleet without raising a ticket for every change.",
    touchpoints: [
      "Administration via the Digital Business Hub",
      "Upgrade, downgrade, suspend and resume",
      "Adding and removing beneficiaries",
      "Enterprise loyalty and retention activity",
    ],
    systems: [
      "SIM Management portal",
      "APIs and integrations",
      "Push notifications",
    ],
    painPoints: [
      "Administration spread across multiple portals",
      "Limited proactive visibility of service health",
    ],
    opportunities: [
      "Predictive dashboards showing fleet and service status",
      "Automated notifications at key milestones",
    ],
  },
  {
    key: "P",
    name: "Pay",
    goal: "Receive a bill I can understand, reconcile and approve first time.",
    touchpoints: [
      "M-PESA business payment and STK push",
      "POS and card payments",
      "Bulk payment linked to the SIM management portal",
      "Account receipting and multi-currency handling",
    ],
    systems: ["ORACLE accounting", "POS receipting", "SIM Management portal"],
    painPoints: [
      "Unexpected charges on invoices",
      "Overbilled amounts required credit notes, creating rework for both sides",
    ],
    opportunities: [
      "Personalised, itemised billing",
      "Validation before billing to prevent incorrect charges",
    ],
  },
  {
    key: "S",
    name: "Support",
    goal: "Get an issue resolved once, without explaining it to three different teams.",
    touchpoints: [
      "Business support line 2222",
      "Account management and in-life support",
      "Omnichannel support and dedicated engineers for Platinum customers",
      "OLA and SLA notification and adherence",
    ],
    systems: [
      "Ticketing and CRM",
      "Proactive service monitoring",
      "Tech partner support",
    ],
    painPoints: [
      "Multiple support channels caused confusion and delays",
      "Customers were passed between teams without clear guidance",
    ],
    opportunities: [
      "Simplified support pathways to reduce repeat contacts",
      "Proactive service monitoring and triggers for service availability",
    ],
  },
];

export const insight =
  "The product worked. The journey did not. Most of the friction customers described sat in the seams between stages, where ownership changed hands and information did not travel with the customer.";

export const contribution = [
  "Conducted VOC analysis using NPS, CSAT and qualitative feedback to identify user pain points",
  "Developed the primary persona and LBGUPS journey maps",
  "Designed As-Is and To-Be journeys, highlighting friction points and opportunities",
  "Proposed AI-assisted tools, dashboards and predictive features to enhance self-service",
  "Collaborated with product, support and sales teams to deliver actionable solutions",
  "Focused on improving user experience, efficiency, satisfaction and adoption",
];

export type Stage = { name: string; body: string; points: string[] };

export const designProcess: Stage[] = [
  {
    name: "Understand & Define",
    body: "Framing the real problem before proposing anything.",
    points: [
      "Analysed VOC, NPS, CSAT and feedback to uncover pain points",
      "Interviewed internal stakeholders and customers to understand operational gaps",
      "Framed the problem: disjointed onboarding, confusing support, billing issues",
      "Set the challenge: a seamless journey across Learn, Buy, Get, Use, Pay and Support",
    ],
  },
  {
    name: "Research & Insights",
    body: "Grounding the work in what customers actually reported.",
    points: [
      "Analysed VOC data to identify key pain points and opportunities",
      "Defined the primary persona, Peter, an ICT Director",
      "Mapped the As-Is journey across LBGUPS with emotional highs and lows",
      "Identified frustrations and operational gaps affecting adoption and satisfaction",
    ],
  },
  {
    name: "Design & Ideation",
    body: "Moving from problems to practical, human-centred solutions.",
    points: [
      "Created To-Be journey maps with emotional overlays and UX improvements",
      "Proposed AI FAQs (Kazuri), predictive dashboards, virtual demos, self-service onboarding and personalised billing",
      "Collaborated with product, support and sales teams to ensure feasibility and alignment",
    ],
  },
  {
    name: "Prototyping & Visualisation",
    body: "Making the proposed experience concrete enough to react to.",
    points: [
      "Created low-fidelity wireframes of key dashboards, AI features and onboarding flows",
      "Developed journey snapshots showing improvements from As-Is to To-Be",
      "Included callout quotes from VOC to humanise the story",
    ],
  },
];

export const solutionHighlights = [
  "Clear ownership at each journey stage",
  "Improved communication at high-risk touchpoints",
  "Simplified support pathways to reduce repeat contacts",
  "Integrated feedback loops to validate improvements",
];

export const outcomes = [
  "Improved visibility of customer pain points across teams",
  "Reduced repeat complaints linked to known detractors",
  "Increased stakeholder alignment around customer needs",
  "Stronger foundation for proactive experience improvements",
];

export const adoption = [
  "Products with customer issues were redesigned to improve the experience.",
  "Every new product now undergoes a mandatory LBGUPS journey review before launch.",
  "Top pain-point products are now redesigned using LBGUPS, based on this enterprise journey redesign work.",
];

export const learnings = [
  {
    title: "VOC data becomes valuable when it becomes a journey",
    body: "This project strengthened my ability to translate Voice of Customer data into practical journey improvements rather than a list of complaints.",
  },
  {
    title: "Design from feedback, not assumptions",
    body: "It reinforced the importance of designing experiences based on real customer feedback rather than what teams believed the experience to be.",
  },
  {
    title: "A shared map aligns teams",
    body: "Journey mapping aligned teams around a shared understanding of the customer, and gave them a common language for a journey each department had previously described only from its own point of view.",
  },
];
