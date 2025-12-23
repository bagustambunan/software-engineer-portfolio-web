import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Window from "../../components/Window";
import { pages } from "../../constants/pages";
import WindowsContainer from "../../components/WindowsContainer";
import routes from "../../../shared/constants/route";

export default function Layout() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const page = pages.find((page) => page.route === pathname) || pages[0];
  const isHome = pathname === routes.home;

  return (
    <main>
      <Window
        windowKey={page.windowKey}
        title={page.icon + " " + page.title}
        closable={!isHome}
        onClose={() => {
          if (!isHome) {
            navigate(routes.home);
          }
        }}
        customStyle={{ other: { fullWidth: true } }}
      >
        <Outlet />
      </Window>
      <WindowsContainer />
    </main>
  );
}
