import {
  androidStack,
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
    position: "Frontend Engineer",
    details: [
      {
        descriptions: [
          "Work as part of Shopee's Marketplace Order Frontend Team, building and maintaining internal web tools used across departments.",
          "Designed and implemented frontend architectures that enhanced security, observability, and developer efficiency.",
          "Developed reusable components and automation tools that streamlined deployment and testing processes across teams.",
          "Led internal research initiatives to boost team productivity, improve codebase consistency, and modernize tools through standardized UI patterns and new library adoption.",
          "Handled error reports, bug fixes, and provided on-call support.",
          "Occasionally supported backend and DevOps tasks to ensure smooth system performance.",
        ],
      },
    ],
    stacks: [
      reactStack,
      vueStack,
      redisStack,
      typescriptStack,
      nextJsStack,
      expressJsStack,
      playwrightStack,
    ],
    startDate: new Date("2022-12-01"),
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
          "Designed, developed, and published multiple entertainment apps on the Play Store, reaching over 1M+ downloads.",
          "Managed all stages of the app lifecycle, from concept to release and maintenance.",
          "Implemented AdMob integration and optimized monetization performance.",
          "Portfolio: https://play.google.com/store/apps/dev?id=4922219957373722461",
        ],
      },
    ],
    stacks: [androidStack, javaStack],
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
