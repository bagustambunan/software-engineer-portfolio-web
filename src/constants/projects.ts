import { type Project, RoleEnum, type Stack } from "./types";

const androidStack: Stack = {
  name: "Android",
  icon: "images/stack-android.webp",
};

const pythonStack: Stack = {
  name: "Python",
  icon: "images/stack-python.png",
};

export const projects: Project[] = [
  {
    name: "Oh My Bear Cute Stickers",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description: "An Android app to get collection of cute stickers created by me. This app reached 1M+ downloads on Google Play Store.",
    image: "images/project-oh-my-bear.png",
    link: "https://play.google.com/store/apps/details?id=com.DuduuStudio.BearSticker",
    stacks: [
      androidStack
    ],
  },
  {
    name: "SIGAP COVID-19 LINE Chatbot",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description: "SIGAP COVID-19 is a chatbot that answers questions about Covid-19 in Indonesia. This chatbot was then published by Fasilkom-TI USU.",
    image: "images/project-sigap.png",
    link: "https://page.line.me/?accountId=897pjzic",
    stacks: [
      pythonStack
    ],
  }
];
