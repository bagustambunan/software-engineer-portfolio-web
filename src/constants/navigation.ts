import routes from "./route";
import type { Navigation } from "./types";

const homeNavigation: Navigation = {
  name: "Home",
  icon: "🏠",
  link: routes.home,
};

const experiencesNavigation: Navigation = {
  name: "Experiences",
  icon: "💼",
  link: routes.experiences,
};

const projectsNavigation: Navigation = {
  name: "Proud Projects",
  icon: "📝",
  link: routes.projects,
};

const contactNavigation: Navigation = {
  name: "Contact Me",
  icon: "💬",
  link: routes.contact,
};

export const topNavigations: Navigation[] = [
  experiencesNavigation,
  projectsNavigation,
  contactNavigation,
];

export const bottomNavigations: Navigation[] = [
  homeNavigation,
  experiencesNavigation,
  projectsNavigation,
  contactNavigation,
];
