import type { Link } from "./types";
import { LinkType } from "./types";

export const links: Link[] = [
  {
    name: "Email",
    link: "mailto:mhdbagus78@gmail.com",
    type: LinkType.CONTACT,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bagustambunan",
    type: LinkType.CONTACT,
  },
  {
    name: "GitHub",
    link: "https://github.com/bagustambunan",
    type: LinkType.OTHER,
  },
  {
    name: "Medium",
    link: "https://bagustambunan.medium.com",
    type: LinkType.OTHER,
  },
  {
    name: "Resume",
    link: "https://www.cake.me/muhammad-bagus-syahputra-tambunan",
    type: LinkType.CONTACT,
  },
  {
    name: "LINE Sticker Store (Pencil loves Paper)",
    link: "https://line.me/S/shop/sticker/author/75954",
    type: LinkType.OTHER,
  },
  {
    name: "LINE Sticker Store (PECEL Stickers)",
    link: "https://line.me/S/shop/sticker/author/89968",
    type: LinkType.OTHER,
  },
];
