import { androidStack, cStack, golangStack, javaStack, reactStack, redisStack, rubyOnRailsStack, vueStack } from "./stack";
import { RoleEnum, type Experience } from "./types";

export const experiences: Experience[] = [
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "Sea Labs Indonesia",
    logo: "images/icon-company.png",
    position: "Frontend Engineer",
    description: "Join Shopee Engineering Marketplace Order - Frontend Team.",
    details: [
      {
        descriptions: [
          "Collaborate within the Shopee Engineering Marketplace Order Frontend Team.",
          "Maintain and enhance Shopee's internal web tools.",
          "Handle bug reports, on-call support, and technical feature implementation.",
          "Drive internal research projects to improve team productivity and codebase consistency.",
          "Initiated code/UI standardization, documentation, and adoption of new libraries.",
          "Sometimes doing BE and DevOps stuffs if needed."
        ],
      },
    ],
    stacks: [reactStack, vueStack, redisStack],
    startDate: new Date("2022-12-01"),
  },
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "Sea Labs Indonesia",
    logo: "images/icon-company.png",
    position: "Junior Engineer",
    description: "Participated in a 6-months training program that covers software engineering fundamentals and best coding practices on various tech stacks in full-stack web development.",
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
          "Independently developed and published entertainment apps, reaching over 1M+ downloads.",
          "Handled both design and programming of Android applications.",
          "Implemented and managed AdMob monetization strategy.",
          "Portfolio: https://play.google.com/store/apps/dev?id=4922219957373722461",
        ],
      },
    ],
    stacks: [androidStack],
    startDate: new Date("2020-07-01"),
    endDate: new Date("2022-02-01"),
  },
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "Nutrifood",
    logo: "images/icon-company.png",
    position: "Application Developer Intern",
    description: "Internship as a full-stack software engineer.",
    details: [
      {
        descriptions: [
          "Developed and maintained Nutrifood's internal applications.",
          "Collaborated with teams to develop features for cross-departmental use.",
        ],
      },
    ],
    stacks: [rubyOnRailsStack],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2021-12-01"),
  },
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "Yayasan Anak Bangsa Bisa by GoTo",
    logo: "images/icon-company.png",
    position: "Generasi Gigih 2021 Participant - Frontend Engineer Path (Intermediate Level)",
    description: "Completed an intensive programming bootcamp covering the fundamental skills needed to become a frontend engineer.",
    stacks: [reactStack],
    startDate: new Date("2021-05-01"),
    endDate: new Date("2021-09-30"),
  },
  {
    role: RoleEnum.SOFTWARE_ENGINEER,
    company: "University of North Sumatra",
    logo: "images/icon-company.png",
    position: "Laboratory Assistant",
    description: "Teaching and assisting programming classes to college students.",
    details: [
      {
        title: "Teaching Subjects:",
        descriptions: [
          "Teach Advanced Object-Oriented Programming using Java from February 2020 to June 2020.",
          "Teach Programming Basics using C from October 2020 to January 2021."
        ],
      },
      {
        title: "What I Do:",
        descriptions: [
          "Prepare materials, program codes, quizzes, and exam questions for students.",
          "Teaching programming courses.",
          "Help students understand the material, assignments, and projects from the lecturer.",
          "Evaluate student learning outcomes through quizzes and exams."
        ]
      }
    ],
    stacks: [javaStack, cStack],
    startDate: new Date("2020-02-01"),
    endDate: new Date("2021-01-31"),
  },
  {
    role: RoleEnum.GRAPHIC_DESIGNER,
    company: "LINE",
    logo: "images/icon-company.png",
    position: "LINE Sticker Creator",
    description: "Make stickers, themes, and animated stickers for LINE Creators Market.",
    details: [
      {
        title: "What I Do:",
        descriptions: [
          "Make stickers including static stickers, animated stickers, animated sound stickers.",
          "Make themes."
        ]
      },
      {
        title: "Achievements:",
        descriptions: [
          "Won MVP on LINE Creators Market for achieving the highest sales in September 2018.",
          "Selected as one of the winners to visit LINE Office in Tokyo.",
          "Won 2nd Place in LINE Creators Competition (Student Sticker Category).",
          "Won 2nd Place in LINE Creators Competition (Student Theme Category)."
        ]
      },
      {
        title: "Portfolio:",
        descriptions: [
          "Official: https://store.line.me/stickershop/author/789344/en",
          "Pencil loves Paper: https://store.line.me/stickershop/author/75954/en",
          "PECEL Stickers: https://store.line.me/stickershop/author/89968/en"
        ]
      }
    ],
    startDate: new Date("2015-09-01"),
    endDate: new Date("2020-07-31"),
  },
];
