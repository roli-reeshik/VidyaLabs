// Vidya Labs — Professional Enterprise Light. Centralized content.

export const brand = {
  name: 'Vidya Labs',
  tagline: 'We engineer robust software for complex business challenges.',
  ctaQuote: 'Get a Quote',
  ctaExplore: 'Explore Our Solutions →',
};

// Mega-menu for Services: categorized links
export const servicesMegaMenu = [
  {
    category: 'Software',
    links: [
      { label: 'Enterprise Software (ERP)', path: '/services/custom-software' },
      { label: 'SaaS', path: '/services/saas' },
      { label: 'API Integration', path: '/services/api-integration' },
      { label: 'Legacy Rescue', path: '/services/legacy-rescue' },
    ],
  },
  {
    category: 'AI/Data',
    links: [
      { label: 'Generative AI', path: '/services/generative-ai' },
      { label: 'Predictive Analytics', path: '/services/predictive-analytics' },
      { label: 'AI-Agent Development', path: '/services/ai-agents' },
    ],
  },
  {
    category: 'Infrastructure',
    links: [
      { label: 'Network Security', path: '/services/network-security' },
      { label: 'VPS Hosting', path: '/services/vps-hosting' },
      { label: 'Cloud Migration', path: '/services/cloud-migration' },
    ],
  },
  {
    category: 'Industry-Specific',
    links: [
      { label: 'EdTech (Nursing Simulations)', path: '/services/edtech' },
      { label: 'Construction Tech', path: '/services/construction-tech' },
      { label: 'Retail Automation', path: '/services/retail-automation' },
    ],
  },
];

export const nav = {
  links: [
    { label: 'Services', mega: true },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'About', path: '/about' },
  ],
};

// ——— HOME ———
export const homeHero = {
  headline: 'We Engineer Robust Software for Complex Business Challenges.',
  subheadline: 'From enterprise systems to AI-driven platforms—we deliver scalable, secure solutions that power growth.',
};

// Top 6 services for home grid (benefit-driven, with link)
export const homeServices = [
  {
    id: 'custom-software',
    title: 'Custom Software & ERP',
    description: 'Tailored enterprise systems that streamline operations and reduce total cost of ownership.',
    icon: 'Cpu',
    path: '/services/custom-software',
  },
  {
    id: 'ai-ml',
    title: 'AI & Data Science',
    description: 'Predictive analytics and ML pipelines that turn data into actionable insights.',
    icon: 'Brain',
    path: '/services/predictive-analytics',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Cloud',
    description: 'Secure VPS, cloud migration, and network design built for reliability.',
    icon: 'Network',
    path: '/services/vps-hosting',
  },
  {
    id: 'web-fullstack',
    title: 'Web & Full-Stack',
    description: 'Modern web apps and APIs with React, Node.js, and cloud-native deployment.',
    icon: 'Code2',
    path: '/services/custom-software',
  },
  {
    id: 'edtech',
    title: 'EdTech & Simulations',
    description: 'Scenario-based learning and clinical simulations for education and training.',
    icon: 'GraduationCap',
    path: '/services/edtech',
  },
  {
    id: 'retail',
    title: 'Retail & Automation',
    description: 'Smart POS, inventory, and workflow automation for retail and offices.',
    icon: 'Store',
    path: '/services/retail-automation',
  },
];

export const whyUs = {
  title: 'Why Us',
  subtitle: 'Trust signals that set us apart.',
  items: [
    {
      title: '100% IP Transfer',
      description: 'You own every line of code and every asset we deliver. No lock-in, full transparency.',
      icon: 'FileCheck',
    },
    {
      title: 'Security-First Mindset',
      description: 'Hardening, compliance checks, and best practices built into every engagement.',
      icon: 'Shield',
    },
    {
      title: 'High-Performance Infrastructure',
      description: 'Scalable, monitored systems designed for uptime and growth.',
      icon: 'Server',
    },
  ],
};

