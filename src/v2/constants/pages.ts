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
    windowKey: routes.experiences,
    title: "Experiences",
    icon: "💼",
    route: routes.experiences,
    component: lazy(() => import("../../shared/pages/Experiences")),
  },
  {
    windowKey: routes.projects,
    title: "Projects",
    icon: "📝",
    route: routes.projects,
    component: lazy(() => import("../../shared/pages/Projects")),
  },
  {
    windowKey: routes.posts,
    title: "Writings",
    icon: "✍️",
    route: routes.posts,
    component: lazy(() => import("../../shared/pages/Posts")),
  },
  {
    windowKey: routes.contact,
    title: "Contact and Links",
    icon: "💬",
    route: routes.contact,
    component: lazy(() => import("../../shared/pages/Contact")),
  },
  {
    windowKey: routes.resume,
    title: "Resume",
    icon: "📄",
    route: routes.resume,
    component: lazy(() => import("../pages/Resume")),
  },
];