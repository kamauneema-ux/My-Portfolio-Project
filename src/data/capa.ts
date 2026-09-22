export const privacyNote =
  "To protect sensitive data, all visuals shown are from a dummy account, and some persona details have been modified. The processes, insights and outcomes are real.";

export const overview = {
  title: "When complaints become symptoms of a broken service",
  body: [
    "Safaricom PLC is Kenya\u2019s leading telecommunications company, serving both Consumer and Enterprise customers. The Enterprise Business Unit supports complex, high-value local and international small, medium and large corporate customers, where service failures have significant business and reputational impact.",
    "When something goes wrong, resolving the immediate complaint is only part of the problem. The bigger question is: why did the problem happen, and how do we prevent it from happening again?",
  ],
};

export const problemStatement =
  "Despite dedicated teams handling enterprise complaints, the absence of a structured escalation and corrective action process led to inconsistent handling, delayed resolution and a lack of accountability. Complaints were mostly managed via email, resulting in low transparency, poor tracking of repeat issues and missed opportunities for preventative action. This negatively impacted Enterprise customer experience, internal efficiency and customer trust.";

export const challenge =
  "How might we design a scalable CAPA system that allows internal teams to raise issues, identify root causes and manage corrective actions end to end, and empowers enterprise customers to report complaints, monitor progress and experience consistent service improvements?";

export const problemAreas = [
  "Visibility",
  "Ownership",
  "Tracking",
  "Escalation",
  "Root-cause identification",
  "Recurring complaints",
  "Cross-team accountability",
];

export const beforeFlow = [
  "Customer experiences issue",
  "Complaint submitted",
  "Email sent between teams",
  "Multiple handoffs",
  "Manual follow-up",
  "Resolution",
  "Issue potentially happens again",
];

export const keyInsight =
  "The problem was not simply complaint resolution. The system was optimised for fixing individual problems rather than learning from them.";

export const capaExplainer = {
  definition:
    "CAPA \u2014 Corrective Action and Preventive Action \u2014 is a process used to identify, address and prevent the recurrence of problems or non-conformities within an organisation.",
  distinctions: [
    { term: "Correction", body: "Put the fire out, at the time it happens." },
    {
      term: "Corrective Action",
      body: "Work out what caused the fire and how to prevent it recurring, after the event.",
    },
    {
      term: "Preventive Action",
      body: "Stop the fire from happening at all, before the event.",
    },
  ],
  corrective: [
    "Identify the problem",
    "Take immediate action",
    "Eliminate the root cause",
    "Verification",
  ],
  preventive: [
    "Identify potential risk",
    "Prevent the occurrence",
    "Continuous monitoring",
    "Documentation and review",
  ],
};

export const fiveWhys = {
  definition:
    "The 5 Whys is a problem-solving technique used to identify the root cause of an issue by asking \u201Cwhy\u201D repeatedly, typically five times.",
  caseStudy:
    "A customer receives an incorrect bill for their fixed internet connection.",
  chain: [
    {
      label: "Direct cause",
      question: "Why was the customer billed incorrectly?",
      answer:
        "The bill included charges for a service that the customer did not use.",
    },
    {
      label: "Cause",
      question: "Why did the bill include charges for an unused service?",
      answer:
        "The billing system applied charges for a fixed-line package that was not part of the customer\u2019s subscribed plan.",
    },
    {
      label: "Cause",
      question:
        "Why did the billing system apply charges for the wrong package?",
      answer:
        "The system\u2019s customer profile had incorrect service details for the customer\u2019s account.",
    },
    {
      label: "Cause",
      question:
        "Why were the service details incorrect in the customer\u2019s profile?",
      answer:
        "During a recent account update there was an error in data entry by the customer service team.",
    },
    {
      label: "Root cause",
      question: "Why did the error in data entry occur?",
      answer:
        "There was no automated validation process to verify the correct entry of service details during updates.",
    },
  ],
  rootCause:
    "The lack of an automated validation process during account updates led to incorrect service details in the billing system.",
  solution:
    "Implement an automated validation process for customer account updates to prevent incorrect service details being entered, and perform regular audits of customer profiles to catch errors before billing.",
};

export const researchInputs = [
  "Voice of Customer data",
  "NPS and CSAT feedback",
  "Historical complaint reports",
  "Recurring issues",
  "Internal stakeholder feedback",
  "Resolution processes",
];

export type Stage = { name: string; body: string; points: string[] };

