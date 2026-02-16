import { getVersion } from "../utils/url";

const routes = {
  home: "/",
  projects: "/projects",
  experiences: "/experiences",
  achievements: "/achievements",
  posts: "/posts",
  contact: "/contact",
  resume: "/resume",
};

const version = getVersion();
if (version === "v1") {
  Object.keys(routes).forEach((key) => {
    Object.assign(routes, { [key]: `/v1${routes[key as keyof typeof routes]}` });
  });
}

export default routes;
