import { profile } from "../../constants/profile";
import routes from "../../constants/route";
import type { PageConfig } from "../types/Model";

export const pages: PageConfig[] = [
  {
    windowKey: "home",
    title: profile.name,
    route: routes.home,
  },
  {
    windowKey: "contact",
    title: "Contact",
    route: routes.contact,
  },
];
