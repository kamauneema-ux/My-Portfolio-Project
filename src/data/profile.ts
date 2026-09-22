export const profile = {
  name: "Grace Muthoni Kamau",
  shortName: "Grace Muthoni Kamau",
  firstName: "Muthoni",
  headline: "Experience Designer · UX Researcher · Service Designer",
  tagline:
    "I turn customer and user insight into better products, services and experiences.",
  facts: [
    {
      label: "Currently",
      value: "MSc Interaction & Experience Design, University of Limerick",
    },
    {
      label: "Previously",
      value:
        "10+ years at Safaricom across Enterprise CX, Product, Service Quality and Governance",
    },
    { label: "Based in", value: "Ireland" },
  ],
  location: "Limerick, Ireland",
  email: "kamauneema@gmail.com",
  phone: "+353 87 005 2805",
  linkedin: "https://www.linkedin.com/in/muthoni-kamau-55084839/",
  // Drop the PDF into /public and set this to its filename to show the Resume button.
  resumeUrl: "",
  intro: [
    "For 10+ years I have worked across customer experience, service design, product ownership and enterprise operations, helping organisations understand where experiences break down and designing practical ways to improve them.",
    "My work sits at the intersection of people, systems and technology — from researching customer needs and mapping journeys to designing workflows, service improvements and digital solutions that create measurable impact.",
  ],
  aboutPortfolio: {
    title: "About this portfolio",
    body: [
      "This portfolio showcases real-world experience design work from my 10+ years in customer experience and enterprise service design within telecom.",
      "My background is not in visual design, but in human-centred problem-solving, systems thinking, and improving services that people rely on every day.",
    ],
    highlights: [
      "Identify complex experience challenges",
      "Understand user needs through insight and feedback",
      "Design practical, structured solutions",
      "Reflect on impact and learning",
    ],
  },
  beyondTheScreen: {
    title: "I design beyond the screen",
    lead: "I am interested in the whole experience — not just what a user sees, but what happens before, during and after they interact with a product or service.",
    body: "I use research, journey mapping, systems thinking and collaborative design to understand:",
    questions: [
      "What are people trying to do?",
      "Where does the experience break down?",
      "Why is it happening?",
      "What could work better?",
      "And how do we know it worked?",
    ],
  },
  about: [
    "I am Muthoni — an experience designer, UX researcher and service design practitioner with a background in enterprise customer experience and product ownership.",
    "For more than a decade I have worked on problems where the answer is not always another feature or a better interface. Sometimes the problem is the journey. Sometimes it is the process behind the journey. Sometimes it is the handoff between teams. And sometimes it is that nobody has looked at the experience from the user’s perspective.",
    "That is what keeps me interested in experience design. I enjoy making complex things easier to understand, identifying patterns in what people say and do, and turning those insights into practical improvements.",
    "My experience spans telecommunications, enterprise services, customer experience, product, operations and governance, and I am currently expanding that foundation through my Masters in Interaction & Experience Design at the University of Limerick.",
    "Outside work and study you will usually find me travelling, creating content, exploring a new city, or sitting in a café somewhere unfamiliar observing how people interact with the world around them.",
  ],
  realWorld: {
    title: "10+ years solving real-world experience problems",
    body: [
      "My experience spans telecommunications, enterprise services, customer experience, product ownership and operational improvement.",
      "At Safaricom I worked with complex enterprise services where customer problems were often not caused by a single interface. They could involve people, processes, technology, policies, systems, billing, support and handoffs between teams.",
      "That taught me to look beyond the immediate complaint and understand the service ecosystem behind the experience.",
    ],
  },
} as const;

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "User and Customer Research",
    items: [
      "Voice of Customer",
      "NPS",
      "CSAT",
      "Complaints analysis",
      "Qualitative insights",
      "Stakeholder research",
    ],
  },
  {
    category: "Experience and Service Design",
    items: [
      "Journey mapping",
      "Personas",
      "Service blueprints",
      "Pain-point analysis",
      "As-Is and To-Be journeys",
    ],
  },
  {
    category: "Product and Solution Design",
    items: [
      "Requirements",
      "Workflows",
      "Dashboards",
      "Digital tools",
      "Prioritisation",
      "Prototyping",
    ],
  },
  {
    category: "Systems Thinking",
    items: [
      "Cross-functional dependencies",
      "Processes",
      "Operational constraints",
      "Root-cause analysis",
    ],
  },
  {
    category: "Product and Delivery",
    items: [
      "Product ownership",
      "Stakeholder management",
      "Agile collaboration",
      "Implementation",
      "Adoption",
    ],
  },
  {
    category: "Experience Measurement",
    items: [
      "CX metrics",
      "Performance dashboards",
      "Recurring complaint analysis",
      "Continuous improvement",
    ],
  },
];

