import { RoleEnum, type Profile } from "./types";

export const profile: Profile = {
  name: "Muhammad Bagus Syahputra Tambunan",
  shortDescription: "Software Engineer, Graphic Designer",
  longDescription:
    "A software engineer with a strong foundation in frontend and mobile development, and proven experience in e-commerce and internal tooling. A fast learner who quickly adapts to new technologies, takes initiative, and solves problems proactively.",
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
};
