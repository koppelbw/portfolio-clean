export interface CareerEntry {
  client: string
  project: string
  role: string
  years: string
  stack: string[]
  bullets: string[]
}

export const careerIntro = {
  company: 'Launch, by NTT DATA',
  years: '2015 — Present',
  blurb:
    'Launch, a division within NTT DATA, specializes in digital innovation, design, and engineering, helping Fortune 500 companies strategize, design, and ship digital products. My time with Launch has primarily been focused in the Healthcare sector, delivering high-quality software across the projects below.',
}

export const career: CareerEntry[] = [
  {
    client: 'HCA Healthcare',
    project: 'Dispute Resolution Workflow',
    role: 'Digital Engineering Supervisor',
    years: '2023 — 2026',
    stack: ['.NET 9', 'MVC', 'EF Core', 'SQL', 'GitHub', 'Azure', 'CI/CD', 'IaC', 'Copilot'],
    bullets: [
      'Mentor and Lead to a large Agile team of 12 engineers',
      'Responsible for code quality and performance oversight',
      'Led major refactoring and code structure improvements',
      'Managed migration from on-prem to cloud hosting and resources',
      'AI-driven engineering environment',
      'Modernized a high-profile process handling billions of dollars each year',
    ],
  },
  {
    client: 'HCA Healthcare',
    project: 'No Surprise Act',
    role: 'Digital Engineering Team Lead',
    years: '2023',
    stack: ['.NET 5', 'MVC', 'EF Core', 'SQL', 'GitHub'],
    bullets: [
      'Technical Lead to an Agile team of 5–8 engineers',
      'CI/CD and on-prem hosting oversight',
      'Expanded an existing .NET application on an accelerated timeline',
    ],
  },
  {
    client: 'HCA Healthcare',
    project: 'CDRA / ROSI',
    role: 'Sr. Software Developer II',
    years: '2021 — 2023',
    stack: ['.NET 6', 'Blazor', 'EF Core', 'SQL', 'GitHub', 'Azure'],
    bullets: [
      '“Platform of the Year” — Launch, by NTT DATA, Awards Celebration',
      'Mentored, then became Lead of, the Agile team',
      'Took on the large task of learning a new technology: Blazor',
      'Implemented Domain-Centric Architecture and CQRS via MediatR',
      'Azure cloud hosting oversight',
    ],
  },
  {
    client: 'HCA Healthcare',
    project: 'Denial Escalation Workflow',
    role: 'Sr. Software Developer I',
    years: '2020 — 2021',
    stack: ['.NET Core 3.0', 'MVC', 'EF Core', 'SQL', 'JavaScript', 'jQuery', 'TFS'],
    bullets: [
      'Full-stack technical contributor',
      'Designed and implemented a bulk data intake system',
      'Collaborated closely with UI/UX designers on a challenging UI adaptation of an existing business process',
    ],
  },
  {
    client: 'HCA Healthcare',
    project: 'Price Transparency Web App & API',
    role: 'Sr. Software Developer I',
    years: '2018 — 2020',
    stack: ['.NET Core 2.0', 'REST API', 'MVC', 'EF Core', 'SQL', 'TFS'],
    bullets: [
      'Full-stack technical contributor',
      'Production deployment and support responsibilities',
      'Delivered a high-profile solution of critical importance and time sensitivity to top business leadership',
    ],
  },
  {
    client: 'HCA Healthcare',
    project: 'Charge Master',
    role: 'Software Developer I',
    years: '2016 — 2018',
    stack: ['.NET Framework', 'MVC', 'EF', 'SQL', 'JavaScript', 'jQuery'],
    bullets: [
      'Front-end and back-end technical contributor',
      'Designed and implemented a bulk data intake system',
    ],
  },
  {
    client: 'Johnson & Johnson',
    project: 'Health and Wellness Solutions',
    role: 'Jr. Developer',
    years: '2015 — 2016',
    stack: ['Java', 'Log4J', 'JavaScript', 'HTML', 'CSS'],
    bullets: ['Implemented a security enhancement to a challenging legacy system'],
  },
]

export interface Project {
  name: string
  tagline: string
  description: string
  stack: string[]
  link: string
  linkLabel: string
  liveLink?: string
  liveLabel?: string
}

export const projects: Project[] = [
  {
    name: 'ItemCatalogue API',
    tagline: 'Clean Architecture .NET Web API',
    description:
      'A home-inventory platform built as an ASP.NET Core 10 Web API with a five-project Clean/Hexagonal Architecture (Domain, Application, Persistence, Infrastructure, API). EF Core over SQL Server with an SSDT database project and schema-drift gates, Azure Blob picture storage, OpenTelemetry observability, ~400 xUnit tests with Testcontainers, and GitHub Actions CI/CD deploying to Azure.',
    stack: ['C#', 'ASP.NET Core 10', 'EF Core', 'SQL Server', 'Azure', 'xUnit', 'Docker', 'GitHub Actions', 'Agentic AI'],
    link: 'https://github.com/koppelbw/ItemCatalogue',
    linkLabel: 'View Source',
    liveLink: 'https://purple-tree-02473b20f.7.azurestaticapps.net/#/about',
    liveLabel: 'About',
  },
  {
    name: 'Habitat — Houseview UI',
    tagline: '3D isometric dollhouse frontend',
    description:
      'A Sims-style isometric 3D frontend for the ItemCatalogue API. Every location renders as a building in a neighbourhood; the active one unfolds into a dollhouse with rooms, doors, stairs, and containers modeled at real-inch scale. Includes a Claude-powered AI assistant that answers questions about your inventory and deep-links into the 3D scene, plus asynchronous bulk CSV import built on Azure Storage Queues and Functions.',
    stack: ['React', 'TypeScript', 'react-three-fiber', 'GSAP', 'TanStack Query', 'Zod', 'Vite', 'Agentic AI'],
    link: 'https://github.com/koppelbw/ItemCatalogue/tree/master/houseview',
    linkLabel: 'View Source',
    liveLink: 'https://purple-tree-02473b20f.7.azurestaticapps.net/',
    liveLabel: 'View It Live',
  },
  {
    name: 'WK-TV — Portfolio',
    tagline: 'Retro CRT-television portfolio',
    description:
      'An alternative fun take on my personal portfolio: a retro CRT television you channel-surf where the sections are TV channels. Built as a single-page React app and deployed to Azure Static Web Apps with GitHub-linked CI/CD.',
    stack: ['React 19', 'TypeScript', 'Vite', 'CSS', 'Azure Static Web Apps', 'GitHub Actions', 'Agentic AI'],
    link: 'https://github.com/koppelbw/portfolio-tv',
    linkLabel: 'View Source',
    liveLink: 'https://ashy-cliff-0a111680f.7.azurestaticapps.net/',
    liveLabel: 'View It Live',
  },
]

export const links = {
  email: 'koppelbw@gmail.com',
  github: 'https://github.com/koppelbw',
  linkedin: 'https://www.linkedin.com/in/william-koppelberger-5405905a/',
}