// ——— OUR DEPLOYMENT & PRICING PHILOSOPHY ———
export const deploymentPricingPhilosophy = {
  title: 'Our Deployment & Pricing Philosophy',
  pricingIntro: 'We offer Value-Driven Pricing by using modular architecture: reusable components, clear structure, and disciplined scope. The result is enterprise-grade software that is easier to maintain and more cost-effective over time.',
  localVsWeb: {
    title: 'Local vs. Web',
    local: {
      title: 'Local',
      description: 'Secure internal network hosting, works offline, one-time setup.',
    },
    web: {
      title: 'Web',
      description: 'Global 24/7 access, automatic backups, scalable on the cloud.',
    },
  },
};

// 4 FAQ items — replace with your own questions/answers as needed
export const faqItems = [
  {
    id: 'faq-1',
    question: 'How does value-driven pricing work?',
    answer: 'We use modular architecture and reusable components so we build once and adapt efficiently. That keeps development costs predictable and reduces long-term total cost of ownership while delivering high-end outcomes.',
  },
  {
    id: 'faq-2',
    question: 'Can we host on our own servers or do we need the cloud?',
    answer: 'Both. We support local intranet deployment (offline, one-time setup, secure internal hosting) and web/cloud deployment (24/7 access, automatic backups, scalable cloud). We’ll recommend the best fit for your operations.',
  },
  {
    id: 'faq-3',
    question: 'What does the typical engagement look like?',
    answer: 'We follow a clear process: Strategy & Discovery, Scope Definition, UX/UI Design, Development, QA, Deployment, and ongoing Maintenance. You get transparency at every stage and full IP transfer upon delivery.',
  },
  {
    id: 'faq-4',
    question: 'Do you offer support after launch?',
    answer: 'Yes. We offer post-launch maintenance and support options, including 24/7 where required. Our partnership continues so your system stays secure, updated, and aligned with your growth.',
  },
];

// ——— PRICING PHILOSOPHY (legacy, kept for any other refs) ———
export const pricingPhilosophy = {
  title: 'Pricing Philosophy',
  subtitle: 'High-end software at a value-driven cost.',
  body: 'Vidya Labs delivers enterprise-grade software without enterprise-grade bloat. We achieve this through modular coding practices: reusable components, clear architecture, and disciplined scope. The result is software that is easier to maintain, faster to extend, and more cost-effective over time—so you get high-end outcomes at a value-driven price.',
};

// ——— DEPLOYMENT FLEXIBILITY (Services pages) ———
export const deploymentFlexibility = {
  title: 'Deployment Flexibility',
  subtitle: 'We build for the environment that fits your operations.',
  options: [
    {
      id: 'local',
      title: 'Local Intranet',
      description: 'Offline and internal deployments. Your systems run on your own servers or private network—ideal for sensitive data, air-gapped environments, and full on-premise control.',
      icon: 'Server',
    },
    {
      id: 'web',
      title: 'Web & Cloud',
      description: 'Online and cloud-hosted solutions. Scalable, accessible from anywhere, with options for public cloud (AWS, GCP, Azure) or your preferred hosting provider.',
      icon: 'Cloud',
    },
  ],
};

// ——— CUSTOM SOFTWARE SERVICE PAGE ———
export const customSoftwarePage = {
  hero: {
    headline: 'Custom Software Development Services: Architecting Your Digital Future.',
    subheadline: 'Enterprise-grade software built for your processes, your scale, and your long-term success.',
    imagePlaceholder: 'Professional software team at work', // use HD stock image in production
  },
  executiveSummary: {
    title: 'Executive Summary',
    columns: [
      {
        title: 'Cost Control',
        description: 'Predictable spend and reduced TCO through efficient architecture and clear scope.',
      },
      {
        title: 'Scalability',
        description: 'Systems designed to grow with your business—from pilot to enterprise.',
      },
      {
        title: 'Faster Time-to-Market',
        description: 'Iterative delivery and proven processes so you launch sooner.',
      },
    ],
  },
  blueprint: {
    title: 'Our 7-Stage Blueprint',
    steps: [
      { stage: 1, title: 'Strategy & Discovery', subtitle: 'Aligning vision with execution.' },
      { stage: 2, title: 'Scope Definition', subtitle: 'The Blueprint.' },
      { stage: 3, title: 'UX/UI Design', subtitle: 'The Experience.' },
      { stage: 4, title: 'Development', subtitle: 'The Engineering.' },
      { stage: 5, title: 'Quality Assurance', subtitle: 'The Validation.' },
      { stage: 6, title: 'Deployment', subtitle: 'The Go-Live.' },
      { stage: 7, title: 'Maintenance', subtitle: 'The Partnership.' },
    ],
  },
  capabilities: {
    title: 'Our Capabilities',
    items: ['Java', 'Python', 'Node.js', 'React / Next.js', 'Cloud-Native (AWS, GCP, Azure)', 'DevOps & CI/CD', 'PostgreSQL & Data Engineering', 'API Design & Integration'],
  },
  stats: [
    { value: '55%', label: 'reduction in TCO' },
    { value: '100%', label: 'In-House Talent' },
    { value: '24/7', label: 'Support Option' },
  ],
};

