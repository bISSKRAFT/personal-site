/**
 * ALL SITE CONTENT LIVES HERE.
 * ----------------------------
 * Everything below is placeholder data. Replace the name, contact details,
 * CV entries and project links with your own, then run `npm run dev` to preview.
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

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Project {
  index: string;
  name: string;
  description: string;
  status: 'ONLINE' | 'IN DEV' | 'ARCHIVED';
  tags: string[];
  live?: string;
  source?: string;
}

export const site = {
  // Identity
  name: 'Riley Nova',
  initials: 'RN',
  role: 'Full-Stack Developer // Creative Technologist',
  tagline: 'I build fast, resilient interfaces for messy, interesting problems.',
  motto: 'Treat the browser as a canvas and the codebase as a city.',
  bio: 'Developer and design-systems nerd focused on the seam between performance and personality. I ship production web apps, tinker with rendering pipelines, and care a lot about the details you feel but never notice.',
  location: 'Berlin, DE — Remote',
  timezone: 'Europe/Berlin',
  availability: 'OPEN FOR CONTRACT WORK',
  clearance: 'LEVEL 04 // NETRUNNER',
  email: 'hello@example.com',
  // No phone number is stored in this repo. This is a decorative token only:
  // it is not derived from a real number and cannot be decrypted.
  commsMask: '+██ ███ ███ ██▓▓',
  commsKey: '0x7F2A:9C44:0E1B:3D68',
  languages: 'English (native), German (fluent)',
  interests: ['Interface engineering', 'Generative art', 'Synthwave', 'Urban photography'],

  socials: [
    { label: 'GitHub', handle: '@your-handle', url: 'https://github.com/' },
    { label: 'LinkedIn', handle: '/in/your-handle', url: 'https://www.linkedin.com/' },
    { label: 'Bluesky', handle: '@your-handle', url: 'https://bsky.app/' },
  ] satisfies SocialLink[],

  cv: {
    experience: [
      {
        role: 'Senior Full-Stack Engineer',
        company: 'Helix Dynamics',
        period: '2022 — PRESENT',
        location: 'Remote',
        summary: 'Lead engineer for a real-time analytics platform used by 40+ enterprise teams.',
        points: [
          'Rebuilt the ingestion pipeline in Rust, cutting p95 latency by 68%.',
          'Designed a composable design system adopted across six product teams.',
          'Mentored four engineers and introduced automated accessibility testing.',
        ],
        stack: ['TypeScript', 'Rust', 'Astro', 'PostgreSQL'],
      },
      {
        role: 'Frontend Engineer',
        company: 'Nightline Labs',
        period: '2019 — 2022',
        location: 'Berlin, DE',
        summary: 'Owned the customer-facing dashboard and its performance budget.',
        points: [
          'Shipped a component library that cut feature delivery time in half.',
          'Reduced initial bundle size from 1.4 MB to 280 KB with code splitting.',
          'Built an internal tool for visualizing live event streams.',
        ],
        stack: ['React', 'TypeScript', 'GraphQL', 'WebGL'],
      },
      {
        role: 'Software Engineering Intern',
        company: 'Gridworks',
        period: '2018 — 2019',
        location: 'Munich, DE',
        summary: 'Supported the platform team on internal tooling and test infrastructure.',
        points: [
          'Automated release checks for 12 microservices.',
          'Wrote the first end-to-end test suite for the billing portal.',
        ],
        stack: ['Python', 'Docker', 'Jenkins'],
      },
    ] satisfies Experience[],

    education: [
      {
        degree: 'B.Sc. Computer Science',
        school: 'Technical University of Munich',
        period: '2015 — 2019',
        detail: 'Thesis: real-time rendering of large graph structures in the browser.',
      },
      {
        degree: 'CKA — Certified Kubernetes Administrator',
        school: 'Cloud Native Computing Foundation',
        period: '2023',
        detail: 'Cluster operations, networking and workload orchestration.',
      },
    ] satisfies Education[],

    skills: [
      {
        category: 'LANGUAGES',
        skills: [
          { name: 'TypeScript / JavaScript', level: 94 },
          { name: 'Python', level: 85 },
          { name: 'Rust', level: 68 },
          { name: 'SQL', level: 82 },
        ],
      },
      {
        category: 'INTERFACE',
        skills: [
          { name: 'Astro / HTML / CSS', level: 93 },
          { name: 'React', level: 88 },
          { name: 'Design systems', level: 90 },
          { name: 'WebGL / Canvas', level: 66 },
        ],
      },
      {
        category: 'SYSTEMS',
        skills: [
          { name: 'Node.js', level: 88 },
          { name: 'PostgreSQL', level: 82 },
          { name: 'Docker / Kubernetes', level: 78 },
          { name: 'AWS / GCP', level: 72 },
        ],
      },
    ] satisfies SkillGroup[],
  },

  projects: [
    {
      index: '01',
      name: 'NEURAL_DECK',
      description:
        'A real-time telemetry dashboard for distributed sensor networks, with live maps, alerting and offline-first sync.',
      status: 'ONLINE',
      tags: ['TypeScript', 'WebGL', 'WebSockets'],
      live: 'https://example.com/neural-deck',
      source: 'https://github.com/',
    },
    {
      index: '02',
      name: 'GHOST_PROTOCOL',
      description:
        'A privacy-first authentication toolkit with passkeys, encrypted session storage and a tiny integration surface.',
      status: 'IN DEV',
      tags: ['Rust', 'WebAuthn', 'SQL'],
      source: 'https://github.com/',
    },
    {
      index: '03',
      name: 'CHROME_OSINT',
      description:
        'Interactive data visualizations that turn messy public datasets into explorable, performant stories.',
      status: 'ONLINE',
      tags: ['D3.js', 'Astro', 'Data'],
      live: 'https://example.com/chrome-osint',
      source: 'https://github.com/',
    },
    {
      index: '04',
      name: 'SHARD_ARCHIVE',
      description:
        'A headless publishing setup for technical writing, built around local-first editing and instant previews.',
      status: 'ARCHIVED',
      tags: ['Astro', 'Markdown', 'Edge'],
      source: 'https://github.com/',
    },
  ] satisfies Project[],
};
