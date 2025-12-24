import { lazy } from "react";
import routes from "../../shared/constants/route";
import type { PageConfig } from "./types";

export const pages: PageConfig[] = [
  {
    title: "Hi",
    description: "",
    icon: "👋",
    route: routes.home,
    component: lazy(() => import("../pages/Home")),
  },
  {
    title: "Experiences",
    description: "List of experiences I've had.",
    icon: "💼",
    route: routes.experiences,
    component: lazy(() => import("../../shared/pages/Experiences")),
  },
  {
    title: "Proud Projects",
    icon: "📝",
    description: "List of projects I'm proud of.",
    route: routes.projects,
    component: lazy(() => import("../../shared/pages/Projects")),
  },
  {
    title: "Achievements",
    icon: "🏆",
    description: "List of achievements I've achieved.",
    route: routes.achievements,
    component: lazy(() => import("../../shared/pages/Achievements")),
  },
  {
    title: "Contact",
    description: "Get in touch with me.",
    icon: "💬",
    route: routes.contact,
    component: lazy(() => import("../../shared/pages/Contact")),
  },
];