// ——— CASE STUDIES (with industry + ROI for filter & detail) ———
export const caseStudies = [
  {
    id: 'school',
    industry: 'education',
    title: 'School ERP & Student Lifecycle',
    shortSummary: 'Unified platform for admissions, attendance, fees, and parent communication.',
    challenge: 'Disconnected systems for admissions, attendance, fees, and grades led to errors, delays, and poor parent communication.',
    solution: 'A unified School ERP with admissions, attendance, grade books, fee management, and parent app. Single source of truth reduced manual work and improved transparency.',
    roi: '40% faster admissions cycle; 30% improvement in fee collection efficiency; higher parent satisfaction scores.',
  },
  {
    id: 'nursing',
    industry: 'healthcare',
    title: 'Nursing Education & Clinical Simulations',
    shortSummary: 'Scenario-based clinical simulation platform for competency-based training.',
    challenge: 'Training nursing students for real-world scenarios was limited by access to live clinical settings and consistent assessment.',
    solution: 'Scenario-based clinical simulation platform: author scenarios, run simulations, and assess competency. Students practice safely; educators get clear analytics.',
    roi: 'Controlled, repeatable training; data-driven assessment; alignment with curriculum and compliance; reduced dependency on live clinical slots.',
  },
  {
    id: 'construction',
    industry: 'construction',
    title: 'Construction Material & Site Management',
    shortSummary: 'Material tracking and zero-leakage dashboards across multiple sites.',
    challenge: 'Material leakage, poor site-wise visibility, and manual tracking led to cost overruns and project delays.',
    solution: 'Material tracking and zero-leakage dashboards: site-wise inventory, purchase vs consumption, and real-time progress. Full visibility for project and finance teams.',
    roi: 'Measurable reduction in material leakage; site-level cost visibility; on-time, on-budget delivery with full audit trail.',
  },
];

export const caseStudyIndustries = [
  { value: 'all', label: 'All Industries' },
  { value: 'education', label: 'Education' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'construction', label: 'Construction' },
];

