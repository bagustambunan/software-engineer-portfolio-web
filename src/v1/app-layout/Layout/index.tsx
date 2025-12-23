import { Outlet, useLocation } from "react-router-dom";
import AppNav from "../AppNav";
import { pages } from "../../constants/pages";
import PageTitle from "../../../shared/components/PageTitle";

export default function Layout() {
  const pathname = useLocation().pathname;
  const page = pages.find((page) => page.route === pathname) || pages[0];

  return (
    <div>
      <AppNav />
      <main>
        <PageTitle title={page.icon + " " + page.title} description={page.description} />
        <Outlet />
      </main>
    </div>
  );
}
