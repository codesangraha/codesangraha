// src/data/site.js

export const NAV = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Team", to: "/team" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

// --- replace your SERVICES with this richer list ---
export const SERVICES = [
  { id: "web",     title: "Website Development", desc: "Sleek, lightning-fast sites designed to rank and impress.", icon: "💻" },
  { id: "webapp",  title: "Web App Development", desc: "Smart, secure web apps that power your business.", icon: "🧩" },
  { id: "mobile",  title: "Mobile Apps",         desc: "One app, every device — iOS & Android covered.", icon: "📱" },
  { id: "custom",  title: "Custom Software",     desc: "Tailored solutions that fit your workflow perfectly. APIs, workflows, data pipelines.", icon: "⚙️" },
  { id: "commerce",title: "E-commerce",          desc: "Modern storefronts that sell and scale with ease.", icon: "🛒" },
  { id: "devops",  title: "Cloud & DevOps",      desc: "Reliable cloud setups for smooth, continuous delivery.", icon: "☁️" },
  { id: "design",  title: "UI/UX Design",        desc: "Accessible, clean product design.", icon: "🎨" },
];

// --- add this new detailed content (keep it under your exports) ---
export const SERVICES_DETAILS = {
  web: {
    highlights: ["Next-gen performance", "SEO foundations", "CMS ready"],
    features: [
      "Static/SSR with React + Vite",
      "Schema & OG tags, sitemaps",
      "Content management (Headless CMS)",
      "Analytics & event tracking",
      "Accessibility (WCAG) & best practices",
    ],
    tech: ["React", "Vite", "Tailwind", "Node", "Cloud/Vercel"],
  },
  webapp: {
    highlights: ["Internal tools", "Client portals", "Admin dashboards"],
    features: [
      "Auth, RBAC, and session security",
      "Tables, filters, exports",
      "Charts & reporting",
      "Role-based features & audit logs",
      "Multi-tenant architecture (as needed)",
    ],
    tech: ["React", "Node/Django", "Postgres", "Redis"],
  },
  mobile: {
    highlights: ["Cross-platform", "Native feel", "Fast delivery"],
    features: [
      "Single codebase for iOS & Android",
      "Offline-first patterns",
      "Push notifications",
      "App Store & Play Store support",
      "Crash analytics and A/B flags",
    ],
    tech: ["React Native / Expo", "TypeScript", "Firebase/REST"],
  },
  custom: {
    highlights: ["Integrations", "Workflows", "Data pipelines"],
    features: [
      "REST/GraphQL APIs",
      "Background jobs & queues",
      "3rd-party integrations (Stripe, etc.)",
      "Role-based dashboards",
      "Documentation & runbooks",
    ],
    tech: ["Node/Nest", "Django", "PostgreSQL", "Docker"],
  },
  commerce: {
    highlights: ["Headless", "Checkout", "Analytics"],
    features: [
      "Product & inventory",
      "Checkout with Stripe",
      "Coupons & subscriptions",
      "Order management",
      "Performance & SEO for PDP/PLP",
    ],
    tech: ["React", "Stripe", "Postgres", "Cloud/Vercel"],
  },
  devops: {
    highlights: ["CI/CD", "Observability", "Uptime"],
    features: [
      "Dockerized services",
      "Pipelines & preview deployments",
      "Logs, metrics, tracing",
      "Zero-downtime rollouts",
      "Cost & performance reviews",
    ],
    tech: ["Docker", "NGINX", "GitHub Actions", "Vercel/AWS"],
  },
  design: {
    highlights: ["Design systems", "UX flows", "Prototype"],
    features: [
      "Wireframes → UI → prototypes",
      "Tokenized design system",
      "Component guidelines",
      "Usability testing",
      "Handoff to engineering",
    ],
    tech: ["Figma", "Design Tokens", "Storybook (optional)"],
  },
};

