// Single source of truth for every piece of content on the site.
// Edit here — the components read from this file and never hardcode copy.

export const profile = {
  name: 'Rahul Nishad',
  firstName: 'Rahul',
  role: 'Software Development Engineer 2',
  company: 'Policybazaar',
  location: 'India',
  tagline: 'I build products people actually use.',
  blurb:
    'Full-stack and React Native engineer with 5 years of shipping production software — from a UAE insurance app on the App Store to a web platform serving 200K+ customers. I like owning things end to end: architecture, release, QA, and the 2 a.m. production bug.',
  about: [
    'I currently own the Policybazaar UAE iOS and Android apps end to end — development, release cycles, QA planning, and production issue resolution. Most recently I migrated the app to React Native’s new architecture and moved OTA delivery from CodePush to Expo EAS Updates.',
    'Before that I led Wiom’s web platform across teams, where the coupon system I designed cut customer churn in half and the internal test-case generator I built halved our UAT time. I care about the boring wins — a sharded query that returns in 40ms, an auth flow that stops hammering the API.',
    'Outside of work I’m a competitive programming regular: 1000+ DSA problems solved, 3★ on CodeChef, and 250+ LeetCode problems weighted toward medium and hard.',
  ],
  // Used to compute the "years shipping" stat so it never goes stale.
  careerStart: '2021-08-01',
}

export const contact = {
  email: 'rahulnishadhandia@gmail.com',
  phone: '+91 78808 93841',
  phoneHref: 'tel:+917880893841',
  github: 'https://github.com/rahulnishad96',
  linkedin: 'https://www.linkedin.com/in/rahulnishad96',
  // TODO: verify these two handles — assumed to match the GitHub/LinkedIn handle.
  leetcode: 'https://leetcode.com/u/rahulnishad96',
  codechef: 'https://www.codechef.com/users/rahulnishad96',
  // Drop the PDF at public/resume.pdf to make this link live.
  resume: '/resume.pdf',
}

// The hero prepends a computed "years shipping" stat derived from
// profile.careerStart, so these three round the row out to four.
export const stats = [
  { value: '200K+', label: 'Customers on platforms I built' },
  { value: '100K+', label: 'Daily visits on Wiom Net' },
  { value: '1000+', label: 'DSA problems solved' },
]

export const experience = [
  {
    company: 'Policybazaar',
    role: 'Software Development Engineer 2',
    period: 'Dec 2024 — Present',
    current: true,
    summary:
      'Sole owner of the Policybazaar UAE mobile apps across both platforms.',
    highlights: [
      'Independently handled end-to-end development, release cycles, QA planning, and production issue resolution for the UAE iOS and Android apps.',
      'Migrated the app and its npm libraries to React Native’s new architecture, and moved OTA delivery from CodePush to Expo EAS Updates for faster, more reliable releases.',
      'Integrated WebEngage, AppsFlyer (with OneLink), and Firebase — Firestore, Crashlytics, and Cloud Messaging — to power engagement, deep linking, and push notifications.',
      'Rewrote the entire app from JavaScript to TypeScript with Zod, React Query, and Ky, completed the full Expo migration, and added end-to-end test automation for critical flows.',
    ],
    stack: [
      'React Native',
      'TypeScript',
      'Expo',
      'Zod',
      'React Query',
      'Ky',
      'Firebase',
      'AppsFlyer',
      'WebEngage',
    ],
  },
  {
    company: 'Wiom',
    role: 'Full Stack Developer',
    period: 'Oct 2022 — Nov 2024',
    summary:
      'Led the web platform across teams for a 200K+ customer ISP business.',
    highlights: [
      'Led the web app across teams, serving 200K+ customers with custom access control, journey tracking, ticketing, and router inventory management.',
      'Designed and shipped an end-to-end coupon system with coupon sharing for both new and existing customers. Customer churn dropped by 50%.',
      'Built and ran Wiom Net on the MERN stack as part of PM-WANI Wi-Fi shareability, with plan selection and payments — over 100K daily visits.',
      'Engineered a test-case scenario generator in Next.js and Node.js that automated test-case creation and cut testing and UAT time by 50%.',
      'Optimized performance by sharding the SQL database, bringing query and API times down.',
      'Moved authentication to JWT, meaningfully reducing API call volume.',
      'Integrated the Juspay payment gateway into the customer app.',
    ],
    stack: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'SQL',
      'JWT',
      'Juspay',
    ],
  },
  {
    company: 'Betaflux',
    role: 'Software Engineer',
    period: 'Aug 2021 — Sep 2022',
    summary: 'Client-facing product work across web builds and feature teams.',
    highlights: [
      'Rebuilt Betaflux’s website from scratch in Next.js with animated pages, a reworked user experience, and optimized load times.',
      'Built DonateCart on the MERN stack — plan selection, cart, rewards, and payments.',
      'Contributed features and bug fixes to client projects including Simpl, Ultraviolette, and TabSquare.',
    ],
    stack: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Express'],
  },
]

export const education = {
  school: 'Rajkiya Engineering College Sonbhadra',
  degree: 'B.Tech, Computer Science and Engineering',
  period: 'Jun 2017 — Jul 2021',
  location: 'Sonbhadra, Uttar Pradesh, India',
}

export const skills = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'C++', 'Java', 'C#', 'C', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend & Mobile',
    items: [
      'React.js',
      'Next.js',
      'React Native',
      'Expo',
      'Redux',
      'React Query',
      'Zod',
      'Angular',
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      'Node.js',
      'Express',
      'MongoDB',
      'DynamoDB',
      'SQL',
      'MS SQL Server',
      'REST API',
      'JWT',
    ],
  },
  {
    title: 'Platform & Tooling',
    items: ['AWS', 'Firebase', 'CI/CD', 'Git', 'Husky', 'Linux', 'Postman', 'Figma'],
  },
]

export const projects = [
  {
    name: 'Goer',
    blurb:
      'A cross-platform app for capturing experiences — add photos, link a Google Location, and share the result as a web-viewable page.',
    stack: ['React Native', 'Expo', 'Google Places', 'Firebase'],
    accent: 'violet',
  },
  {
    name: 'Matrimonial Recommendation System',
    blurb:
      'A matrimonial site with smart match recommendations and rich search, built on React and Firebase.',
    stack: ['React.js', 'Firebase', 'Recommendations'],
    accent: 'cyan',
  },
]

export const achievements = [
  {
    metric: '1000+',
    title: 'DSA problems solved',
    detail: 'Across multiple competitive programming platforms.',
  },
  {
    metric: '1707',
    title: '3★ on CodeChef',
    detail: 'Peak rating across rated long and short contests.',
    href: contact.codechef,
  },
  {
    metric: '250+',
    title: 'LeetCode problems',
    detail: '80% of them at medium and hard difficulty.',
    href: contact.leetcode,
  },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
