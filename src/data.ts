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
    'Launch, a division within NTT DATA, is a digital engineering consultancy delivering products for Fortune 500 clients. I have been embedded long-term with HCA Healthcare, one of the largest U.S. health systems, across six major platform engagements.',
}

export const career: CareerEntry[] = [
  {
    client: 'HCA Healthcare',
    project: 'Dispute Resolution Workflow',
    role: 'Digital Engineering Supervisor',
    years: '2023 — Present',
    stack: ['.NET 9', 'ASP.NET MVC', 'EF Core', 'SQL Server', 'Azure', 'GitHub', 'Terraform', 'GitHub Copilot'],
    bullets: [
      'Lead and mentor a 12-engineer Agile team modernizing a dispute-resolution platform that processes billions of dollars in healthcare claims annually',
      'Directed the platform’s migration from on-prem hosting to Azure using Terraform IaC and automated CI/CD pipelines, delivering zero downtime to production end users',
      'Led a major refactoring and code-structure overhaul that increased unit test coverage by 20%',
      'Drove team-wide adoption of GitHub Copilot and AI-assisted code review, reducing average PR review times by 50%',
      'Remain hands-on: guided and implemented a batch-processing subsystem handling hundreds of thousands of data entries per day in .NET 9 and EF Core',
    ],
  },
  {
    client: 'HCA Healthcare',
    project: 'No Surprises Act Compliance',
    role: 'Digital Engineering Team Lead',
    years: '2023',
    stack: ['.NET 5', 'ASP.NET MVC', 'EF Core', 'SQL Server', 'GitHub'],
    bullets: [
      'Technical lead for a team of 5–8 engineers delivering federally mandated No Surprises Act functionality on an accelerated 6-month timeline; shipped on schedule',
      'Designed and led the expansion of the existing .NET application, personally implementing the bulk-import process',
      'Owned CI/CD pipelines and on-prem hosting, maintaining a monthly UAT release cadence throughout the compressed delivery window',
    ],
  },
  {
    client: 'HCA Healthcare',
    project: 'CDRA / ROSI',
    role: 'Sr. Software Developer II',
    years: '2021 — 2023',
    stack: ['.NET 6', 'Blazor', 'EF Core', 'SQL Server', 'Azure', 'GitHub'],
    bullets: [
      'Technical lead of the platform awarded “Platform of the Year” at Launch, by NTT DATA’s annual awards',
      'Led the team’s adoption of Blazor from zero prior experience, ramping 6–8 engineers to full productivity in 3 months',
      'Architected the platform using domain-centric architecture and CQRS via MediatR, improving testability and separation of concerns',
      'Promoted from senior contributor to team lead mid-engagement; owned Azure cloud hosting and deployments',
    ],
  },
  {
    client: 'HCA Healthcare',
    project: 'Denial Escalation Workflow',
    role: 'Sr. Software Developer I',
    years: '2020 — 2021',
    stack: ['.NET Core 3.0', 'ASP.NET MVC', 'EF Core', 'SQL Server', 'JavaScript', 'jQuery', 'TFS'],
    bullets: [
      'Designed and implemented a bulk data intake system handling thousands of records at once, replacing a manual workflow',
      'Partnered with UI/UX designers to translate a complex, long-standing manual business process into an intuitive web workflow',
    ],
  },
  {
    client: 'HCA Healthcare',
    project: 'Price Transparency Web App & API',
    role: 'Sr. Software Developer I',
    years: '2018 — 2020',
    stack: ['.NET Core 2.0', 'REST API', 'ASP.NET MVC', 'EF Core', 'SQL Server', 'TFS'],
    bullets: [
      'Built and delivered an executive-priority price transparency application and public REST API under a government-mandated deadline, frequently presented to top business leadership',
      'Owned production deployment and post-launch support end to end',
    ],
  },
  {
    client: 'HCA Healthcare',
    project: 'Charge Master',
    role: 'Software Developer I',
    years: '2016 — 2018',
    stack: ['.NET Framework', 'ASP.NET MVC', 'Entity Framework', 'SQL Server', 'JavaScript', 'jQuery'],
    bullets: [
      'Full-stack contributor; implemented complex frontend and backend features',
      'Designed a bulk data intake system that automated legacy processing of changes to medical procedures',
    ],
  },
  {
    client: 'Johnson & Johnson',
    project: 'Health & Wellness Solutions',
    role: 'Jr. Developer',
    years: '2015 — 2016',
    stack: ['Java', 'Log4j', 'JavaScript', 'HTML', 'CSS'],
    bullets: ['Implemented security enhancements to a complex legacy Java system'],
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
    liveLink: 'https://habitat.williamkoppelberger.dev/#/about',
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
    liveLink: 'https://habitat.williamkoppelberger.dev',
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
    liveLink: 'https://tv.williamkoppelberger.dev',
    liveLabel: 'View It Live',
  },
]

export const links = {
  email: 'koppelbw@gmail.com',
  github: 'https://github.com/koppelbw',
  linkedin: 'https://www.linkedin.com/in/william-koppelberger-5405905a/',
}
