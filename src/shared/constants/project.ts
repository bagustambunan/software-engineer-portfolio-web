import { androidStudioStack, pythonStack, swiftStack, swiftUiStack } from "./stack";
import { type Project, RoleEnum } from "./types";

const softwareEngineerProjects: Project[] = [
  {
    name: "Sticker iOS",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description:
      "A native iOS app built with Swift and SwiftUI that lets users browse, search, and add sticker packs to WhatsApp or WhatsApp Business.",
    image: "images/project-oh-my-bear.png",
    link: "https://github.com/bagustambunan/StickerIOS/",
    stacks: [swiftStack, swiftUiStack],
    highlighted: true,
    details: [
      {
        title: "Features:",
        descriptions: [
          "Support for both static and animated stickers",
          "Search and filter sticker packs",
          "Favorites system for quick access to preferred packs",
          "Popular sticker packs and most liked characters sections",
          "Detailed character pages with full sticker previews",
        ],
      },
    ],
    image_list: [
      {
        title: "Splash Screen",
        url: "images/screenshots/pic-1-splash-screen.png",
      },
      {
        title: "Main Page",
        url: "images/screenshots/pic-2-main-page.png",
      },
      {
        title: "All Characters Page",
        url: "images/screenshots/pic-3-all-characters.png",
      },
      {
        title: "Search Page",
        url: "images/screenshots/pic-4-search.png",
      },
      {
        title: "Favorite Page",
        url: "images/screenshots/pic-5-favorite.png",
      },
      {
        title: "About Page",
        url: "images/screenshots/pic-6-about.png",
      },
    ],
  },
  {
    name: "Oh My Bear Cute Stickers",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description:
      "An Android entertainment app featuring a collection of original cute stickers. Reached 1M+ downloads on Google Play Store.",
    image: "images/project-oh-my-bear.png",
    link: "https://play.google.com/store/apps/details?id=com.DuduuStudio.BearSticker",
    details: [
      {
        title: "Achievements:",
        descriptions: ["Reached 1M+ downloads on Google Play Store."],
      },
    ],
    stacks: [androidStudioStack],
    highlighted: true,
  },
  {
    name: "SIGAP COVID-19 LINE Chatbot",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description:
      "A LINE chatbot that provides real-time COVID-19 information and answers common questions about the pandemic in Indonesia. Published by Fasilkom-TI USU.",
    details: [
      {
        title: "Achievements:",
        descriptions: [
          "Adopted and published by the Faculty of Computer Science, University of North Sumatra (Fasilkom-TI USU).",
        ],
      },
    ],
    image: "images/project-sigap.png",
    link: "https://page.line.me/?accountId=897pjzic",
    stacks: [pythonStack],
  },
];

const graphicDesignerProjects: Project[] = [
  {
    name: "Cute Duduu 2",
    role: RoleEnum.GRAPHIC_DESIGNER,
    description:
      "Animated sticker set for LINE that won MVP on LINE Creators Market for achieving the highest sales in September 2018.",
    details: [
      {
        title: "Achievements:",
        descriptions: [
          "Won MVP on LINE Creators Market for the highest sales in September 2018.",
        ],
      },
    ],
    image: "images/project-duduu-2.png",
    link: "https://store.line.me/stickershop/product/4508178/en",
  },
  {
    name: "Cute Duduu: Cari Perhatian",
    role: RoleEnum.GRAPHIC_DESIGNER,
    description:
      "Sound animated sticker set created for LINE Store Official, commissioned by LINE after the success of Cute Duduu 2.",
    details: [
      {
        title: "Fun facts:",
        descriptions: [
          'Commissioned by LINE after "Cute Duduu 2" won MVP for highest monthly sales.',
        ],
      },
    ],
    image: "images/project-duduu-3.png",
    link: "https://store.line.me/stickershop/product/14090/en",
  },
  {
    name: "Oh My Panda",
    role: RoleEnum.GRAPHIC_DESIGNER,
    description:
      "Animated sticker set for LINE. Won 2nd Place in LINE Creators Competition (Student Sticker Category).",
    details: [
      {
        title: "Achievements:",
        descriptions: [
          "Won 2nd Place in LINE Creators Competition (Student Sticker Category).",
        ],
      },
    ],
    image: "images/project-panda.png",
    link: "https://store.line.me/stickershop/product/3836373/en",
  },
  {
    name: "Puspiptek Logo",
    role: RoleEnum.GRAPHIC_DESIGNER,
    description:
      "Won 2nd place in the Puspiptek logo design competition.",
    image: "images/project-puspiptek.jpg",
    link: "",
  },
];

export const projects: Project[] = [
  ...softwareEngineerProjects,
  ...graphicDesignerProjects,
];
