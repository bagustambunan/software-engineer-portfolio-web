import { RoleEnum, type Profile } from "./types";

export const profile: Profile = {
  name: "@bagustambunan",
  description: "Software Engineer, Graphic Designer",
  photo: "images/avatar.png",
  roles: [
    {
      key: RoleEnum.SOFTWARE_ENGINEER,
      label: "Software Engineer",
    },
    {
      key: RoleEnum.GRAPHIC_DESIGNER,
      label: "Graphic Designer",
    },
  ],
  links: [
    {
      name: "Email",
      link: "mailto:mhdbagus78@gmail.com",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/bagustambunan",
    },
    {
      name: "GitHub",
      link: "https://github.com/bagustambunan",
    },
    {
      name: "Medium",
      link: "https://bagustambunan.medium.com",
    },
  ],
};
