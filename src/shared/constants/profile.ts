import { RoleEnum, type Profile } from "./types";

export const profile: Profile = {
  name: "Muhammad Bagus Syahputra Tambunan",
  shortDescription: "Software Engineer, Graphic Designer",
  longDescription:
    "Software Engineer with 3+ years of professional experience specializing in frontend architecture, performance optimization, and scalable UI systems. Built and maintained high-traffic internal tools serving thousands of users across 10+ countries at Shopee. Strong track record in leading frontend modernization efforts, publishing reusable libraries, and driving engineering best practices across teams. Previously shipped Android apps with over 1 million cumulative downloads as an independent developer.",
  photo: "images/avatar.png",
  roles: [
    {
      key: RoleEnum.SOFTWARE_ENGINEER,
      label: "Software Engineer",
      emoji: "👨‍💻",
    },
    {
      key: RoleEnum.GRAPHIC_DESIGNER,
      label: "Graphic Designer",
      emoji: "🎨",
    },
  ],
  details: [
    {
      title: "Skills",
      content: [
        "Frontend: React, Vue, Next.js, TypeScript, JavaScript, HTML5, CSS3",
        "Backend: Golang, Express.js, Ruby on Rails, REST APIs",
        "Mobile: Android (Java), iOS (Swift, SwiftUI)",
        "Tools: Git, Webpack, Playwright, Redis, Linux Server",
      ],
    },
  ],
};
