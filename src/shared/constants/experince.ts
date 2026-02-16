import {
  androidStudioStack,
  cStack,
  expressJsStack,
  golangStack,
  javascriptStack,
  javaStack,
  linuxServerStack,
  microsoftSqlStack,
  nextJsStack,
  playwrightStack,
  reactStack,
  redisStack,
  rubyOnRailsStack,
  typescriptStack,
  vueStack,
} from "./stack";
import { RoleEnum, type Experience } from "./types";

export const experiences: Experience[] = [
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "Sea Labs Indonesia",
    logo: "images/icon-company.png",
    position: "Software Engineer - Full Stack",
    details: [
      {
        descriptions: [
          "Own frontend architecture and deliver full-stack features for Shopee's Marketplace Order internal tools, serving thousands of users across 10+ countries.",
          "Lead code quality initiatives by publishing internal shared libraries, writing technical documentation, and conducting regular code reviews across the team.",
          "Build and maintain backend services in Golang and Express.js to support frontend features, ensuring end-to-end reliability.",
          "Develop custom MCP servers, agent skills, and rule configurations in Cursor to streamline AI-assisted development workflows for the engineering team.",
        ],
      },
    ],
    stacks: [
      golangStack,
      expressJsStack,
      reactStack,
      vueStack,
      nextJsStack,
    ],
    startDate: new Date("2025-09-01"),
    highlighted: true,
  },
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "Sea Labs Indonesia",
    logo: "images/icon-company.png",
    position: "Software Engineer - Front End",
    details: [
      {
        descriptions: [
          "Architected and delivered frontend solutions for high-traffic internal tools used across multiple departments, improving system security and operational observability.",
          "Built reusable component libraries and custom automation tools that streamlined deployment and testing workflows across engineering teams.",
          "Led internal research and drove the adoption of standardized UI patterns and modern libraries, accelerating frontend development productivity.",
          "Developed end-to-end testing infrastructure using Playwright, reducing manual QA effort and improving release confidence.",
          "Provided on-call support and resolved critical production bugs to maintain continuous system availability.",
        ],
      },
    ],
    stacks: [reactStack, vueStack, nextJsStack, typescriptStack, playwrightStack],
    startDate: new Date("2022-12-01"),
    endDate: new Date("2025-08-31"),
    highlighted: true,
  },
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "Sea Labs Indonesia",
    logo: "images/icon-company.png",
    position: "Junior Engineer",
    description:
      "Completed a 6-month intensive training program covering full-stack web development fundamentals, software engineering best practices, and production-level coding standards.",
    stacks: [reactStack, golangStack, redisStack],
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-11-30"),
  },
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "Duduu Studio",
    logo: "images/icon-company.png",
    position: "Android Developer (Self-employed)",
    description:
      "Founded a small design studio and handled both product design and engineering.",
    details: [
      {
        descriptions: [
          "Designed, built, and published multiple entertainment apps on Google Play Store, reaching over 1 million cumulative downloads.",
          "Managed the full application lifecycle from concept and UI design through release, post-launch updates, and maintenance.",
          "Optimized app performance across a wide range of Android devices, maintaining a crash-free user rate above 99%.",
          "Analyzed user feedback and engagement metrics to prioritize feature iterations and improve retention.",
          "Portfolio: https://play.google.com/store/apps/dev?id=4922219957373722461",
        ],
      },
    ],
    stacks: [androidStudioStack, javaStack],
    startDate: new Date("2020-07-01"),
    endDate: new Date("2022-02-01"),
    highlighted: true,
  },
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "Nutrifood",
    logo: "images/icon-company.png",
    position: "Application Developer Intern",
    details: [
      {
        descriptions: [
          "Built and maintained internal business applications as a full-stack developer using Ruby on Rails, JavaScript, and Microsoft SQL Server.",
          "Collaborated with cross-functional teams to scope, design, and deliver features used by multiple departments.",
        ],
      },
    ],
    stacks: [
      rubyOnRailsStack,
      javascriptStack,
      linuxServerStack,
      microsoftSqlStack,
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2021-12-01"),
  },
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "University of North Sumatra",
    logo: "images/icon-company.png",
    position: "Laboratory Assistant",
    description:
      "Taught and mentored college students in programming courses.",
    details: [
      {
        title: "Teaching Subjects:",
        descriptions: [
          "Advanced Object-Oriented Programming (Java) — Feb 2020 to Jun 2020.",
          "Programming Basics (C) — Oct 2020 to Jan 2021.",
        ],
      },
      {
        title: "Responsibilities:",
        descriptions: [
          "Prepared course materials, code samples, quizzes, and exam questions.",
          "Delivered lectures and hands-on programming sessions.",
          "Mentored students on assignments and projects from the lecturer.",
          "Evaluated student performance through quizzes and examinations.",
        ],
      },
    ],
    stacks: [cStack, javaStack],
    startDate: new Date("2020-02-01"),
    endDate: new Date("2021-01-31"),
  },
  {
    role: RoleEnum.GRAPHIC_DESIGNER,
    company: "LINE",
    logo: "images/icon-company.png",
    position: "LINE Sticker Creator",
    description:
      "Created and sold stickers, themes, and animated stickers on the LINE Creators Market.",
    details: [
      {
        title: "Work:",
        descriptions: [
          "Designed static stickers, animated stickers, animated sound stickers, and themes.",
        ],
      },
      {
        title: "Achievements:",
        descriptions: [
          "Won MVP on LINE Creators Market for achieving the highest sales in September 2018.",
          "Selected as a winner to visit the LINE Office in Tokyo.",
          "Won 2nd Place in LINE Creators Competition (Student Sticker Category).",
          "Won 2nd Place in LINE Creators Competition (Student Theme Category).",
        ],
      },
      {
        title: "Portfolio:",
        descriptions: [
          "Official: https://store.line.me/stickershop/author/789344/en",
          "Pencil loves Paper: https://store.line.me/stickershop/author/75954/en",
          "PECEL Stickers: https://store.line.me/stickershop/author/89968/en",
        ],
      },
    ],
    startDate: new Date("2015-09-01"),
    endDate: new Date("2020-07-31"),
  },
];