// // --- add a short services FAQ ---
// export const SERVICES_FAQ = [
//   { q: "How do we start?", a: "We do a quick discovery call, define scope, and share a plan with timeline & cost." },
//   { q: "Fixed price or retainer?", a: "Both. Clear feature sets → fixed price. Evolving products → sprint retainer." },
//   { q: "Do you provide support after launch?", a: "Yes. We can offer maintenance retainers or ad-hoc support." },
//   { q: "Who owns the code & designs?", a: "You do — everything is delivered to your org with docs." },
// ];


// --- replace this whole PROJECTS array ---
export const PROJECTS = [
  {
    title: "RupeSangraha",
    tag: "Fintech",
    cover: "/assets/cs13.jpg",
    summary: "Personal finance web app with bank feeds and budgeting.",
    tech: ["React", "Node", "PostgreSQL", "Tailwind", "CI/CD"],
    results: [
      "Onboarded 12k users in 3 months",
      "Support tickets down 38%",
      "Page speed score from 56 → 96",
    ],
    metrics: { users: "12k+", uptime: "99.95%", tti: "1.2s" },
    url: "",
  },
  {
    title: "SikshaSangraha",
    tag: "EdTech",
    cover: "/assets/cs15.jpg",
    summary: "Learning platform with live classes and quizzes.",
    tech: ["React", "Django", "Redis", "Tailwind"],
    results: [
      "Course completion up 22%",
      "Time-to-first-byte cut by 40%",
      "Admin time saved ~10h/week",
    ],
    metrics: { courses: "1.8k", latency: "140ms", scale: "Multi-tenant" },
    url: "",
  },
  {
    title: "ShopSangraha",
    tag: "E-commerce",
    cover: "/assets/cs16.jpg",
    summary: "Headless storefront with checkout and analytics.",
    tech: ["React", "Node", "Stripe", "Postgres", "Docker"],
    results: [
      "Conversion rate +18%",
      "Cart abandonment −24%",
      "Zero-downtime releases",
    ],
    metrics: { conv: "+18%", aov: "+12%", uptime: "99.99%" },
    url: "",
  },
  // add more later using /src/assets/cs6.jpg, cs7.jpg, ...
];


export const TESTIMONIALS = [
  { name: "Harendra B. Rai", role: "Director, Baraha Montessori Academy", quote: "Reliable team, smooth communication and Easy Payment Plan." },
  { name: "Kabin Magar", role: "Proprietor, Atmaranjan Outlet & Cafe", quote: "Great Team, On-Time Sevice, Proper Features Feedback Implementation." },
  { name: "Nabin Rai", role: "Founder, Kirat Agriculture & Livestock Pvt. Ltd", quote: "Great young talents, Custom featured software never been this easy." },
  { name: "Saroj Subedi", role: "Founder, Quiz Master", quote: "Clear estimates, Easy Communication and meets Deadline." },
];

export const COMPANY = {
  name: "Code Sangraha",
  tagline: "Building reliable software from Nepal",
  email: "codesangraha@gmail.com",
  phone: "+977-9811094277",
  address: "Dharan, Nepal",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61569846395617",
    instagram: "https://www.instagram.com/codesangraha/",
    
  },
};

/* ---- Team with socials + a short hover blurb ---- */
export const TEAM = [
  {
    name: "Muhammed Dilshad",
    role: "Co-founder • CEO",
    photo: "/assets/cs123.jpg",
    blurb: "Driving societal growth by turning technology into solutions that matter.",
    links: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
       instagram: "https://www.instagram.com/ahmedaesthetic/",
    },
  },
  {
    name: "Aryan Shakya",
    role: "Co-founder • COO • Tech Lead ",
    photo: "/assets/cs1234.jpg",
    blurb: "Guiding our tech and teams to turn big ideas into societal progress.",
    links: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
       instagram: "https://www.instagram.com/aryan.shakyaa_/",
    },
  },
  
  
];
