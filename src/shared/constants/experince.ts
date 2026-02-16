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
  reactStack,
  redisStack,
  rubyOnRailsStack,
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
          "Work as a full stack engineer with a primary focus on frontend development while handling backend tasks when needed.",
          "Developed and maintained core internal tools for the Marketplace Order team, improving operational efficiency for thousands of internal users across 10+ countries.",
          "Drive engineering best practices by publishing internal libraries, writing comprehensive documentation, and conducting regular code reviews to ensure code quality.",
          "Developed multiple MCP servers, custom agent skills, and rule configurations in Cursor to enhance AI-assisted development workflows."
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
          "Architected and implemented frontend solutions for internal web tools used across multiple departments, enhancing system security and observability.",
          "Developed custom automation tools and reusable components that streamlined deployment and testing processes across engineering teams.",
          "Led internal research initiatives to modernization the codebase, successfully driving the adoption of standardized UI patterns and new libraries to boost productivity.",
          "Resolved critical bugs and provided on-call support to ensure continuous system availability."
        ],
      },
    ],
    stacks: [reactStack, vueStack, nextJsStack],
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
      "Participated in a 6-months training program that covers software engineering fundamentals and best coding practices on various tech stacks in full-stack web development.",
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
      "Built my own design studio team, where I served as both designer and programmer.",
    details: [
      {
        descriptions: [
          "Designed, engineered, and published multiple entertainment applications on the Google Play Store, achieving over 1 million cumulative downloads.",
          "Managed the entire application lifecycle (SDLC), from initial concept and UI design to release and post-launch maintenance.",
          "Optimized app performance to ensure stability across a wide range of Android devices, maintaining a crash-free user rate of >99%.",
          "Analyzed user feedback and engagement metrics to iterate on features and improve user retention.",
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
          "Worked as a full-stack developer building and maintaining internal business applications.",
          "Collaborated with cross-functional teams to design and deliver features used by multiple departments.",
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
  // {
  //   role: RoleEnum.SOFTWARE_ENGINEER,
  //   company: "Yayasan Anak Bangsa Bisa by GoTo",
  //   logo: "images/icon-company.png",
  //   position: "Generasi Gigih 2021 Participant - Frontend Engineer Path (Intermediate Level)",
  //   description: "Completed an intensive programming bootcamp covering the fundamental skills needed to become a frontend engineer.",
  //   stacks: [reactStack],
  //   startDate: new Date("2021-05-01"),
  //   endDate: new Date("2021-09-30"),
  // },
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "University of North Sumatra",
    logo: "images/icon-company.png",
    position: "Laboratory Assistant",
    description:
      "Teaching and assisting programming classes to college students.",
    details: [
      {
        title: "Teaching Subjects:",
        descriptions: [
          "Teach Advanced Object-Oriented Programming using Java from February 2020 to June 2020.",
          "Teach Programming Basics using C from October 2020 to January 2021.",
        ],
      },
      {
        title: "What I Do:",
        descriptions: [
          "Prepare materials, program codes, quizzes, and exam questions for students.",
          "Teaching programming courses.",
          "Help students understand the material, assignments, and projects from the lecturer.",
          "Evaluate student learning outcomes through quizzes and exams.",
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
      "Make stickers, themes, and animated stickers for LINE Creators Market.",
    details: [
      {
        title: "What I Do:",
        descriptions: [
          "Make stickers including static stickers, animated stickers, animated sound stickers.",
          "Make themes.",
        ],
      },
      {
        title: "Achievements:",
        descriptions: [
          "Won MVP on LINE Creators Market for achieving the highest sales in September 2018.",
          "Selected as one of the winners to visit LINE Office in Tokyo.",
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
