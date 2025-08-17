import { androidStack, reactStack } from "./stack";
import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    company: "Sea Labs Indonesia",
    logo: "images/icon-company.png",
    role: "Frontend Engineer",
    description: "Join Shopee Engineering Marketplace Order - Frontend Team.",
    details: [
      {
        descriptions: [
          "Collaborate within the Shopee Engineering Marketplace Order Frontend Team.",
          "Maintain and enhance Shopee's internal web tools.",
          "Handle bug reports, on-call support, and technical feature implementation.",
          "Drive internal research projects to improve team productivity and codebase consistency.",
          "Initiated code/UI standardization, documentation, and adoption of new libraries.",
        ],
      },
    ],
    stacks: [reactStack],
    startDate: new Date("2022-12-01"),
  },
  {
    company: "Duduu Studio",
    logo: "images/icon-company.png",
    role: "Android Developer (Self-employed)",
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
    company: "Nutrifood",
    logo: "images/icon-company.png",
    role: "Application Developer Intern",
    description: "Internship as a full-stack software engineer.",
    details: [
      {
        descriptions: [
          "Developed and maintained Nutrifood's internal applications.",
          "Collaborated with teams to develop features for cross-departmental use.",
        ],
      },
    ],
    stacks: [],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2021-12-01"),
  },
];