export const designProcess: Stage[] = [
  {
    name: "Discover",
    body: "User and stakeholder research, looking for patterns rather than treating each complaint as an isolated incident.",
    points: [
      "Conducted in-depth research with internal teams and customers",
      "Collected Voice of Customer data and historical complaint reports",
      "Identified key pain points and recurring issues",
    ],
  },
  {
    name: "Persona Mapping",
    body: "Building a picture of both sides of the experience before designing anything.",
    points: [
      "Created personas for employees and customers",
      "Highlighted unique needs, behaviours and expectations to guide solutions",
      "Defined user goals and pain points to guide design decisions and priorities",
    ],
  },
  {
    name: "Journey Mapping",
    body: "Mapping the end-to-end journey to find where friction was actually created.",
    points: [
      "Mapped end-to-end journeys to spot friction points and inefficiencies",
      "Analysed recurring complaints to identify root causes",
      "Identified critical moments with the greatest impact on experience and resolution time",
    ],
  },
  {
    name: "Ideation",
    body: "Turning insight into corrective and preventive actions the business could actually deliver.",
    points: [
      "Brainstormed corrective and preventive actions with cross-functional teams",
      "Prioritised solutions based on impact, feasibility and alignment with business goals",
      "Translated insights into clear process improvements and system requirements",
    ],
  },
  {
    name: "Testing",
    body: "Piloting the workflow with the people who would use it, and changing it based on what they said.",
    points: [
      "Piloted new CAPA workflows in select teams",
      "Collected feedback to refine processes and improve usability",
      "Refined designs to align with Safaricom\u2019s enterprise processes and operational constraints",
    ],
  },
  {
    name: "Implementation",
    body: "Rollout focused on adoption and monitoring, because a framework nobody uses changes nothing.",
    points: [
      "Rolled out the CAPA framework and digital dashboards organisation-wide",
      "Established tracking, reporting and feedback loops for continuous improvement",
      "Monitored performance trends to ensure sustained adoption and long-term impact",
    ],
  },
];

export type Persona = { name: string; needs: string[]; pains: string[] };

export const personas: Persona[] = [
  {
    name: "Enterprise Customer",
    needs: [
      "Clear communication",
      "Predictable resolution",
      "Visibility of progress",
      "Reliable service",
    ],
    pains: [
      "Unclear ownership",
      "Repeated explanations",
      "Delays",
      "Inconsistent updates",
    ],
  },
  {
    name: "Internal Resolution Team",
    needs: [
      "Clear ownership",
      "Visibility of cases",
      "Escalation pathways",
      "Actionable data",
    ],
    pains: [
      "Email-based tracking",
      "Manual follow-ups",
      "Fragmented information",
      "Limited visibility",
    ],
  },
];

export const personaInsight =
  "The customer experience and the employee experience were connected. Improving one without addressing the other would only move the friction elsewhere.";

export const solutionFlow = [
  "Capture",
  "Assign",
  "Investigate",
  "Correct",
  "Prevent",
  "Monitor",
];

export const contribution = [
  "Researched complaint patterns and user pain points",
  "Defined the experience problem and success criteria",
  "Developed personas for customers and internal teams",
  "Mapped end-to-end journeys and critical moments",
  "Designed the CAPA framework, workflows and dashboards",
  "Defined business and user requirements",
  "Collaborated with technical, operations and CX teams",
  "Piloted, tested and iterated the workflows",
  "Supported implementation and adoption",
];

export const outcomeGroups = [
  {
    title: "User and experience outcomes",
    points: [
      "Simplified complaint tracking, ownership and resolution workflows for internal employees.",
      "Delivered a more consistent and transparent experience for customers, reducing repeated complaints and frustration.",
      "Replaced manual email tracking with real-time visibility of complaint volumes, trends and resolution progress.",
    ],
  },
  {
    title: "Business and operational outcomes",
    points: [
      "Achieved a 46% reduction in recurring complaints by addressing root causes rather than symptoms.",
      "Saved 21 hours weekly by streamlining resolution processes and reducing manual follow-ups.",
      "Increased customer satisfaction by 19 points through faster, clearer and more reliable resolution journeys.",
    ],
  },
  {
    title: "System and capability outcomes",
    points: [
      "Designed and implemented a scalable CAPA framework that enables continuous improvement.",
      "Enabled data-driven decision-making through dashboards and actionable reporting.",
      "Improved cross-functional accountability through clear ownership and tracking mechanisms.",
    ],
  },
];

export const resolutionNote =
  "For the first time in Enterprise we could track daily resolution rates \u2014 something that was previously impossible without a dedicated tool.";

export const beyondTheNumbers = [
  "Clearer ownership",
  "Better visibility",
  "More consistent resolution",
  "Structured accountability",
  "Data-driven decision making",
  "A repeatable continuous-improvement framework",
];

export const learnings = [
  {
    title: "The interface is not always the problem",
    body: "A customer may experience a problem through a digital touchpoint, but the root cause can sit within a process, policy, system or organisational handoff.",
  },
  {
    title:
      "Customer experience depends on how well internal systems work together",
    body: "When systems like CRM, billing and provisioning are not aligned, it creates frustration for both customers and staff.",
  },
  {
    title: "Employee experience is customer experience",
    body: "When internal teams lack visibility, ownership or the right tools, customers ultimately feel that friction.",
  },
  {
    title: "Automation reduces manual work and mistakes",
    body: "Automating tracking and follow-up made processes faster and more reliable, and removed a whole category of human error.",
  },
  {
    title: "Good service design connects insight to action",
    body: "Research is valuable when it changes what an organisation does. The goal was not simply to understand complaints, but to create a system that could continuously learn from them.",
  },
  {
    title: "Prevention builds stronger systems than repair",
    body: "Focusing on preventing issues, rather than only fixing them after they happen, led to stronger systems and better long-term experiences.",
  },
];
