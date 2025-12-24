import { RoleEnum, type Profile } from "./types";

export const profile: Profile = {
  name: "Muhammad Bagus Syahputra Tambunan",
  shortDescription: "Software Engineer, Graphic Designer",
  longDescription: "Software engineer specializing in frontend development with experience designing scalable frontend architectures and leading internal research to boost team productivity. Skilled in adopting modern libraries and building automation tools that streamline workflows. Highly adaptable and comfortable working across backend, mobile, full-stack, and DevOps tasks. Fast learner with a hands-on approach to mastering new technologies and delivering efficient, high-quality solutions.",
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
