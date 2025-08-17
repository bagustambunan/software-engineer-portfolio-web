import { RoleEnum, type Profile } from "./types";

export const profile: Profile = {
  name: "@bagustambunan",
  description: "Software Engineer, Graphic Designer",
  photo: "images/avatar.png",
  details: [
    {
      title: "Name",
      content: <span>Muhammad Bagus Syahputra Tambunan.</span>,
    },
    {
      title: "About",
      content: (
        <span>
          A software engineer with a strong foundation in frontend and mobile
          development, and proven experience in e-commerce and internal tooling.
          A fast learner who quickly adapts to new technologies, takes
          initiative, and solves problems proactively.
        </span>
      ),
    },
  ],
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
