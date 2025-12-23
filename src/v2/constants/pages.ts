import { lazy } from "react";
import { profile } from "../../shared/constants/profile";
import routes from "../../shared/constants/route";
import type { PageConfig } from "./types";

export const pages: PageConfig[] = [
  {
    windowKey: "home",
    title: profile.name,
    icon: "🏠",
    route: routes.home,
    component: lazy(() => import("../pages/Home")),
  },
  {
    windowKey: "contact",
    title: "Contact",
    icon: "💬",
    route: routes.contact,
    component: lazy(() => import("../pages/Contact")),
  },
  {
    windowKey: "experiences",
    title: "Experiences",
    icon: "💼",
    route: routes.experiences,
    component: lazy(() => import("../pages/Experiences")),
  },
  {
    windowKey: "projects",
    title: "Projects",
    icon: "📝",
    route: routes.projects,
    component: lazy(() => import("../pages/Projects")),
  },
];