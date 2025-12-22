import { lazy } from "react";
import { profile } from "../../constants/profile";
import routes from "../../constants/route";
import type { PageConfig } from "../types/Model";

export const pages: PageConfig[] = [
  {
    windowKey: "home",
    title: profile.name,
    route: routes.home,
    component: lazy(() => import("../pages/Home")),
  },
  {
    windowKey: "contact",
    title: "Contact",
    route: routes.contact,
    component: lazy(() => import("../pages/Contact")),
  },
  {
    windowKey: "fizzBuzz",
    title: "Fizz Buzz",
    route: routes.fizzBuzz,
    component: lazy(() => import("../pages/FizzBuzz")),
  },
  {
    windowKey: "experiences",
    title: "Experiences",
    route: routes.experiences,
    component: lazy(() => import("../pages/Experiences")),
  },
  {
    windowKey: "projects",
    title: "Projects",
    route: routes.projects,
    component: lazy(() => import("../pages/Projects")),
  },
];