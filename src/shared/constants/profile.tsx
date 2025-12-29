import { RoleEnum, type Profile } from "./types";

export const profile: Profile = {
  name: "Muhammad Bagus Syahputra Tambunan",
  shortDescription: "Software Engineer, Graphic Designer",
  longDescription: "Software Engineer with strong expertise in frontend architecture, full-stack development, and mobile engineering. Currently optimizing high-traffic internal tools at Shopee. Proven track record of building scalable products independently, including Android apps with over 1 million downloads. Passionate about engineering efficiency, automation, and maintaining clean, maintainable codebases.",
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
        "Frontend Web Development: React, Vue, Next Js",
        "Backend Development: Ruby on Rails, Golang, Express Js",
        "Mobile Development: Java, Swift"
      ]
    }
  ]
};
