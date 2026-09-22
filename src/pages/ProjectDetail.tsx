import type { ComponentType } from "react";
import { useParams } from "react-router-dom";
import CaseStudyCapa from "./CaseStudyCapa";
import CaseStudyIot from "./CaseStudyIot";
import NotFound from "./NotFound";

const caseStudyPages: Record<string, ComponentType> = {
  "enterprise-capa-experience": CaseStudyCapa,
  "enterprise-iot-sim-experience": CaseStudyIot,
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const Page = slug ? caseStudyPages[slug] : undefined;

  if (!Page) {
    return <NotFound message="That case study does not exist." />;
  }

  return <Page />;
}
