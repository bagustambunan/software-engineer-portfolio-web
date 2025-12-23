import { androidStack, pythonStack, swiftStack, swiftUiStack } from "./stack";
import { type Project, RoleEnum } from "./types";

const softwareEngineerProjects: Project[] = [
  {
    name: "Sticker iOS",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description: "An iOS app to add sticker packs to WhatsApp or WhatsApp Business.",
    image: "images/project-oh-my-bear.png",
    link: "https://github.com/bagustambunan/StickerIOS/",
    stacks: [swiftStack, swiftUiStack],
    highlighted: true,
    details: [
      {
        title: "Features:",
        descriptions: [
          "Support static and animated stickers",
          "Search sticker packs",
          "Add sticker packs to favorites",
          "Popular sticker packs",
          "Most liked characters",
          "All characters and character detail page",
        ],
      },
    ],
    image_list: [
      {
        title: "Splash Screen",
        url: "images/screenshots/pic-1-splash-screen.png"
      },
      {
        title: "Main Page",
        url: "images/screenshots/pic-2-main-page.png"
      },
      {
        title: "All Characters Page",
        url: "images/screenshots/pic-3-all-characters.png"
      },
      {
        title: "Search Page",
        url: "images/screenshots/pic-4-search.png"
      },
      {
        title: "Favorite Page",
        url: "images/screenshots/pic-5-favorite.png"
      },
      {
        title: "About Page",
        url: "images/screenshots/pic-6-about.png"
      }
    ]
  },
  {
    name: "Oh My Bear Cute Stickers",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description:
      "An Android app to get collection of cute stickers created by me.",
    image: "images/project-oh-my-bear.png",
    link: "https://play.google.com/store/apps/details?id=com.DuduuStudio.BearSticker",
    details: [
      {
        title: "Achievements:",
        descriptions: ["This app reached 1M+ downloads on Google Play Store."],
      },
    ],
    stacks: [androidStack],
    highlighted: true,
  },
  {
    name: "SIGAP COVID-19 LINE Chatbot",
    role: RoleEnum.SOFTWARE_ENGINEER,
    description:
      "SIGAP COVID-19 is a chatbot that answers questions about Covid-19 in Indonesia.",
    details: [
      {
        title: "Achievements:",
        descriptions: ["This chatbot was then published by Fasilkom-TI USU."],
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
    description: "Animated stickers for LINE.",
    details: [
      {
        title: "Achievements:",
        descriptions: [
          "This sticker set won MVP on LINE Creators Market for achieving the highest sales in September 2018.",
        ],
      },
    ],
    image: "images/project-duduu-2.png",
    link: "https://store.line.me/stickershop/product/4508178/en",
  },
  {
    name: "Cute Duduu: Cari Perhatian",
    role: RoleEnum.GRAPHIC_DESIGNER,
    description: "Create sound animated stickers for LINE Store Official.",
    details: [
      {
        title: "Fun facts:",
        descriptions: [
          'This sticker was made at the request of LINE because the previous sticker "Cute Duduu 2" won MVP.',
        ],
      },
    ],
    image: "images/project-duduu-3.png",
    link: "https://store.line.me/stickershop/product/14090/en",
  },
  {
    name: "Oh My Panda",
    role: RoleEnum.GRAPHIC_DESIGNER,
    description: "Animated stickers for LINE.",
    details: [
      {
        title: "Achievements:",
        descriptions: [
          "This sticker set won 2nd Place in LINE Creators Competition (Student Sticker Category). Read: https://kumparan.com/kumparantech/selamat-ini-dia-daftar-pemenang-line-creator-competition-1537943693286714133/2",
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
      "Participated in the Puspiptek logo creation competition. Won 2nd place.",
    image: "images/project-puspiptek.jpg",
    link: "",
  },
];

export const projects: Project[] = [
  ...softwareEngineerProjects,
  ...graphicDesignerProjects,
];
