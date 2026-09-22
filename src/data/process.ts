export type ProcessStep = { number: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Listen",
    body: "I start with people: their needs, behaviours, frustrations and goals.",
  },
  {
    number: "02",
    title: "Understand",
    body: "I combine qualitative and quantitative insight to understand the wider experience.",
  },
  {
    number: "03",
    title: "Map",
    body: "I visualise journeys, systems and dependencies to uncover where friction occurs.",
  },
  {
    number: "04",
    title: "Define",
    body: "I turn insights into clear problems, opportunities and requirements.",
  },
  {
    number: "05",
    title: "Design",
    body: "I collaborate with stakeholders to develop practical, human-centred solutions.",
  },
  {
    number: "06",
    title: "Test",
    body: "I gather feedback, identify what is not working and iterate.",
  },
  {
    number: "07",
    title: "Measure",
    body: "I look beyond delivery to understand adoption, experience and business impact.",
  },
];