export type Qualification = {
  award: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: Qualification[] = [
  {
    award: "MSc Interaction and Experience Design",
    institution: "University of Limerick, Ireland",
    period: "September 2026 — present",
    detail:
      "Postgraduate programme in human-centred design, UX research, interaction design and the design of interactive systems, combining design thinking and HCI theory with practical experience design. Covers human cognition and behaviour, usability, user-centred and participatory design, and the evaluation of interactive and multimedia systems.",
  },
  {
    award: "BSc Business Management (Human Resources)",
    institution: "Mount Kenya University",
    period: "2016 — 2019",
  },
  {
    award: "Diploma in Business Management",
    institution: "Mount Kenya University",
    period: "2009 — 2011",
  },
];

export const certifications = [
  "UX Design",
  "Human-Centred Design Thinking",
  "Customer Experience: Journey Mapping",
  "Customer Experience: Creating Customer Personas",
  "Customer Experience Leadership",
  "Customer Service Strategy",
  "Customer Retention",
  "Agile Project Management",
  "Agile Foundations",
  "Generative AI Foundations",
];

export const beyondTheWork = {
  storytelling: {
    title: "I also tell stories for a living",
    body: [
      "Outside my professional career I have built a travel and lifestyle community through @wandermumadventures, creating short-form video and stories around travel, experiences and everyday life.",
      "My content generates over 480,000 views a month, and it has taught me how to understand an audience, find stories people relate to, communicate visually, and turn experiences into content that makes people want to engage.",
    ],
    transferable: [
      "Audience empathy",
      "Storytelling",
      "Observation",
      "Visual communication",
      "Experimentation",
      "Iteration",
      "Understanding engagement",
    ],
  },
  travel: {
    title: "Thirty countries, and a habit of asking why",
    body: [
      "Travel has taught me that there is rarely one way to experience the world. Through travelling to 30 countries I have experienced different cultures, environments, languages, social norms and ways of navigating everyday life.",
      "I have noticed how differently people move through spaces, interpret information, use services, communicate, solve problems and interact with technology depending on the context around them. That curiosity has shaped the way I approach experience design: I do not assume that my experience is the user\u2019s experience.",
    ],
    questions: [
      "Why is this designed this way?",
      "How would someone unfamiliar with this culture understand it?",
      "What feels intuitive to a local but confusing to a visitor?",
      "What behaviours are shaped by the environment?",
      "How does language or culture change the way people navigate an experience?",
    ],
    closing:
      "These are the same kinds of questions I bring into my UX and service design work. Curiosity is at the centre of how I design. Whether I am researching an enterprise customer journey, observing how someone navigates an unfamiliar service, or exploring a new city, I start with the same instinct: look closer, ask why, listen, understand the context. Because good experiences are not designed around assumptions. They are designed around people.",
  },
  newUser: {
    title: "Now I am experiencing the other side of the journey",
    body: [
      "Moving from Kenya to Ireland to begin my MSc has put me in the position of being the new user again \u2014 navigating unfamiliar systems, services, language, environments and cultural norms.",
      "It has reinforced something I already learned through travel: what feels obvious to someone familiar with a system may not feel obvious to someone experiencing it for the first time.",
    ],
  },
  msc: {
    title: "Continuing to evolve as an experience designer",
    body: [
      "I am currently pursuing an MSc in Interaction & Experience Design at the University of Limerick, deepening my practice across interaction design, UX research, service design and human-centred technology.",
      "The MSc builds on a decade of professional experience. I am bringing real-world corporate experience into academic exploration, and bringing new design and research approaches back into how I think about complex experiences.",
    ],
  },
};