// ——— ABOUT PAGE ———
export const aboutPage = {
  hero: {
    headline: 'Driven by Logic. Guided by Value.',
    subheadline: 'We bring high-end software, AI, and data analytics to businesses of all sizes—at a cost that makes sense.',
  },
  // "Vidya Labs Story" mission block (above leadership)
  missionBlock: {
    headline: 'Democratizing Enterprise Technology.',
    body: 'Vidya Labs was founded on the principle that high-end software, AI, and secure infrastructure should be accessible to all. Whether we are deploying local on-premise servers for security or cloud-based web portals for global reach, our leadership ensures that "Logic" and "Value" remain at the heart of every line of code.',
  },
  mission: {
    title: 'Our Mission',
    body: 'We exist to democratize technology. From local retail shops and builders to large-scale nursing colleges, we deliver enterprise-grade software, AI, and data analytics at a cost that makes sense for every business.',
  },
  leadership: [
    {
      name: 'Priyanka Kumari',
      title: 'Founder & Principal Director',
      description: 'With a keen eye for operational excellence, Priyanka leads our internal teams and manages the end-to-end delivery of IT services. She ensures that every project meets our rigorous standards for quality and security, maintaining the company\'s reputation as a reliable technology partner.',
      email: 'priyanka.rolinreeshik@gmail.com',
      image: '/pk.jpeg',
    },
    {
      name: 'Rajesh Kumar',
      title: 'Chief Technical Mentor',
      description: 'Rajesh serves as the Chief IT Advisor, providing strategic technical oversight and support to ensure the platform\'s stability and growth. He contributes his expertise to lead our digital initiatives and mentor the technical team.',
      email: 'rkrajesh.pgi@gmail.com',
      image: '/rkpic.png',
    },
  ],
  problem: {
    title: 'The Problem We Solve',
    body: 'Traditional IT is often too expensive or too rigid. We bridge the gap by offering customized logic and flexible deployment—whether you need local on-premise security or cloud-based global reach.',
  },
  identity: {
    title: 'Our Identity',
    body: 'We are a team of architects, data scientists, and engineers who believe that a digital ecosystem should be as robust as a physical building. We don’t just write code; we architect solutions.',
  },
  story: {
    title: 'Our Story',
    paragraphs: [
      'Vidya Labs started with a focus on educational simulations—helping nursing colleges and schools train better with scenario-based learning and integrated ERPs.',
      'That foundation in education taught us how to build for clarity, scale, and real-world impact. We evolved into a multi-industry software powerhouse, serving retail, construction, healthcare, education, and corporate offices.',
      'Today we combine the same rigor with flexible deployment and value-driven pricing so that every organization can access the technology it needs to grow.',
    ],
  },
  coreValues: [
    {
      title: 'Integrity in Cost',
      description: 'We use lean, open-source-first architecture to keep prices low without sacrificing quality. You get enterprise outcomes without enterprise bloat.',
      icon: 'BadgeDollarSign',
    },
    {
      title: 'Scalable Intelligence',
      description: 'Every piece of software we build is AI-ready and designed to grow as your business grows. From day one, your system is built for the future.',
      icon: 'Brain',
    },
    {
      title: 'Deployment Freedom',
      description: 'We are one of the few labs that offer both local on-premise setups for high security and cloud-based web setups for global reach. Your choice, your control.',
      icon: 'Globe',
    },
  ],
  techStack: [
    { name: 'React', icon: 'Code2' },
    { name: 'Node.js', icon: 'Server' },
    { name: 'Python / Pandas', icon: 'Braces' },
    { name: 'PostgreSQL', icon: 'Database' },
    { name: 'Ubuntu VPS', icon: 'Box' },
  ],
  founder: {
    quote: 'At Vidya Labs, we don’t just write code; we architect solutions that empower businesses to work smarter, not harder.',
    photoPlaceholder: true,
  },
  industries: {
    title: 'Industry Versatility',
    subtitle: 'Sectors we have transformed.',
    sectors: [
      { name: 'Retail', icon: 'Store' },
      { name: 'Construction', icon: 'HardHat' },
      { name: 'Healthcare', icon: 'HeartPulse' },
      { name: 'Education', icon: 'GraduationCap' },
      { name: 'Corporate Offices', icon: 'Building2' },
    ],
  },
  cta: {
    title: 'Work with Our Team',
    subtitle: 'Whether you’re scaling up or just getting started, we’re here to architect the right solution for you.',
    buttonLabel: 'Get in Touch',
    buttonHref: '/#quote',
  },
};

// ——— FORMS ———
export const projectInquiryForm = {
  title: 'Project Inquiry',
  subtitle: 'Tell us about your project. Our team will respond within one business day.',
  fields: ['name', 'email', 'company', 'service', 'message'],
};

export const formSuccess = {
  title: 'Thank You',
  message: 'Your inquiry has been received. Our team will be in touch shortly.',
};

// Project Inquiry form — success card (contact form)
export const projectInquirySuccess = {
  heading: 'Project Discovery Initiated',
  subtext: 'Your inquiry is now being reviewed by our Principal Director, Priyanka Kumari, and our technical oversight team. We will reach out to you within 24 hours.',
  backToHomeLabel: 'Back to Home',
  capabilityDeckLabel: 'Download Our Capability Deck',
  capabilityDeckHref: '#', // placeholder — replace with /capability-deck.pdf or actual URL
};
