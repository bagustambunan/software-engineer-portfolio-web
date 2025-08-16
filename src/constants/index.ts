import type { Profile, Project } from "./types";

export const profile: Profile = {
  name: "@bagustambunan",
  description: "Software Engineer",
  photo: "/src/assets/images/avatar.png",
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

const androidStack = {
  name: "Android",
  icon: "/src/assets/images/icon-android.webp",
};

export const projects: Project[] = [
  {
    name: "Oh My Bear Cute Stickers",
    description: "An Android app to get collection of cute stickers created by me. This app reached 1M+ downloads on Google Play Store.",
    image: "/src/assets/images/icon-oh-my-bear.png",
    link: "https://play.google.com/store/apps/details?id=com.DuduuStudio.BearSticker",
    stacks: [
      androidStack
    ],
  },
];

