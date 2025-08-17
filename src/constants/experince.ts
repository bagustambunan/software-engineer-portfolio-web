import { reactStack } from "./stack";
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
          "Develop and maintain Shopee's internal applications.",
          "Handled error reports, bug fixes, and provided on-call support.",
          "Worked on business features and technical projects.",
          "Collaborated with cross-functional teams.",
          "Conduct multiple research initiatives to contribute to the team, including automating repetitive tasks, enhancing user experience, standardizing documentation, and exploring the use of new libraries."
        ],
      },
    ],
    stacks: [
      reactStack,
    ],
    startDate: new Date("2022-12-01"),
  },
];