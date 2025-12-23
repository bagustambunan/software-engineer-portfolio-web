import { lazy } from "react";
import routes from "../../shared/constants/route";

export const pages = [
  {
    title: "Home",
    icon: "🏠",
    route: routes.home,
    component: lazy(() => import("../pages/Home")),
  },
  {
    title: "Experiences",
    icon: "💼",
    route: routes.experiences,
    component: lazy(() => import("../pages/Experiences")),
  },
  {
    title: "ProudProjects",
    icon: "📝",
    route: routes.projects,
    component: lazy(() => import("../pages/Projects")),
  },
  {
    title: "Achievements",
    icon: "🏆",
    route: routes.achievements,
    component: lazy(() => import("../pages/Achievements")),
  },
  {
    title: "Contact",
    icon: "💬",
    route: routes.contact,
    component: lazy(() => import("../pages/Contact")),
  },
];