export const METADATA = {
  author: "Prakhar",
  title: "Portfolio | Prakhar",
  description:
    "Prakhar is a passionate Full-Stack Developer, dedicated to building modern web applications and solving real-world problems with code.",
  siteUrl: "https://github.com/paradox-prakhar",
  twitterHandle: "",
  keywords: [
    "Prakhar",
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image: "",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A passionate Full-Stack Developer",
  "I build things for the web",
  "I create modern and scalable apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: prakhar@example.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/paradox-prakhar/",
  },
  {
    name: "github",
    url: "https://github.com/paradox-prakhar",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/paradox.prakhar/",
  },
  {
    name: "twitter",
    url: "https://x.com/paradox_prakhar",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "cursor", "sanity"],
};

export const PROJECTS = [
  {
    name: "CampusChoice",
    imageKey: "campuschoice",
    description: "Helping students make the right campus decisions 🎓",
    gradient: ["#6366F1", "#8B5CF6"],
    url: "https://github.com/paradox-prakhar/CampusChoice",
    tech: ["typescript", "react", "nextjs", "tailwindcss"],
  },
  {
    name: "CarbonView",
    imageKey: "carbonview",
    description: "Track and visualize carbon emissions 🌿",
    gradient: ["#10B981", "#059669"],
    url: "https://github.com/paradox-prakhar/carbonview",
    tech: ["typescript", "react", "nextjs", "tailwindcss"],
  },
  {
    name: "SRM System",
    imageKey: "srm-system",
    description: "Student resource management made easy 📚",
    gradient: ["#3B82F6", "#1D4ED8"],
    url: "https://github.com/paradox-prakhar/srm-system",
    tech: ["javascript", "react", "nodejs"],
  },
  {
    name: "Tic-Tac-Toe",
    imageKey: "tic-tac-toe",
    description: "Classic game with a modern twist 🎮",
    gradient: ["#F59E0B", "#D97706"],
    url: "https://github.com/paradox-prakhar/Tic-tac-toe",
    tech: ["javascript", "react"],
  },
];

export const WORK_CONTENTS = {
  PROJECTS: [
    {
      title: "Open Source & Personal Projects",
      description:
        "I'm a passionate developer who loves building full-stack web applications. From student platforms to environmental tools, I focus on creating impactful solutions with modern technologies like TypeScript, React, and Next.js.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Building cool stuff on the internet 🚀
        </div>
      ),
    },
    {
      title: "CampusChoice",
      description:
        "CampusChoice helps students make informed decisions about their campus and academic choices. Built with TypeScript and Next.js, it features a modern UI and data-driven insights.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full-Stack Developer
        </div>
      ),
    },
    {
      title: "CarbonView",
      description:
        "CarbonView is a carbon emission tracking and visualization platform. It enables users to monitor, analyze, and reduce their carbon footprint through intuitive dashboards and real-time data.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full-Stack Developer
        </div>
      ),
    },
  ],
};

export const GTAG = "";
