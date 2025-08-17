import { androidStack, pythonStack } from "./stack";
import { type Project, RoleEnum } from "./types";

export const projects: Project[] = [
  {
    name: "Oh My Bear Cute Stickers",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description: "An Android app to get collection of cute stickers created by me.",
    image: "images/project-oh-my-bear.png",
    link: "https://play.google.com/store/apps/details?id=com.DuduuStudio.BearSticker",
    details: [
      {
        title: "Achievements:",
        descriptions: ["This app reached 1M+ downloads on Google Play Store."],
      },
    ],
    stacks: [
      androidStack
    ],
  },
  {
    name: "Oh My Bear Cute Stickers (iOS)",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description: "An iOS app to get collection of cute stickers created by me.",
    image: "images/project-oh-my-bear.png",
    link: "",
    stacks: [],
  },
  {
    name: "SIGAP COVID-19 LINE Chatbot",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description: "SIGAP COVID-19 is a chatbot that answers questions about Covid-19 in Indonesia.",
    details: [
      {
        title: "Achievements:",
        descriptions: ["This chatbot was then published by Fasilkom-TI USU."],
      },
    ],
    image: "images/project-sigap.png",
    link: "https://page.line.me/?accountId=897pjzic",
    stacks: [
      pythonStack
    ],
  }
];
