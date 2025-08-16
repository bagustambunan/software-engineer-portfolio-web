import type { Project } from "./type";

const androidStack = {
  name: "Android",
  icon: "/src/assets/images/icon-android.webp",
}

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