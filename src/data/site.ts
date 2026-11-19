/**
 * SITE CONTENT
 * ------------
 * Edit the values below to update the site. Section labels and decorative
 * UI copy (ticker, ID card, terminal text) live in the components.
 */

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  detail: string;
}

export interface Publication {
  title: string;
  venue: string;
  date: string;
  url: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Project {
  index: string;
  name: string;
  description: string;
  status: "ONLINE" | "IN DEV" | "ARCHIVED";
  tags: string[];
  live?: string;
  source?: string;
}

/**
 * Feature flags.
 * Flip a flag to true when the content behind it is ready to publish.
 * `projects: false` keeps section 03 in place as a sealed "access restricted"
 * shard instead of rendering the project cards below.
 */
export const features = {
  projects: false,
} as const;

export const site = {
  // Identity
  name: "Leo Donisch",
  initials: "LD",
  role: "Full-Stack Developer // Creative Technologist",
  description:
    "Frontend-focused software engineer at DATEV — Angular, TypeScript and NgRx, with backend work in Java, Spring WebFlux and MongoDB.",
  tagline: "Frontends built to be maintained, not just shipped.",
  motto: "Make it work. Make it last. Make it obvious.",
  bio:
    "Frontend-focused software engineer at DATEV, building Angular applications with TypeScript and NgRx. I test with Vitest, step into Java, reactive Spring WebFlux and MongoDB when a feature needs it, and hold an M.A. in Applied AI with published research on LLM inference optimization.",
  location: "Nuremberg, DE — Remote",
  timezone: "Europe/Berlin",
  availability: "NOT OPEN FOR WORK",
  clearance: "LEVEL 04 // NETRUNNER",
  email: "hello@example.com",
  // No phone number is stored in this repo. This is a decorative token only:
  // it is not derived from a real number and cannot be decrypted.
  commsMask: "+██ ███ ███ ██▓▓",
  commsKey: "0x7F2A:9C44:0E1B:3D68",
  languages: "German (native), English (fluent)",
  interests: [
    "Interface engineering",
    "System Design & Software Architecture",
    "Road Biking",
    "Learning",
    "Films",
  ],

  socials: [
    { label: "GitHub", handle: "@bISSKRAFT", url: "https://github.com/bISSKRAFT" },
    {
      label: "LinkedIn",
      handle: "/in/leo-donisch-009889253",
      url: "https://www.linkedin.com/in/leo-donisch-009889253/",
    },
  ] satisfies SocialLink[],

  cv: {
    experience: [
      {
        role: "Professional Software Engineer Cloud Native",
        company: "DATEV eG",
        period: "June 2024 — Present",
        location: "Nuremberg, Bavaria · Hybrid",
        summary: "Cloud-native software engineering at DATEV eG.",
        points: [],
        stack: ["Angular", "TypeScript", "NgRx", "Vitest", "Java", "Spring WebFlux", "MongoDB"],
      },
      {
        role: "Working Student, Software Development",
        company: "DATEV eG",
        period: "Oct. 2022 — June 2024",
        location: "Nuremberg, Bavaria",
        summary: "Working student in software development at DATEV eG.",
        points: [],
        stack: [],
      },
      {
        role: "Working Student, Software Development (Data & Testing)",
        company: "DATEV eG",
        period: "Mar. 2021 — Sep. 2022",
        location: "Nuremberg, Bavaria",
        summary:
          "Analyzed and evaluated usage data and created and oversaw tests in a domain-specific language project.",
        points: [],
        stack: ["Test Management", "JetBrains MPS"],
      },
      {
        role: "Bachelor's Thesis Candidate",
        company: "DATEV eG",
        period: "Sep. 2021 — Mar. 2022",
        location: "Nuremberg, Bavaria",
        summary:
          "Bachelor's thesis: identifying tax-relevant information in documents using machine learning.",
        points: [],
        stack: ["Machine Learning", "Data Science"],
      },
      {
        role: "Software Development Intern",
        company: "Siemens Digital Industries Software",
        period: "Sep. 2020 — Feb. 2021",
        location: "Nuremberg, Bavaria",
        summary:
          "Helped design and develop an application launcher with an analysis function.",
        points: [],
        stack: ["SQL", "Testing"],
      },
      {
        role: "Working Student, Software Development",
        company: "Siemens Digital Industries Software",
        period: "Mar. 2020 — Aug. 2020",
        location: "Nürnberger Land, Bavaria",
        summary: "Developed an analytics tool in a production environment.",
        points: [],
        stack: ["SQL", "Python"],
      },
    ] satisfies Experience[],

    education: [
      {
        degree:
          "M.A. — Applied Artificial Intelligence and Digital Transformation",
        school: "Hochschule Ansbach — University of Applied Sciences",
        period: "Oct. 2022 — July 2024",
        detail: "Grade: 1.2. Focus: Data Science, Machine Learning.",
      },
      {
        degree: "B.Sc. — Business Informatics",
        school: "Technische Hochschule Nürnberg Georg Simon Ohm",
        period: "Oct. 2018 — 2022",
        detail: "Bachelor's programme in Business Informatics.",
      },
    ] satisfies Education[],

    publications: [
      {
        title:
          "Inference Optimizations for Large Language Models: Effects, Challenges, and Practical Considerations",
        venue: "arXiv preprint arXiv:2408.03130",
        date: "Aug. 2024",
        url: "https://arxiv.org/abs/2408.03130",
      },
      {
        title:
          "Sentiment Analysis of Twitter Posts on COVID-19 Cultural Dimensions: Collectivist vs. Individualist",
        venue: "SOTICS 2022 — Lisbon, Portugal",
        date: "Oct. 2022",
        url: "https://www.thinkmind.org/articles/sotics_2022_1_20_60004.pdf",
      },
    ] satisfies Publication[],

    skills: [
      {
        category: "FRONTEND",
        skills: [
          { name: "Angular", level: 92 },
          { name: "TypeScript", level: 92 },
          { name: "NgRx", level: 86 },
        ],
      },
      {
        category: "TESTING",
        skills: [
          { name: "Vitest", level: 85 },
          { name: "Jest (legacy)", level: 80 },
          { name: "Spock", level: 70 },
        ],
      },
      {
        category: "BACKEND",
        skills: [
          { name: "Java", level: 76 },
          { name: "Groovy", level: 70 },
          { name: "Reactive Spring (WebFlux)", level: 74 },
          { name: "MongoDB", level: 72 },
        ],
      },
    ] satisfies SkillGroup[],
  },

  // Add real projects here, then set `features.projects` to true.
  // The section stays sealed while this array is empty.
  projects: [] as Project[],
};
