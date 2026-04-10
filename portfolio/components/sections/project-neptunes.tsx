"use client";

import { CaseStudyPage } from "@/components/sections/case-study-page";
import { neptunesCaseStudy } from "@/lib/case-study-content";

export function ProjectNeptunesPage() {
  return <CaseStudyPage content={neptunesCaseStudy} />;
}
