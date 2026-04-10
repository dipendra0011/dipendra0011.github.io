import { figmaAssets } from "@/lib/figma-assets";

export type CaseStudyProcess =
  | {
      variant: "steps";
      steps: readonly { title: string; body: string }[];
    }
  | { variant: "paragraph"; text: string };

export type CaseStudyContent = {
  title: string;
  intro: string;
  tags: readonly string[];
  overviewBody: string;
  problemBody: string;
  solutionBody: string;
  process: CaseStudyProcess;
  mockupSrc: readonly string[];
  /** Full-bleed section */
  gallerySrc: string;
  galleryAlt: string;
  /** Figma 122:8 — label beside mockup CTA */
  mockupShowComingSoon?: boolean;
  moreWork: readonly { image: string; title: string; tag: string }[];
};

export const neptunesCaseStudy = {
  title: "Neptunes",
  intro:
    "I'm Dipendra. I've spent the last few years working at the intersection of design and business — leading projects, shaping user experiences, and collaborating with teams to deliver products people enjoy using. Now, I'm excited to take on new challenges where I can bring both creativity and strategy to the table.",
  tags: ["UX research", "UX ideation", "User interface"],
  overviewBody:
    "I help teams identify business opportunities and turn them into practical, user-centered solutions. From user research and strategy to UI/UX design and testing, I streamline the process to deliver products efficiently across web and mobile platforms.",
  problemBody:
    "I help teams identify business opportunities and turn them into practical, user-centered solutions. From user research and strategy to UI/UX design and testing, I streamline the process to deliver products efficiently across web and mobile platforms.",
  solutionBody:
    "I help teams identify business opportunities and turn them into practical, user-centered solutions. From user research and strategy to UI/UX design and testing, I streamline the process to deliver products efficiently across web and mobile platforms.",
  process: {
    variant: "steps",
    steps: [
      {
        title: "i. Research & Benchmarking",
        body: "Studied existing music apps (Spotify, Apple Music, JioSaavn) and gathered quick feedback from potential users to identify missing features and pain points.",
      },
      {
        title: "ii. Information Architecture",
        body: "Mapped out the core flows (searching, playing, saving) and structured the navigation for intuitive access.",
      },
      {
        title: "iii. Wireframing",
        body: "Sketched and iterated low-fidelity layouts to validate feature placement and user flows.",
      },
      {
        title: "iv. UI Design & Prototyping",
        body: "Developed high-fidelity screens in Figma, focusing on clarity, engagement, and compatibility with Flutter's design limitations.",
      },
      {
        title: "v. Testing & Iteration",
        body: "Conducted informal testing with peers, refining the audio player, navigation, and playlist flows based on feedback.",
      },
      {
        title: "vi. Handoff & Collaboration",
        body: "Delivered production-ready designs with detailed annotations, and worked closely with developers on Slack/Linear to ensure smooth integration.",
      },
    ],
  },
  mockupSrc: [
    figmaAssets.projectA,
    figmaAssets.projectB,
    figmaAssets.projectC,
    figmaAssets.projectA,
  ],
  gallerySrc: figmaAssets.gallery,
  galleryAlt: "Neptunes project showcase",
  moreWork: [
    { image: figmaAssets.projectA, title: "Service Booking", tag: "Web Design" },
    { image: figmaAssets.projectB, title: "Service Booking", tag: "Web Design" },
  ],
} as const satisfies CaseStudyContent;

export const serviceBookingCaseStudy = {
  title: "Service Booking",
  intro:
    "Service Booking App is a service scheduling platform designed for the UK market in 2024. It was created to modernize the way customers book services and how businesses manage appointments, bringing together convenience, clarity, and operational efficiency in one digital experience.",
  tags: ["UX research", "UX ideation", "User interface"],
  overviewBody:
    "I help teams identify business opportunities and turn them into practical, user-centered solutions. From user research and strategy to UI/UX design and testing, I streamline the process to deliver products efficiently across web and mobile platforms.",
  problemBody:
    "Service-based businesses often rely on disjointed booking methods that create inconvenience for users and inefficiency for providers. Customers face difficulty in finding available slots and completing bookings easily, while businesses struggle with scheduling, coordination, and managing service operations in a streamlined way.",
  solutionBody:
    "The solution was a dedicated service booking platform that simplified appointment scheduling for customers while giving businesses a clearer and more efficient way to manage bookings and service delivery. The product aimed to reduce friction, improve accessibility, and create a more dependable booking experience.",
  process: {
    variant: "paragraph",
    text: "The process started with identifying the client's goals, user needs, and market context. From there, the product flow, booking structure, and experience logic were developed to ensure the platform was intuitive, practical, and aligned with real service-business operations. The focus remained on creating a solution that was easy to use, efficient to manage, and relevant to the UK market.",
  },
  mockupSrc: [
    figmaAssets.projectA,
    figmaAssets.projectB,
    figmaAssets.projectC,
    figmaAssets.projectA,
  ],
  gallerySrc: figmaAssets.gallery,
  galleryAlt: "Service Booking project showcase",
  mockupShowComingSoon: true,
  moreWork: [
    { image: figmaAssets.projectA, title: "Neptunes", tag: "Web Design" },
    { image: figmaAssets.projectB, title: "Service Booking", tag: "Web Design" },
  ],
} as const satisfies CaseStudyContent;
